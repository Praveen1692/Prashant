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
    currentCompany: "",
    currentDesignation: "",
    skills: "",
    resume:"",
  
    linkedinProfile: "",
  });

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false); // Add loading state
  const totalSteps = 4;

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (step !== totalSteps) return; // Only submit on the final step

    setIsSubmitting(true); // Indicate submission is in progress
    const formDataToSend = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      formDataToSend.append(key, value);
    }
    formDataToSend.append("access_key", "d825a96b-ff6f-4fa3-b17b-fdf1edf1d40d");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          jobCategory: "",
          experience: "",
          currentCompany: "",
          currentDesignation: "",
          skills: "",
          resume: "",
          linkedinProfile: "",
        });
        setStep(1);
        alert("Thank you for your enquiry! We'll get back to you soon.");
      } else {
        console.error("Submission failed", res);
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && step !== totalSteps) {
      e.preventDefault();
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
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

        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {[1, 2, 3].map((stepNumber) => (
              <motion.div
                key={stepNumber}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= stepNumber ? "bg-blue-600 text-white" : "bg-gray-200"
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
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          onKeyDown={handleKeyDown}
          className="bg-white rounded-2xl shadow-xl p-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {step === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
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
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
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
                    name="currentDesignation" // Fixed typo here
                    value={formData.currentDesignation}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Paste Your Resume Link</label>
                  <input
                    type="url"
                    name="resume"
                    value={formData.resume}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    
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
                disabled={isSubmitting} // Disable during submission
              >
                Previous
              </motion.button>
            )}
            <motion.button
              type={step === totalSteps ? "submit" : "button"}
              onClick={step === totalSteps ? undefined : nextStep}
              className={`px-6 py-2 rounded-lg transition-all ml-auto ${
                isSubmitting
                  ? "bg-blue-400 text-white cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              disabled={isSubmitting} // Disable during submission
            >
              {isSubmitting ? "Submitting..." : step === totalSteps ? "Submit Application" : "Next"}
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default JobForm;