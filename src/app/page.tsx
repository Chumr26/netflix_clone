import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import { authOptions } from '@/lib/auth';

import NavBar from '@/components/NavBar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
// import SignOutButton from '@/components/SignOutButton';

export default async function Home() {
    const session = await getServerSession(authOptions);
    if (!session) redirect('/auth');

    return (
        <>
            <NavBar />
            <Billboard />
            <div className='pb-40'>
                <MovieList title="Trending now"/>
            </div>
        </>
    );
}
