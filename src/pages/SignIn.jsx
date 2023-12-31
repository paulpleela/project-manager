import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/Auth";

export default function SignIn() {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const project_id = 1;
        navigate(`/project/${project_id}`);
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error.message);
      });
  };

  return (
    <>
      <div className="relative h-[115vh]">
        <img
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="w-full h-full filter grayscale object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-teal-100 opacity-90"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center p-10">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 m-2 lg:m-4 absolute top-0 left-0"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.04582 10.8718C8.52718 10.601 8.6979 9.99127 8.42713 9.50992C8.15637 9.02856 7.54665 8.85784 7.0653 9.1286L3.50974 11.1286C3.18725 11.31 2.99128 11.6546 3.0003 12.0245C3.00931 12.3944 3.22184 12.7291 3.55279 12.8946L5.63258 13.9345L3.50974 15.1286C3.18725 15.31 2.99128 15.6546 3.0003 16.0245C3.00931 16.3944 3.22184 16.7291 3.55279 16.8946L11.5528 20.8946C11.8343 21.0354 12.1657 21.0354 12.4472 20.8946L20.4472 16.8946C20.7782 16.7291 20.9907 16.3944 20.9997 16.0245C21.0087 15.6546 20.8128 15.31 20.4903 15.1286L18.3674 13.9345L20.4472 12.8946C20.7782 12.7291 20.9907 12.3944 20.9997 12.0245C21.0087 11.6546 20.8128 11.31 20.4903 11.1286L16.9347 9.1286C16.4533 8.85784 15.8436 9.02856 15.5729 9.50992C15.3021 9.99127 15.4728 10.601 15.9542 10.8718L17.8679 11.9482L12 14.8821L6.13213 11.9482L8.04582 10.8718ZM16.2077 15.0144L12.4472 16.8946C12.1657 17.0354 11.8343 17.0354 11.5528 16.8946L7.7923 15.0144L6.13213 15.9482L12 18.8821L17.8679 15.9482L16.2077 15.0144Z"
                fill="#ffffff"
              />{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.5528 3.10557C11.8343 2.96481 12.1657 2.96481 12.4472 3.10557L20.4472 7.10557C20.786 7.27496 21 7.62123 21 8C21 8.37877 20.786 8.72504 20.4472 8.89443L12.4472 12.8944C12.1657 13.0352 11.8343 13.0352 11.5528 12.8944L3.55279 8.89443C3.214 8.72504 3 8.37877 3 8C3 7.62123 3.214 7.27496 3.55279 7.10557L11.5528 3.10557ZM6.23607 8L12 10.882L17.7639 8L12 5.11803L6.23607 8Z"
                fill="#ffffff"
              />{" "}
            </g>
          </svg>
          <h1 className="text-6xl font-bold text-white sm:text-center">
            Bridging Horizons, Building Efficiency
          </h1>
          <h2 className="text-2xl text-white font-light sm:w-7/12 sm:text-center my-10">
            Unlock project potential with precision: plan strategically,
            organize collaboratively, and track tasks effortlessly for peak
            efficiency and success.
          </h2>
          <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-4 sm:space-y-0 mr-auto sm:mr-0">
            <button
              onClick={signInWithGoogle}
              className="w-52 h-12 bg-white font-semibold text-indigo-600 shadow rounded-2xl hover:scale-105"
            >
              Sign in with Google
            </button>
            <button className="w-52 h-12 border-2 font-semibold text-white shadow rounded-2xl hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="top-0 left-0 w-full h-0 -mt-24">
        <div className="flex flex-col items-center space-y-10 lg:space-y-0 lg:flex-row place-content-evenly">
          <div className="flex flex-col bg-white h-56 w-48 rounded-full flex items-center justify-center z-50 font-bold">
            <img src="https://www.svgrepo.com/show/374474/team-member.svg" className="w-32"/>
            Collaborate
          </div>
          <div className="flex flex-col bg-white h-56 w-48 rounded-full flex items-center justify-center z-50 font-bold">
            <img src="https://www.svgrepo.com/show/374362/product-required.svg" className="w-32"/>
            Manage Tasks
          </div>
          <div className="flex flex-col bg-white h-56 w-48 rounded-full flex items-center justify-center z-50 font-bold">
            <img src="https://www.svgrepo.com/show/465172/goal.svg" className="w-24 m-4" />
            Meet Goals
          </div>
        </div>
      </div>

      <div className="h-screen bg-stone-200"></div>
    </>
  );
}
