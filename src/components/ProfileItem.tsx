'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

// import useCurrentUser from '@/hooks/useCurrentUser';

const ProfileItem = ({ img, userName }: { img: string; userName: string }) => {
    // const { data: user } = useCurrentUser();
    const router = useRouter();
    return (
        <div
            onClick={() => {
                router.push('/');
            }}
        >
            <div className="group w-44 mx-auto">
                <div className="rounded-md flex items-center justify-center border-2 border-transparent group-hover:border-white group-hover:cursor-pointer overflow-hidden">
                    <Image
                        width={176}
                        height={176}
                        src={img}
                        priority
                        alt="Profile"
                    />
                </div>
                <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
                    {userName}
                </div>
            </div>
        </div>
    );
};

export default ProfileItem;
