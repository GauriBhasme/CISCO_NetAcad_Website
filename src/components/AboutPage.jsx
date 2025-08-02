import React from 'react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Target, Eye, Users, CheckCircle, Network, Award, Code, Laptop } from 'lucide-react';

// AboutPage component props:
// - onNavigate: function - callback to navigate to different pages
export function AboutPage({ onNavigate }) {
  const teamMembers = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Faculty Coordinator',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b3c4?w=300&h=300&fit=crop&face=top',
      description: 'Guiding our student-led academy and connecting with industry partners'
    },
    {
      name: 'Michael Chen',
      role: 'Student President',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&face=top',
      description: 'Leading networking workshops and organizing certification events'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Events Coordinator',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&face=top',
      description: 'Organizing hackathons, workshops, and community-building activities'
    },
    {
      name: 'David Kim',
      role: 'Cybersecurity Lead',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&face=top',
      description: 'Running cybersecurity workshops and ethical hacking sessions'
    },
    {
      name: 'Jessica Thompson',
      role: 'Web Dev Mentor',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&face=top',
      description: 'Teaching web development and guiding student projects'
    },
    {
      name: 'Alex Martinez',
      role: 'AI/IoT Coordinator',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&face=top',
      description: 'Leading AI and IoT workshops and research projects'
    }
  ];

  const missionPoints = [
    'Provide free, accessible tech education to all students',
    'Foster collaborative learning across different branches',
    'Organize hands-on workshops, hackathons, and projects',
    'Build industry connections and career guidance',
    'Create an inclusive community for tech enthusiasts',
    'Support students in skill development and certification prep'
  ];

  const academyFeatures = [
    {
      icon: Network,
      title: 'Free Workshops',
      description: '100% free tech workshops covering networking, cybersecurity, programming, and more'
    },
    {
      icon: Award,
      title: 'Hackathons & Events',
      description: 'Regular hackathons, competitions, and collaborative events for hands-on learning'
    },
    {
      icon: Code,
      title: 'Multi-Domain Focus',
      description: 'Cover diverse tech fields: AI, web dev, IoT, cybersecurity, networking, and emerging tech'
    },
    {
      icon: Laptop,
      title: 'Student Community',
      description: 'Student-led academy fostering peer learning and collaborative skill building'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 cisco-gradient overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=600&fit=crop"
            alt="Students learning together"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-4">
              <Network className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white animate-fade-in">
                Cisco NetAcad @ Campus
              </h1>
              <p className="text-xl text-blue-100">Free Tech Community for Students</p>
            </div>
          </div>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto animate-fade-in">
            Building skills, fostering innovation, and creating opportunities through free tech education
          </p>
        </div>
      </section>

      {/* Academy Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What Makes Us Special
            </h2>
            <p className="text-lg text-gray-600">
              A student-driven community focused on accessible tech education and skill building
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {academyFeatures.map((feature, index) => (
              <Card
                key={feature.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 cisco-shadow bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 cisco-gradient rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 cisco-gradient rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Who We Are?
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are a <strong>college-run Cisco Networking Academy</strong> that organizes free and open-access 
                tech workshops, hackathons, and certification events. Our academy serves students from all branches 
                and backgrounds, creating an inclusive environment for learning and growth.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As a student-led community, we focus on peer-to-peer learning and collaborative skill building 
                across various technology domains including networking, cybersecurity, AI, web development, 
                IoT, and emerging technologies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                <strong>100% Free Access:</strong> All our workshops, events, and resources are completely free 
                for students. We believe that quality tech education should be accessible to everyone, regardless 
                of their financial background or branch of study.
              </p>
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

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop"
                alt="Students working on projects"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2 animate-slide-in">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 cisco-gradient rounded-xl flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Our Vision
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a campus where every student has access to quality tech education and opportunities 
                to explore their interests in technology. Through our student community, we aim to empower 
                learners to become skilled professionals and innovators who can contribute meaningfully to the 
                tech industry. Our vision is to create a vibrant ecosystem where students learn together, 
                build together, and grow together through hands-on experiences, mentorship, and collaborative 
                projects that prepare them for successful careers in technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 cisco-gradient rounded-xl flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Mission
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Our mission is to democratize tech education by providing free, high-quality learning 
              opportunities that foster collaboration, innovation, and leadership among students:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {missionPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl cisco-shadow hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                </div>
                <p className="text-gray-700 leading-relaxed font-medium">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-gray-900">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our passionate team of students and faculty work together to create engaging 
              learning experiences and foster a supportive tech community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 cisco-shadow bg-white animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 relative">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 w-24 h-24 rounded-full cisco-gradient opacity-20 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 cisco-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl md:text-4xl font-bold text-white">
            Ready to Join Our Community?
          </h2>
          <p className="mb-8 text-lg text-blue-100 max-w-2xl mx-auto">
            Become part of our vibrant tech community! Connect with fellow students, 
            attend free workshops, and build skills that matter in today's digital world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('register')}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Join Free Now
            </button>
            <button
              onClick={() => onNavigate('events')}
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              View Events
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}