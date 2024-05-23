import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="w-full min-h-screen text-white pt-28 bg-homephone bg-no-repeat bg-cover md:bg-homes lg:bg-home">
      <section className="body">
        <div className="mt-10 max-w[720px]">
          <p className="text-[20px] md:text-3xl lg:text-4xl text-blue-200 pt-3 uppercase">so,you want to travel to</p>
          <h1 className="text-6xl max-sm:text-center md:text-8xl lg:text-[150px] pt-10 uppercase ">
            <span>space</span>
          </h1>
          <p className="pt-5 max-sm:text-center text-blue-200  md:text-[16px] lg:text-[20px] lg:pr-[100px]"> 
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>


        {/* {imagedesign} */}
        <div  className="mt-[100px] lg:ml-[200px] max-w[720px] m-auto  ">
          <Link to='/destination'>
   
          <div className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full
           bg-white flex items-center justify-center uppercase text-blue-950 
            btn hover:rounded-full transition-all ease-out duration-700">
  <p className="text-4xl">explore</p>
</div>

          </Link>
        </div>
      </section>
    </main>
  );
}
