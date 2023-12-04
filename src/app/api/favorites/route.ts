import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';
import serverAuth from '@/lib/serverAuth';

export async function GET(req: NextRequest) {
    try {
        const user = await serverAuth();
        if (!user) throw new Error('/api/favorites Endpoint Unauthenticated');

        const favoriteMovies = await prismadb.movie.findMany({
            where: { id: { in: user.favoriteIds } },
        });
        return NextResponse.json(favoriteMovies, { status: 200 });
    } catch (error: any) {
        console.log('api/favorites Endpoint Error', error);
        return new NextResponse(
            JSON.stringify({
                message: 'api/favorites Endpoint Error: ',
                error: error.message,
            }),
            { status: 400 }
        );
    }
}
