import React, { useState } from 'react';
import { Clock, Coffee, MapPin, Users, Truck, Award, PlayCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const LifeAtGenvex = () => {
  const [activeTab, setActiveTab] = useState('typical-day');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const teamPhotos = [
    {
      title: "Our Delivery Fleet",
      description: "Modern, well-maintained vehicles equipped with the latest delivery technology",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop"
    },
    {
      title: "Team Meeting",
      description: "Daily briefings ensure everyone is prepared and supported",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    },
    {
      title: "Loading Station",
      description: "Organized and efficient package sorting and loading process",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop"
    }
  ];

  const dailySchedule = [
    { time: "6:30 AM", activity: "Arrive at depot, safety check", icon: Coffee },
    { time: "7:00 AM", activity: "Team briefing and route planning", icon: Users },
    { time: "7:30 AM", activity: "Vehicle inspection and loading", icon: Truck },
    { time: "8:00 AM", activity: "Start delivery route", icon: MapPin },
    { time: "2:00 PM", activity: "Lunch break and vehicle check", icon: Coffee },
    { time: "2:30 PM", activity: "Afternoon deliveries", icon: MapPin },
    { time: "5:30 PM", activity: "Return to depot, end-of-day procedures", icon: Award }
  ];

  return (
    <section id="life" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Life at GENVEX Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover what it's really like to work with Hamburg's premier delivery team. 
            From daily routines to team culture, get an inside look at your future workplace.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 space-x-4">
          <Button
            onClick={() => setActiveTab('typical-day')}
            variant={activeTab === 'typical-day' ? 'default' : 'outline'}
            className={`mb-2 transition-colors duration-200 ${
              activeTab === 'typical-day' 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'border-blue-600 text-blue-600 hover:bg-blue-50'
            }`}
          >
            <Clock className="h-4 w-4 mr-2" />
            Typical Day
          </Button>
          <Button
            onClick={() => setActiveTab('team-photos')}
            variant={activeTab === 'team-photos' ? 'default' : 'outline'}
            className={`mb-2 transition-colors duration-200 ${
              activeTab === 'team-photos' 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'border-blue-600 text-blue-600 hover:bg-blue-50'
            }`}
          >
            <Users className="h-4 w-4 mr-2" />
            Team & Fleet
          </Button>
        </div>

        {/* Typical Day Tab */}
        {activeTab === 'typical-day' && (
          <div className="space-y-8">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Clock className="h-6 w-6 mr-2 text-blue-600" />
                  A Day in the Life of a GENVEX Driver
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {dailySchedule.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <item.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <Badge className="bg-blue-600 text-white mb-2">
                              {item.time}
                            </Badge>
                            <p className="text-gray-800 font-medium">{item.activity}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What Makes Our Workday Special
                  </h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Flexibility:</strong> Routes are planned efficiently to minimize stress</li>
                    <li>• <strong>Support:</strong> Always connected to our dispatch team for assistance</li>
                    <li>• <strong>Technology:</strong> Advanced GPS and delivery apps make navigation easy</li>
                    <li>• <strong>Community:</strong> Build relationships with regular customers</li>
                    <li>• <strong>Achievement:</strong> See the direct impact of your work every day</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Team Photos Tab */}
        {activeTab === 'team-photos' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {teamPhotos.map((photo, index) => (
                <Card key={index} className="shadow-lg border-0 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <Truck className="h-16 w-16 text-blue-600" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {photo.title}
                    </h3>
                    <p className="text-gray-600">
                      {photo.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Video Section */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-12 mb-6">
                  <PlayCircle className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Watch: Life as a GENVEX Driver
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Coming Soon: An inside look at what it's really like to be part of our team
                  </p>
                  <Badge className="bg-blue-100 text-blue-800">
                    Video Available Soon
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Culture Highlights */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Team Spirit</h3>
              <p className="text-sm text-gray-600">Strong bonds and mutual support</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Recognition</h3>
              <p className="text-sm text-gray-600">Regular appreciation and rewards</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Truck className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Modern Fleet</h3>
              <p className="text-sm text-gray-600">Well-maintained, reliable vehicles</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Coffee className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Work-Life Balance</h3>
              <p className="text-sm text-gray-600">Structured schedules, fair hours</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Team?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Experience the difference of working with a company that values its drivers and 
            invests in their success. Your career in delivery starts here.
          </p>
          <Button 
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 transition-colors duration-200"
          >
            Start Your Application Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LifeAtGenvex;