import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Dashboard Header */}
      <section className="gradient-section">
        <div className="container-max section-padding">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                My Dashboard
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Manage your registrations, teams, and payments all in one place
              </p>
            </div>
            <div className="mt-6 lg:mt-0">
              <Link href="/register" className="btn-primary text-lg px-8 py-4">
                🏈 Register New Player
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-premium p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-900">3</div>
                  <div className="text-gray-600">Active Players</div>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
              </div>
            </div>
            
            <div className="card-premium p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-900">2</div>
                  <div className="text-gray-600">Teams</div>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
              </div>
            </div>
            
            <div className="card-premium p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-900">$450</div>
                  <div className="text-gray-600">Total Paid</div>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💳</span>
                </div>
              </div>
            </div>
            
            <div className="card-premium p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-900">5</div>
                  <div className="text-gray-600">Upcoming Games</div>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📅</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard Content */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Active Registrations */}
            <div className="lg:col-span-2">
              <div className="card-premium">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900">Active Registrations</h2>
                  <p className="text-gray-600 mt-1">Your current player registrations</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {/* Registration Card 1 */}
                    <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                            <span className="text-white text-xl">🏈</span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Emma Johnson</div>
                            <div className="text-sm text-gray-600">Flag Football - Girls 8-10</div>
                            <div className="text-xs text-green-600 font-medium">✓ Registration Complete</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-gray-900">$150</div>
                          <div className="text-sm text-gray-600">Paid</div>
                        </div>
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <Link href="/my-teams" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                          View Team →
                        </Link>
                        <Link href="/schedule" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                          View Schedule →
                        </Link>
                      </div>
                    </div>

                    {/* Registration Card 2 */}
                    <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                            <span className="text-white text-xl">⚽</span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Lucas Johnson</div>
                            <div className="text-sm text-gray-600">Soccer - Co-ed 6-8</div>
                            <div className="text-xs text-green-600 font-medium">✓ Registration Complete</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-gray-900">$150</div>
                          <div className="text-sm text-gray-600">Paid</div>
                        </div>
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <Link href="/my-teams" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                          View Team →
                        </Link>
                        <Link href="/schedule" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                          View Schedule →
                        </Link>
                      </div>
                    </div>

                    {/* Registration Card 3 */}
                    <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                            <span className="text-white text-xl">🏃</span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Mia Johnson</div>
                            <div className="text-sm text-gray-600">Speed Training - Ages 10-12</div>
                            <div className="text-xs text-green-600 font-medium">✓ Registration Complete</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-gray-900">$150</div>
                          <div className="text-sm text-gray-600">Paid</div>
                        </div>
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <Link href="/my-teams" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                          View Schedule →
                        </Link>
                        <Link href="/payments" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                          View Details →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions & Upcoming Events */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="card-premium">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900">Quick Actions</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    <Link href="/register" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-xl">🏈</span>
                      <div>
                        <div className="font-medium text-gray-900">Register New Player</div>
                        <div className="text-sm text-gray-600">Add another player to your family</div>
                      </div>
                    </Link>
                    <Link href="/payments" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-xl">💳</span>
                      <div>
                        <div className="font-medium text-gray-900">Make Payment</div>
                        <div className="text-sm text-gray-600">Pay outstanding balances</div>
                      </div>
                    </Link>
                    <Link href="/volunteer" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-xl">👥</span>
                      <div>
                        <div className="font-medium text-gray-900">Volunteer</div>
                        <div className="text-sm text-gray-600">Sign up to help with teams</div>
                      </div>
                    </Link>
                    <Link href="/contact" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-xl">📞</span>
                      <div>
                        <div className="font-medium text-gray-900">Get Support</div>
                        <div className="text-sm text-gray-600">Contact us for help</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="card-premium">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900">Upcoming Events</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-500 pl-4">
                      <div className="font-semibold text-gray-900">Flag Football Game</div>
                      <div className="text-sm text-gray-600">Saturday, Oct 15 • 2:00 PM</div>
                      <div className="text-sm text-gray-600">Ella Banks Junior High</div>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <div className="font-semibold text-gray-900">Soccer Practice</div>
                      <div className="text-sm text-gray-600">Tuesday, Oct 17 • 5:30 PM</div>
                      <div className="text-sm text-gray-600">Briscoe Junior High</div>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <div className="font-semibold text-gray-900">Speed Training</div>
                      <div className="text-sm text-gray-600">Thursday, Oct 19 • 4:00 PM</div>
                      <div className="text-sm text-gray-600">Ella Banks Junior High</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href="/schedules" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                      View Full Schedule →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
