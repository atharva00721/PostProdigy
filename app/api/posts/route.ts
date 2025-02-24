// import { NextResponse } from 'next/server';
// import prisma from '@/lib/prisma';

// export async function POST(req: Request) {
//   try {
//     const { prompt, content, userId } = await req.json();

//     const post = await prisma.post.create({
//       data: {
//         prompt,
//         content,
//         userId,
//         isDraft: true,
//       },
//     });

//     return NextResponse.json(post);
//   } catch (error) {
//     console.error('Request error', error);
//     return NextResponse.json({ error: 'Error creating post' }, { status: 500 });
//   }
// }

// export async function GET(req: Request) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const userId = searchParams.get('userId');

//     if (!userId) {
//       return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
//     }

//     const posts = await prisma.post.findMany({
//       where: {
//         userId: userId,
//       },
//       orderBy: {
//         createdAt: 'desc',
//       },
//     });

//     return NextResponse.json(posts);
//   } catch (error) {
//     console.error('Request error', error);
//     return NextResponse.json({ error: 'Error fetching posts' }, { status: 500 });
//   }
// }
