import React from "react";

function PopularProperties() {
  return (
    <div>
      {/* Popular Properties start */}
      <section className="popular-properties py-[80px] lg:py-[120px]">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              {" "}
              <span className="text-secondary text-tiny inline-block mb-2">
                Best Choice
              </span>
            </div>
            <div className="col-span-12">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-[50px]">
                <div>
                  <h2 className="font-recoleta text-primary text-[24px] sm:text-[30px] xl:text-xl capitalize">
                    Popular Properties<span className="text-secondary">.</span>
                  </h2>
                </div>
                <div>
                  <a
                    href="properties-v1.html"
                    className="flex flex-wrap items-center text-secondary text-tiny"
                  >
                    Explore all
                    <svg
                      className="ml-[10px]"
                      width={26}
                      height={11}
                      viewBox="0 0 26 11"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.0877 0.69303L24.2075 5.00849H0V5.99151H24.2075L20.0877 10.307L20.7493 11L26 5.5L20.7493 0L20.0877 0.69303Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            <div className="overflow-hidden rounded-md drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] bg-[#FFFDFC] text-center transition-all duration-300 hover:-translate-y-[10px]">
              <div className="relative">
                <a href="properties-details.html" className="block">
                  <img
                    src="/images/properties/properties1.jpg"
                    className="w-full h-full"
                    loading="lazy"
                    width={370}
                    height={266}
                    alt="Orchid Casel de Paradise."
                  />
                </a>
                <div className="flex flex-wrap flex-col absolute top-5 right-5">
                  <button className="flex flex-wrap items-center bg-[rgb(1,97,78,0.8)] p-[5px] rounded-[2px] text-white mb-[5px] text-xs">
                    <img
                      className="mr-1"
                      src="/images/icon/camera.png"
                      loading="lazy"
                      width={13}
                      height={10}
                      alt="camera icon"
                    />
                    07
                  </button>
                  <button className="flex flex-wrap items-center bg-[rgb(1,97,78,0.8)] p-[5px] rounded-[2px] text-white text-xs">
                    <img
                      className="mr-1"
                      src="/images/icon/video.png"
                      loading="lazy"
                      width={14}
                      height={10}
                      alt="camera icon"
                    />
                    08
                  </button>
                </div>
                <span className="absolute bottom-5 left-5 bg-[#FFFDFC] p-[5px] rounded-[2px] text-secondary leading-none text-[14px] font-normal capitalize">
                  for Sale
                </span>
              </div>
              <div className="py-[20px] px-[20px]">
                <h3>
                  <a
                    href="properties-details.html"
                    className="font-recoleta leading-tight text-[22px] xl:text-lg text-primary"
                  >
                    Orchid Casel de Paradise.
                  </a>
                </h3>
                <h4>
                  <a
                    href="properties-details.html"
                    className="font-light text-tiny text-secondary underline"
                  >
                    18B Central Street, San Francisco
                  </a>
                </h4>
                <span className="font-light text-sm">
                  Added: 25 November, 2021
                </span>
                <div className="before:block before:absolute before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:w-full before:z-[-1] before:bg-[#E0E0E0] relative">
                  <span className="font-recoleta text-base text-primary px-[15px] bg-white">
                    Price: $255300
                  </span>
                </div>
                <p className="font-light">
                  1230 Sq.fit - 4 Bed - 3 Bath - 2 Garage
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-md drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] bg-[#FFFDFC] text-center transition-all duration-300 hover:-translate-y-[10px]">
              <div className="relative">
                <a href="properties-details.html" className="block">
                  <img
                    src="/images/properties/properties2.jpg"
                    className="w-full h-full"
                    loading="lazy"
                    width={370}
                    height={266}
                    alt="Ruposibangla de parlosia."
                  />
                </a>
                <div className="flex flex-wrap flex-col absolute top-5 right-5">
                  <button className="flex flex-wrap items-center bg-[rgb(1,97,78,0.8)] p-[5px] rounded-[2px] text-white mb-[5px] text-xs">
                    <img
                      className="mr-1"
                      src="/images/icon/camera.png"
                      loading="lazy"
                      width={13}
                      height={10}
                      alt="camera icon"
                    />
                    07
                  </button>
                  <button className="flex flex-wrap items-center bg-[rgb(1,97,78,0.8)] p-[5px] rounded-[2px] text-white text-xs">
                    <img
                      className="mr-1"
                      src="/images/icon/video.png"
                      loading="lazy"
                      width={14}
                      height={10}
                      alt="camera icon"
                    />
                    08
                  </button>
                </div>
                <span className="absolute bottom-5 left-5 bg-[#FFFDFC] p-[5px] rounded-[2px] text-secondary leading-none text-[14px] font-normal capitalize">
                  for Rent
                </span>
              </div>
              <div className="py-[20px] px-[20px]">
                <h3>
                  <a
                    href="properties-details.html"
                    className="font-recoleta leading-tight text-[22px] xl:text-lg text-primary"
                  >
                    Ruposibangla de parlosia.
                  </a>
                </h3>
                <h4>
                  <a
                    href="properties-details.html"
                    className="font-light text-tiny text-secondary underline"
                  >
                    18B Central Street, San Francisco
                  </a>
                </h4>
                <span className="font-light text-sm">
                  Added: 25 November, 2021
                </span>
                <div className="before:block before:absolute before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:w-full before:z-[-1] before:bg-[#E0E0E0] relative">
                  <span className="font-recoleta text-base text-primary px-[15px] bg-white">
                    Price: $255300
                  </span>
                </div>
                <p className="font-light">
                  1800 Sq.fit - 5 Bed - 3 Bath - 2 Garage
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-md drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] bg-[#FFFDFC] text-center transition-all duration-300 hover:-translate-y-[10px]">
              <div className="relative">
                <a href="properties-details.html" className="block">
                  <img
                    src="/images/properties/properties3.jpg"
                    className="w-full h-full"
                    loading="lazy"
                    width={370}
                    height={266}
                    alt="Sinomen Studio Palace."
                  />
                </a>
                <div className="flex flex-wrap flex-col absolute top-5 right-5">
                  <button className="flex flex-wrap items-center bg-[rgb(1,97,78,0.8)] p-[5px] rounded-[2px] text-white mb-[5px] text-xs">
                    <img
                      className="mr-1"
                      src="/images/icon/camera.png"
                      loading="lazy"
                      width={13}
                      height={10}
                      alt="camera icon"
                    />
                    07
                  </button>
                  <button className="flex flex-wrap items-center bg-[rgb(1,97,78,0.8)] p-[5px] rounded-[2px] text-white text-xs">
                    <img
                      className="mr-1"
                      src="/images/icon/video.png"
                      loading="lazy"
                      width={14}
                      height={10}
                      alt="camera icon"
                    />
                    08
                  </button>
                </div>
                <span className="absolute bottom-5 left-5 bg-[#FFFDFC] p-[5px] rounded-[2px] text-secondary leading-none text-[14px] font-normal capitalize">
                  for Sale
                </span>
              </div>
              <div className="py-[20px] px-[20px]">
                <h3>
                  <a
                    href="properties-details.html"
                    className="font-recoleta leading-tight text-[22px] xl:text-lg text-primary"
                  >
                    Sinomen Studio Palace.
                  </a>
                </h3>
                <h4>
                  <a
                    href="properties-details.html"
                    className="font-light text-tiny text-secondary underline"
                  >
                    194 Mercer Street, 627 Broadway, New York
                  </a>
                </h4>
                <span className="font-light text-sm">
                  Added: 25 November, 2021
                </span>
                <div className="before:block before:absolute before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:w-full before:z-[-1] before:bg-[#E0E0E0] relative">
                  <span className="font-recoleta text-base text-primary px-[15px] bg-white">
                    Price: $255300
                  </span>
                </div>
                <p className="font-light">
                  1230 Sq.fit - 4 Bed - 3 Bath - 2 Garage
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popular Properties end */}
    </div>
  );
}

export default PopularProperties;
