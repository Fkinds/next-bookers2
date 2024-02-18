import { UserInformation } from '../components/userInformation'
import Index from '../components/index';
import { getServerSideProps } from '../components/index';



const Users = () => {
    const urlPath = `http://localhost:3000/api/book`;
    return (
        <>
            <UserInformation/>
            {/* <Index repo={ getServerSideProps(urlPath) }/> */}
            <Index repo={ getServerSideProps() }/>
        </>
    )
}

export default Users
