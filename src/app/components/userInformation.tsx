import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { getServerSession } from "next-auth"
import { authOption } from "../options/authOption"
import Image from "next/image"
import Link from "next/link"

export const UserInformation = async ({ id } : { id : string }) => {
    const session = await getServerSession(authOption)
    return (
        <>
            { session && session.user ? (
                <>
                    <div className="flex justify-center">
                        <Card className="w-[350px]">
                            <CardHeader>
                                <Image
                                src = {session.user.image || ""}
                                width={100}
                                height={100}
                                alt="profile_image"
                                />
                            </CardHeader>
                            <CardContent>
                                <CardTitle>{session.user.name}</CardTitle>
                                <CardDescription>{session.user.introduction}</CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                    {session.user.id === id ? <Link href={`/users/${id}/edit`}>edit</Link> : <div/>}
                </>
            ) : (
            <div/>
            )}
        </>
    )
}

