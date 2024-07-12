import React from "react";
import {useEffect, useState} from "react"
import axios from "axios"
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  user,
} from "@nextui-org/react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (inputUsername) => {
    setUsername(inputUsername);
  }

  const handlePassword = (inputPassword) => {
    setPassword(inputPassword);
  }

  useEffect(() => {
    if(localStorage.getItem("name") && localStorage.getItem("username")){
      console.log("User sudah login");
      window.location.replace("/home")
    }
  })

  const userLogin = () => {
    console.log('user login ready')
    const requestingData = {
      username : username,
      password : password
    }

    

    axios({
      method: "POST",
      url: "http://157.10.161.159:3000/api/users/login",
      data: requestingData
    }).then((result) => {
      //console.log(result.data);
      localStorage.setItem("username", result.data.data.username)
      localStorage.setItem("name", result.data.data.name)
      window.location.replace("/home")
    })
  }
  

  return (
    <>
      <div className="bg-lightturquoise h-screen">
        <div className=" grid grid-cols-12 ">
          <div className=" col-span-6">
            <Card radius="none" className=" h-screen">
              <div className="flex items-center px-8 py-4">
                <Image
                  src="/images/logo.svg"
                  alt="Profile Picture"
                  className="w-[100px] h-[100px] mr-3"
                />
                <div className=" -mt-5">
                  <span className=" font-barlow font-semibold text-[24px]">
                    Tranquil Mind
                  </span>
                </div>
              </div>
              <div className="px-10">
                <span className="font-barlow font-bold text-[52px] text-darkgrey">
                  Hello,
                </span>
                <p className=" font-barlow font-medium text-[36px] text-darkgrey opacity-50">
                  Selamat Datang di Tranquil Mind{" "}
                </p>
              </div>
              <div className="w-full flex justify-center">
                <Image
                  src="/images/login.png"
                  alt="Login Picture"
                  className="w-[500px] h-[400px] mt-8"
                />
              </div>
            </Card>
          </div>
          <div className=" col-span-6">
            <div className=" flex justify-center py-24">
              <span className="font-barlow font-bold text-[52px]">
                Hello, Friend!
              </span>
            </div>
            <div className=" px-32">
              <div className=" font-barlow font-semibold text-[24px] py-2 text-darkgrey">
                Username
              </div>
              <input
                type="text"
                className=" bg-lightwhite opacity-80 rounded-[5px] py-2 px-4 font-barlow font-medium text-[24px] w-full"
                placeholder="Username" onChange={(event) => handleUsername(event.target.value)}
              />
            </div>
            <div className=" px-32 pt-5">
              <div className=" font-barlow font-semibold text-[24px] py-2 text-darkgrey">
                Password
              </div>
              <input
                type="password"
                className=" bg-lightwhite opacity-80 rounded-[5px] py-2 px-4 font-barlow font-medium text-[24px] w-full"
                placeholder="Password"
                onChange={(event) => handlePassword(event.target.value)}
              />
            </div>
            <div className="py-10 px-32">
                <Button className="w-full py-6 bg-darkorange opacity-70" radius="sm"><span className=" font-barlow font-bold text-white text-[24px]" onClick={() => userLogin()}>SIGN IN</span></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
