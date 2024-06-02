import { useState } from 'react';
import { dis } from "./index";

export default function Destination() {
  const [selectedDestination, setSelectedDestination] = useState(dis[0]);

  return (
    <main className="w-full min-h-screen bg-star  bg-cover bg-no-repeat pt-24 lg:pt-32 px-4 lg:px-10 ">
      <h2 className="uppercase text-white pt-24 max-sm:text-center text-lg lg:text-4xl  ">
        <span className="text-gray-400">01</span> Pick your destination Moon
      </h2>

      <section className="max-w-[1440px] mx-auto mt-10 lg:mt-20 px-4">
        <div className="w-full h-full flex flex-shrink-0">
          <div className="w-full h-full grid lg:grid-cols-2 gap-10">
            {/* Image */}
            <img
              src={selectedDestination.img}
              alt={selectedDestination.title}
              className="w-full max-w-md mx-auto lg:mx-0 lg:max-w-lg object-cover rotate"
            />
            {/* Text */}
            <div className="flex flex-col text-white mt-5 lg:mt-0 lg:ml-10">
              <div className="flex justify-center lg:justify-start gap-5 lg:gap-10 uppercase text-blue-200">
                {/* Buttons to toggle */}
                {dis.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => setSelectedDestination(item)}
                    className={`uppercase pb-2 ${selectedDestination.title === item.title ? "border-b-2 border-white" : 'text-blue-200'}`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
              <p className="font-bold pt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl uppercase text-center lg:text-left">
                <span>{selectedDestination.title}</span>
              </p>
              <p className="text-sm mt-2 pt-5 text-blue-200 lg:text-xl text-center lg:text-left">
                {selectedDestination.text}
              </p>
              <div className="w-full h-px bg-gray-600 my-5"></div>
              {/* Distance */}
              <div className="flex flex-col lg:flex-row justify-between items-center mt-2 py-2 text-center lg:text-left">
                <div className="flex flex-col mb-5 lg:mb-0">
                  <p className="text-sm lg:text-xl text-blue-200">Avg. Distance</p>
                  <p className="pt-2 text-2xl lg:text-3xl italic">{selectedDestination.km}</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm lg:text-xl text-blue-200">Est. Travel Time</p>
                  <p className="pt-2 text-2xl lg:text-3xl italic">{selectedDestination.mm}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
