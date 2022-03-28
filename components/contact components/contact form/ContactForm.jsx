import React from "react";

function ContactForm() {
  return (
    <div>
      {/* contact form start */}
      <div className="container">
        <form id="contact-form" action="assets/php/contact.php" method="post">
          <div className="grid grid-cols-12 gap-x-[30px] mb-[-30px] items-end">
            <div className="col-span-12 lg:col-span-7 mb-[30px]">
              <div>
                <h2 className="font-recoleta text-primary text-[24px] sm:text-[28px] leading-[1.277] capitalize mb-[10px]">
                  Send Message
                </h2>
                <p className="max-w-[465px] mb-[40px]">
                  Huge number of propreties availabe here for buy, sell and
                  Rent. Also you find here co-living property, lots opportunity
                </p>
              </div>
              <div className="grid grid-cols-12 gap-x-[20px] gap-y-[30px]">
                <div className="col-span-12 md:col-span-6">
                  <input
                    className="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] "
                    type="text"
                    placeholder="First Name"
                    name="name"
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <input
                    className="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] "
                    type="text"
                    placeholder="Last Name"
                    name="name"
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <input
                    className="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] "
                    type="text"
                    placeholder="Phone number"
                    name="number"
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <input
                    className="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] "
                    type="email"
                    placeholder="Email Address"
                    name="email"
                  />
                </div>
                <div className="col-span-12">
                  <textarea
                    className="h-[196px] font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] resize-none"
                    name="message"
                    id="textarea"
                    cols={30}
                    rows={10}
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 mb-[30px] order-last lg:order-none">
              <div className="h-[385px] rounded-[6px] overflow-hidden xl:ml-[40px]">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4814229.011985735!2d-65.89121968758322!3d-7.7486900084225026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91e8605342744385%3A0x3d3c6dc1394a7fc7!2sAmazon%20Rainforest!5e0!3m2!1sen!2sbd!4v1644813708270!5m2!1sen!2sbd"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-span-12 mb-[30px] lg:mb-0  order-2 lg:order-none">
              <button
                type="submit"
                className="before:rounded-md before:block before:absolute before:left-auto before:right-0 before:inset-y-0 before:-z-[1] before:bg-secondary before:w-0 hover:before:w-full hover:before:left-0 hover:before:right-auto before:transition-all leading-none px-[30px] py-[15px] capitalize font-medium text-white text-[14px] xl:text-[16px] relative after:block after:absolute after:inset-0 after:-z-[2] after:bg-primary after:rounded-md after:transition-all mb-[30px] lg:mb-0"
              >
                Contact us
              </button>
              <p className="form-messege mt-3" />
            </div>
          </div>
        </form>
      </div>
      {/* contact form end */}
    </div>
  );
}

export default ContactForm;
