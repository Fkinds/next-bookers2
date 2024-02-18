import Index from "../components";
import { UserInformation } from "../components/userInformation";

const Books = async () => {
    const urlparameter = `http://localhost:3000/api/book`
    const res = await fetch(urlparameter, {
        cache: "no-store"
    });
    const bookObject = await res.json();
    console.log(bookObject)
    return (
        <>
            <UserInformation />
            <Index Data={bookObject} />
        </>
    )
}

export default Books
