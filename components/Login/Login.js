import Image from "next/image";

import { signIn } from "next-auth/client";

const Login = () => {
  return (
    <div className="grid place-items-center mt-[30vh]">
      <Image
        src="https://i.ibb.co/Jn0cvJc/Facebook-Logo.png"
        alt="Facebook Logo"
        width={150}
        height={150}
        objectFit="contain"
      />
      <p
        onClick={signIn}
        className=" text-blue-600 border-[2px] border-blue-600 text-[13px] rounded-2xl cursor-pointer px-[15px] py-[5px]"
      >
        Login with Facebook
      </p>
    </div>
  );
};

export default Login;
