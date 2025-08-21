import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Locations() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container-max section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Choose Your Location
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              We now offer 2 convenient locations to serve our community
            </p>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Ella Banks Junior High */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🏫</div>
                  <h2 className="text-3xl font-bold">Ella Banks Junior High</h2>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600">
                    24945 Easton Ramsey Way<br />
                    Richmond, TX 77406
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Programs Available</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Flag Football (Ages 4-16)
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Soccer (Ages 3-10)
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Speed Training
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      7 on 7 Tournament
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Schedule</h3>
                  <p className="text-gray-600">
                    <strong>Flag Football:</strong> Sundays 2:00 PM - 5:00 PM<br />
                    <strong>Soccer:</strong> Saturdays 9:00 AM - 12:00 PM<br />
                    <strong>Speed Training:</strong> Wednesdays 6:00 PM - 7:00 PM
                  </p>
                </div>

                <Link href="/register" className="btn-primary w-full text-center text-lg py-4">
                  Sign Up Now
                </Link>
              </div>
            </div>

            {/* Briscoe Junior High */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🏫</div>
                  <h2 className="text-3xl font-bold">Briscoe Junior High</h2>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600">
                    4300 Farm to Market Rd 723<br />
                    Richmond, TX 77406
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Programs Available</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2">✓</span>
                      Flag Football (Ages 4-16)
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2">✓</span>
                      Soccer (Ages 3-10)
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2">✓</span>
                      Speed Training
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2">✓</span>
                      7 on 7 Tournament
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Schedule</h3>
                  <p className="text-gray-600">
                    <strong>Flag Football:</strong> Sundays 2:00 PM - 5:00 PM<br />
                    <strong>Soccer:</strong> Saturdays 9:00 AM - 12:00 PM<br />
                    <strong>Speed Training:</strong> Wednesdays 6:00 PM - 7:00 PM
                  </p>
                </div>

                <Link href="/register" className="btn-primary w-full text-center text-lg py-4">
                  Sign Up Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Both locations are easily accessible and offer ample parking for families
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ella Banks Map */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">🗺️</div>
                  <p className="text-gray-600">Interactive Map Coming Soon</p>
                  <p className="text-sm text-gray-500 mt-2">Ella Banks Junior High</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Getting There</h3>
                <p className="text-gray-600 text-sm">
                  Located off Easton Ramsey Way, just minutes from major highways. 
                  Ample parking available in the school parking lot.
                </p>
              </div>
            </div>

            {/* Briscoe Map */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">🗺️</div>
                  <p className="text-gray-600">Interactive Map Coming Soon</p>
                  <p className="text-sm text-gray-500 mt-2">Briscoe Junior High</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Getting There</h3>
                <p className="text-gray-600 text-sm">
                  Conveniently located on Farm to Market Rd 723. 
                  Easy access from Katy, Richmond, and surrounding areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Choose Your Location?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Both locations offer the same high-quality programs and experienced coaching staff.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
              Register Now
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
