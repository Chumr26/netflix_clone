import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import { authOptions } from '@/lib/auth';

import NavBar from '@/components/NavBar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import InfoModal from '@/components/InfoModal';
// import SignOutButton from '@/components/SignOutButton';

export default async function Home() {
    const session = await getServerSession(authOptions);
    if (!session) redirect('/auth');

    return (
        <>
            <InfoModal />
            <NavBar />
            <Billboard />
            <div className="pb-40">
                <MovieList title="Trending Now" api="/api/movies" />
                <MovieList title="My List" api="/api/favorites" />
            </div>
        </>
    );
}
