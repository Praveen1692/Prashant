import { motion } from "framer-motion";
import {
  FaEye,
  FaRocket,
  FaArrowRight,
  FaIndustry,
  FaCheckCircle,
  FaUsersCog,
  FaGlobe,
} from "react-icons/fa";
import Us from "../../public/Us.jpeg";

function Main() {
  const steps = [
    {
      title: "Skilled & Semi-Skilled Industrial Workforce",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0sVksTVaX1vP1STDgx31iYnXcCVkI9FcQiQ&s", // Placeholder image
    },
    {
      title: "Managerial & Supervisory Staffing",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6fZTOqfzghF8qAXmA0cBii5JFDEjwQZuuag&s", // Placeholder image
    },
    {
      title: "Overseas Manpower Solutions",
      image:Us, // Placeholder image
    },
  ];



  const stepss = [
    "Client Requirement Gathering",
    "Screening & Shortlisting",
    "Client Interview & Selection",
    "Final Selection & Confirmation",
    "Visa & Travel Processing",
    "Deployment & On-Site Placement",
  ];

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "278ed9da-d039-4c12-8c63-15c352e2d00a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      // Reset the form
      event.target.reset();
      alert("Thank you for your enquiry! We'll get back to you soon.");
    }
  };
  return (
    <>
      <div className="min-h-screen bg-gray-50 font-sans">
        {/* Navbar */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-red-500 to-purple-500 text-white p-4 sm:p-6 sticky top-0 z-20 shadow-lg"
        >
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 sm:mb-0">
              Industrial Talent Nexus
            </h1>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 text-base sm:text-lg">
              <a
                href="#home"
                className="hover:text-orange-300 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-orange-300 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#services"
                className="hover:text-orange-300 transition-colors duration-300"
              >
                Services
              </a>
              <a
                href="#contact"
                className="hover:text-orange-300 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section
          id="home"
          className="bg-gradient-to-r from-red-500 to-purple-500 text-white py-20 sm:py-32 relative overflow-hidden"
        >
          <div className="container mx-auto text-center z-10 relative px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-7xl font-extrabold mb-8 leading-tight"
            >
              Specialized Manpower Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Connecting industries with skilled blue-collar and managerial
              talent across India and the Gulf.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-10 rounded-full text-lg shadow-lg transition-all duration-300"
            >
              Get Started
            </motion.button>
          </div>
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
              opacity: [0.2, 0.25, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0"
          >
            <img
              src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
              alt="Industrial Background"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2 text-center md:text-left"
            >
              <h3 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8">
                About Us
              </h3>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Industrial Talent Nexus is a specialized provider of manpower
                solutions, dedicated to serving industries and factories. Unlike
                conventional manpower consultancies, we focus exclusively on
                sourcing blue-collar workers and managerial/supervisory
                professionals for industrial operations. With a strong footprint
                across India, we have partnered with leading businesses to
                fulfill their workforce requirements effectively.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2 grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                alt="Industrial Facility"
                className="rounded-lg shadow-xl w-full h-48 object-cover hover:scale-105 transition duration-500"
              />
              <img
                src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
                alt="Manufacturing Process"
                className="rounded-lg shadow-xl w-full h-48 object-cover hover:scale-105 transition duration-500"
              />
              <img
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
                alt="Factory Workers"
                className="rounded-lg shadow-xl w-full h-48 object-cover hover:scale-105 transition duration-500"
              />
              <img
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg"
                alt="Industrial Equipment"
                className="rounded-lg shadow-xl w-full h-48 object-cover hover:scale-105 transition duration-500"
              />
            </motion.div>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="bg-gray-100 py-12 sm:py-20">
          <div className="container mx-auto text-center px-4 sm:px-6">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 sm:mb-12">
              Our Mission & Vision
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 max-w-5xl mx-auto">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex justify-center mb-4">
                  <FaEye className="text-blue-900 text-3xl sm:text-4xl" />{" "}
                  {/* Vision Icon */}
                </div>
                <h4 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4">
                  Our Vision
                </h4>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  To become the premier specialized manpower provider for
                  industries and factories, delivering skilled and dependable
                  workforce solutions that fuel industrial growth and efficiency
                  across India and the Gulf region.
                </p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex justify-center mb-4">
                  <FaRocket className="text-blue-900 text-3xl sm:text-4xl" />{" "}
                  {/* Mission Icon */}
                </div>
                <h4 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-2">
                  Our Mission
                </h4>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  To link businesses with highly skilled industrial workers and
                  managerial talent, ensuring workforce excellence through
                  thorough screening, training, and compliance, while expanding
                  globally to meet the evolving demands of industries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-12">
              What Makes Us Different
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-10">
              {/* Feature 1 */}
              <div className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <FaIndustry className="text-blue-900 text-3xl sm:text-4xl" />
                </div>
                <h4 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4 text-center">
                  Industry-Specific Expertise
                </h4>
                <p className="text-base sm:text-lg text-gray-600">
                  We recognize the specific demands of factories and industrial
                  operations, providing a workforce that is skilled,
                  experienced, and trained to meet the challenges of the sector.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <FaCheckCircle className="text-blue-900 text-3xl sm:text-4xl" />
                </div>
                <h4 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4 text-center">
                  Quality Assurance & Pre-Screening
                </h4>
                <p className="text-base sm:text-lg text-gray-600">
                  Rigorous screening, specialized industry training, and
                  comprehensive compliance management for every candidate.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <FaUsersCog className="text-blue-900 text-3xl sm:text-4xl" />
                </div>
                <h4 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4 text-center">
                  End-to-End Workforce Management
                </h4>
                <p className="text-base sm:text-lg text-gray-600">
                  We handle everything from sourcing and training to logistics
                  and post-placement support.
                </p>
              </div>

              {/* Feature 4 (Corrected) */}
              <div className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <FaGlobe className="text-blue-900 text-3xl sm:text-4xl" />{" "}
                  {/* New icon */}
                </div>
                <h4 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4 text-center">
                  Focused Manpower Solutions
                </h4>
                <p className="text-base sm:text-lg text-gray-600">
                  Delivering tailored manpower solutions to meet unique industry
                  needs, ensuring efficiency and scalability across global
                  markets.
                </p>
              </div>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mt-12 sm:mt-16 mb-6 sm:mb-8">
              Industries We Serve
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto text-gray-600 bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg">
              <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg">
                <li className="flex items-center">
                  ✔ <span className="ml-2">Manufacturing & Production</span>
                </li>
                <li className="flex items-center">
                  ✔ <span className="ml-2">Engineering & Heavy Industries</span>
                </li>
                <li className="flex items-center">
                  ✔ <span className="ml-2">Construction & Real Estate</span>
                </li>
              </ul>
              <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg">
                <li className="flex items-center">
                  ✔{" "}
                  <span className="ml-2">
                    Oil & Gas, Energy, & Petrochemicals
                  </span>
                </li>
                <li className="flex items-center">
                  ✔{" "}
                  <span className="ml-2">
                    Warehousing, Logistics, & Supply Chain
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Trust Us Section */}
        <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-12 sm:py-20">
          <div className="container mx-auto text-center px-4 sm:px-6">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 sm:mb-12">
              Why Businesses Trust Us
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="text-gray-600 font-semibold text-base sm:text-lg">
                  Industry-Focused
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Specializing in factories and industrial workforce.
                </p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="text-gray-600 font-semibold text-base sm:text-lg">
                  Proven Success
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Strong partnerships across India and the Gulf.
                </p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="text-gray-600 font-semibold text-base sm:text-lg">
                  Efficient & Cost-Effective
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Reducing hiring costs and boosting efficiency.
                </p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="text-gray-600 font-semibold text-base sm:text-lg">
                  Compliance & Legal Support
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Handling documentation, visas, and labor laws.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-red-500 to-purple-500 p-8 text-center">
        <h2 className="text-3xl font-bold text-white">Our Process</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 p-8 relative">
        {stepss.map((step, index) => (
          <div
            key={index}
            className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col items-center justify-center min-h-[120px]"
          >
            {/* Step Number */}
           
            <h3 className="text-lg font-semibold text-gray-800 mt-4">{step}</h3>
            {/* Arrow */}
            {index < stepss.length - 1 && (
              <svg
                className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"
                width="40"
                height="20"
                viewBox="0 0 40 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0"
                  y1="10"
                  x2="34"
                  y2="10"
                  stroke="#D1D5DB" // gray-300
                  strokeWidth="2"
                  className="group-hover:stroke-gray-500 transition-all duration-300"
                />
                <path
                  d="M30 6L36 10L30 14"
                  stroke="#D1D5DB" // gray-300
                  strokeWidth="2"
                  fill="none"
                  className="group-hover:stroke-gray-500 transition-all duration-300"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>




       

        {/* Services Section with Images */}

        <div className="bg-white shadow-md rounded-lg overflow-hidden px-8 py-10 m-12">
          <div className="bg-gradient-to-r from-red-500 to-purple-500 p-8 text-center">
            <h2 className="text-3xl font-bold text-white">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white p-4 rounded-lg shadow-md text-center rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Step Number */}
               
                {/* Image */}
                <div className="mb-4">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full object-cover"
                  />
                </div>
                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                {/* Arrow (hidden on last step) */}
               
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section with Enquiry Form */}

        <section
          id="contact"
          className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <h3 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 sm:mb-12 bg-gradient-to-r from-blue-900 to-orange-500 bg-clip-text text-transparent animate-fade-in-down">
              Get in Touch
            </h3>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-red-600 to-purple-700 p-8 rounded-3xl text-white max-w-5xl mx-auto flex flex-col md:flex-row">
              {/* Left section with heading */}
              <div className="md:w-1/3 mb-8 md:mb-0">
                <h1 className="text-5xl font-bold leading-tight text-center mt-18">
                  Get More Information
                </h1>
              </div>

              {/* Right section with contact details */}
              <div className="md:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Contact details */}
                  <div className="space-y-6">
                    {/* Website */}
                    <div className="flex items-center">
                      <div className="mr-4">
                        <div className="border-2 border-white p-2 rounded-md">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">Website</h3>
                        <p>www.industrialtalentnexus.com</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center">
                      <div className="mr-4">
                        <div className="border-2 border-white p-2 rounded-md">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">Email</h3>
                        <p>support@industrialtalentnexus.com</p>
                      </div>
                    </div>

                    {/* Telephone */}
                    <div className="flex items-center">
                      <div className="mr-4">
                        <div className="border-2 border-white p-2 rounded-md">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">Telephone</h3>
                        <p>+91-9927841447</p>
                      </div>
                    </div>
                  </div>

                  {/* Addresses */}
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <div className="border-2 border-white p-2 rounded-md mt-32">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="space-y-6">
                        {/* Haryana Address */}
                        <div>
                          <h3 className="font-bold text-xl">Haryana</h3>
                          <p>NR-28, DLF Cyber City</p>
                          <p>Phase 3, Gurgaon - 121001</p>
                        </div>

                        {/* Uttar Pradesh Address */}
                        <div>
                          <h3 className="font-bold text-xl">Uttar Pradesh</h3>
                          <p>24-A. Jamalpur,</p>
                          <p>Aligarh - 200201</p>
                        </div>

                        {/* Dehradun Address */}
                        <div>
                          <h3 className="font-bold text-xl">Dehradun</h3>
                          <p>I-26, Nehru Colony,</p>
                          <p>Dehradun - 248001</p>
                        </div>

                        {/* Dubai Address */}
                        <div>
                          <h3 className="font-bold text-xl">Dubai</h3>
                          <p>Coming Soon</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="max-w-2xl mx-auto px-8 py-6">
              <form
                onSubmit={onSubmit}
                className="space-y-6 bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl"
              >
                <h4 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                  Submit an Enquiry
                </h4>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  className="w-full p-4 bg-white border-none rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-300 placeholder-gray-500 text-gray-800 transition-all duration-300"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full p-4 bg-white border-none rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-300 placeholder-gray-500 text-gray-800 transition-all duration-300"
                  required
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="w-full p-4 bg-white border-none rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-300 placeholder-gray-500 text-gray-800 transition-all duration-300"
                  required
                />
                <textarea
                  placeholder="Your Enquiry"
                  name="enquiry"
                  className="w-full p-4 bg-white border-none rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-300 placeholder-gray-500 text-gray-800 transition-all duration-300"
                  rows="5"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>

          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-blue-200 rounded-full opacity-20 -translate-x-1/3 translate-y-1/4 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-orange-200 rounded-full opacity-20 translate-x-1/3 -translate-y-1/4 blur-3xl"></div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-red-600 to-purple-700 text-white py-6 sm:py-8">
          <div className="container mx-auto text-center px-4 sm:px-6">
            <p className="text-base sm:text-lg">
              &copy;  Industrial Talent Nexus. All rights reserved.
            </p>
          </div>
        </footer>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
      `}</style>
    </>
  );
}

export default Main;
