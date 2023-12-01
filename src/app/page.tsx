import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import { authOptions } from '@/lib/auth';

import NavBar from '@/components/NavBar';
// import SignOutButton from '@/components/SignOutButton';

export default async function Home() {
    const session = await getServerSession(authOptions);
    if (!session) redirect('/auth');

    return <NavBar />;
}
