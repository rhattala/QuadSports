import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container-max section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Get in touch with our team for questions, registration, or support
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600 mb-1">
                      <a href="tel:832-280-7660" className="hover:text-red-600 transition-colors">
                        832-280-7660
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">Monday - Friday, 9:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600 mb-1">
                      <a href="mailto:quadsportsinfo@gmail.com" className="hover:text-red-600 transition-colors">
                        quadsportsinfo@gmail.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Locations</h3>
                    <div className="space-y-2">
                      <p className="text-gray-600">
                        <strong>Ella Banks Junior High</strong><br />
                        24945 Easton Ramsey Way<br />
                        Richmond, TX 77406
                      </p>
                      <p className="text-gray-600">
                        <strong>Briscoe Junior High</strong><br />
                        4300 Farm to Market Rd 723<br />
                        Richmond, TX 77406
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Office Hours</h3>
                    <p className="text-gray-600">
                      <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM<br />
                      <strong>Saturday:</strong> 9:00 AM - 12:00 PM (Game Days)<br />
                      <strong>Sunday:</strong> 2:00 PM - 5:00 PM (Game Days)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="registration">Registration Questions</option>
                    <option value="programs">Program Information</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="donation">Donation Information</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Follow Us
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Stay connected with Quad Sports for the latest updates, photos, and community news
          </p>
          
          <div className="flex justify-center space-x-8">
            <a
              href="https://www.facebook.com/quadsportstx/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl">📘</span>
              </div>
              <span className="font-semibold text-gray-900">Facebook</span>
            </a>

            <a
              href="https://www.instagram.com/quadsportstx/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl">📷</span>
              </div>
              <span className="font-semibold text-gray-900">Instagram</span>
            </a>

            <a
              href="https://twitter.com/QuadSportsTX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🐦</span>
              </div>
              <span className="font-semibold text-gray-900">Twitter</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our programs and registration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What ages can participate?
                </h3>
                <p className="text-gray-600">
                  Our programs are open to children ages 3-16, with age-appropriate divisions for each sport.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How much does registration cost?
                </h3>
                <p className="text-gray-600">
                  Registration fees start at $100 per program. We offer payment plans and scholarships for families in need.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What equipment is provided?
                </h3>
                <p className="text-gray-600">
                  We provide all necessary equipment including jerseys, balls, and safety gear. Players just need comfortable athletic shoes.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  When are games and practices?
                </h3>
                <p className="text-gray-600">
                  Games are typically held on weekends, with practices during the week. Specific schedules vary by program and location.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I volunteer as a coach?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We welcome parent and community volunteers. Training and support are provided for all coaches.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What if my child has never played sports?
                </h3>
                <p className="text-gray-600">
                  No experience is required! Our programs are designed for all skill levels, from beginners to experienced players.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/faq" className="btn-outline">
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
