import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white min-h-screen flex items-center overflow-hidden">
        <div className="container-max py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-8">
              GET INTO THE GAME
            </h1>
            <p className="text-2xl md:text-3xl mb-12 text-red-100 font-light leading-relaxed max-w-3xl mx-auto">
              Premier youth sports league for <span className="font-semibold text-white">Katy, Richmond, Rosenberg</span> and <span className="font-semibold text-white">Fulshear, Texas</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/register" className="btn-secondary text-lg px-10 py-5">
                REGISTER NOW
              </Link>
              <Link href="/locations" className="btn-outline text-lg px-10 py-5 border-white text-white hover:bg-white hover:text-red-600">
                VIEW LOCATIONS
              </Link>
            </div>
            
            {/* Stats Pills */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-red-100 text-sm">Active Players</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-red-100 text-sm">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-white">4</div>
                <div className="text-red-100 text-sm">Sports Programs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-white">2</div>
                <div className="text-red-100 text-sm">Campus Locations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Programs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sports Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our co-ed and girls-only programs designed for players of all skill levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Flag Football */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🏈</div>
                  <h3 className="text-xl font-bold">FLAG FOOTBALL</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Join our Co-ed or Girls Only, NFL Flag Football team, for players ages 4-16.
                </p>
                <p className="text-gray-800 font-semibold mb-4">
                  Prices starting at $100
                </p>
                <Link href="/register" className="btn-primary w-full text-center">
                  Register
                </Link>
              </div>
            </div>

            {/* Soccer */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">⚽</div>
                  <h3 className="text-xl font-bold">SOCCER</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Become a member of our co-ed soccer league. Open to kids ages 3-10.
                </p>
                <p className="text-gray-800 font-semibold mb-4">
                  Prices starting at $100
                </p>
                <Link href="/register" className="btn-primary w-full text-center">
                  Register
                </Link>
              </div>
            </div>

            {/* Speed Training */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🏃</div>
                  <h3 className="text-xl font-bold">SPEED TRAINING</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Improve your child's speed and agility with sessions conducted by a Collegiate Track & Field Hall of Famer/Olympic Trial Qualifier.
                </p>
                <Link href="/register" className="btn-primary w-full text-center">
                  Register
                </Link>
              </div>
            </div>

            {/* Tournament */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🏆</div>
                  <h3 className="text-xl font-bold">7 ON 7 TOURNAMENT</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Become one of the 7. Join our competitive, two-hand touch tournament.
                </p>
                <Link href="/register" className="btn-primary w-full text-center">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Quad Sports</h2>
              <p className="text-lg text-gray-600 mb-6">
                Quad Sports is the premier non-profit youth sports league serving the Katy, Richmond, Rosenberg and Fulshear, Texas area. We're dedicated to providing quality sports programs that promote physical fitness, teamwork, and character development.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Co-ed and girls-only programs</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Ages 3-16 welcome</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Professional coaching staff</span>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/about" className="btn-outline">
                  Learn More About Our Cause
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Quad Sports?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-200 mr-3">•</span>
                    <span>Non-profit organization focused on community</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-200 mr-3">•</span>
                    <span>Experienced coaches and staff</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-200 mr-3">•</span>
                    <span>Multiple locations for convenience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-200 mr-3">•</span>
                    <span>Affordable pricing starting at $100</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Join hundreds of families who have chosen Quad Sports for their children's athletic development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="bg-white text-red-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
              Register Your Child
            </Link>
            <Link href="/volunteer" className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold py-3 px-8 rounded-lg transition-colors">
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}