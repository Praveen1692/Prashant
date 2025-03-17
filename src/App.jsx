import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 font-sans">
        {/* Navbar */}
        <nav className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 sm:p-6 sticky top-0 z-20 shadow-lg">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 sm:mb-0">Industrial Talent Nexus</h1>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 text-base sm:text-lg">
              <a href="#home" className="hover:text-orange-300 transition-colors duration-300">Home</a>
              <a href="#about" className="hover:text-orange-300 transition-colors duration-300">About</a>
              <a href="#services" className="hover:text-orange-300 transition-colors duration-300">Services</a>
              <a href="#contact" className="hover:text-orange-300 transition-colors duration-300">Contact</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-16 sm:py-24 relative overflow-hidden">
          <div className="container mx-auto text-center z-10 relative px-4">
            <h2 className="text-4xl sm:text-6xl font-extrabold mb-6 animate-fade-in-down">Specialized Manpower Solutions</h2>
            <p className="text-lg sm:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto animate-fade-in-up">Connecting industries with skilled blue-collar and managerial talent across India and the Gulf.</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
          <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" alt="Industrial Background" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12 px-4 sm:px-6">
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">About Us</h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Industrial Talent Nexus is a specialized manpower solutions provider, catering exclusively to industries and factories. Unlike traditional manpower consultancies, we focus solely on sourcing blue-collar workers and managerial/supervisory professionals for industrial operations. With a strong presence in India, we’ve partnered with leading businesses to meet their workforce needs.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" alt="Team Collaboration" className="rounded-lg shadow-xl w-full h-64 sm:h-80 object-cover transform hover:scale-105 transition duration-500" />
            </div>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="bg-gray-100 py-12 sm:py-20">
          <div className="container mx-auto text-center px-4 sm:px-6">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 sm:mb-12">Our Mission & Vision</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 max-w-5xl mx-auto">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <h4 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4">Our Vision</h4>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  To be the leading specialized manpower provider for industries and factories, delivering skilled and reliable workforce solutions that drive industrial growth and efficiency across India and the Gulf region.
                </p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <h4 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4">Our Mission</h4>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  To connect businesses with highly skilled industrial workers and managerial talent, ensuring workforce excellence through rigorous screening, training, and compliance, while expanding globally to meet evolving industry demands.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-12">What Makes Us Different</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
              <div className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <h4 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4">Industry-Specific Expertise</h4>
                <p className="text-base sm:text-lg text-gray-600">We understand the unique demands of factories and industrial operations, ensuring our workforce is skilled, experienced, and trained for the sector's challenges.</p>
              </div>
              <div className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <h4 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4">Quality Assurance & Pre-Screening</h4>
                <p className="text-base sm:text-lg text-gray-600">Strict screening, industry-specific training, and full compliance handling for every candidate.</p>
              </div>
              <div className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <h4 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4">End-to-End Workforce Management</h4>
                <p className="text-base sm:text-lg text-gray-600">From sourcing and training to logistics and post-placement support, we manage it all.</p>
              </div>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mt-12 sm:mt-16 mb-6 sm:mb-8">Industries We Serve</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto text-gray-600 bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg">
              <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg">
                <li className="flex items-center">✔ <span className="ml-2">Manufacturing & Production</span></li>
                <li className="flex items-center">✔ <span className="ml-2">Engineering & Heavy Industries</span></li>
                <li className="flex items-center">✔ <span className="ml-2">Construction & Real Estate</span></li>
              </ul>
              <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg">
                <li className="flex items-center">✔ <span className="ml-2">Oil & Gas, Energy, & Petrochemicals</span></li>
                <li className="flex items-center">✔ <span className="ml-2">Warehousing, Logistics, & Supply Chain</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Trust Us Section */}
        <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-12 sm:py-20">
          <div className="container mx-auto text-center px-4 sm:px-6">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 sm:mb-12">Why Businesses Trust Us</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="text-gray-600 font-semibold text-base sm:text-lg">Industry-Focused</p>
                <p className="text-gray-500 text-sm mt-2">Specializing in factories and industrial workforce.</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="text-gray-600 font-semibold text-base sm:text-lg">Proven Success</p>
                <p className="text-gray-500 text-sm mt-2">Strong partnerships across India and the Gulf.</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="text-gray-600 font-semibold text-base sm:text-lg">Efficient & Cost-Effective</p>
                <p className="text-gray-500 text-sm mt-2">Reducing hiring costs and boosting efficiency.</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="text-gray-600 font-semibold text-base sm:text-lg">Compliance & Legal Support</p>
                <p className="text-gray-500 text-sm mt-2">Handling documentation, visas, and labor laws.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section with Enquiry Form */}
        <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <h3 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-10 sm:mb-12 text-center bg-gradient-to-r from-blue-900 to-orange-500 bg-clip-text text-transparent animate-fade-in-down">
              Get in Touch
            </h3>
            <div className="flex flex-col items-center md:flex-row justify-center gap-6 sm:gap-12 mb-12 sm:mb-16 text-gray-700 text-base sm:text-lg">
              <div className="flex items-center space-x-3 bg-white p-3 sm:p-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto">
                <span className="text-blue-900">📧</span>
                <p>Email: <a href="mailto:contact@123.com" className="text-blue-900 hover:text-orange-500 transition-colors duration-300">contact@123.com</a></p>
              </div>
              <div className="flex items-center space-x-3 bg-white p-3 sm:p-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto">
                <span className="text-blue-900">📞</span>
                <p>Phone: <a href="tel:+123456789" className="text-blue-900 hover:text-orange-500 transition-colors duration-300">+123456789</a></p>
              </div>
              <div className="flex items-center space-x-3 bg-white p-3 sm:p-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto">
                <span className="text-blue-900">📍</span>
                <p>Address: 123, Main Street, Main Road</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
              <form className="space-y-4 sm:space-y-6 bg-white p-6 sm:p-8 rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-500">
                <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 text-center">Send Us a Message</h4>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 sm:p-4 bg-gray-100 border-none rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 placeholder-gray-500 text-gray-800 transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 sm:p-4 bg-gray-100 border-none rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 placeholder-gray-500 text-gray-800 transition-all duration-300"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 sm:p-4 bg-gray-100 border-none rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 placeholder-gray-500 text-gray-800 transition-all duration-300"
                  rows="4 sm:rows-5"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>

              {/* Enquiry Form */}
              <form className="space-y-4 sm:space-y-6 bg-gradient-to-br from-orange-50 to-orange-100 p-6 sm:p-8 rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-500">
                <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 text-center">Submit an Enquiry</h4>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 sm:p-4 bg-white border-none rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-200 placeholder-gray-500 text-gray-800 transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 sm:p-4 bg-white border-none rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-200 placeholder-gray-500 text-gray-800 transition-all duration-300"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 sm:p-4 bg-white border-none rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-200 placeholder-gray-500 text-gray-800 transition-all duration-300"
                />
                <textarea
                  placeholder="Your Enquiry"
                  className="w-full p-3 sm:p-4 bg-white border-none rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-200 placeholder-gray-500 text-gray-800 transition-all duration-300"
                  rows="4 sm:rows-5"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>

          {/* Decorative Background Element */}
          <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-blue-200 rounded-full opacity-20 -translate-x-1/2 translate-y-1/4 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-orange-200 rounded-full opacity-20 translate-x-1/2 -translate-y-1/4 blur-3xl"></div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-6 sm:py-8">
          <div className="container mx-auto text-center px-4 sm:px-6">
            <p className="text-base sm:text-lg">© 2025 Industrial Talent Nexus. All rights reserved.</p>
          </div>
        </footer>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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

export default App;