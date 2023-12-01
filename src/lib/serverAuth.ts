import { getServerSession } from 'next-auth';

import { authOptions } from '@/lib/auth';
import prismadb from '@/lib/prismadb';

export default async () => {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
        throw new Error('Not signed in');
    }

    const currentUser = prismadb.user.findUnique({
        where: { email: session.user.email },
    });

    if (!currentUser) {
        throw new Error('User not found in database');
    }

    return currentUser;
};
