import type { userType, bookType, dataType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default function Index({ Data }: dataType) {
    const values = Object.keys(Data)[1]
    const books = Data.books
    const users = Data.users
    return (
        <div className="grid place-content-center">
            {
                values === "books" ? (
                    <table className="table-auto border">
                        <thead>
                            <tr>
                                <th>title</th>
                                <th>body</th>
                                <th>name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                books.map((book: bookType) => (
                                    <tr key={book.id}>
                                            <td>
                                                <Link href={`books/${book.id}`} >
                                                    {book.title}
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href={`books/${book.id}`} >
                                                    {book.body}
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href={`books/${book.id}`} >
                                                    {book.userName}
                                                </Link>
                                            </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                ) : (
                    <table className="table-auto border">
                        <thead>
                            <tr>
                                <th>image</th>
                                <th>name</th>
                                <th>Introduction</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            users.map((user: userType) => (
                            <tr key={user.id}>
                                
                                    <td>
                                        <Link href={`users/${user.id}`}>
                                            <Image
                                                src={user.image}
                                                width={100}
                                                height={100}
                                                alt="profile_image"
                                            />
                                        </Link>
                                    </td>
                                    <td>
                                        <Link href={`users/${user.id}`}>
                                            {user.name}
                                        </Link>
                                    </td>
                                    <td>
                                        <Link href={`users/${user.id}`}>
                                            {user.introduction}
                                        </Link>
                                    </td>
                            </tr>
                            ))
                        }
                        </tbody>
                    </table>
                )
            }
        </div>
    )
}