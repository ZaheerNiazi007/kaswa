import React from "react";

function ExploreCities() {
  return (
    <div>
      {" "}
      {/* Explore Cities Start*/}
      <section className="explore-cities-section pt-[80px] pb-[120px] lg:py-[120px]">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="mb-[30px] lg:mb-[60px] text-center">
                <span className="text-secondary text-tiny inline-block mb-2">
                  Explore Cities
                </span>
                <h2 className="font-recoleta text-primary text-[24px] sm:text-[30px] xl:text-xl capitalize">
                  Find Your Neighborhood
                  <span className="text-secondary">.</span>
                </h2>
              </div>
              <div className="cities-slider">
                <div className="swiper  -mx-[30px] -my-[60px] px-[30px] py-[60px]">
                  <div className="swiper-wrapper">
                    {/* swiper-slide start */}
                    <div className="swiper-slide text-center">
                      <div className="relative group">
                        <a href="agency-details.html" className="block">
                          <img
                            src="/images/cities/cities1.png"
                            className="w-full h-full block mx-auto rounded-[6px_6px_0px_0px]"
                            loading="lazy"
                            width={270}
                            height={290}
                            alt="New York"
                          />
                          <div className="cities-shadow bg-[#FFFDFC] rounded-[0px_0px_6px_6px] px-[15px] py-[20px]">
                            <span className="font-recoleta font-normal text-[24px] xl:text-lg text-primary group-hover:text-secondary transition-all">
                              New York
                            </span>
                            <p className="font-light text-tiny capitalize text-secondary group-hover:text-primary transition-all">
                              36 Properties
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide text-center">
                      <div className="relative group">
                        <a href="agency-details.html" className="block">
                          <img
                            src="/images/cities/cities2.png"
                            className="w-full h-full block mx-auto rounded-[6px_6px_0px_0px]"
                            loading="lazy"
                            width={270}
                            height={290}
                            alt="Sun Francisco"
                          />
                          <div className="cities-shadow bg-[#FFFDFC] rounded-[0px_0px_6px_6px] px-[15px] py-[20px]">
                            <span className="font-recoleta font-normal text-[24px] xl:text-lg text-primary group-hover:text-secondary transition-all">
                              Sun Francisco
                            </span>
                            <p className="font-light text-tiny capitalize text-secondary group-hover:text-primary transition-all">
                              18 Properties
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide text-center">
                      <div className="relative group">
                        <a href="agency-details.html" className="block">
                          <img
                            src="/images/cities/cities3.png"
                            className="w-full h-full block mx-auto rounded-[6px_6px_0px_0px]"
                            loading="lazy"
                            width={270}
                            height={290}
                            alt="Washington D.C."
                          />
                          <div className="cities-shadow bg-[#FFFDFC] rounded-[0px_0px_6px_6px] px-[15px] py-[20px]">
                            <span className="font-recoleta font-normal text-[24px] xl:text-lg text-primary group-hover:text-secondary transition-all">
                              Washington D.C.
                            </span>
                            <p className="font-light text-tiny capitalize text-secondary group-hover:text-primary transition-all">
                              27 Properties
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide text-center">
                      <div className="relative group">
                        <a href="agency-details.html" className="block">
                          <img
                            src="/images/cities/cities4.png"
                            className="w-full h-full block mx-auto rounded-[6px_6px_0px_0px]"
                            loading="lazy"
                            width={270}
                            height={290}
                            alt="New York"
                          />
                          <div className="cities-shadow bg-[#FFFDFC] rounded-[0px_0px_6px_6px] px-[15px] py-[20px]">
                            <span className="font-recoleta font-normal text-[24px] xl:text-lg text-primary group-hover:text-secondary transition-all">
                              New York
                            </span>
                            <p className="font-light text-tiny capitalize text-secondary group-hover:text-primary transition-all">
                              56 Properties
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide text-center">
                      <div className="relative group">
                        <a href="agency-details.html" className="block">
                          <img
                            src="/images/cities/cities2.png"
                            className="w-full h-full block mx-auto rounded-[6px_6px_0px_0px]"
                            loading="lazy"
                            width={270}
                            height={290}
                            alt="Francisco"
                          />
                          <div className="cities-shadow bg-[#FFFDFC] rounded-[0px_0px_6px_6px] px-[15px] py-[20px]">
                            <span className="font-recoleta font-normal text-[24px] xl:text-lg text-primary group-hover:text-secondary transition-all">
                              Francisco
                            </span>
                            <p className="font-light text-tiny capitalize text-secondary group-hover:text-primary transition-all">
                              18 Properties Sun
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    {/* swiper-slide end*/}
                  </div>
                  {/* Add Pagination */}
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Explore Cities End*/}
    </div>
  );
}

export default ExploreCities;
