import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

import { authOptions } from '@/lib/auth';
import prismadb from '@/lib/prismadb';

export async function GET(
    req: Request,
    { params }: { params: { movieId: string } }
) {
    try {
        const session = await getServerSession(authOptions);
        if (!session)
            throw new Error('/api/movies/[movieId] Endpoint Unauthenticated');

        if (typeof params.movieId !== 'string') throw new Error('Invalid ID');

        if (!params.movieId) throw new Error('Missing ID');

        const movie = await prismadb.movie.findUnique({
            where: { id: params.movieId },
        });
        if (!movie) throw new Error('Movie no found');

        return NextResponse.json(movie, { status: 200 });
    } catch (error: any) {
        console.log('/api/movies/[movieId] Endpoint Error', error);
        return new NextResponse(
            JSON.stringify({
                message: '/api/movies/[movieId] Endpoint Error: ',
                error: error.message,
            }),
            { status: 400 }
        );
    }
}
