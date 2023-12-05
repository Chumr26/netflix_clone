'use client';

import ReactDOM from 'react-dom';

import { useState, useEffect, useCallback, ChangeEvent } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import PlayButton from './PlayButton';
import FavoriteButton from './FavoriteButton';
import useInfoModal from '@/hooks/useInfoModal';
import useFetcher from '@/hooks/useFetcher';

const InfoModal = () => {
    const { movieId, isOpen, closeModal } = useInfoModal();
    const [isVisible, setIsVisible] = useState(isOpen);
    const { data } = useFetcher(`/api/movies/${movieId}`);

    useEffect(() => {
        setIsVisible(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        setIsVisible(false);
        setTimeout(() => {
            closeModal();
        }, 300);
    }, []);

    if (!isOpen) return null;
    return (
        <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
            <div
                className={`relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden bg-zinc-900 drop-shadow-md transform duration-300 flex-auto ${
                    isVisible ? 'scale-100' : 'scale-0'
                }`}
            >
                <div className="relative h-96">
                    <video
                        poster={data?.thumbnailUrl}
                        autoPlay
                        muted
                        loop
                        src={data?.videoUrl}
                        className="w-full brightness-[60%] object-cover h-full"
                    />
                    <div
                        onClick={handleClose}
                        className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center"
                    >
                        <AiOutlineClose className="text-white" size={20} />
                    </div>
                    <div className="absolute bottom-[10%] left-10">
                        <p className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
                            {data?.title}
                        </p>
                        <div className="flex gap-4 items-center">
                            <PlayButton movieId={data?.id} />
                            <FavoriteButton movieId={data?.id} />
                        </div>
                    </div>
                </div>
                <div className="px-12 py-8">
                    <div className="flex items-center gap-2 mb-8">
                        <p className="text-green-400 font-semibold text-lg">
                            New
                        </p>
                        <p className="text-white text-lg">{data?.duration}</p>
                        <p className="text-white text-lg">{data?.genre}</p>
                    </div>
                    <p className="text-white text-lg">{data?.description}</p>
                </div>
            </div>
        </div>
    );
};
export default InfoModal;
