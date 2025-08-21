import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container-max section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              OUR CAUSE
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Building character, community, and champions through youth sports
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Quad Sports is dedicated to providing quality youth sports programs that promote physical fitness, teamwork, character development, and community involvement. We believe that every child deserves the opportunity to participate in organized sports regardless of their skill level or financial situation.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                As a non-profit organization, we reinvest all proceeds back into our programs, facilities, and community initiatives. Our goal is to create a positive, inclusive environment where children can learn valuable life skills through sports.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Inclusive programs for all skill levels</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Experienced and certified coaches</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Affordable pricing and scholarships available</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-200 mr-3">•</span>
                    <span><strong>Character:</strong> Teaching respect, integrity, and sportsmanship</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-200 mr-3">•</span>
                    <span><strong>Community:</strong> Building connections and fostering local pride</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-200 mr-3">•</span>
                    <span><strong>Excellence:</strong> Striving for personal and team improvement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-200 mr-3">•</span>
                    <span><strong>Inclusion:</strong> Welcoming all children regardless of background</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Community Involvement
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're proud to be an active part of the Katy, Richmond, Rosenberg and Fulshear communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Local Schools */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏫</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Schools</h3>
              <p className="text-gray-600">
                Partnering with local schools to provide after-school sports programs and facility access for our community.
              </p>
            </div>

            {/* Youth Development */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Youth Development</h3>
              <p className="text-gray-600">
                Focused on developing not just athletic skills, but also leadership, teamwork, and character in young athletes.
              </p>
            </div>

            {/* Family Engagement */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Family Engagement</h3>
              <p className="text-gray-600">
                Creating opportunities for families to come together, volunteer, and support their children's athletic journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Making a difference in the lives of children and families across our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <p className="text-gray-600">Children served annually</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
              <p className="text-gray-600">Sports programs offered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">2</div>
              <p className="text-gray-600">Convenient locations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <p className="text-gray-600">Non-profit organization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to youth development and community service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 text-2xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Executive Director</h3>
              <p className="text-gray-600 mb-4">
                Leading our organization with over 15 years of youth sports experience and a passion for community development.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 text-2xl">🏃‍♂️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Head Coach</h3>
              <p className="text-gray-600 mb-4">
                Collegiate Track & Field Hall of Famer and Olympic Trial Qualifier with expertise in speed and agility training.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Volunteer Staff</h3>
              <p className="text-gray-600 mb-4">
                Dedicated parents and community members who give their time to support our programs and events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-red-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Help us continue building character, community, and champions through youth sports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="bg-white text-red-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
              Register Your Child
            </Link>
            <Link href="/volunteer" className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold py-3 px-8 rounded-lg transition-colors">
              Volunteer With Us
            </Link>
            <Link href="/donate" className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold py-3 px-8 rounded-lg transition-colors">
              Make a Donation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
