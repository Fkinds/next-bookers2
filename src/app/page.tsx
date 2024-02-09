import { LoginButton, LogoutButton } from "./components/button";
import { getServerSession } from "next-auth/next";
import { authOption } from "./options/authOption";


const Home = async () =>  {
  const session = await getServerSession(authOption)

  return (
    <>
      { session ? <LogoutButton/> : <LoginButton/> }
    </>
  );
}

export default Home;
