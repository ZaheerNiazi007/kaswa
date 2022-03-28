import React from "react";

function GetInTouch() {
  return (
    <div>
      {" "}
      {/* get in touch start */}
      <section className="py-[80px] lg:py-[120px]">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-[30px]">
            <div className="col-span-12">
              <div className="col-span-12 mb-[70px]">
                <div className="text-center">
                  <span className="text-secondary text-tiny inline-block mb-2">
                    Contact us
                  </span>
                  <h2 className="font-recoleta text-primary text-[24px] sm:text-[30px] leading-[1.277] xl:text-xl capitalize mb-[5px]">
                    Get in Touch<span className="text-secondary">.</span>
                  </h2>
                  <p className="mx-auto max-w-[465px]">
                    Huge number of propreties availabe here for buy, sell and
                    Rent. Also you find here co-living property, lots
                    opportunity.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid col-span-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] mb-[-30px]">
            <div className="flex flex-wrap hover: drop-shadow-[0px_16px_10px_rgba(0,0,0,0.1)] hover:bg-[#F5F9F8] transition-all p-[20px] xl:p-[35px] rounded-[8px] mb-[30px]">
              <img
                className="self-center mr-[20px] sm:mr-[40px] lg:mr-[20px] xl:mr-[40px] sm:mb-[15px] lg:mb-0"
                src="/images/icon/map.png"
                width={40}
                height={55}
                loading="lazy"
                alt="image icon"
              />
              <div className="flex-1">
                <h4 className="font-recoleta leading-none text-[28px] text-primary mb-[10px]">
                  Address <span className="text-secondary">.</span>
                </h4>
                <p className="font-light text-[18px] lg:max-w-[230px]">
                  2104 Charmaine Lane Amarillo, New York
                </p>
              </div>
            </div>
            <div className="flex flex-wrap hover: drop-shadow-[0px_16px_10px_rgba(0,0,0,0.1)] hover:bg-[#F5F9F8] transition-all p-[20px] xl:p-[35px] rounded-[8px] mb-[30px]">
              <img
                className="self-center mr-[20px] sm:mr-[40px] lg:mr-[20px] xl:mr-[40px] sm:mb-[15px] lg:mb-0"
                src="/images/icon/phone.png"
                width={46}
                height={46}
                loading="lazy"
                alt="image icon"
              />
              <div className="flex-1">
                <h4 className="font-recoleta leading-none text-[28px] text-primary mb-[10px]">
                  Call us <span className="text-secondary">.</span>
                </h4>
                <p className="font-light text-[18px] lg:max-w-[230px]">
                  2104 Charmaine Lane Amarillo, New York
                </p>
              </div>
            </div>
            <div className="flex flex-wrap hover: drop-shadow-[0px_16px_10px_rgba(0,0,0,0.1)] hover:bg-[#F5F9F8] transition-all p-[20px] xl:p-[35px] rounded-[8px] mb-[30px] xl:pl-[65px]">
              <img
                className="self-center mr-[20px] sm:mr-[40px] lg:mr-[20px] xl:mr-[40px] sm:mb-[15px] lg:mb-0"
                src="/images/icon/mail.png"
                width={46}
                height={52}
                loading="lazy"
                alt="image icon"
              />
              <div className="flex-1">
                <h4 className="font-recoleta leading-none text-[28px] text-primary mb-[10px]">
                  Email us <span className="text-secondary">.</span>
                </h4>
                <p className="font-light text-[18px] lg:max-w-[230px]">
                  <a
                    href="mailto:admin@examples.com"
                    className="hover:text-secondary"
                  >
                    admin@examples.com
                  </a>
                  <a
                    href="mailto:info@examples.com"
                    className="hover:text-secondary"
                  >
                    info@examples.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* get in touch end */}
    </div>
  );
}

export default GetInTouch;
