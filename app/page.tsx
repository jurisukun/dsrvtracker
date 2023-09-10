"use client";
import Image from "next/image";
import { useState } from "react";
import Login from "@/components/Login";
import Homepage from "@/components/Homepage";

export default function Home() {
  const [isHome, setIsHome] = useState(true);
  return (
    <main className="h-[100vh]  flex w-full justify-center items-center ">
      {isHome ? <Homepage /> : <Login />}{" "}
    </main>
  );
}
