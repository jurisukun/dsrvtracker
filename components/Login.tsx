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

export default function Login() {
  const [type, setType] = useState<"login" | "signup">("login");
  return (
    <div className="h-[100vh] w-full flex  flex-col justify-center items-center from-[#00FFCA] via-white to-white bg-gradient-to-br ">
      <div className="h-[100%] max-h-auto w-[80%] max-w-[500px] flex flex-col gap-4 justify-center  ">
        <Tabs value={type}>
          <TabsHeader className="bg-white">
            <Tab value="login">
              <div
                className={
                  type == "signup"
                    ? "text-gray-500"
                    : "text-black" + " flex items-center gap-2"
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
                    ? "text-gray-500"
                    : "text-black" + " flex items-center gap-2"
                }
                onClick={() => setType("signup")}
              >
                Sign Up
              </div>
            </Tab>
          </TabsHeader>
          <TabsBody>
            <TabPanel value="login">
              <div className="shadow-lg rounded-lg p-7 flex flex-col justify-center items-center gap-6 bg-white z-100">
                <h1 className="text-center">Login</h1>
                <div className="flex gap-4 flex-col justify-center items-center w-[80%] ">
                  <Input variant="outlined" label="Username" />
                  <Input variant="outlined" label="Password" />
                  <Button>Submit</Button>
                </div>
              </div>

              <div className="flex w-full px-4">
                <h1 className="w-1/2 text-start cursor-pointer whitespace-nowrap">
                  Forgot Password?
                </h1>
                <h1 className=" text-[#00FFCA] font-bold w-1/2 text-end cursor-pointer whitespace-nowrap">
                  Sign Up
                </h1>
              </div>
            </TabPanel>
            <TabPanel value="signup">
              <div className="shadow-lg rounded-lg p-7 flex flex-col justify-center items-center gap-6 bg-white z-100">
                <h1 className="text-center">Login</h1>
                <div className="flex gap-4 flex-col justify-center items-center w-[80%] ">
                  <Input variant="outlined" label="Username" />
                  <Input variant="outlined" label="Password" />
                  <Button>Sign up</Button>
                </div>
              </div>

              <div className="flex w-full px-4">
                <h1 className=" text-[#00FFCA] font-bold w-1/2 text-end cursor-pointer whitespace-nowrap">
                  Log in
                </h1>
              </div>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
}
