import { UserInformation } from '../components/userInformation'
import Index from '../components/index';
import BookForm from '../components/bookForm';

const Users = async () => {
    const parameter = `http://localhost:3000/api/user`;
    const postParameter = `http://localhost:3000/api/book`
    const method = "POST"
    const nill = "nill"
    const res = await fetch(parameter, {
        cache: "no-store"
    });
    const userObject = await res.json();
    // console.log(userObject);
    return (
        <>
            <UserInformation id = { nill } />
            <Index Data={userObject} />
            <BookForm Object={{
                urlparameter : postParameter,
                httpMethod : method
            }}/>
        </>
    )
}

export default Users
