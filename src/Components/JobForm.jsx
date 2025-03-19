import React, { useState } from "react";
import { motion } from "framer-motion";

const JobForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobCategory: "",
    experience: "",
    currentLocation: "",
    preferredLocation: "",
    education: "",
    skills: "",
    languages: "",
    expectedSalary: "",
    noticePeriod: "",
    currentCompany: "",
    currentDesignation: "",
    resume: null,
    linkedinProfile: "",
    portfolio: "",
    coverLetter: "",
  });

  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Submit logic would go here
  };

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Job Seeker Registration
        </h2>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {[1, 2, 3].map((stepNumber) => (
              <motion.div
                key={stepNumber}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= stepNumber ? 'bg-blue-600 text-white' : 'bg-gray-200'
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {stepNumber}
              </motion.div>
            ))}
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <motion.div
              className="h-full bg-blue-600 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Professional Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Job Category</label>
                  <select
                    name="jobCategory"
                    value={formData.jobCategory}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="engineering">Engineering</option>
                    <option value="construction">Construction</option>
                    <option value="logistics">Logistics</option>
                    <option value="quality">Quality Control</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
                  <input
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Company</label>
                  <input
                    type="text"
                    name="currentCompany"
                    value={formData.currentCompany}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Designation</label>
                  <input
                    type="text"
                    name="currentDesignation"
                    value={formData.currentDesignation}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Additional Information</h3>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Skills (comma separated)</label>
                  <textarea
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    rows="3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Resume</label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    accept=".pdf,.doc,.docx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile</label>
                  <input
                    type="url"
                    name="linkedinProfile"
                    value={formData.linkedinProfile}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>
              </div>
            </motion.div>
          )}

          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <motion.button
                type="button"
                onClick={prevStep}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Previous
              </motion.button>
            )}
            <motion.button
              type={step === totalSteps ? "submit" : "button"}
              onClick={step === totalSteps ? undefined : nextStep}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all ml-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {step === totalSteps ? "Submit Application" : "Next"}
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default JobForm;
