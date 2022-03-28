import React from "react";

function Service() {
  return (
    <div>
      {/* service Section Start*/}
      <section>
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="mb-[30px] lg:mb-[60px] text-center">
                <span className="text-secondary text-tiny inline-block mb-2">
                  Our Services
                </span>
                <h2 className="font-recoleta text-primary text-[24px] sm:text-[30px] xl:text-xl capitalize">
                  Services that we Provide
                  <span className="text-secondary">.</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
            <div className="relative group">
              <a href="properties-details.html" className="block">
                <img
                  src="/images/service/service1.png"
                  className="w-full h-full block mx-auto rounded-[6px_6px_0px_0px]"
                  loading="lazy"
                  width={270}
                  height={290}
                  alt="Sale Property"
                />
                <div className="drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] hover:drop-shadow-[0px_8px_20px_rgba(0,0,0,0.15)] bg-[#FFFDFC] rounded-[0px_0px_6px_6px] px-[25px] py-[25px]">
                  <h3 className="font-recoleta font-normal text-[24px] xl:text-lg text-primary group-hover:text-secondary transition-all mb-[5px]">
                    Sale Property
                    <span className="text-secondary group-hover:text-primary">
                      .
                    </span>{" "}
                  </h3>
                  <p className="font-light text-tiny">
                    Provide prorpery Sale options opportunity to find the best{" "}
                  </p>
                </div>
              </a>
            </div>
            <div className="relative group">
              <a href="properties-details.html" className="block">
                <img
                  src="/images/service/service2.png"
                  className="w-full h-full block mx-auto rounded-[6px_6px_0px_0px]"
                  loading="lazy"
                  width={270}
                  height={290}
                  alt="Buy Property"
                />
                <div className="drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] hover:drop-shadow-[0px_8px_20px_rgba(0,0,0,0.15)] bg-[#FFFDFC] rounded-[0px_0px_6px_6px] px-[25px] py-[25px]">
                  <h3 className="font-recoleta font-normal text-[24px] xl:text-lg text-primary group-hover:text-secondary transition-all mb-[5px]">
                    Buy Property
                    <span className="text-secondary group-hover:text-primary">
                      .
                    </span>{" "}
                  </h3>
                  <p className="font-light text-tiny">
                    Provide prorpery Sale options opportunity to find the best{" "}
                  </p>
                </div>
              </a>
            </div>
            <div className="relative group">
              <a href="properties-details.html" className="block">
                <img
                  src="/images/service/service3.png"
                  className="w-full h-full block mx-auto rounded-[6px_6px_0px_0px]"
                  loading="lazy"
                  width={270}
                  height={290}
                  alt="Rent Property"
                />
                <div className="drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] hover:drop-shadow-[0px_8px_20px_rgba(0,0,0,0.15)] bg-[#FFFDFC] rounded-[0px_0px_6px_6px] px-[25px] py-[25px]">
                  <h3 className="font-recoleta font-normal text-[24px] xl:text-lg text-primary group-hover:text-secondary transition-all mb-[5px]">
                    Rent Property
                    <span className="text-secondary group-hover:text-primary">
                      .
                    </span>{" "}
                  </h3>
                  <p className="font-light text-tiny">
                    Provide prorpery Sale options opportunity to find the best{" "}
                  </p>
                </div>
              </a>
            </div>
            <div className="relative group">
              <a href="properties-details.html" className="block">
                <img
                  src="/images/service/service4.png"
                  className="w-full h-full block mx-auto rounded-[6px_6px_0px_0px]"
                  loading="lazy"
                  width={270}
                  height={290}
                  alt="Mortgage"
                />
                <div className="drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] hover:drop-shadow-[0px_8px_20px_rgba(0,0,0,0.15)] bg-[#FFFDFC] rounded-[0px_0px_6px_6px] px-[25px] py-[25px]">
                  <h3 className="font-recoleta font-normal text-[24px] xl:text-lg text-primary group-hover:text-secondary transition-all mb-[5px]">
                    Mortgage
                    <span className="text-secondary group-hover:text-primary">
                      .
                    </span>{" "}
                  </h3>
                  <p className="font-light text-tiny">
                    Provide prorpery Sale options opportunity to find the best{" "}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* service Section End*/}
    </div>
  );
}

export default Service;
