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

export const UserInformation = async () => {
    const session = await getServerSession(authOption)
    // console.log(session)
    return (
        <>
            { session && session.user ? (
                <>
                    <Card>
                        <CardHeader>
                            <CardTitle>{session.user.name}</CardTitle>
                            <CardDescription>{session.user.introduction}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                </>
            ) : (
            <div/>
            )}
        </>
    )
}

