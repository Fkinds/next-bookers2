import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient();

export const main = async() => {
    try{
        await prisma.$connect();
    }catch(e){
        console.error(e)
    }
};

export const GET = async(req: Request, res: NextResponse) => {
    try{
        await main();
        const users = await prisma.user.findMany();
        return NextResponse.json({ message: "Success", users},{ status: 200 })
    }catch(error){
        return NextResponse.json({ messsage: "Error", error},{ status: 500 })
    }finally{
        await prisma.$disconnect();
    }
};
