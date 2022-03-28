import React from "react";

function Video() {
  return (
    <div>
      {/* Video Section Start */}
      <section className="video-section">
        <div className="container">
          <div className="grid grid-cols-12 gap-[30px] items-center">
            <div className="col-span-12 lg:col-span-6 relative">
              <div className="mb-5 lg:mb-0 max-w-[450px]">
                <span className="text-secondary text-tiny inline-block mb-2">
                  Take a video tour
                </span>
                <h2 className="font-recoleta text-primary text-[24px] sm:text-[30px] leading-[1.277] xl:text-xl mb-[10px]">
                  Watch the video for taking your decision easily
                  <span className="text-secondary">.</span>
                </h2>
                <p>
                  Huge number of propreties availabe here for buy, sell and
                  Rent. Also you find here co-living property so lots
                  opportunity you have to choose here and enjoy huge discount.
                </p>
                <a
                  href="#"
                  className="flex flex-wrap items-center text-secondary text-tiny mt-[20px]"
                >
                  View all
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
                <img
                  className="absolute bottom-[-18px] right-[5px]"
                  src="/images/video/star.png"
                  loading="lazy"
                  width={65}
                  height={73}
                  alt="image"
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 text-center">
              <div className="relative rounded-[24px] pt-[45px] pr-[45px] z-[1] inline-block">
                <div className="absolute top-0 right-0 bg-primary w-[90%] h-[90%] rounded-[24px] z-[-2]">
                  <img
                    src="/images/video/shape.png"
                    className="absolute top-[18px] left-[-17px] z-[-1]"
                    loading="lazy"
                    width={68}
                    height={56}
                    alt="shape image"
                  />
                  <img
                    src="/images/video/shape.png"
                    className="absolute bottom-[15px] right-[15px] z-[-1]"
                    loading="lazy"
                    width={68}
                    height={56}
                    alt="shape image"
                  />
                </div>
                <div className="relative">
                  <div className="scene" data-relative-input="true">
                    <img
                      data-depth="0.1"
                      src="/images/video/video.png"
                      className="rounded-[24px]"
                      loading="lazy"
                      width={507}
                      height={349}
                      alt="video image"
                    />
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=mSC6GwizOag"
                    className="play-button bg-white text-white hover:text-primary absolute left-0 right-0 mx-auto top-1/2 -translate-y-1/2 hover:scale-105 hover:bg-primary w-[55px] h-[55px] flex 
          flex-wrap z-[1] items-center justify-center opacity-80 shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] transition-all rounded-full group
          
          before:block before:absolute  before:bg-white before:opacity-80 before:shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] hover:before:bg-primary hover:before:opacity-80 before:w-[70px] before:h-[70px] before:rounded-full before:z-[-1]
          "
                    aria-label="play button"
                  >
                    <svg
                      width={21}
                      height={22}
                      viewBox="0 0 21 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="stroke-secondary group-hover:stroke-white"
                        d="M1.63861 10.764V6.70324C1.63861 1.66145 5.20893 -0.403178 9.57772 2.11772L13.1024 4.14812L16.6271 6.17853C20.9959 8.69942 20.9959 12.8287 16.6271 15.3496L13.1024 17.38L9.57772 19.4104C5.20893 21.9313 1.63861 19.8666 1.63861 14.8249V10.764Z"
                        strokeWidth="1.5"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Video Section End */}
    </div>
  );
}

export default Video;
