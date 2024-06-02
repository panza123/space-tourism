import { useState } from "react";
import { data } from "./index";

export default function Crew() {
  const [crew, setCrew] = useState(data[0]);

  return (
    <main className="w-full min-h-screen bg-crew bg-cover pt-24 lg:pt-32 px-4 lg:px-10">
      <h2 className="uppercase text-white pt-24  max-sm:text-center max-md:text-center text-lg sm:text-3xl md:pt-10 lg:text-4xl">
        <span className="text-gray-400">02</span> Meet your crew Commander
      </h2>
      <section className="max-w-[1440px] mx-auto mt-10 sm:mt-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left py-3 text-white flex flex-col items-center lg:items-start">

          <div className="flex lg:hidden mt-3 gap-3 justify-center">
          {data.map((item) => (
            <div
              className={`w-6 h-6 rounded-full cursor-pointer ${crew.id === item.id ? 'bg-white' : 'bg-gray-500'}`}
              onClick={() => setCrew(item)}
              key={item.id}
            ></div>
          ))}
        </div>


            <p className="text-xl sm:text-3xl lg:text-4xl uppercase pt-5">
              <span className="text-gray-400 ">{crew.role}</span>
            </p>
            <p className="pt-5 text-2xl sm:text-3xl lg:text-6xl uppercase">
              <span className="text-gray-300">{crew.name}</span>
            </p>
            <p className="text-sm sm:text-base pt-5 text-blue-200 lg:pr-36 lg:text-xl">
              {crew.bio}
            </p>
            <div className="hidden lg:flex mt-5 gap-3">
              {data.map((item) => (
                <div
                  className={`w-6 h-6 rounded-full cursor-pointer ${crew.id === item.id ? 'bg-white' : 'bg-gray-500'}`}
                  onClick={() => setCrew(item)}
                  key={item.id}
                ></div>
              ))}
            </div>
          </div>
          <div className="w-full h-px bg-gray-600 lg:hidden "></div>
          <img src={crew.pic} alt={crew.name} className="w-64 sm:w-80 lg:w-[500px] object-cover mt-10 lg:mt-0" />
        </div>
        
      </section>
    </main>
  );
}
