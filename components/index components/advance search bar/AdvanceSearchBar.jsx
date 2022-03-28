import React from "react";

function AdvanceSearchBar() {
  return (
    <div>
      {/* Addvanced search tab start */}
      <div className="mt-[80px] lg:mt-[120px] xl:mt-[-160px] relative z-[2] pl-[40px] lg:pl-[50px] xl:pl-[0px]">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 relative">
              <ul className="tab-nav search-tab inline-flex px-[15px] sm:px-[30px] py-[22px] border-l border-t border-r border-solid border-[#016450] border-opacity-25 rounded-tl-[15px] rounded-tr-[15px] bg-white">
                <li
                  data-tab="buy"
                  className="mr-[5px] sm:mr-[10px] md:mr-[46px] my-1 active"
                >
                  <button className="font-recoleta leading-none px-[5px] sm:px-[10px] capitalize text-primary transition-all text-base xl:text-[22px] before:absolute before:left-auto before:right-0 before:bottom-[-32px] before:w-0 before:h-[2px] before:content-[''] before:bg-secondary relative before:transition-all ease-out">
                    buy
                  </button>
                </li>
                <li
                  data-tab="sell"
                  className="mr-[5px] sm:mr-[10px] md:mr-[46px] my-1"
                >
                  <button className="font-recoleta leading-none px-[5px] sm:px-[10px] capitalize text-primary transition-all text-base xl:text-[22px] before:absolute before:left-auto before:right-0 before:bottom-[-32px] before:w-0 before:h-[2px] before:content-[''] before:bg-secondary relative before:transition-all ease-out">
                    sell
                  </button>
                </li>
                <li
                  data-tab="rent"
                  className="mr-[5px] sm:mr-[10px] md:mr-[46px] my-1"
                >
                  <button className="font-recoleta leading-none px-[5px] sm:px-[10px] capitalize text-primary transition-all text-base xl:text-[22px] before:absolute before:left-auto before:right-0 before:bottom-[-32px] before:w-0 before:h-[2px] before:content-[''] before:bg-secondary relative before:transition-all ease-out">
                    rent
                  </button>
                </li>
                <li data-tab="co-living" className="md:mr-[0px] my-1">
                  <button className="font-recoleta leading-none px-[5px] sm:px-[10px] capitalize text-primary transition-all text-base xl:text-[22px] before:absolute before:left-auto before:right-0 before:bottom-[-32px] before:w-0 before:h-[2px] before:content-[''] before:bg-secondary relative before:transition-all ease-out">
                    Co-living
                  </button>
                </li>
              </ul>
              <button
                className="tab-toggle-btn px-[10px] py-[15px] absolute bottom-[-56px] left-[-45px] border-l border-t border-b border-solid border-[#016450] bg-white text-primary border-opacity-25 rounded-tl-[10px] rounded-bl-[10px]"
                aria-label="svg icon"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 22V11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 7V2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22V17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 13V2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 22V11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 7V2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 11H7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 11H21"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 13H14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="col-span-12 selectricc-border-none">
              <div
                id="buy"
                className="tab-content bg-white border border-solid border-[#016450] border-opacity-25 rounded-bl-[15px] rounded-br-[15px] rounded-tr-[15px] px-[15px] sm:px-[30px] py-[40px] active"
              >
                <form action="#">
                  <div className="advanced-searrch flex flex-wrap items-center -mb-[45px]">
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px]">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src="/images/icon/location.svg"
                          width={24}
                          height={24}
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="location"
                          className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1"
                        >
                          Location
                        </label>
                        <input
                          id="location"
                          type="text"
                          placeholder="Choose location"
                          className="text-tiny placeholder:text-body leading-none font-light pr-3 focus:outline-none w-full"
                        />
                      </div>
                    </div>
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px]">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src="/images/icon/property.svg"
                          width={24}
                          height={24}
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="property"
                          className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1"
                        >
                          Property Type
                        </label>
                        <select
                          name="property"
                          id="property"
                          className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer"
                        >
                          <option selected value={0}>
                            Duplex House
                          </option>
                          <option value={1}>Duplex House 1</option>
                          <option value={2}>Duplex House 2</option>
                          <option value={3}>Duplex House 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px]">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src="/images/icon/dollar-circle.svg"
                          width={24}
                          height={24}
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="price"
                          className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1"
                        >
                          Price Range
                        </label>
                        <select
                          name="price"
                          id="price"
                          className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer"
                        >
                          <option selected value={0}>
                            1500 USD
                          </option>
                          <option value={1}>1600 USD</option>
                          <option value={2}>1700 USD</option>
                          <option value={3}>1800 USD</option>
                        </select>
                      </div>
                    </div>
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px] relative">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src="/images/icon/area.svg"
                          width={24}
                          height={24}
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="property-size"
                          className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1"
                        >
                          Property Size
                        </label>
                        <select
                          name="property-size"
                          id="property-size"
                          className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer"
                        >
                          <option selected value={0}>
                            2500 Sqft
                          </option>
                          <option value={1}>2600 Sqft</option>
                          <option value={2}>2700 Sqft</option>
                          <option value={3}>2800 Sqft</option>
                        </select>
                      </div>
                      <button className="search-btn absolute right-0 lg:right-[-60px] xl:right-[-70px]">
                        <img
                          src="/images/icon/search-outline.svg"
                          className="max-w-[30px] xl:w-auto"
                          width={40}
                          height={40}
                          alt="svg icon"
                        />
                        <span className="hidden">Search Properties</span>
                      </button>
                    </div>
                  </div>
                  <div className="advanced-searrch-hidden flex flex-wrap items-center mt-[45px] -mb-[45px]">
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px] search-list">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src="/images/icon/location.svg"
                          width={24}
                          height={24}
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="bedrooms10"
                          className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1"
                        >
                          Bedrooms
                        </label>
                        <select
                          name="property"
                          id="bedrooms10"
                          className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer"
                        >
                          <option selected value={0}>
                            Bedrooms
                          </option>
                          <option value={1}>kitchen</option>
                          <option value={2}>dinning rooms</option>
                          <option value={3}>Duplex House 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px] search-list">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src="/images/icon/property.svg"
                          width={24}
                          height={24}
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="property9"
                          className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1"
                        >
                          Bathrooms
                        </label>
                        <select
                          name="property"
                          id="property9"
                          className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer"
                        >
                          <option selected value={0}>
                            Duplex House
                          </option>
                          <option value={1}>Duplex House 1</option>
                          <option value={2}>Duplex House 2</option>
                          <option value={3}>Duplex House 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px] search-list">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src="/images/icon/dollar-circle.svg"
                          width={24}
                          height={24}
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="garage"
                          className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1"
                        >
                          Garage
                        </label>
                        <select
                          name="garage"
                          id="garage"
                          className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer"
                        >
                          <option selected value={0}>
                            2 Garage
                          </option>
                          <option value={1}>2 Garage</option>
                          <option value={2}>3 Garage</option>
                          <option value={3}>4 Garage</option>
                        </select>
                      </div>
                    </div>
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px] search-list">
                      <button className="search-properties-btn">
                        Search Properties
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div
                id="sell"
                className="tab-content bg-white border border-solid border-[#016450] border-opacity-25 rounded-bl-[15px] rounded-br-[15px] rounded-tr-[15px] px-[15px] sm:px-[30px] py-[40px]"
              >
                <form action="#">
                  <div className="advanced-searrch flex flex-wrap items-center -mb-[45px]">
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px]">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src="/images/icon/location.svg"
                          width={24}
                          height={24}
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="location2"
                          className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1"
                        >
                          Location
                        </label>
                        <input
                          id="location2"
                          type="text"
                          placeholder="Choose location"
                          className="text-tiny placeholder:text-body leading-none font-light pr-3 focus:outline-none w-full"
                        />
                      </div>
                    </div>
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px]">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src="/images/icon/property.svg"
                          width={24}
                          height={24}
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="property2"
                          className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1"
                        >
                          Property Type
                        </label>
                        <select
                          name="property"
                          id="property2"
                          className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer"
                        >
                          <option selected value={0}>
                            Apartments
                          </option>
                          <option value={1}>Duplex House 1</option>
                          <option value={2}>Duplex House 2</option>
                          <option value={3}>Duplex House 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px]">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src="/images/icon/dollar-circle.svg"
                          width={24}
                          height={24}
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="price2"
                          className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1"
                        >
                          Price Range
                        </label>
                        <select
                          name="price"
                          id="price2"
                          className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer"
                        >
                          <option selected value={0}>
                            100 USD
                          </option>
                          <option value={1}>600 USD</option>
                          <option value={2}>700 USD</option>
                          <option value={3}>800 USD</option>
                        </select>
                      </div>
                    </div>
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px] relative">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src="/images/icon/area.svg"
                          width={24}
                          height={24}
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="property-size2"
                          className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1"
                        >
                          Property Size
                        </label>
                        <select
                          name="property-size"
                          id="property-size2"
                          className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer"
                        >
                          <option selected value={0}>
                            500 Sqft
                          </option>
                          <option value={1}>600 Sqft</option>
                          <option value={2}>700 Sqft</option>
                          <option value={3}>800 Sqft</option>
                        </select>
                      </div>
                      <button className="search-btn absolute right-0 lg:right-[-60px] xl:right-[-70px]">
                        <img
                          src="/images/icon/search-outline.svg"
                          className="max-w-[30px] xl:w-auto"
                          width={40}
                          height={40}
                          alt="svg icon"
                        />
                        <span className="hidden">Search Properties</span>
                      </button>
                    </div>
                  </div>
                  <div className="advanced-searrch-hidden flex flex-wrap items-center mt-[45px] -mb-[45px]">
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px] search-list">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src="/images/icon/location.svg"
                          width={24}
                          height={24}
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="bedrooms"
                          className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1"
                        >
                          Bedrooms
                        </label>
                        <select
                          name="property"
                          id="bedrooms"
                          className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer"
                        >
                          <option selected value={0}>
                            Bedrooms
                          </option>
                          <option value={1}>kitchen</option>
                          <option value={2}>dinning rooms</option>
                          <option value={3}>Duplex House 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px] search-list">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src="/images/icon/property.svg"
                          width={24}
                          height={24}
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="property3"
                          className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1"
                        >
                          Bathrooms
                        </label>
                        <select
                          name="property"
                          id="property3"
                          className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer"
                        >
                          <option selected value={0}>
                            Duplex House
                          </option>
                          <option value={1}>Duplex House 1</option>
                          <option value={2}>Duplex House 2</option>
                          <option value={3}>Duplex House 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px] search-list">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src="/images/icon/dollar-circle.svg"
                          width={24}
                          height={24}
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="garage2"
                          className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1"
                        >
                          Garage
                        </label>
                        <select
                          name="garage"
                          id="garage2"
                          className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer"
                        >
                          <option selected value={0}>
                            2 Garage
                          </option>
                          <option value={1}>2 Garage</option>
                          <option value={2}>3 Garage</option>
                          <option value={3}>4 Garage</option>
                        </select>
                      </div>
                    </div>
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px] search-list">
                      <button className="search-properties-btn">
                        Search Properties
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div
                id="rent"
                className="tab-content bg-white border border-solid border-[#016450] border-opacity-25 rounded-bl-[15px] rounded-br-[15px] rounded-tr-[15px] px-[15px] sm:px-[30px] py-[40px]"
              >
                <form action="#">
                  <div className="advanced-searrch flex flex-wrap items-center -mb-[45px]">
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px]">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src="/images/icon/location.svg"
                          width={24}
                          height={24}
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="location7"
                          className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1"
                        >
                          Location
                        </label>
                        <input
                          id="location7"
                          type="text"
                          placeholder="Choose location"
                          className="text-tiny placeholder:text-body leading-none font-light pr-3 focus:outline-none w-full"
                        />
                      </div>
                    </div>
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px]">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src="/images/icon/property.svg"
                          width={24}
                          height={24}
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="property8"
                          className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1"
                        >
                          Property Type
                        </label>
                        <select
                          name="property"
                          id="property8"
                          className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer"
                        >
                          <option selected value={0}>
                            Duplex House
                          </option>
                          <option value={1}>Duplex House 1</option>
                          <option value={2}>Duplex House 2</option>
                          <option value={3}>Duplex House 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px]">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src="/images/icon/dollar-circle.svg"
                          width={24}
                          height={24}
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="price7"
                          className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1"
                        >
                          Price Range
                        </label>
                        <select
                          name="price"
                          id="price7"
                          className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer"
                        >
                          <option selected value={0}>
                            1500 USD
                          </option>
                          <option value={1}>1600 USD</option>
                          <option value={2}>1700 USD</option>
                          <option value={3}>1800 USD</option>
                        </select>
                      </div>
                    </div>
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px] relative">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src="/images/icon/area.svg"
                          width={24}
                          height={24}
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="property-size9"
                          className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1"
                        >
                          Property Size
                        </label>
                        <select
                          name="property-size"
                          id="property-size9"
                          className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer"
                        >
                          <option selected value={0}>
                            2500 Sqft
                          </option>
                          <option value={1}>2600 Sqft</option>
                          <option value={2}>2700 Sqft</option>
                          <option value={3}>2800 Sqft</option>
                        </select>
                      </div>
                      <button className="search-btn absolute right-0 lg:right-[-60px] xl:right-[-70px]">
                        <img
                          src="/images/icon/search-outline.svg"
                          className="max-w-[30px] xl:w-auto"
                          width={40}
                          height={40}
                          alt="svg icon"
                        />
                        <span className="hidden">Search Properties</span>
                      </button>
                    </div>
                  </div>
                  <div className="advanced-searrch-hidden flex flex-wrap items-center mt-[45px] -mb-[45px]">
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px] search-list">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src="/images/icon/location.svg"
                          width={24}
                          height={24}
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="bedrooms6"
                          className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1"
                        >
                          Bedrooms
                        </label>
                        <select
                          name="property"
                          id="bedrooms6"
                          className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer"
                        >
                          <option selected value={0}>
                            Bedrooms
                          </option>
                          <option value={1}>kitchen</option>
                          <option value={2}>dinning rooms</option>
                          <option value={3}>Duplex House 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px] search-list">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src="/images/icon/property.svg"
                          width={24}
                          height={24}
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="property7"
                          className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1"
                        >
                          Bathrooms
                        </label>
                        <select
                          name="property"
                          id="property7"
                          className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer"
                        >
                          <option selected value={0}>
                            Duplex House
                          </option>
                          <option value={1}>Duplex House 1</option>
                          <option value={2}>Duplex House 2</option>
                          <option value={3}>Duplex House 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px] search-list">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src="/images/icon/dollar-circle.svg"
                          width={24}
                          height={24}
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="garage20"
                          className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1"
                        >
                          Garage
                        </label>
                        <select
                          name="garage"
                          id="garage20"
                          className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer"
                        >
                          <option selected value={0}>
                            2 Garage
                          </option>
                          <option value={1}>2 Garage</option>
                          <option value={2}>3 Garage</option>
                          <option value={3}>4 Garage</option>
                        </select>
                      </div>
                    </div>
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px] search-list">
                      <button className="search-properties-btn">
                        Search Properties
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div
                id="co-living"
                className="tab-content bg-white border border-solid border-[#016450] border-opacity-25 rounded-bl-[15px] rounded-br-[15px] rounded-tr-[15px] px-[15px] sm:px-[30px] py-[40px]"
              >
                <form action="#">
                  <div className="advanced-searrch flex flex-wrap items-center -mb-[45px]">
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px]">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src="/images/icon/location.svg"
                          width={24}
                          height={24}
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="location6"
                          className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1"
                        >
                          Location
                        </label>
                        <input
                          id="location6"
                          type="text"
                          placeholder="Choose location"
                          className="text-tiny placeholder:text-body leading-none font-light pr-3 focus:outline-none w-full"
                        />
                      </div>
                    </div>
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px]">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src="/images/icon/property.svg"
                          width={24}
                          height={24}
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="property6"
                          className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1"
                        >
                          Property Type
                        </label>
                        <select
                          name="property"
                          id="property6"
                          className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer"
                        >
                          <option selected value={0}>
                            Apartments
                          </option>
                          <option value={1}>Duplex House 1</option>
                          <option value={2}>Duplex House 2</option>
                          <option value={3}>Duplex House 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px]">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src="/images/icon/dollar-circle.svg"
                          width={24}
                          height={24}
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="price6"
                          className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1"
                        >
                          Price Range
                        </label>
                        <select
                          name="price"
                          id="price6"
                          className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer"
                        >
                          <option selected value={0}>
                            5500 USD
                          </option>
                          <option value={1}>5600 USD</option>
                          <option value={2}>5700 USD</option>
                          <option value={3}>5800 USD</option>
                        </select>
                      </div>
                    </div>
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px] relative">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src="/images/icon/area.svg"
                          width={24}
                          height={24}
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="property-size4"
                          className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1"
                        >
                          Property Size
                        </label>
                        <select
                          name="property-size"
                          id="property-size4"
                          className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer"
                        >
                          <option selected value={0}>
                            3500 Sqft
                          </option>
                          <option value={1}>3600 Sqft</option>
                          <option value={2}>3700 Sqft</option>
                          <option value={3}>3800 Sqft</option>
                        </select>
                      </div>
                      <button className="search-btn absolute right-0 lg:right-[-60px] xl:right-[-70px]">
                        <img
                          src="/images/icon/search-outline.svg"
                          className="max-w-[30px] xl:w-auto"
                          width={40}
                          height={40}
                          alt="svg icon"
                        />
                        <span className="hidden">Search Properties</span>
                      </button>
                    </div>
                  </div>
                  <div className="advanced-searrch-hidden flex flex-wrap items-center mt-[45px] -mb-[45px]">
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px] search-list">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src="/images/icon/location.svg"
                          width={24}
                          height={24}
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="bedrooms4"
                          className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1"
                        >
                          Bedrooms
                        </label>
                        <select
                          name="property"
                          id="bedrooms4"
                          className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer"
                        >
                          <option selected value={0}>
                            Bedrooms
                          </option>
                          <option value={1}>kitchen</option>
                          <option value={2}>dinning rooms</option>
                          <option value={3}>Duplex House 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px] search-list">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src="/images/icon/property.svg"
                          width={24}
                          height={24}
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="property4"
                          className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1"
                        >
                          Bathrooms
                        </label>
                        <select
                          name="property"
                          id="property4"
                          className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer"
                        >
                          <option selected value={0}>
                            Duplex House
                          </option>
                          <option value={1}>Duplex House 1</option>
                          <option value={2}>Duplex House 2</option>
                          <option value={3}>Duplex House 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px] search-list">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src="/images/icon/dollar-circle.svg"
                          width={24}
                          height={24}
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="garage4"
                          className="font-recoleta block capitalize text-primary text-[18px] xl:text-[25px] leading-none mb-1"
                        >
                          Garage
                        </label>
                        <select
                          name="garage"
                          id="garage4"
                          className="nice-select appearance-none bg-transparent text-tiny font-light cursor-pointer"
                        >
                          <option selected value={0}>
                            2 Garage
                          </option>
                          <option value={1}>2 Garage</option>
                          <option value={2}>3 Garage</option>
                          <option value={3}>4 Garage</option>
                        </select>
                      </div>
                    </div>
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px] search-list">
                      <button className="search-properties-btn">
                        Search Properties
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Addvanced search tab end */}
    </div>
  );
}

export default AdvanceSearchBar;
