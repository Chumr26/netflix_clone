import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import prismadb from '@/lib/prismadb';

export async function POST(req: NextRequest) {
    try {
        const { name, email, password } = await req.json();
        const existingUser = await prismadb.user.findUnique({
            where: { email },
        });
        if (existingUser) {
            return NextResponse.json({ error: 'Email taken' }, { status: 422 });
        }

        const hashedPassword = await hash(password, 12);

        const user = await prismadb.user.create({
            data: { name, email, hashedPassword },
        });

        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        console.log('api/register Error: ', error);
        return new NextResponse(null, { status: 400 });
    }
}
