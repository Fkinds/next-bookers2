import type { userType, bookType, dataType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default function Index({ Data } : dataType ) {
    const values = Object.keys(Data)[1]
    const books = Data.books
    const users = Data.users
    return (
        <>
            {
                values === "books" ? (
                    books.map((book: bookType) => (
                        <div key={book.id}>
                            <Link href={`books/${book.id}`} >
                                <li>{book.title}</li>
                                <li>{book.body}</li>
                                <li>{book.userName}</li>
                            </Link>
                        </div>
                    ))
                ) : (
                    users.map((user: userType) => (
                        <div key={user.id}>
                            <Link href={`users/${user.id}`}>
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
                            </Link>
                        </div>
                    ))
                )
            }
        </>
    )
}