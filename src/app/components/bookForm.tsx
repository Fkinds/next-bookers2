import { getServerSession } from "next-auth/next";
import { authOption } from "../options/authOption";
import { redirect } from "next/navigation";
import { bookFormType } from "@/types";

export default async function BookForm( {urlparameter , httpMethod }  : bookFormType ) {
    const session = await getServerSession(authOption)
    // console.log(session?.user?.id)
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
        const res = await fetch(urlparameter, {
            // method: 'POST',
            method: httpMethod,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
            // body: JSON.stringify({ body: book })
        })
        const data = await res.json()
        redirect(`/books/${data.book.id}`)
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
