import type { userType, bookType, dataType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default function Index({ Data }: dataType) {
    const values = Object.keys(Data)[1]
    const books = Data.books
    const users = Data.users
    return (
        <>
            {
                values === "books" ? (
                    <table>
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
                                        <Link href={`books/${book.id}`} >
                                            <td>{book.title}</td>
                                            <td>{book.body}</td>
                                            <td>{book.userName}</td>
                                        </Link>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                ) : (
                    <table>
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
                                <Link href={`users/${user.id}`}>
                                    <td>
                                        <Image
                                            src={user.image}
                                            width={100}
                                            height={100}
                                            alt="profile_image"
                                        />
                                    </td>
                                    <td>{user.name}</td>
                                    <td>{user.introduction}</td>
                                </Link>
                            </tr>
                            ))
                        }
                        </tbody>
                    </table>
                )
            }
        </>
    )
}