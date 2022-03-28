

function About_US() {
  return (
    <section className="about-section pt-[80px] lg:pt-[120px]">
    <div className="container">
      <div className="grid grid-cols-12 gap-x-[30px] mb-[-30px]">
        <div className="col-span-12 lg:col-span-6 relative mb-[30px]">
          <div className="scene absolute top-0 right-[5%] xl:right-[10%]" data-relative-input="true">
            <img data-depth="0.2" src="/images/about/dot-with-line.png" width={48} height={158} alt="image" />
          </div>
          <div className="scene absolute bottom-[10%] lg:bottom-[25%] xl:bottom-[15%] left-[10%]" data-relative-input="true">
            <img data-depth="0.3" src="/images/about/star.png" width={85} height={64} loading="lazy" alt="image" />
          </div>
          <div className="scene" data-relative-input="true">
            <img className="block mx-auto" data-depth="0.1" src="/images/about/about3.png" loading="lazy" width={520} height={467} alt="about Image" />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 mb-[30px]">
          <span className="text-secondary text-tiny inline-block mb-2">Why Choose us</span>
          <h2 className="font-recoleta text-primary text-[24px] sm:text-[30px] leading-[1.277] xl:text-xl max-w-[500px] mb-3">
            We Provide Right Choice of
            Properties that You need<span className="text-secondary">.</span></h2>
          <p className="max-w-[480px]">Huge number of propreties availabe here for buy, sell and Rent.
            Also you find here co-living property, lots opportunity you have to
            choose here and enjoy huge discount you can get. </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[20px] -mb-[30px] mt-[45px]">
            <div className="mb-[30px] lg:mb-10 border border-[#FFF6F0] p-[20px] rounded-[8px] transition-all hover:drop-shadow-[0px_10px_20px_rgba(0,0,0,0.1)] hover:bg-[#F5F9F8]">
              <img src="/images/icon/doller.png" className="max-w-[38px] self-start mb-[15px]" loading="lazy" width={50} height={50} alt="about Image" />
              <div>
                <h3 className="font-recoleta text-primary text-base capitalize mb-[5px]">Budget Friendly</h3>
                <p className="text-[14px]">Properties are most budget friendly.</p>
              </div>
            </div>
            <div className="mb-[30px] lg:mb-10 border border-[#FFF6F0] p-[20px] rounded-[8px] transition-all hover:drop-shadow-[0px_10px_20px_rgba(0,0,0,0.15)] hover:bg-[#F5F9F8]">
              <img src="/images/icon/location.png" className="max-w-[38px] self-start mb-[15px]" loading="lazy" width={50} height={50} alt="about Image" />
              <div>
                <h3 className="font-recoleta text-primary text-base capitalize mb-[5px]">Prime Location</h3>
                <p className="text-[14px]">Properties are most budget friendly.</p>
              </div>
            </div>
            <div className="mb-[30px] lg:mb-10 border border-[#FFF6F0] p-[20px] rounded-[8px] transition-all hover:drop-shadow-[0px_10px_20px_rgba(0,0,0,0.1)] hover:bg-[#F5F9F8]">
              <img src="/images/icon/trusted.png" className="max-w-[38px] self-start mb-[15px]" loading="lazy" width={50} height={50} alt="about Image" />
              <div>
                <h3 className="font-recoleta text-primary text-base capitalize mb-[5px]">Trusted</h3>
                <p className="text-[14px]">Properties are most budget friendly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default About_US;