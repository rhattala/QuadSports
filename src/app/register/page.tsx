'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Register() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProgram, setSelectedProgram] = useState('');
  const [formData, setFormData] = useState({
    playerName: '',
    playerAge: '',
    playerGender: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    emergencyContact: '',
    medicalInfo: '',
    location: '',
    experience: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const programs = [
    {
      id: 'flag-football-coed',
      name: 'Flag Football - Co-ed',
      ages: '4-16',
      price: '$150',
      icon: '🏈',
      color: 'from-red-500 to-red-600',
      description: 'Join our NFL Flag Football program for players of all skill levels'
    },
    {
      id: 'flag-football-girls',
      name: 'Flag Football - Girls Only',
      ages: '4-16',
      price: '$150',
      icon: '🏈',
      color: 'from-pink-500 to-pink-600',
      description: 'Girls-only flag football teams for ages 4-16'
    },
    {
      id: 'soccer-coed',
      name: 'Soccer - Co-ed',
      ages: '3-10',
      price: '$150',
      icon: '⚽',
      color: 'from-green-500 to-green-600',
      description: 'Co-ed soccer league for young players'
    },
    {
      id: 'speed-training',
      name: 'Speed Training',
      ages: '8-16',
      price: '$200',
      icon: '🏃',
      color: 'from-blue-500 to-blue-600',
      description: 'Professional speed and agility training'
    },
    {
      id: 'tournament',
      name: '7-on-7 Tournament',
      ages: '10-16',
      price: '$75',
      icon: '🏆',
      color: 'from-purple-500 to-purple-600',
      description: 'Competitive tournament play'
    }
  ];

  const locations = [
    { id: 'ella-banks', name: 'Ella Banks Junior High', address: 'Katy, TX' },
    { id: 'briscoe', name: 'Briscoe Junior High', address: 'Richmond, TX' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: {[key: string]: string} = {};

    if (step === 1) {
      if (!selectedProgram) {
        newErrors.program = 'Please select a program';
      }
    }

    if (step === 2) {
      if (!formData.playerName.trim()) {
        newErrors.playerName = 'Player name is required';
      }
      if (!formData.playerAge) {
        newErrors.playerAge = 'Player age is required';
      } else if (parseInt(formData.playerAge) < 3 || parseInt(formData.playerAge) > 16) {
        newErrors.playerAge = 'Player must be between 3 and 16 years old';
      }
    }

    if (step === 3) {
      if (!formData.parentName.trim()) {
        newErrors.parentName = 'Parent name is required';
      }
      if (!formData.parentEmail.trim()) {
        newErrors.parentEmail = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.parentEmail)) {
        newErrors.parentEmail = 'Please enter a valid email address';
      }
      if (!formData.parentPhone.trim()) {
        newErrors.parentPhone = 'Phone number is required';
      }
      if (!formData.location) {
        newErrors.location = 'Please select a preferred location';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
      // Scroll to top on mobile
      if (window.innerWidth < 768) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    // Scroll to top on mobile
    if (window.innerWidth < 768) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(4)) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Registration submitted:', { selectedProgram, formData });
      
      // Redirect to success page or show success message
      alert('Registration submitted successfully! You will receive a confirmation email shortly.');
      
    } catch (error) {
      console.error('Registration error:', error);
      alert('There was an error submitting your registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStepProgress = () => {
    return (currentStep / 4) * 100;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header */}
      <section className="gradient-section">
        <div className="container-max section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Register Your Player
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join the Quad Sports family and give your child the opportunity to learn, grow, and have fun through sports
            </p>

            {/* Enhanced Progress Steps */}
            <div className="mb-8">
              <div className="flex justify-center items-center space-x-4 mb-4">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                      step <= currentStep
                        ? 'bg-red-600 text-white shadow-lg'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {step}
                    </div>
                    {step < 4 && (
                      <div className={`w-16 h-1 mx-2 transition-all duration-300 ${
                        step < currentStep ? 'bg-red-600' : 'bg-gray-200'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 max-w-md mx-auto">
                <div 
                  className="bg-gradient-to-r from-red-600 to-red-700 h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${getStepProgress()}%` }}
                ></div>
              </div>
            </div>

            <div className="text-sm text-gray-500">
              Step {currentStep} of 4: {
                currentStep === 1 ? 'Choose Program' :
                currentStep === 2 ? 'Player Information' :
                currentStep === 3 ? 'Parent Information' :
                'Review & Payment'
              }
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Step 1: Program Selection */}
              {currentStep === 1 && (
                <div className="card-premium">
                  <div className="p-6 border-b border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900">Choose Your Program</h2>
                    <p className="text-gray-600 mt-1">Select the sport and program that best fits your child</p>
                  </div>
                  <div className="p-6">
                    {errors.program && (
                      <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                        {errors.program}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {programs.map((program) => (
                        <div
                          key={program.id}
                          onClick={() => setSelectedProgram(program.id)}
                          className={`border-2 rounded-2xl p-6 cursor-pointer transition-all duration-200 ${
                            selectedProgram === program.id
                              ? 'border-red-500 bg-red-50 shadow-lg scale-105'
                              : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                          }`}
                        >
                          <div className="flex items-start space-x-4">
                            <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center`}>
                              <span className="text-white text-2xl">{program.icon}</span>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-gray-900 text-lg">{program.name}</h3>
                              <p className="text-gray-600 text-sm mt-1">{program.description}</p>
                              <div className="flex items-center justify-between mt-4">
                                <div className="text-sm text-gray-500">Ages: {program.ages}</div>
                                <div className="font-bold text-gray-900">{program.price}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex justify-end">
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!selectedProgram}
                        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Continue to Player Info →
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Player Information */}
              {currentStep === 2 && (
                <div className="card-premium">
                  <div className="p-6 border-b border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900">Player Information</h2>
                    <p className="text-gray-600 mt-1">Tell us about the player you're registering</p>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Player's Full Name *
                        </label>
                        <input
                          type="text"
                          name="playerName"
                          value={formData.playerName}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-200 ${
                            errors.playerName ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                          }`}
                          placeholder="Enter player's full name"
                        />
                        {errors.playerName && (
                          <p className="mt-1 text-sm text-red-600">{errors.playerName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Age *
                        </label>
                        <input
                          type="number"
                          name="playerAge"
                          value={formData.playerAge}
                          onChange={handleInputChange}
                          required
                          min="3"
                          max="16"
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-200 ${
                            errors.playerAge ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                          }`}
                          placeholder="Enter age"
                        />
                        {errors.playerAge && (
                          <p className="mt-1 text-sm text-red-600">{errors.playerAge}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Gender
                        </label>
                        <select
                          name="playerGender"
                          value={formData.playerGender}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white"
                        >
                          <option value="">Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Experience Level
                        </label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white"
                        >
                          <option value="">Select experience level</option>
                          <option value="beginner">Beginner (First time playing)</option>
                          <option value="intermediate">Intermediate (Some experience)</option>
                          <option value="advanced">Advanced (Regular player)</option>
                        </select>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Medical Information
                        </label>
                        <textarea
                          name="medicalInfo"
                          value={formData.medicalInfo}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-500 bg-white"
                          placeholder="Any medical conditions, allergies, or special needs we should know about?"
                        />
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="btn-outline"
                      >
                        ← Back to Programs
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!formData.playerName || !formData.playerAge}
                        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Continue to Parent Info →
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Parent Information */}
              {currentStep === 3 && (
                <div className="card-premium">
                  <div className="p-6 border-b border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900">Parent/Guardian Information</h2>
                    <p className="text-gray-600 mt-1">Contact information for the parent or guardian</p>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Parent/Guardian Name *
                        </label>
                        <input
                          type="text"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-200 ${
                            errors.parentName ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                          }`}
                          placeholder="Enter parent/guardian name"
                        />
                        {errors.parentName && (
                          <p className="mt-1 text-sm text-red-600">{errors.parentName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="parentEmail"
                          value={formData.parentEmail}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-200 ${
                            errors.parentEmail ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                          }`}
                          placeholder="Enter email address"
                        />
                        {errors.parentEmail && (
                          <p className="mt-1 text-sm text-red-600">{errors.parentEmail}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="parentPhone"
                          value={formData.parentPhone}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-200 ${
                            errors.parentPhone ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                          }`}
                          placeholder="Enter phone number"
                        />
                        {errors.parentPhone && (
                          <p className="mt-1 text-sm text-red-600">{errors.parentPhone}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Emergency Contact
                        </label>
                        <input
                          type="text"
                          name="emergencyContact"
                          value={formData.emergencyContact}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-500 bg-white"
                          placeholder="Emergency contact name & phone"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Location *
                        </label>
                        <select
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 transition-all duration-200 ${
                            errors.location ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                          }`}
                        >
                          <option value="">Select preferred location</option>
                          {locations.map((location) => (
                            <option key={location.id} value={location.id}>
                              {location.name} - {location.address}
                            </option>
                          ))}
                        </select>
                        {errors.location && (
                          <p className="mt-1 text-sm text-red-600">{errors.location}</p>
                        )}
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="btn-outline"
                      >
                        ← Back to Player Info
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!formData.parentName || !formData.parentEmail || !formData.parentPhone || !formData.location}
                        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Review & Payment →
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Review & Payment */}
              {currentStep === 4 && (
                <div className="card-premium">
                  <div className="p-6 border-b border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900">Review & Payment</h2>
                    <p className="text-gray-600 mt-1">Review your registration details and complete payment</p>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Registration Summary */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Registration Summary</h3>
                        <div className="space-y-4">
                          <div className="border border-gray-200 rounded-xl p-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                                <span className="text-white text-xl">🏈</span>
                              </div>
                              <div>
                                <div className="font-semibold text-gray-900">
                                  {programs.find(p => p.id === selectedProgram)?.name}
                                </div>
                                <div className="text-sm text-gray-600">
                                  Player: {formData.playerName} (Age: {formData.playerAge})
                                </div>
                                <div className="text-sm text-gray-600">
                                  Location: {locations.find(l => l.id === formData.location)?.name}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-gray-50 rounded-xl p-4">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-gray-900">Registration Fee:</span>
                              <span className="font-bold text-gray-900">
                                {programs.find(p => p.id === selectedProgram)?.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Payment Form */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Payment Information</h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Card Number
                            </label>
                            <input
                              type="text"
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-500 bg-white"
                              placeholder="1234 5678 9012 3456"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Expiry Date
                              </label>
                              <input
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-500 bg-white"
                                placeholder="MM/YY"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                CVV
                              </label>
                              <input
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-500 bg-white"
                                placeholder="123"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Cardholder Name
                            </label>
                            <input
                              type="text"
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-500 bg-white"
                              placeholder="Name on card"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="btn-outline"
                      >
                        ← Back to Parent Info
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Processing...</span>
                          </div>
                        ) : (
                          'Complete Registration'
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
