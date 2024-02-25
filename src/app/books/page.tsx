import Index from "../components";
import BookForm from "../components/bookForm";
import { UserInformation } from "../components/userInformation";

const Books = async () => {
    const urlparameter = `http://localhost:3000/api/book`
    const res = await fetch(urlparameter, {
        cache: "no-store"
    });
    const bookObject = await res.json();
    return (
        <>
            <UserInformation />
            <Index Data={bookObject} />
            <BookForm/>
        </>
    )
}

export default Books
