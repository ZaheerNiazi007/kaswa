import React from "react";

function Hero() {
  return (
    <div>
      {/* Hero section start */}
      <section
        className="bg-no-repeat bg-left-bottom xl:bg-right-bottom bg-contain xl:bg-cover bg-[#FFF6F0] h-[560px] xl:h-[650px] flex flex-wrap items-center relative"
        style={{ backgroundImage: 'url("assets/images/hero/about1.png")' }}
      >
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="max-w-[400px]">
                <div className="mb-5">
                  <span className="text-base text-secondary block">
                    About us
                  </span>
                </div>
                <h1 className="font-recoleta text-primary text-[36px] sm:text-[50px] md:text-[68px] lg:text-[50px] leading-tight xl:text-2xl title">
                  About<span className="text-secondary"> Kaswa.</span>
                </h1>
                <p className="text-base text-[#494949] mt-5">
                  Huge number of propreties availabe here for buy and sell, also
                  you can find here co-living property
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute left-0 bottom-0"
          src="/images/hero/star.png"
          alt="icon"
          width={112}
          height={138}
        />
      </section>
      {/* Hero section end */}
    </div>
  );
}

export default Hero;
