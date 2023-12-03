import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

import { authOptions } from '@/lib/auth';
import prismadb from '@/lib/prismadb';

export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        if (!session) throw new Error('/api/random Endpoint Unauthenticated');

        const movieCount = await prismadb.movie.count();
        const randomIndex = Math.floor(Math.random() * movieCount);
        const randomMovie = await prismadb.movie.findMany({
            skip: randomIndex,
            take: 1,
        });
        return NextResponse.json(randomMovie[0], { status: 200 });
    } catch (error: any) {
        console.log('api/random Endpoint Error', error);
        return new NextResponse(
            JSON.stringify({
                message: 'api/random Endpoint Error: ',
                error: error.message,
            }),
            { status: 400 }
        );
    }
}
