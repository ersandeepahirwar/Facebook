import Image from "next/image";

import { signIn } from "next-auth/client";

const Login = () => {
  return (
    <div className="mt-[30vh] grid place-items-center">
      <Image
        src="https://i.ibb.co/Jn0cvJc/Facebook-Logo.png"
        alt="Facebook Logo"
        width={150}
        height={150}
        objectFit="contain"
      />
      <p
        onClick={signIn}
        className=" cursor-pointer rounded-2xl border-[2px] border-blue-600 px-[15px] py-[5px] text-[13px] text-blue-600"
      >
        Login with Facebook
      </p>
    </div>
  );
};

export default Login;
