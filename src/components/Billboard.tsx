'use client';

import { AiOutlineInfoCircle } from 'react-icons/ai';

import useBillboard from '@/hooks/useBillboard';

const Billboard = () => {
    const { data } = useBillboard();
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
                <div className="flex items-center mt-3 md:mt-4">
                    <button className="flex gap-1 items-center bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xl lg:text-lg font-semibold hover:bg-opacity-20 transition">
                        <AiOutlineInfoCircle />
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Billboard;
