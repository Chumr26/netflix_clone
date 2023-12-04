'use client';

import { AiOutlineArrowLeft } from 'react-icons/ai';

import useFetcher from '@/hooks/useFetcher';
import { useRouter } from 'next/navigation';

const Watch = ({ params }: { params: { movieId: string } }) => {
    const router = useRouter();
    const { data } = useFetcher(`/api/movies/${params.movieId}`);
    return (
        <div className="h-screen w-screen bg-black">
            <nav className="fixed w-full p-4 z-10 flex items-center gap-8 bg-opacity-70">
                <AiOutlineArrowLeft
                    onClick={() => router.push('/')}
                    className="text-white cursor-pointer"
                    size={40}
                />
                <p className="text-white text-xl md:text-3xl font-bold">
                    <span className="font-light">Watching: </span>
                    {data?.title}
                </p>
            </nav>
            <video
                className="h-full w-full"
                autoPlay
                controls
                src={data?.videoUrl}
            ></video>
        </div>
    );
};
export default Watch;
