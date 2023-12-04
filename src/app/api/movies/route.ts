import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

import { authOptions } from '@/lib/auth';
import prismadb from '@/lib/prismadb';

export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        if (!session) throw new Error('/api/movies Endpoint Unauthenticated');

        const movies = await prismadb.movie.findMany();
        return NextResponse.json(movies, { status: 200 });
    } catch (error: any) {
        console.log('api/movies Endpoint Error', error);
        return new NextResponse(
            JSON.stringify({
                message: 'api/movies Endpoint Error: ',
                error: error.message,
            }),
            { status: 400 }
        );
    }
}
