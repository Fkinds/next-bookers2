import type { InferGetServerSidePropsType } from 'next';
import type { userType, bookType } from '@/types';
import Image from 'next/image';

// export const getServerSideProps = async ( urlPath : string ) => {
export const getServerSideProps = async () => {
    // const res = await fetch(urlPath)
    const res = await fetch(`http://localhost:3000/api/book`)
    const repo = await res.json();
    return { props: { repo } }
}

// ゴール : 三項演算子でrepoをuserとbooksで判定したい

export default async function Index({ repo }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const target = Object.keys(repo)[1]
    const books = repo.books
    const users = repo.users
    console.log(books)
    console.log(users)
    console.log(target)
    return (
        <>
            {
                target === "books" ? (
                    books.map(( book : bookType ) => (
                        <>
                            <li>{book.title}</li>
                            <li>{book.body}</li>
                            <li>{book.userName}</li>
                        </>
                    ) ) 
                ) : (
                    users.map(( user : userType ) => (
                        <>  
                            <li>
                            <Image
                                src = {user.image} 
                                width={100}
                                height={100}
                                alt="profile_image"
                                />
                            </li>
                            <li>{user.name}</li>
                            <li>{user.introduction}</li>
                        </>
                    ) ) 
                )
            }
        </>
    )
}