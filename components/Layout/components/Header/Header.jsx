import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div>
      <header
        id="sticky-header"
        className="fixed left-0 top-[15px] lg:top-[30px] xl:top-[45px] w-full z-10 bg-white"
      >
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="flex flex-wrap items-center justify-between">
                <Link href="/">
                  <a className="block">
                    <img
                      className="w-full h-full logo"
                      src="/images/logo/Kaswa.jpeg"
                      loading="lazy"
                      width={99}
                      height={46}
                      alt="brand logo"
                    />
                  </a>
                </Link>

                <nav className="flex flex-wrap items-center">
                  <ul className="hidden lg:flex flex-wrap items-center font-recoleta text-[16px] xl:text-[18px] leading-none text-black">
                    <li className="mr-7 xl:mr-[40px] relative group py-[20px]">
                      <Link href="/">
                        <a className="transition-all hover:text-secondary">
                          Home
                        </a>
                      </Link>
                    </li>
                    <li className="mr-7 xl:mr-[40px] relative group py-[20px]">
                      <Link href="about">
                        <a className="transition-all hover:text-secondary">
                          About
                        </a>
                      </Link>
                    </li>
                    <li className="mr-7 xl:mr-[40px] relative group py-[20px]">
                      <Link href="properties">
                        <a className="transition-all hover:text-secondary">
                          Properties
                        </a>
                      </Link>
                    </li>
                    <li className="mr-7 xl:mr-[40px] relative group py-[20px]">
                      <Link href="services">
                        <a className="transition-all hover:text-secondary">
                          Services
                        </a>
                      </Link>
                    </li>

                    <li className="mr-7 xl:mr-[40px] relative group py-[20px]">
                      <Link href="contact">
                        <a className="transition-all hover:text-secondary">
                          Contact
                        </a>
                      </Link>
                    </li>
                  </ul>

                  <ul className="flex flex-wrap items-center">
                    <li className="sm:mr-5 xl:mr-[20px] relative group">
                      <a href="#">
                        <img
                          src="/images/user/avater.png"
                          loading="lazy"
                          width={62}
                          height={62}
                          alt="avater"
                        />
                      </a>
                      <ul
                        className="list-none bg-white drop-shadow-[0px_6px_10px_rgba(0,0,0,0.2)] rounded-[12px] flex flex-wrap flex-col w-[180px] absolute top-[120%] sm:left-1/2 sm:-translate-x-1/2 transition-all
            group-hover:top-[60px] invisible group-hover:visible opacity-0 group-hover:opacity-100 right-0
            
            "
                      >
                        <li className="border-b border-dashed border-primary border-opacity-40 last:border-b-0 hover:border-solid transition-all">
                          <Link href="login">
                            <a className="font-recoleta leading-[1.571] text-[14px] text-primary p-[10px] capitalize block transition-all hover:bg-primary hover:text-white text-center my-[-1px] rounded-t-[12px]">
                              login
                            </a>
                          </Link>
                        </li>
                        <li className="border-b border-dashed border-primary border-opacity-40 last:border-b-0 hover:border-solid transition-all">
                          <Link href="register">
                            <a className="font-recoleta leading-[1.571] text-[14px] text-primary p-[10px] capitalize block transition-all hover:bg-primary hover:text-white text-center my-[-1px] rounded-b-[12px]">
                              register
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="add_property">
                        <a className="before:rounded-md before:block before:absolute before:left-auto before:right-0 before:inset-y-0 before:-z-[1] before:bg-secondary before:w-0 hover:before:w-full hover:before:left-0 hover:before:right-auto before:transition-all leading-none px-[20px] py-[15px] capitalize font-medium text-white hidden sm:block text-[14px] xl:text-[16px] relative after:block after:absolute after:inset-0 after:-z-[2] after:bg-primary after:rounded-md after:transition-all">
                          Add Property
                        </a>
                      </Link>
                    </li>
                    <li className="ml-2 sm:ml-5 lg:hidden">
                      <a
                        href="#offcanvas-mobile-menu"
                        className="offcanvas-toggle flex text-[#016450] hover:text-secondary"
                      >
                        <svg
                          width={24}
                          height={24}
                          className="fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="offcanvas-overlay hidden fixed inset-0 bg-black opacity-50 z-50" />
      <div
        id="offcanvas-mobile-menu"
        className="offcanvas left-0 transform -translate-x-full fixed font-normal text-sm top-0 z-50 h-screen xs:w-[300px] lg:w-[380px] transition-all ease-in-out duration-300 bg-white"
      >
        <div className="py-12 pr-5 h-[100vh] overflow-y-auto">
          <button
            className="offcanvas-close text-primary text-[25px] w-10 h-10 absolute right-0 top-0"
            aria-label="offcanvas"
          >
            x
          </button>
          <nav className="offcanvas-menu">
            <ul>
              <li className="relative block border-b-primary border-b first:border-t first:border-t-primary">
                <Link href="/">
                  <a className="block capitalize font-normal text-black hover:text-secondary text-base my-2 py-1 px-5">
                    Home
                  </a>
                </Link>
              </li>
              <li className="relative block border-b-primary border-b">
                <Link href="about">
                  <a className="block capitalize font-normal text-black hover:text-secondary text-base my-2 py-1 px-5">
                    About
                  </a>
                </Link>
              </li>
              <li className="relative block border-b-primary border-b">
                <Link href="properties">
                  <a className="block capitalize font-normal text-black hover:text-secondary text-base my-2 py-1 px-5">
                    Properties
                  </a>
                </Link>
              </li>
              <li className="relative block border-b-primary border-b">
                <Link href="services">
                  <a className="relative block capitalize font-normal text-black hover:text-secondary text-base my-2 py-1 px-5">
                    Services
                  </a>
                </Link>
              </li>

              <li className="relative block border-b-primary border-b">
                <Link href="contact">
                  <a className="relative block capitalize text-black hover:text-secondary text-base my-2 py-1 px-5">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
            <li className="relative block border-b-primary border-b">
              <a
                href="#"
                className="relative block capitalize text-black hover:text-secondary text-base my-2 py-1 px-5"
              >
                Sign up
              </a>
              <ul className="offcanvas-submenu static top-auto hidden w-full visible opacity-100 capitalize">
                <li>
                  <Link href="login">
                    <a className="text-sm py-2 px-[30px] text-black font-light block transition-all hover:text-secondary">
                      Login
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="register">
                    <a className="text-sm py-2 px-[30px] text-black font-light block transition-all hover:text-secondary">
                      Register
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
          </nav>
          <div className="px-5 flex flex-wrap mt-3 sm:hidden">
            <Link href="add_property">
              <a className="before:rounded-md before:block before:absolute before:left-auto before:right-0 before:inset-y-0 before:-z-[1] before:bg-secondary before:w-0 hover:before:w-full hover:before:left-0 hover:before:right-auto before:transition-all leading-none px-[20px] py-[15px] capitalize font-medium text-white text-[14px] xl:text-[16px] relative after:block after:absolute after:inset-0 after:-z-[2] after:bg-primary after:rounded-md after:transition-all">
                Add Property
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
