import { getServerSession } from 'next-auth';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { authOptions } from '@/lib/auth';
import prismadb from '@/lib/prismadb';
import serverAuth from '@/lib/serverAuth';

export async function POST(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) throw new Error('/api/favorite Endpoint Unauthenticated');

        const { movieId } = await req.json();
        const existingMovie = await prismadb.movie.findUnique({
            where: { id: movieId },
        });
        if (!existingMovie) throw new Error('Invalid ID');
        const user = await prismadb.user.update({
            where: { email: session.user?.email || '' },
            data: { favoriteIds: { push: movieId } },
        });
        return NextResponse.json(user, { status: 200 });
    } catch (error: any) {
        console.log('api/favorite Endpoint Error', error);
        return new NextResponse(
            JSON.stringify({
                message: 'api/favorite Endpoint Error: ',
                error: error.message,
            }),
            { status: 400 }
        );
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const user = await serverAuth();
        if (!user) throw new Error('/api/favorite Endpoint Unauthenticated');

        const { movieId } = await req.json();
        const existingMovie = await prismadb.movie.findUnique({
            where: { id: movieId },
        });
        if (!existingMovie) throw new Error('Invalid ID');
        const updateUser = await prismadb.user.update({
            where: { email: user.email || ''},
            data: {
                favoriteIds: user.favoriteIds.filter(
                    (favoriteId) => favoriteId !== movieId
                ),
            },
        });
        return NextResponse.json(updateUser, { status: 200 });
    } catch (error: any) {
        console.log('api/favorite Endpoint Error', error);
        return new NextResponse(
            JSON.stringify({
                message: 'api/favorite Endpoint Error: ',
                error: error.message,
            }),
            { status: 400 }
        );
    }
}
