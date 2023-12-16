import { useContext, useState } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";
import { userContext } from "../../assets/Context/AuthContext";
import { Link } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [show, setShow] = useState(true);
  const { get_User, SetUser } = useContext(userContext);
  //sign in with google
  const provider = new GoogleAuthProvider();
  const Google = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        SetUser(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  //sign in existing user with user name and password
  const formhandle = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    get_User(email, password)
      .then((result) => {
        SetUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex items-center justify-center w-screen">
      <div className="border flex flex-col text-center  sm:ml-10-5 md:w-3/4 p-8 rounded  mt-20 justify-center">
        <p className=" font-bold text-2xl bg-cyan-300 mb-10 p-2 rounded-md text-white">
          Log in
        </p>
        <form className="flex flex-col gap-10" onSubmit={formhandle}>
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
          <button
            onClick={Google}
            className="border-x-2  p-3 rounded border-cyan-300 hover:border-y-2">
            <FaGoogle />
          </button>
          <button className="border-x-2 p-3 rounded border-cyan-300 hover:border-y-2">
            <FaGithub />
          </button>
          <button className="border-x-2 p-3 rounded border-cyan-300 hover:border-y-2">
            <FaFacebook />
          </button>
        </div>
        <p className="mt-2 text-sky-300">
          New here?{" "}
          <span>
            <Link to="/registration">
              <u>Click</u>
            </Link>
          </span>{" "}
          here for registration
        </p>
      </div>
    </div>
  );
};

export default Login;
