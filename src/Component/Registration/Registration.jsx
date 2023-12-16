import { useContext, useState } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";
import { userContext } from "../../assets/Context/AuthContext";

const Registration = () => {
  const [show, setShow] = useState(true);
  const { set_User } = useContext(userContext);
  //sign in existing user with user name and password
  const formhandle = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    set_User(email, password)
      .then((result) => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center w-screen">
      <div className="border flex flex-col text-center md:w-2/4 p-8  rounded mt-20">
        <p className=" font-bold text-2xl bg-cyan-300 mb-10 p-2 rounded-md text-white">
          Registration
        </p>
        <form className="flex flex-col gap-10" onSubmit={formhandle}>
          <input
            className=" border-y-2 rounded-md border-cyan-300 hover:border-cyan-700  p-2"
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
          />
          <input
            className=" border-y-2 rounded-md border-cyan-300 hover:border-cyan-700  p-2"
            type="email"
            name="email"
            id="email"
            placeholder="Enter mail"
            required
          />

          <div className=" relative">
            <input
              className="border-y-2 rounded-md border-cyan-300 hover:border-cyan-700  p-2 w-full"
              type={show ? "password" : "text"}
              name="password"
              placeholder="Enter password"
              id="password"
              required
            />
            <span
              className=" absolute top-1/3 right-2 hover:cursor-pointer"
              onClick={() => setShow(!show)}>
              {show ? <IoEye /> : <IoIosEyeOff />}
            </span>
          </div>

          <input
            className="btn bg-cyan-300 text-white hover:bg-cyan-500"
            type="submit"
          />
        </form>
        <div className="mt-5 grid grid-flow-col gap-10 justify-center">
          <button className="border-x-2  p-3 rounded border-cyan-300 hover:border-y-2">
            <FaGoogle />
          </button>
          <button className="border-x-2 p-3 rounded border-cyan-300 hover:border-y-2">
            <FaGithub />
          </button>
          <button className="border-x-2 p-3 rounded border-cyan-300 hover:border-y-2">
            <FaFacebook />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
