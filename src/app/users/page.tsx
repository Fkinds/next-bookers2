import { UserInformation } from '../components/userInformation'
import Index from '../components/index';
import BookForm from '../components/bookForm';

const Users = async () => {
    const parameter = `http://localhost:3000/api/user`;
    const method = "POST"
    const res = await fetch(parameter, {
        cache: "no-store"
    });
    const userObject = await res.json();
    // console.log(userObject);
    return (
        <>
            <UserInformation />
            <Index Data={userObject} />
            <BookForm urlparameter={parameter} httpMethod={method}/>
        </>
    )
}

export default Users
