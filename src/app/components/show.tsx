import { dataType } from "@/types";
import Image from "next/image";

export default function Show({ Data } : dataType){
    return (
        <>
            {
                Data === "bookWithUserName" ? (
                    <>
                        <li>{Data.title}</li>
                        <li>{Data.body}</li>
                        <li>{Data.userName}</li>
                    </>
                ) : (
                    <>
                        <li>
                            <Image
                                src={Data.image}
                                width={100}
                                height={100}
                                alt="profile_image"
                            />
                        </li>
                        <li>{Data.name}</li>
                        <li>{Data.introduction}</li>
                    </>
                )
            }
        </>
    )
}
