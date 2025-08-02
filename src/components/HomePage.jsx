import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Network, Shield, Users, Award, ArrowRight, Play, Code, Laptop, Calendar, MapPin } from 'lucide-react';

// HomePage component props:
// - onNavigate: function - callback to navigate to different pages
export function HomePage({ onNavigate }) {
  const features = [
    {
      icon: Network,
      title: 'Networking Workshops',
      description: 'Free hands-on workshops covering routing, switching, and network fundamentals.'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Events',
      description: 'Learn ethical hacking, network security, and cyber defense through practical labs.'
    },
    {
      icon: Code,
      title: 'Programming & Web Dev',
      description: 'Build web applications, learn Python, and explore automation technologies.'
    },
    {
      icon: Laptop,
      title: 'AI & IoT Projects',
      description: 'Work on cutting-edge projects in artificial intelligence and Internet of Things.'
    }
  ];

  const upcomingEvents = [
    {
      title: 'CCNA Preparation Workshop',
      date: 'Feb 15, 2025',
      time: '2:00 PM',
      location: 'Lab 101',
      type: 'Workshop'
    },
    {
      title: 'Cybersecurity Hackathon',
      date: 'Feb 22, 2025',
      time: '9:00 AM',
      location: 'Main Hall',
      type: 'Hackathon'
    },
    {
      title: 'Web Development Bootcamp',
      date: 'Mar 1, 2025',
      time: '10:00 AM',
      location: 'Computer Lab',
      type: 'Bootcamp'
    }
  ];

  const stats = [
    { number: '500+', label: 'Active Students' },
    { number: '100%', label: 'Free Access' },
    { number: '50+', label: 'Monthly Events' },
    { number: '15+', label: 'Tech Domains' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop"
            alt="Students learning together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 cisco-gradient opacity-80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mr-6 backdrop-blur-sm">
              <Network className="w-10 h-10 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
                Cisco NetAcad
                <br />
                <span className="text-blue-200">@ Campus</span>
              </h1>
            </div>
          </div>
          <p className="mb-4 text-lg md:text-xl opacity-90 max-w-2xl mx-auto animate-fade-in">
            Join our vibrant tech community! Free workshops, hackathons, and certification events 
            across networking, cybersecurity, AI, web development, IoT, and more.
          </p>
          <p className="mb-8 text-base md:text-lg opacity-80 max-w-2xl mx-auto animate-fade-in">
            <strong>100% Free</strong> • Open to All Students • Industry Exposure • Skill Building
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              onClick={() => onNavigate('register')}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Join Free Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('events')}
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              <Calendar className="mr-2 w-5 h-5" />
              View Events
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Open Access Tech Education
            </h2>
            <p className="text-lg text-gray-600">
              Building skills, fostering innovation, creating opportunities - all completely free for students
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-gray-900">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore diverse tech domains through hands-on learning experiences. 
              All our events are free and designed to build real-world skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 cisco-shadow bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 cisco-gradient rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-gray-900">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our community events and workshops. All events are free and open to students from all branches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card
                key={event.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 cisco-shadow bg-white animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {event.type}
                    </span>
                    <span className="text-sm text-gray-500 font-medium">FREE</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-200">
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      {event.date} at {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      {event.location}
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-4 bg-primary hover:bg-primary/90 transition-all duration-200"
                    onClick={() => onNavigate('events')}
                  >
                    Register Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => onNavigate('events')}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              View All Events
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="mb-6 text-3xl md:text-4xl font-bold text-gray-900">
                Join Our Tech Community
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Connect with fellow students passionate about technology. Our academy fosters collaboration, 
                innovation, and continuous learning through peer-to-peer interaction and mentorship.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 cisco-gradient rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Student-led learning community</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 cisco-gradient rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Industry exposure and certification prep</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 cisco-gradient rounded-full flex items-center justify-center">
                    <Code className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Hands-on projects and hackathons</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 cisco-gradient rounded-full flex items-center justify-center">
                    <Network className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Cross-domain collaboration opportunities</span>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Students collaborating"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 cisco-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl md:text-4xl font-bold text-white">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="mb-8 text-lg text-blue-100 max-w-2xl mx-auto">
            Join hundreds of students already part of our free tech community. 
            No fees, no prerequisites - just your enthusiasm to learn and grow!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => onNavigate('register')}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Register Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('about')}
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}