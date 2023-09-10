"use client";
import { useState } from "react";
import {
  Button,
  Input,
  Tabs,
  Tab,
  TabsHeader,
  TabPanel,
  TabsBody,
} from "@/twcomponents/TWComponents";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [type, setType] = useState<"login" | "signup">("login");
  return (
    <div className="h-[100vh] w-full flex  flex-col justify-center items-center bg-black ">
      <div className="h-[100%] max-h-auto w-[80%] max-w-[500px] flex flex-col gap-4 justify-center  ">
        <Tabs value={type}>
          <TabsHeader className="bg-transparent">
            <Tab value="login">
              <div
                className={
                  type == "signup"
                    ? "text-[#f2f2f2]"
                    : "text-[#1F1F1F] font-bold" +
                      " flex items-center gap-2 transition-all"
                }
                onClick={() => setType("login")}
              >
                Sign In
              </div>
            </Tab>
            <Tab value="signup">
              <div
                className={
                  type == "login"
                    ? "text-[#f2f2f2]"
                    : "text-[#1F1F1F] font-bold" +
                      " flex items-center gap-2 transition-all"
                }
                onClick={() => setType("signup")}
              >
                Sign Up
              </div>
            </Tab>
          </TabsHeader>
          <TabsBody>
            <TabPanel value="login">
              <div className="shadow-lg rounded-lg p-7 flex flex-col justify-center items-center gap-6 bg-[#f2f2f2] z-100">
                <h1 className="text-center text-[#1F1F1F] font-bold">Login</h1>
                <div className="flex gap-4 flex-col justify-center items-center w-[80%] ">
                  <Input variant="outlined" label="Username" />
                  <Input variant="outlined" label="Password" />
                  <Button>Submit</Button>
                </div>
              </div>

              <div className="flex w-full px-4">
                <h1 className="w-1/2 text-start cursor-pointer whitespace-nowrap text-[#f1f1f1]">
                  Forgot Password?
                </h1>
              </div>
            </TabPanel>
            <TabPanel value="signup">
              <div className="shadow-lg rounded-lg p-7 flex flex-col justify-center items-center gap-6 bg-[#f2f2f2] z-100">
                <h1 className="text-center text-[#1F1F1F] font-bold">
                  Create Account
                </h1>
                <div className="flex gap-4 flex-col justify-center items-center w-[80%] ">
                  <Input variant="outlined" label="Username" />
                  <Input variant="outlined" label="Full Name" />
                  <Input variant="outlined" label="Email" />
                  <Input variant="outlined" label="Password" />
                  <Input variant="outlined" label="Confirm Password" />
                  <Button>Sign up</Button>
                </div>
              </div>

              <div className="my-3">
                <div className="text-center text-white">
                  <h4>Continue with</h4>
                </div>
                <div className="flex w-full px-4 gap-5 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // xml:space="preserve"
                    viewBox="0 0 40 40"
                    className="aspect-square w-[30px] hover:scale-110 transition-all"
                  >
                    <linearGradient
                      id="a"
                      x1="-277.375"
                      x2="-277.375"
                      y1="406.6018"
                      y2="407.5726"
                      gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#0062e0" />
                      <stop offset="1" stop-color="#19afff" />
                    </linearGradient>
                    <path
                      fill="url(#a)"
                      d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z"
                    />
                    <path
                      fill="#fff"
                      d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z"
                    />
                  </svg>
                  <FcGoogle
                    size={33}
                    className="hover:scale-110 transition-all"
                  />
                </div>
              </div>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
}
