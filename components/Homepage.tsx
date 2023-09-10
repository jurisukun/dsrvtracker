import { Button, Input } from "@/twcomponents/TWComponents";
import React from "react";

export default function Homepage() {
  return (
    <div className="flex flex-col h-full w-full shadow-lg">
      <div
        id="banner"
        className="w-full h-[10%] px-5 flex items-center shadow-lg"
      >
        <img
          src="https://via.placeholder.com/1920x1080"
          className="aspect-square w-[80px] rounded-full"
        />
      </div>
      <div className="flex flex-row h-full">
        <nav className="w-auto h-full p-8 bg-gray-400 justify-center items-center">
          <div className="flex flex-col gap-3 py-8 justify-center items-center">
            <img
              src="https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png"
              className="aspect-square w-[50px] rounded-full h-full"
            />
            <p>Username</p>
          </div>
          <ul className="flex flex-col  h-auto flex-grow bg-red-200 justify-evenly">
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
            <li>Option 4</li>
          </ul>
        </nav>
        <div className="w-full flex flex-rowh-full p-6 gap-3">
          <div className="w-[70%] h-full flex flex-col gap-3">
            <div className="h-[10%] items-center flex justify-around border-2">
              <div className="">
                <input
                  className="border-2 border-red-200 p-2 rounded-md mx-3"
                  type="search"
                  placeholder="Search something"
                />
                <Button className="bg-red-500">Search</Button>
              </div>

              <div>
                <h3 className="flex gap-2 items-center">
                  Total:{" "}
                  <p className="font-bold text-[18px] text-center">
                    Php 123,456
                  </p>
                </h3>
              </div>
            </div>
            <section className="border-2 h-[40%] flex p-3">
              <div className="w-[80%] p-3">
                <h5 className="font-bold my-3">Recent</h5>
                <div className="flex flex-col gap-3">
                  <ul className="w-full flex flex-col gap-3">
                    <li className="grid grid-cols-3 gap-2 text-center">
                      <h4 className="text-start col-span-1 whitespace-nowrap overflow-hidden text-ellipsis">
                        Item 1
                      </h4>
                      <p className="col-span-1">Php 123</p>
                      <div className=" col-span-1 flex gap-2">
                        <Button className="bg-blue-800">Edit</Button>
                        <Button className="bg-red-600">Delete</Button>
                      </div>
                    </li>
                    <li className="grid grid-cols-3 gap-2 text-center">
                      <h4 className="text-start col-span-1 whitespace-nowrap overflow-hidden text-ellipsis">
                        Item 112783459006728276253723845329692349
                      </h4>
                      <p className="col-span-1">Php 123</p>
                      <div className=" col-span-1 flex gap-2">
                        <Button className="bg-blue-800">Edit</Button>
                        <Button className="bg-red-600">Delete</Button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-[20%] border-2 p-3">
                <h5 className="text-center font-bold my-2">New Record</h5>
                <div>
                  <form className="flex flex-col gap-5">
                    <Input variant="outlined" type="text" label="Item" />
                    <Input
                      variant="outlined"
                      type="number"
                      min={0}
                      label="Price"
                    />
                    <Input variant="outlined" type="date" label="Date" />
                    <Button className="bg-green-500">Add</Button>
                  </form>
                </div>
              </div>
            </section>
            <section className="border-2  h-[40%]">section 1</section>
          </div>
          <div className="w-[30%] border-2 border-red-200">
            <section>section 3</section>
          </div>
        </div>
      </div>
    </div>
  );
}
