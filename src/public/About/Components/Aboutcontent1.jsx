import Homeimage48 from '../../../assets/6222519.jpg'
import Homeimage50 from '../../../assets/6072191.jpg'
import Homeimage51 from '../../../assets/3489823.jpg'

const Homecontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-12 overflow-hidden">

      {/* MAIN HEADING */}
      <h1 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-normal text-center text-black mb-16 leading-snug px-4">
        Welcome to <span className="text-blue-800">We Cloud Qlobe</span> – Leading the Future of Telecom
      </h1>

      {/* ================= OUR COMPANY ================= */}
      <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto mb-20">

        {/* IMAGE */}
        <div className="order-1 md:order-1 flex justify-center">
          <img
            src={Homeimage50}
            alt="Our Company"
            className="w-full max-w-[580px] rounded-lg object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="order-2 md:order-2 flex flex-col">
          <h2 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] text-gray-800 mb-4">
            Who We Are
          </h2>

          <p className="text-[#5f6368] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.8] text-justify mb-4">
            Cloud Qlobe is a globally recognized telecom leader dedicated to connecting businesses, enterprises, and individuals worldwide. With years of expertise and a strong commitment to innovation, we provide advanced communication solutions that enable seamless connectivity, operational efficiency, and measurable growth. Leveraging the latest in VoIP, cloud computing, and digital infrastructure, we deliver reliable and crystal-clear communication for every client. From startups to global enterprises, we help organizations embrace digital transformation, enhance collaboration, and stay competitive in a fast-changing digital era.
          </p>

          <p className="text-[#5f6368] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.8] text-justify">
            Our mission is to redefine the way businesses communicate globally by offering scalable, cost-effective, and future-ready solutions. Through strategic partnerships, advanced analytics, and 24/7 expert support, we ensure our clients benefit from unmatched service quality, global reach, and real-time insights. Every solution is tailored to align with business goals, empowering organizations to reduce costs, improve customer experience, and drive sustainable growth with confidence in an interconnected world.
          </p>
        </div>
      </section>

      {/* ================= WORKING ATMOSPHERE ================= */}
      <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto mb-20">

        {/* IMAGE (MOBILE FIRST) */}
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src={Homeimage48}
            alt="Working Atmosphere"
            className="w-full max-w-[450px] rounded-lg object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="order-2 md:order-1 flex flex-col">
          <h2 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] text-gray-800 mb-4">
            Our <span className="text-orange-500">Working Atmosphere</span>
          </h2>

          <p className="text-[#5f6368] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.8] text-justify mb-4">
            At We Cloud Qlobe, we cultivate a dynamic, inclusive, and collaborative work environment where creativity and innovation thrive. Our teams are empowered to share ideas, experiment with new technologies, and lead projects that drive both personal growth and organizational success. By fostering open communication and continuous learning, we ensure that every employee feels valued, motivated, and equipped to contribute meaningfully to our clients' success.
          </p>

          <p className="text-[#5f6368] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.8] text-justify">
            Our offices are designed to inspire teamwork and productivity, with spaces that encourage brainstorming, collaboration, and knowledge sharing. We place a strong emphasis on work-life balance, mentorship, and employee development programs, believing that a motivated and engaged workforce directly translates into superior solutions, exceptional client experiences, and sustained business growth.
          </p>
        </div>
      </section>

      {/* ================= OUR SERVICES ================= */}
      <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">

        {/* IMAGE */}
        <div className="order-1 md:order-1 flex justify-center">
          <img
            src={Homeimage51}
            alt="Our Services"
            className="w-full max-w-[580px] rounded-lg object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="order-2 md:order-2 flex flex-col">
          <h2 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] text-gray-800 mb-4">
            Our <span className="text-orange-500">Telecom Services</span>
          </h2>

          <p className="text-[#5f6368] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.8] text-justify mb-4">
            Cloud Qlobe offers a comprehensive range of telecom services, including Call Center (CC) Routes, CLI Routes, VoIP Websites, Dialer Solutions, and DID Number Solutions. Our services are engineered to provide seamless connectivity, high-quality voice clarity, and scalable solutions with easy integration into existing systems. By combining reliability with flexibility, we enable businesses to operate efficiently at both local and global levels while ensuring smooth communication across networks.
          </p>

          <p className="text-[#5f6368] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.8] text-justify">
            Each solution is powered by our robust infrastructure, real-time monitoring, and expert technical support, ensuring security and consistent performance. Whether it's optimizing outbound campaigns, expanding international presence, or deploying advanced communication platforms, Cloud Qlobe delivers cost-effective and technologically advanced telecom solutions. With a strong focus on client needs, we help businesses stay connected anytime, anywhere with confidence and scalability.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Homecontent1;
