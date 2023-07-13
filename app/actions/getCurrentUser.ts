import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from '@/app/libs/prismadb'

export async function getSession(){
    return await getServerSession(authOptions)
}

export default async function getCurrentUser() {
    const session = await getSession();
    try{
        if(!session?.user?.email){
            return null;
        }
        const currentUser = await prisma.user.findUnique({
            where:{
                email: session.user.email as string
            }
        });

        if(!currentUser){
            return null;
        }
        return {
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),
            updateddAt: currentUser.updatedAt.toISOString(),
            emailVerified: currentUser.emailVerified?.toISOString() || null
        };

    } catch(error:any){
        return null
    }
    
}