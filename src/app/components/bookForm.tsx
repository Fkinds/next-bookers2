import { getServerSession } from "next-auth/next";
import { authOption } from "../options/authOption";

export default async function BookForm() {
    const session = await getServerSession(authOption)
    // console.log(session.user)
    const createBook = async (formData: FormData) => {
        'use server'
        const body = formData.get('body');
        const title = formData.get('title');
        // const userId = session.user
        const book = {
            title: title,
            body: body,
            // userId: userId
        }
        const urlparams = `http://localhost:3000/api/book`
        const res = await fetch(urlparams, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
            // body: JSON.stringify({ body: book })
        })
        const data = await res.json()
        console.log(book)
        return data
    }
    return (
        <>
            <form action={createBook}>
                <input type="text" name="body" />
                <input type="text" name="title" />
                <button type="submit">投稿する</button>
            </form>
        </>
    )
}
