import { dataType } from "@/types";
import Image from "next/image";

export default function Show({ Data } : dataType){
    const objectName = Object.keys(Data)[1]
    const book = Data.bookWithUserName
    const user = Data.user
    // console.log(user)
    return (
        <>
            {
                objectName === "bookWithUserName" ? (
                    <>
                        <li>{book.title}</li>
                        <li>{book.body}</li>
                        <li>{book.userName}</li>
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
