"use client";
import Image from "next/image";
import Login from "@/components/Login";

export default function Home() {
  return (
    <main className="h-100vh  flex w-full justify-center items-center ">
      {localStorage.getItem("token") ? <>Main Page</> : <Login />}{" "}
    </main>
  );
}
