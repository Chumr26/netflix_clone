'use client';

import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

// import useCurrentUser from '@/hooks/useCurrentUser';

const ProfileItem = ({
    img,
    userName,
}: {
    img: StaticImageData;
    userName: string;
}) => {
    // const { data: user } = useCurrentUser();
    const router = useRouter();
    return (
        <div
            onClick={() => {
                router.push('/');
            }}
        >
            <div className="group w-44 mx-auto">
                <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:border-white group-hover:cursor-pointer overflow-hidden">
                    <Image src={img} alt="Profile" />
                </div>
                <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
                    {userName}
                </div>
            </div>
        </div>
    );
};

export default ProfileItem;
