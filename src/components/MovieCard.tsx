'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BsFillPlayFill } from 'react-icons/bs';
import { BiChevronDown } from 'react-icons/bi';

import useInfoModal from '@/hooks/useInfoModal';

import FavoriteButton from './FavoriteButton';

const MovieCard = ({ data }: { data: Record<string, any> }) => {
    const router = useRouter();
    const { openModal } = useInfoModal();
    return (
        <div className="group bg-zinc-900 col-span-1 relative h-[12vw]">
            <Image
                className="cursor-pointer object-cover transition shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]"
                fill
                sizes="25vw"
                src={data.thumbnailUrl}
                alt="Thumbnail"
            />
            <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 h-[12vw] w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
                <Image
                    className="cursor-pointer object-cover transition shadow-xl rounded-t-md"
                    fill
                    sizes="25vw"
                    src={data.thumbnailUrl}
                    alt="Animation thumbnail"
                />
                <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute top-[11.95vw] w-full transition shadow-md rounded-b-md">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3">
                            <div
                                onClick={() => router.push(`/watch/${data.id}`)}
                                className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center transition hover:bg-neutral-300"
                            >
                                <BsFillPlayFill size={30} />
                            </div>
                            <FavoriteButton movieId={data.id} />
                            <div className="cursor-pointer ml-auto group w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex items-center justify-center transition hover:border-neutral-300">
                                <BiChevronDown
                                    onClick={() => openModal(data.id)}
                                    size={30}
                                    className="text-white group-hover:text-neutral-300"
                                />
                            </div>
                        </div>
                        <p className="text-green-400 font-semibold mt-4">
                            New <span className="text-white">2023</span>
                        </p>
                        <p className="mt-4 text-white text-[10px] lg:text-sm">
                            {data.duration}
                        </p>
                        <p className="mt-4 text-white text-[10px] lg:text-sm">
                            {data.genre}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MovieCard;
