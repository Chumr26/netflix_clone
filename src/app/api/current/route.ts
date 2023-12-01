import serverAuth from '@/lib/serverAuth';

import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const currentUser = await serverAuth();
        return NextResponse.json(currentUser, { status: 200 });
    } catch (error: any) {
        console.log('api/current endpoint Error', error);
        return new NextResponse(
            JSON.stringify({
                message: 'api/current endpoint Error: ',
                error: error.message,
            }),
            { status: 400 }
        );
    }
}
