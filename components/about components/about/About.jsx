import React from "react";

function About() {
  return (
    <div>
      {/* About section start */}
      <section className="relative z-[1] mt-[80px] xl:mt-0">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-[30px] mb-[-30px] items-center">
            <div className="col-span-12 lg:col-span-6 mb-[30px]">
              <img
                className="xl:mt-[-140px] mx-auto"
                src="/images/about/about5.png"
                alt="about image"
              />
            </div>
            <div className="col-span-12 lg:col-span-6 mb-[30px]">
              <span className="text-secondary text-tiny inline-block mb-2">
                Since 1975
              </span>
              <h2 className="font-recoleta text-primary text-[24px] sm:text-[30px] leading-[1.3888] xl:text-[35px] capitalize mb-[50px]">
                We Provide Right Choice of Properties that You need and have
                great opportunity to choose from thousands of Collection
                <span className="text-secondary">.</span>
              </h2>
              <ul className="flex flex-wrap list-none">
                <li className="block">
                  <span className="font-recoleta text-secondary text-lg">
                    <span className="counter-up">20</span> <span>k+</span>
                  </span>
                  <p>Properties</p>
                </li>
                <li className="block pl-[40px] md:pl-[60px]">
                  <span className="font-recoleta text-secondary text-lg">
                    <span className="counter-up">12</span> <span>k+</span>
                  </span>
                  <p>Customers</p>
                </li>
                <li className="block pl-[40px] md:pl-[60px]">
                  <span className="font-recoleta text-secondary text-lg">
                    <span className="counter-up">160</span>
                    <span>+</span>
                  </span>
                  <p>Awards Win</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* About section end */}
    </div>
  );
}

export default About;
