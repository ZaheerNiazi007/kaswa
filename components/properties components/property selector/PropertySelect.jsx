import React from "react";

function PropertySelect() {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 md:order-first mb-[30px] property-select-main">
      <aside className="mb-[-40px] asidebar">
        <div className="bg-[#F5F9F8] px-[20px] lg:px-[15px] xl:px-[35px] py-[50px] rounded-[8px] mb-[40px] propertyselect">
          <h3 className="text-primary leading-none text-[24px] font-recoleta underline mb-[30px]">
            Property Search <span className="text-secondary">.</span>
          </h3>
          <form action="#" className="form-inline relative ">
            <div className="relative mb-[25px] bg-white">
              <input
                className=" font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] pl-[40px] pr-[20px] py-[10px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] bg-white"
                type="text"
                placeholder="Location"
              />
              <svg
                className="absolute top-1/2 -translate-y-1/2 z-[1] left-[20px] pointer-events-none"
                width={14}
                height={14}
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.39648 6.41666H8.60482"
                  stroke="#016450"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M7 8.02083V4.8125"
                  stroke="#016450"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M2.11231 4.9525C3.26148 -0.0991679 10.7456 -0.0933345 11.889 4.95833C12.5598 7.92167 10.7165 10.43 9.10064 11.9817C7.92814 13.1133 6.07314 13.1133 4.89481 11.9817C3.28481 10.43 1.44148 7.91583 2.11231 4.9525Z"
                  stroke="#016450"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <div className="form relative mb-[25px] bg-white">
              <svg
                className="absolute top-1/2 -translate-y-1/2 z-[1] left-[20px] pointer-events-none"
                width={13}
                height={13}
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_928_754)">
                  <path
                    d="M4.64311 0H0V4.64311H4.64311V0ZM3.71437 3.71437H0.928741V0.928741H3.71437V3.71437Z"
                    fill="#016450"
                  />
                  <path
                    d="M8.35742 0V4.64311H13.0005V0H8.35742ZM12.0718 3.71437H9.28616V0.928741H12.0718V3.71437Z"
                    fill="#016450"
                  />
                  <path
                    d="M0 13H4.64311V8.35689H0V13ZM0.928741 9.28563H3.71437V12.0713H0.928741V9.28563Z"
                    fill="#016450"
                  />
                  <path
                    d="M8.35742 13H13.0005V8.35689H8.35742V13ZM9.28616 9.28563H12.0718V12.0713H9.28616V9.28563Z"
                    fill="#016450"
                  />
                  <path
                    d="M6.96437 0H6.03563V6.03563H0V6.96437H6.03563V13H6.96437V6.96437H13V6.03563H6.96437V0Z"
                    fill="#016450"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_928_754">
                    <rect width={13} height={13} fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <select className="nice-select font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] pl-[40px] pr-[20px] py-[10px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] bg-white appearance-none cursor-pointer">
                <option value={0}>Property Category</option>
                <option value={1}>Property</option>
                <option value={2}>Category</option>
              </select>
            </div>
            <div className="form relative mb-[25px] bg-white">
              <svg
                className="absolute top-1/2 -translate-y-1/2 z-[1] left-[20px] pointer-events-none"
                width={14}
                height={14}
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.16602 12.8333H12.8327"
                  stroke="#01614E"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.7207 12.8333L1.74987 5.81583C1.74987 5.45999 1.91904 5.12169 2.19904 4.90002L6.28237 1.72085C6.70237 1.39418 7.29154 1.39418 7.71737 1.72085L11.8007 4.89418C12.0865 5.11585 12.2499 5.45416 12.2499 5.81583V12.8333"
                  stroke="#01614E"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinejoin="round"
                />
                <path
                  d="M9.04232 6.41666H4.95898C4.47482 6.41666 4.08398 6.8075 4.08398 7.29166V12.8333H9.91732V7.29166C9.91732 6.8075 9.52648 6.41666 9.04232 6.41666Z"
                  stroke="#01614E"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.83398 9.47916V10.3542"
                  stroke="#01614E"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.125 4.375H7.875"
                  stroke="#01614E"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <select className="nice-select font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] pl-[40px] pr-[20px] py-[10px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] bg-white appearance-none cursor-pointer">
                <option value={0}>Property Type</option>
                <option value={1}>Property A</option>
                <option value={2}>Category B</option>
              </select>
            </div>
            <div className="form relative mb-[25px] bg-white">
              <svg
                className="absolute top-1/2 -translate-y-1/2 z-[1] left-[20px] pointer-events-none"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.78125 9.55323C5.78125 10.4132 6.44125 11.1066 7.26125 11.1066H8.93458C9.64792 11.1066 10.2279 10.4999 10.2279 9.75323C10.2279 8.9399 9.87458 8.65323 9.34792 8.46657L6.66125 7.53323C6.13458 7.34657 5.78125 7.0599 5.78125 6.24657C5.78125 5.4999 6.36125 4.89323 7.07458 4.89323H8.74792C9.56792 4.89323 10.2279 5.58657 10.2279 6.44657"
                  stroke="#016450"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 4V12"
                  stroke="#016450"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.9987 14.6667C11.6806 14.6667 14.6654 11.6819 14.6654 8C14.6654 4.3181 11.6806 1.33333 7.9987 1.33333C4.3168 1.33333 1.33203 4.3181 1.33203 8C1.33203 11.6819 4.3168 14.6667 7.9987 14.6667Z"
                  stroke="#016450"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <select className="nice-select font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] pl-[40px] pr-[20px] py-[10px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] bg-white appearance-none cursor-pointer">
                <option selected value={0}>
                  Price Range
                </option>
                <option value={1}>1500 usd</option>
                <option value={2}>1600 usd</option>
              </select>
            </div>
            <div className=" form relative mb-[25px] bg-white">
              <svg
                className="absolute top-1/2 -translate-y-1/2 z-[1] left-[20px] pointer-events-none"
                width={14}
                height={14}
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.33268 4.66667H4.66602V9.33334H9.33268V4.66667Z"
                  stroke="#016450"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.91602 12.8333C3.87852 12.8333 4.66602 12.0458 4.66602 11.0833V9.33333H2.91602C1.95352 9.33333 1.16602 10.1208 1.16602 11.0833C1.16602 12.0458 1.95352 12.8333 2.91602 12.8333Z"
                  stroke="#016450"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.91602 4.66667H4.66602V2.91667C4.66602 1.95417 3.87852 1.16667 2.91602 1.16667C1.95352 1.16667 1.16602 1.95417 1.16602 2.91667C1.16602 3.87917 1.95352 4.66667 2.91602 4.66667Z"
                  stroke="#016450"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.33398 4.66667H11.084C12.0465 4.66667 12.834 3.87917 12.834 2.91667C12.834 1.95417 12.0465 1.16667 11.084 1.16667C10.1215 1.16667 9.33398 1.95417 9.33398 2.91667V4.66667Z"
                  stroke="#016450"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.084 12.8333C12.0465 12.8333 12.834 12.0458 12.834 11.0833C12.834 10.1208 12.0465 9.33333 11.084 9.33333H9.33398V11.0833C9.33398 12.0458 10.1215 12.8333 11.084 12.8333Z"
                  stroke="#016450"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <select className="nice-select font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] pl-[40px] pr-[20px] py-[10px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] bg-white appearance-none cursor-pointer">
                <option selected value={0}>
                  Property Size
                </option>
                <option value={1}>1500 squre fit</option>
                <option value={2}>1600 squre fit</option>
              </select>
            </div>
            <button
              type="submit"
              className=" block z-[1] before:rounded-md before:block before:absolute before:left-auto before:right-0 before:inset-y-0 before:z-[-1] before:bg-secondary before:w-0 hover:before:w-full hover:before:left-0 hover:before:right-auto before:transition-all leading-none px-[30px] py-[12px] capitalize font-medium text-white text-[14px] xl:text-[16px] relative after:block after:absolute after:inset-0 after:z-[-2] after:bg-primary after:rounded-md after:transition-all"
            >
              Search
            </button>
          </form>
        </div>
      </aside>
    </div>
  );
}

export default PropertySelect;
