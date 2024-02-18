import { UserInformation } from '../components/userInformation'
import Index from '../components/index';

const Users = async () => {
    const urlparameter = `http://localhost:3000/api/user`;
    const res = await fetch(urlparameter, {
        cache: "no-store"
    });
    const userObject = await res.json();
    // console.log(userObject);
    return (
        <>
            <UserInformation />
            <Index Data={userObject} />
        </>
    )
}

export default Users
