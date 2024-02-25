import { LoginButton, LogoutButton } from "./button";
import { getServerSession } from "next-auth/next";
import { authOption } from "../options/authOption";
import Link from "next/link";

const Header = async () => {
    const session = await getServerSession(authOption)
    return (
        <>
            <header>
                <nav>
                    <ol>
                        <li>
                            <Link href="/">
                                Bookers2
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        {session ? (
                            <>
                                <li>
                                    <Link href="/users">
                                        users
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/books">
                                        books
                                    </Link>
                                </li>
                                <li>
                                    <LogoutButton />
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link href="/about">
                                        about
                                    </Link>
                                </li>
                                <li>
                                    <LoginButton />
                                </li>
                            </>
                        )}
                    </ol>
                </nav>
            </header>
        </>
    );
}

export default Header;