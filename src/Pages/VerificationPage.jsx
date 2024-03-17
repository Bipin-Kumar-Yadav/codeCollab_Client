import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../Utils/axiosConfig";

const VerificationPage = () => {
  const { token } = useParams();
  console.log(token);
  const [msg, setMsg] = useState(null);
  const verifyEmail = async () => {
    try {
      if (token) {
        const res = await axiosInstance.post(
          "auth/email_verification",
          {
            "verificationToken":token
          }
        );
        if (res.status === 200) {
          setMsg("Email Verified Successfully");
        }
      }
    } catch (error) {
      setMsg("Email verification failed");
    }
  };
  useEffect(() => {
    verifyEmail();
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-[calc(100vh_-_100px)]">
      <h1 className=" text-secondary  font-bold">{msg}</h1>
    </div>
  );
};

export default VerificationPage;
