import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { main } from "../user/route"

const prisma = new PrismaClient();

export const GET = async() => {
    try {
        await main();
        const books = await prisma.book.findMany();
        const booksWithUserName = await Promise.all(
            books.map(async(book) => {
                const bookCreateUser = await prisma.user.findUnique({
                    where: {
                        id: book.userId,
                    },
                });
                return {
                    ...book,
                    userName: bookCreateUser?.name,
                };
            })
        );
        return NextResponse.json(
            { message: "Success", books: booksWithUserName },
            { status: 200 }
        );
    } catch (error){
        return NextResponse.json({ message: "Error", error}, { status: 500});
    } finally {
        await prisma.$disconnect();
    }
};

export const POST = async (req: Request, res: NextResponse) => {
    try{
        const { title, body, userId } = await req.json();
        await main();
        const book = await prisma.book.create({
            // data: { title, body, userId, createdAt: new Date(), updatedAt: new Date() }
            data: { title, body, userId }
        });
        return NextResponse.json({ message: "Success", book },{ status: 201});
    } catch(error){
        return NextResponse.json({ message: "Error", error}, { status: 500 });
    } finally {
        await prisma.$disconnect;
    }
}