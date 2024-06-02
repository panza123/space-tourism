import { tech } from "./index";
import { useState } from "react";

export default function Technology() {
  const [space, setSpace] = useState(tech[0]);

  return (
    <main className="w-full min-h-screen bg-tech bg-cover bg-no-repeat pt-24 lg:pt-32 px-4 lg:px-10">
      <h2 className="uppercase text-white pt-24 text-center text-lg sm:text-3xl md:pt-10 lg:text-4xl">
        <span className="text-gray-400">03</span> Space launch
      </h2>

      <section className="max-w-[1440px] mx-auto mt-10 sm:mt-20 px-4 lg:px-0">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left py-3 text-white flex flex-col items-center lg:items-start lg:w-1/2">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 w-full">
              <div className="flex lg:flex-col gap-5 max-sm:mt-4">
                {/* Buttons to toggle */}
                {tech.map((item) => (
                  <button
                    className={`w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full border-[1px] border-gray-400 ${
                      space.id === item.id ? "bg-white text-blue-950" : ""
                    }`}
                    key={item.id}
                    onClick={() => setSpace(item)}
                  >
                    <p className="text-lg sm:text-xl">{item.id}</p>
                  </button>
                ))}
              </div>
              <div className="lg:ml-10">
                <p className="text-lg sm:text-xl text-blue-200 uppercase">
                  The terminology...
                </p>
                <p className="text-3xl sm:text-4xl uppercase pt-5">
                  {space.name}
                </p>
                <p className="pt-5 text-sm sm:text-base lg:text-xl text-blue-200 lg:pr-[10px]">
                  {space.desc}
                </p>
              </div>
            </div>
          </div>
          {/* {image for small screen} */}
          <img
            src={space.img}
            alt={space.name}
            className="w-full   h-auto object-cover mt-10 lg:mt-0 lg:hidden"
          />
          {/* {image for bigscreen} */}
          <img
            src={space.img1}
            alt={space.name}
            className="lg:w-[500px] h-auto object-covermt-10 hidden lg:mt-0 lg:block"
          />
        </div>
      </section>
    </main>
  );
}
