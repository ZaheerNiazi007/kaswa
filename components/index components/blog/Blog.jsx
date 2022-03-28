import React from "react";

function Blog() {
  return (
    <div>
      {" "}
      {/* Blog Section Start  */}
      <section className="blog-section relative">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-[30px] mb-[-30px] items-center">
            <div className="col-span-12 lg:col-span-4 mb-[30px]">
              <div className="xl:pr-[20px]">
                <span className="text-secondary text-tiny capitalize inline-block mb-[15px]">
                  Our Blog
                </span>
                <h2 className="font-recoleta text-primary text-[24px] sm:text-[30px] leading-[1.277] xl:text-xl capitalize mb-[15px]">
                  Always Check our Latest Blog Post
                  <span className="text-secondary">.</span>
                </h2>
                <p>
                  Huge number of propreties availabe here for buy, sell and
                  Rent. Also you find here co-living property so lots
                  opportunity you have choose and enjoy huge discount.{" "}
                </p>
                <a
                  href="blog-grid.html"
                  className="flex flex-wrap items-center text-secondary text-tiny mt-[20px]"
                >
                  View all Post
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
            <div className="col-span-12 lg:col-span-8 mb-[30px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[30px] mb-[-30px]">
                <div className="mb-[30px]">
                  <a
                    href="blog-details.html"
                    className="block overflow-hidden rounded-[6px] mb-[30px]"
                  >
                    <img
                      className="w-full h-full"
                      src="/images/blog/post1.png"
                      width={370}
                      height={270}
                      loading="lazy"
                      alt="Tip’s about Real Estate Recent Conditions from Agent."
                    />
                  </a>
                  <div>
                    <span className="block leading-none font-normal text-[14px] text-secondary mb-[10px] relative before:absolute before:left-0 before:top-1/2 -translate-y-1/2 before:bg-secondary before:content-[''] before:w-[3px] before:h-[3px] before:rounded-full pl-[10px]">
                      James Alber on 22 December, 21
                    </span>
                    <h3>
                      <a
                        href="blog-details.html"
                        className="font-recoleta text-[22px] xl:text-[28px] leading-[1.285] text-primary block mb-[10px] hover:text-secondary transition-all"
                      >
                        Tip’s about Real Estate Recent Conditions from Agent.
                      </a>
                    </h3>
                    <p className="font-light text-[#494949] text-[16px] leading-[1.75]">
                      Properties are most budget friendly so you have are
                      opportunity to find are the best the best...
                    </p>
                  </div>
                </div>
                <div className="mb-[30px]">
                  <a
                    href="blog-details.html"
                    className="block overflow-hidden rounded-[6px] mb-[30px]"
                  >
                    <img
                      className="w-full h-full"
                      src="/images/blog/post2.png"
                      width={370}
                      height={270}
                      loading="lazy"
                      alt="Importance of Build quality of modern Real Estate."
                    />
                  </a>
                  <div>
                    <span className="block leading-none font-normal text-[14px] text-secondary mb-[10px] relative before:absolute before:left-0 before:top-1/2 -translate-y-1/2 before:bg-secondary before:content-[''] before:w-[3px] before:h-[3px] before:rounded-full pl-[10px]">
                      Shohel Gyes on 21 December, 21
                    </span>
                    <h3>
                      <a
                        href="blog-details.html"
                        className="font-recoleta text-[22px] xl:text-[28px] leading-[1.285] text-primary block mb-[10px] hover:text-secondary transition-all"
                      >
                        Importance of Build quality of modern Real Estate.
                      </a>
                    </h3>
                    <p className="font-light text-[#494949] text-[16px] leading-[1.75]">
                      Properties are most budget friendly so you have are
                      opportunity to find are the best the best...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section End  */}
    </div>
  );
}

export default Blog;
