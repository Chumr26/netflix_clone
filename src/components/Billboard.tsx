'use client';

import { AiOutlineInfoCircle } from 'react-icons/ai';

import useFetcher from '@/hooks/useFetcher';
import useInfoModal from '@/hooks/useInfoModal';

import PlayButton from './PlayButton';

const Billboard = () => {
    const { data } = useFetcher('/api/random');
    const { openModal } = useInfoModal();

    return (
        <div className="relative h-[56.25vw]">
            <video
                src={data?.videoUrl}
                poster={data?.thumnailUrl}
                autoPlay
                muted
                loop
                className="w-full h-[56.25vw] object-cover brightness-60%"
            />
            <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
                <p className="text-white text-xl md:text-5xl lg:text-6xl h-full w-[50%] font-bold drop-shadow-xl">
                    {data?.title}
                </p>
                <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
                    {data?.description}
                </p>
                <div className="flex items-center mt-3 md:mt-4 gap-3">
                    <PlayButton movieId={data?.id} />
                    <button
                        onClick={() => openModal(data?.id)}
                        className="flex gap-1 items-center bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xl lg:text-lg font-semibold hover:bg-opacity-20 transition"
                    >
                        <AiOutlineInfoCircle />
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Billboard;
