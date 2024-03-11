import { authOption } from "@/app/options/authOption"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

const UserEdit = async ({ params }: { params: { id: string } }) => {
    const session = await getServerSession(authOption)
    const id = params.id
    session?.user.id === id ? <div /> : redirect('/users')
    return (
        <div>UserEditPage</div>
    )
}

export default UserEdit
