

function Register_Hero() {
  return (
    <section className="bg-no-repeat bg-center bg-cover bg-[#FFF6F0] h-[350px] lg:h-[513px] xl:h-[650px] flex flex-wrap items-center relative before:absolute before:inset-0 before:content-[''] before:bg-[#000000] before:opacity-[70%]" style={{backgroundImage: 'url("assets/images/breadcrumb/bg-1.png")'}}>
    <div className="container">
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <div className="max-w-[700px]  mx-auto text-center text-white relative z-[1]">
            <div className="mb-5"><span className="text-base block">Register</span></div>
            <h1 className="font-recoleta text-[32px] sm:text-[50px] md:text-[68px] lg:text-[50px] leading-tight xl:text-2xl">
              Register now!
            </h1>
            <p className="text-base mt-5 max-w-[500px] mx-auto text-center">
              Huge number of propreties availabe here for buy and sell
              also you can find here co-living property as you like
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Register_Hero;