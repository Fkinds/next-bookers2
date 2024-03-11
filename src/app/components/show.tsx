import { dataType } from "@/types";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Show({ Data } : dataType){
    const objectName = Object.keys(Data)[1]
    const book = Data.book
    const user = Data.user
    const deleteBook = async() => {
        "use server"
        const parameter = `http://localhost:3000/api/book/${book.id}`
        const res = await fetch(parameter,{
            method: "DELETE",
            headers: { "Content-Type": "appliction/json" }
        })
        redirect('/books')
    }
    return (
        <>
            {
                objectName === "book" ? (
                    <>
                        <li>{book.title}</li>
                        <li>{book.body}</li>
                        <li>{book.userName}</li>
                        <button>
                            <Link href={`/books/${book.id}/edit`}>edit</Link>
                        </button>
                        <form action={deleteBook}>
                            <button type="submit">削除</button>
                        </form>
                    </>
                ) : (
                    <>
                        <li>
                            <Image
                                src={user.image}
                                width={100}
                                height={100}
                                alt="profile_image"
                            />
                        </li>
                        <li>{user.name}</li>
                        <li>{user.introduction}</li>
                    </>
                )
            }
        </>
    )
}
