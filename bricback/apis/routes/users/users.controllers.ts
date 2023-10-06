import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();


export async function fetchUserInfo(username:string){

    const user = await prisma.user.findUnique({
        where:{
            username,
        },
    });

    return user;

}