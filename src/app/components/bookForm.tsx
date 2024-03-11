import { getServerSession } from "next-auth/next";
import { authOption } from "../options/authOption";
import { redirect } from "next/navigation";
import { objectType } from "@/types";

export default async function BookForm( { Object } : objectType ) {
    // console.log(Object)
    const session = await getServerSession(authOption)
    const createBook = async (formData: FormData) => {
        'use server'
        // const body = formData.get('body');
        // const title = formData.get('title');
        // const userId = session?.user.id
        const book = {
            title: formData.get('title'),
            body: formData.get('body'),
            userId: session?.user.id
        }
        // const urlparams = `http://localhost:3000/api/book`
        // const res = await fetch(urlparams, {
        const res = await fetch(Object.urlparameter, {
            method: Object.httpMethod,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })
        const data = await res.json()
        redirect(`/books/${data.book.id}`)
    }

    return (
        <>
            <form action={createBook}>
                <input type="text" name="body" defaultValue={Object.body} />
                <input type="text" name="title" defaultValue={Object.title} />
                <button type="submit">投稿する</button>
            </form>
        </>
    )
}
