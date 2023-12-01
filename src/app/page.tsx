import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import { authOptions } from '@/lib/auth';
import SignOutButton from '@/components/SignOutButton';

export default async function Home() {
    const session = await getServerSession(authOptions);
    if (!session) redirect('/auth');

    return (
        <>
            <div className="text-white text-4xl">Netflix Clone</div>
            <SignOutButton />
        </>
    );
}
