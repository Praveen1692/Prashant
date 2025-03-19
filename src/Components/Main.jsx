import { motion } from "framer-motion";

function Main() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "d825a96b-ff6f-4fa3-b17b-fdf1edf1d40d");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
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
          className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 sm:p-6 sticky top-0 z-20 shadow-lg"
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
          className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-20 sm:py-32 relative overflow-hidden"
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
              <div className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <h4 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4">
                  Industry-Specific Expertise
                </h4>
                <p className="text-base sm:text-lg text-gray-600">
                  We recognize the specific demands of factories and industrial
                  operations, providing a workforce that is skilled,
                  experienced, and trained to meet the challenges of the sector.
                </p>
              </div>
              <div className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <h4 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4">
                  Quality Assurance & Pre-Screening
                </h4>
                <p className="text-base sm:text-lg text-gray-600">
                  Rigorous screening, specialized industry training, and
                  comprehensive compliance management for every candidate
                </p>
              </div>
              <div className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <h4 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4">
                  End-to-End Workforce Management
                </h4>
                <p className="text-base sm:text-lg text-gray-600">
                  We handle everything from sourcing and training to logistics
                  and post-placement support.
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
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <div class="bg-gradient-to-r from-red-500 to-purple-500 p-8 text-center">
            <h2 class="text-3xl font-bold text-white">Our Process</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 p-8">
            <div class="bg-white p-4 rounded-lg shadow-md text-center rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 class="text-lg font-semibold mb-2">
                Client Requirement Gathering
              </h3>
              <p class="text-sm text-gray-600">
                We start by gaining a deep understanding of the client's needs
                through detailed requirement assessment forms, allowing us to
                pinpoint the precise skills, experience, and qualifications
                needed for the role.
              </p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-md text-center rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 class="text-lg font-semibold mb-2">
                Screening & Shortlisting
              </h3>
              <p class="text-sm text-gray-600">
                Our recruitment specialists conduct initial interviews to assess
                candidates against the defined criteria, ensuring that only the
                most qualified candidates are shortlisted.
              </p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-md text-center rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 class="text-lg font-semibold mb-2">
                Client Interview & Selection
              </h3>
              <p class="text-sm text-gray-600">
                Shortlisted candidates participate in a second-round interview
                with the client, enabling them to evaluate the candidates'
                expertise and suitability for the role.
              </p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-md text-center rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 class="text-lg font-semibold mb-2">
                Final Selection & Confirmation
              </h3>
              <p class="text-sm text-gray-600">
                Once the client selects their preferred candidate(s), we handle
                all necessary documentation and formal confirmations.
              </p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-md text-center rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 class="text-lg font-semibold mb-2">
                Visa & Travel Processing
              </h3>
              <p class="text-sm text-gray-600">
                We manage visa applications, ticketing, and required approvals
                to ensure a smooth and compliant international deployment
                process.
              </p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-md text-center rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 class="text-lg font-semibold mb-2">
                Deployment & On-Site Placement
              </h3>
              <p class="text-sm text-gray-600">
                Our team coordinates the arrival and placement of workers at the
                designated site, ensuring a smooth transition and prompt
                productivity.
              </p>
            </div>
          </div>
        </div>

        {/* Services Section with Images */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-bold text-gray-800 mb-12 text-center"
            >
              Our Services
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
                  alt="Industrial Staffing"
                  className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition duration-300"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3">
                    Industrial Staffing
                  </h4>
                  <p className="text-gray-600">
                    Expert workforce solutions for manufacturing and industrial
                    sectors.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                  alt="Technical Recruitment"
                  className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition duration-300"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3">
                    Technical Recruitment
                  </h4>
                  <p className="text-gray-600">
                    Specialized placement services for technical and engineering
                    roles.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
                  alt="Workforce Management"
                  className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition duration-300"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3">
                    Workforce Management
                  </h4>
                  <p className="text-gray-600">
                    Comprehensive workforce solutions and management services.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section with Enquiry Form */}
        <section
          id="contact"
          className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <h3 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-10 sm:mb-12 text-center bg-gradient-to-r from-blue-900 to-orange-500 bg-clip-text text-transparent animate-fade-in-down">
              Get in Touch
            </h3>
            <div className="flex flex-col items-center md:flex-row justify-center gap-6 sm:gap-12 mb-12 sm:mb-16 text-gray-700 text-base sm:text-lg">
              <div className="flex items-center space-x-3 bg-white p-3 sm:p-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto">
                <span className="text-blue-900">📧</span>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:contact@123.com"
                    className="text-blue-900 hover:text-orange-500 transition-colors duration-300"
                  >
                    contact@123.com
                  </a>
                </p>
              </div>
              <div className="flex items-center space-x-3 bg-white p-3 sm:p-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto">
                <span className="text-blue-900">📞</span>
                <p>
                  Phone:{" "}
                  <a
                    href="tel:+123456789"
                    className="text-blue-900 hover:text-orange-500 transition-colors duration-300"
                  >
                    +123456789
                  </a>
                </p>
              </div>
              <div className="flex items-center space-x-3 bg-white p-3 sm:p-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto">
                <span className="text-blue-900">📍</span>
                <p>Address: 123, Main Street, Main Road</p>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="max-w-2xl mx-auto">
              <form onSubmit={onSubmit} className="space-y-6 bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl">
                <h4 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                  Submit an Enquiry
                </h4>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="Full Name"
                  className="w-full p-4 bg-white border-none rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-300 placeholder-gray-500 text-gray-800 transition-all duration-300"
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Email Address"
                  className="w-full p-4 bg-white border-none rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-300 placeholder-gray-500 text-gray-800 transition-all duration-300"
                />
                <input
                  type="tel"
                  name="Phone Number"
                  placeholder="Phone Number"
                  className="w-full p-4 bg-white border-none rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-300 placeholder-gray-500 text-gray-800 transition-all duration-300"
                />
                <textarea
                  placeholder="Your Enquiry"
                  name="Your Enquiry"
                  className="w-full p-4 bg-white border-none rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-300 placeholder-gray-500 text-gray-800 transition-all duration-300"
                  rows="5"
                ></textarea>
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
          <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-blue-200 rounded-full opacity-20 -translate-x-1/2 translate-y-1/4 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-orange-200 rounded-full opacity-20 translate-x-1/2 -translate-y-1/4 blur-3xl"></div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-6 sm:py-8">
          <div className="container mx-auto text-center px-4 sm:px-6">
            <p className="text-base sm:text-lg">
              &copy; 2025 Industrial Talent Nexus. All rights reserved.
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
