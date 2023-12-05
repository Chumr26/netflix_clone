'use client';

import { signOut } from 'next-auth/react';
import Image from 'next/image';

import useCurrentUser from '@/hooks/useCurrentUser';

interface AccountMenuProps {
    visible?: boolean;
}

const AccountMenu = ({ visible }: AccountMenuProps) => {
    if (!visible) return null;
    const { data } = useCurrentUser();

    return (
        <div className="bg-black w-56 absolute top-14 right-0 py-5 flex flex-col border-2 border-gray-800">
            <div className="flex flex-col gap-3">
                <div className="group flex items-center gap-3 px-3 w-full">
                    <Image
                        src="/images/default-slate.png"
                        width={32}
                        height={32}
                        className="rounded-md"
                        alt="Account"
                    />
                    <p className="text-white text-sm group-hover:underline">
                        {data.name}
                    </p>
                </div>
                <hr className="bg-gray-600 border-0 h-px my-4" />
                <div
                    onClick={() => signOut()}
                    className="px-3 text-white text-center text-sm hover:underline"
                >
                    Sign out of Netflix
                </div>
            </div>
        </div>
    );
};
export default AccountMenu;
