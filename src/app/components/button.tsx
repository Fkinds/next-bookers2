"use client"
import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return (
    <>
      <button
        onClick={() => signIn("github", { callbackUrl: `${window.location.origin}` })}
      >
        Log in
      </button>
    </>
  );
};

export const LogoutButton = () => {
  return (
    <>
      <button onClick={() => signOut()}>Log out</button>
    </>
  )
}
