import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import { authOptions } from '@/lib/auth';
import ProfileItem from '@/components/ProfileItem';

const Profile = async () => {
    const session = await getServerSession(authOptions);
    if (!session) redirect('/auth');

    return (
        <div className="flex items-center justify-center h-full">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-6xl text-white text-center">
                    Who is watching?
                </h1>
                <div className="flex items-center justify-center gap-8 mt-10">
                    <ProfileItem
                        img='/images/default-slate.png'
                        userName={session.user?.name!}
                    />
                </div>
            </div>
        </div>
    );
};
export default Profile;
