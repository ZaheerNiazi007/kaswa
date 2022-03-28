import React from "react";

function FeaturedProducts() {
  return (
    <div>
      {/* Featured Properties Start */}
      <section className="featured-properties py-[80px] lg:py-[120px]">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <span className="text-secondary text-tiny inline-block mb-2">
                Newly Added
              </span>
            </div>
            <div className="col-span-12 flex flex-wrap flex-col md:flex-row items-start justify-between mb-[50px]">
              <div className="mb-5 lg:mb-0">
                <h2 className="font-recoleta text-primary text-[24px] sm:text-[30px] xl:text-xl capitalize">
                  Featured Properties<span className="text-secondary">.</span>
                </h2>
              </div>
              <ul className="all-properties flex flex-wrap lg:pt-[10px]">
                <li
                  data-tab="all-properties"
                  className="mr-[30px] md:mr-[45px] mb-4 lg:mb-0 leading-none active"
                >
                  <button className="leading-none capitalize text-primary hover:text-secondary transition-all text-[16px] ease-out">
                    All Properties
                  </button>
                </li>
                <li
                  data-tab="ForBuy"
                  className="mr-[30px] md:mr-[45px] mb-4 lg:mb-0 leading-none"
                >
                  <button className="leading-none capitalize text-primary hover:text-secondary transition-all text-[16px] ease-out">
                    For Buy
                  </button>
                </li>
                <li
                  data-tab="ForSale"
                  className="mr-[30px] md:mr-[45px] mb-4 lg:mb-0 leading-none"
                >
                  <button className="leading-none capitalize text-primary hover:text-secondary transition-all text-[16px] ease-out">
                    For Sale
                  </button>
                </li>
                <li
                  data-tab="ForRent"
                  className="mr-[30px] md:mr-[45px] mb-4 lg:mb-0 leading-none"
                >
                  <button className="leading-none capitalize text-primary hover:text-secondary transition-all text-[16px] ease-out">
                    For Rent
                  </button>
                </li>
                <li
                  data-tab="co-living2"
                  className="md:mr-[0px] mb-4 lg:mb-0 leading-none"
                >
                  <button className="leading-none capitalize text-primary hover:text-secondary transition-all text-[16px] ease-out">
                    Co-living
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-span-12">
              <div
                id="all-properties"
                className="properties-tab-content active"
              >
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                  <div className="overflow-hidden rounded-md drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] bg-[#FFFDFC] text-center transition-all duration-300 hover:-translate-y-[10px]">
                    <div className="relative">
                      <a href="properties-details.html" className="block">
                        <img
                          src="/images/properties/properties4.jpg"
                          className="w-full h-full"
                          loading="lazy"
                          width={370}
                          height={266}
                          alt="Elite Garden Resedence."
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
                          Elite Garden Resedence.
                        </a>
                      </h3>
                      <h4>
                        <a
                          href="properties-details.html"
                          className="font-light text-tiny text-secondary underline"
                        >
                          253 Montril Street, South Town, Miami
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
                          src="/images/properties/properties5.jpg"
                          className="w-full h-full"
                          loading="lazy"
                          width={370}
                          height={266}
                          alt="De Parasiya Appartment."
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
                        for Co-living
                      </span>
                    </div>
                    <div className="py-[20px] px-[20px]">
                      <h3>
                        <a
                          href="properties-details.html"
                          className="font-recoleta leading-tight text-[22px] xl:text-lg text-primary"
                        >
                          De Parasiya Appartment.
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
                          src="/images/properties/properties6.jpg"
                          className="w-full h-full"
                          loading="lazy"
                          width={370}
                          height={266}
                          alt="Duplex de Villa."
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
                          Duplex de Villa.
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
                        1800 Sq.fit - 5 Bed - 3 Bath - 2 Garage
                      </p>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-md drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] bg-[#FFFDFC] text-center transition-all duration-300 hover:-translate-y-[10px]">
                    <div className="relative">
                      <a href="properties-details.html" className="block">
                        <img
                          src="/images/properties/properties7.jpg"
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
                          2846 West Side Avenue, New Jersey
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
                          src="/images/properties/properties3.jpg"
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
                          2381 Richards Avenue, Stockton, California
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
                          4658 Oakwood Avenue, New York
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
              <div id="ForBuy" className="properties-tab-content">
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
                          alt="Elite Garden Resedence."
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
                          Elite Garden Resedence.
                        </a>
                      </h3>
                      <h4>
                        <a
                          href="properties-details.html"
                          className="font-light text-tiny text-secondary underline"
                        >
                          253 Montril Street, South Town, Miami
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
                          src="/images/properties/properties3.jpg"
                          className="w-full h-full"
                          loading="lazy"
                          width={370}
                          height={266}
                          alt="De Parasiya Appartment."
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
                          De Parasiya Appartment.
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
                          src="/images/properties/properties6.jpg"
                          className="w-full h-full"
                          loading="lazy"
                          width={370}
                          height={266}
                          alt="Duplex de Villa."
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
                          Duplex de Villa.
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
                        1800 Sq.fit - 5 Bed - 3 Bath - 2 Garage
                      </p>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-md drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] bg-[#FFFDFC] text-center transition-all duration-300 hover:-translate-y-[10px]">
                    <div className="relative">
                      <a href="properties-details.html" className="block">
                        <img
                          src="/images/properties/properties4.jpg"
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
                          2846 West Side Avenue, New Jersey
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
                          src="/images/properties/properties5.jpg"
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
                        for Sale
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
                          2381 Richards Avenue, Stockton, California
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
                        for Rent
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
                          4658 Oakwood Avenue, New York
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
              <div id="ForSale" className="properties-tab-content">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                  <div className="overflow-hidden rounded-md drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] bg-[#FFFDFC] text-center transition-all duration-300 hover:-translate-y-[10px]">
                    <div className="relative">
                      <a href="properties-details.html" className="block">
                        <img
                          src="/images/properties/properties4.jpg"
                          className="w-full h-full"
                          loading="lazy"
                          width={370}
                          height={266}
                          alt="Elite Garden Resedence."
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
                          Elite Garden Resedence.
                        </a>
                      </h3>
                      <h4>
                        <a
                          href="properties-details.html"
                          className="font-light text-tiny text-secondary underline"
                        >
                          253 Montril Street, South Town, Miami
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
                          src="/images/properties/properties6.jpg"
                          className="w-full h-full"
                          loading="lazy"
                          width={370}
                          height={266}
                          alt="De Parasiya Appartment."
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
                          De Parasiya Appartment.
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
                          src="/images/properties/properties5.jpg"
                          className="w-full h-full"
                          loading="lazy"
                          width={370}
                          height={266}
                          alt="Duplex de Villa."
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
                          Duplex de Villa.
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
                        1800 Sq.fit - 5 Bed - 3 Bath - 2 Garage
                      </p>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-md drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] bg-[#FFFDFC] text-center transition-all duration-300 hover:-translate-y-[10px]">
                    <div className="relative">
                      <a href="properties-details.html" className="block">
                        <img
                          src="/images/properties/properties7.jpg"
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
                          2846 West Side Avenue, New Jersey
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
                          src="/images/properties/properties3.jpg"
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
                        for Sale
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
                          2381 Richards Avenue, Stockton, California
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
                          src="/images/properties/properties1.jpg"
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
                        for Rent
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
                          4658 Oakwood Avenue, New York
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
              <div id="ForRent" className="properties-tab-content">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                  <div className="overflow-hidden rounded-md drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] bg-[#FFFDFC] text-center transition-all duration-300 hover:-translate-y-[10px]">
                    <div className="relative">
                      <a href="properties-details.html" className="block">
                        <img
                          src="/images/properties/properties5.jpg"
                          className="w-full h-full"
                          loading="lazy"
                          width={370}
                          height={266}
                          alt="Elite Garden Resedence."
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
                          Elite Garden Resedence.
                        </a>
                      </h3>
                      <h4>
                        <a
                          href="properties-details.html"
                          className="font-light text-tiny text-secondary underline"
                        >
                          253 Montril Street, South Town, Miami
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
                          src="/images/properties/properties7.jpg"
                          className="w-full h-full"
                          loading="lazy"
                          width={370}
                          height={266}
                          alt="De Parasiya Appartment."
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
                          De Parasiya Appartment.
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
                          src="/images/properties/properties6.jpg"
                          className="w-full h-full"
                          loading="lazy"
                          width={370}
                          height={266}
                          alt="Duplex de Villa."
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
                          Duplex de Villa.
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
                        1800 Sq.fit - 5 Bed - 3 Bath - 2 Garage
                      </p>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-md drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] bg-[#FFFDFC] text-center transition-all duration-300 hover:-translate-y-[10px]">
                    <div className="relative">
                      <a href="properties-details.html" className="block">
                        <img
                          src="/images/properties/properties8.jpg"
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
                          2846 West Side Avenue, New Jersey
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
                          src="/images/properties/properties3.jpg"
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
                        for Sale
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
                          2381 Richards Avenue, Stockton, California
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
                          src="/images/properties/properties1.jpg"
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
                        for Rent
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
                          4658 Oakwood Avenue, New York
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
              <div id="co-living2" className="properties-tab-content">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                  <div className="overflow-hidden rounded-md drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] bg-[#FFFDFC] text-center transition-all duration-300 hover:-translate-y-[10px]">
                    <div className="relative">
                      <a href="properties-details.html" className="block">
                        <img
                          src="/images/properties/properties7.jpg"
                          className="w-full h-full"
                          loading="lazy"
                          width={370}
                          height={266}
                          alt="Elite Garden Resedence."
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
                          Elite Garden Resedence.
                        </a>
                      </h3>
                      <h4>
                        <a
                          href="properties-details.html"
                          className="font-light text-tiny text-secondary underline"
                        >
                          253 Montril Street, South Town, Miami
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
                          src="/images/properties/properties5.jpg"
                          className="w-full h-full"
                          loading="lazy"
                          width={370}
                          height={266}
                          alt="De Parasiya Appartment."
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
                          De Parasiya Appartment.
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
                          src="/images/properties/properties6.jpg"
                          className="w-full h-full"
                          loading="lazy"
                          width={370}
                          height={266}
                          alt="Duplex de Villa."
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
                          Duplex de Villa.
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
                        1800 Sq.fit - 5 Bed - 3 Bath - 2 Garage
                      </p>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-md drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] bg-[#FFFDFC] text-center transition-all duration-300 hover:-translate-y-[10px]">
                    <div className="relative">
                      <a href="properties-details.html" className="block">
                        <img
                          src="/images/properties/properties8.jpg"
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
                          2846 West Side Avenue, New Jersey
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
                          src="/images/properties/properties3.jpg"
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
                        for Sale
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
                          2381 Richards Avenue, Stockton, California
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
                        for Rent
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
                          4658 Oakwood Avenue, New York
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
            </div>
          </div>
        </div>
      </section>
      {/* Featured Properties End */}
    </div>
  );
}

export default FeaturedProducts;
