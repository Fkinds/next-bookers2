import Index from "../components";
import BookForm from "../components/bookForm";
import { UserInformation } from "../components/userInformation";

const Books = async () => {
    const parameter = `http://localhost:3000/api/book`
    const method = "POST"
    const res = await fetch(parameter, {
        cache: "no-store"
    });
    const bookObject = await res.json();
    return (
        <>
            <UserInformation />
            <Index Data={bookObject} />
            <BookForm urlparameter={parameter} httpMethod={method}/>
        </>
    )
}

export default Books
