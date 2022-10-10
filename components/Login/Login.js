import Image from "next/image";

import { signIn } from "next-auth/client";

const Login = () => {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://i.ibb.co/Jn0cvJc/Facebook-Logo.png"
        alt="Facebook Logo"
        width={400}
        height={400}
        objectFit="contain"
      />
      <h1
        onClick={signIn}
        className="p-5 bg-blue-500 text-white text-center cursor-pointer rounded-full"
      >
        Login with Facebook
      </h1>
    </div>
  );
};

export default Login;
