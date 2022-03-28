import React from "react";

function Brand() {
  return (
    <div>
      {" "}
      {/* Brand section Start*/}
      <section className="brand-section pt-[80px] lg:pt-[120px] pb-[80px] lg:pb-[120px]">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="mb-[60px]">
                <span className="text-secondary text-tiny inline-block mb-2">
                  Our Partner’s
                </span>
                <h2 className="font-recoleta text-primary text-[24px] sm:text-[30px] xl:text-xl capitalize">
                  Reliable Partner’s<span className="text-secondary">.</span>
                </h2>
              </div>
              <div className="brand-slider">
                <div className="swiper">
                  <div className="swiper-wrapper">
                    {/* swiper-slide start */}
                    <div className="swiper-slide text-center">
                      <a href="#" className="block">
                        <img
                          src="/images/brand/brand1.png"
                          className="w-auto h-auto block mx-auto"
                          loading="lazy"
                          width={125}
                          height={109}
                          alt="@@title"
                        />
                      </a>
                    </div>
                    <div className="swiper-slide text-center">
                      <a href="#" className="block">
                        <img
                          src="/images/brand/brand2.png"
                          className="w-auto h-auto block mx-auto"
                          loading="lazy"
                          width={125}
                          height={109}
                          alt="@@title"
                        />
                      </a>
                    </div>
                    <div className="swiper-slide text-center">
                      <a href="#" className="block">
                        <img
                          src="/images/brand/brand3.png"
                          className="w-auto h-auto block mx-auto"
                          loading="lazy"
                          width={125}
                          height={109}
                          alt="@@title"
                        />
                      </a>
                    </div>
                    <div className="swiper-slide text-center">
                      <a href="#" className="block">
                        <img
                          src="/images/brand/brand4.png"
                          className="w-auto h-auto block mx-auto"
                          loading="lazy"
                          width={125}
                          height={109}
                          alt="@@title"
                        />
                      </a>
                    </div>
                    <div className="swiper-slide text-center">
                      <a href="#" className="block">
                        <img
                          src="/images/brand/brand5.png"
                          className="w-auto h-auto block mx-auto"
                          loading="lazy"
                          width={125}
                          height={109}
                          alt="@@title"
                        />
                      </a>
                    </div>
                    <div className="swiper-slide text-center">
                      <a href="#" className="block">
                        <img
                          src="/images/brand/brand3.png"
                          className="w-auto h-auto block mx-auto"
                          loading="lazy"
                          width={125}
                          height={109}
                          alt="@@title"
                        />
                      </a>
                    </div>
                    {/* swiper-slide end*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Brand section End*/}
    </div>
  );
}

export default Brand;
