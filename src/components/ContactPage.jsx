import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Network, Users, Calendar, Award } from 'lucide-react';

// ContactPage component props:
// - onNavigate: function - callback to navigate to different pages
export function ContactPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });

  const categories = [
    'General Inquiry',
    'Event Suggestion',
    'Workshop Request',
    'Technical Support',
    'Partnership Opportunity',
    'Volunteer/Join Team',
    'Feedback',
    'Other'
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'netacad@campus.edu',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri, 9:00 AM - 5:00 PM'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Room 205, Engineering Building',
      description: 'Campus Tech Center'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: 'Mon-Fri: 9:00 AM - 5:00 PM',
      description: 'Walk-ins welcome'
    }
  ];

  const teamContacts = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Faculty Coordinator',
      email: 'sarah.mitchell@campus.edu',
      phone: '+1 (555) 123-4571',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b3c4?w=150&h=150&fit=crop&face=top',
      specialties: ['Academic Partnerships', 'Curriculum Development']
    },
    {
      name: 'Michael Chen',
      role: 'Student President',
      email: 'michael.chen@student.campus.edu',
      phone: '+1 (555) 123-4572',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&face=top',
      specialties: ['Event Organization', 'Student Leadership']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Events Coordinator',
      email: 'emily.rodriguez@student.campus.edu',
      phone: '+1 (555) 123-4573',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&face=top',
      specialties: ['Workshop Planning', 'Community Building']
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Contact form submission:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      category: '',
      message: ''
    });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 cisco-gradient overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&h=600&fit=crop"
            alt="Contact and communication"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white animate-fade-in">
                Get In Touch
              </h1>
              <p className="text-xl text-blue-100">Connect with our community</p>
            </div>
          </div>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto animate-fade-in">
            Have questions, suggestions, or want to get involved? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in">
              <Card className="cisco-shadow border-0 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-bold text-gray-900">
                    <Send className="w-6 h-6 mr-3 text-primary" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="focus:ring-primary focus:border-primary"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@campus.edu"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="focus:ring-primary focus:border-primary"
                          required
                        />
                      </div>
                    </div>

                    {/* Category and Subject */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                          <SelectTrigger className="focus:ring-primary focus:border-primary">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          type="text"
                          placeholder="Brief subject line"
                          value={formData.subject}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                          className="focus:ring-primary focus:border-primary"
                          required
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry or suggestion..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="min-h-32 focus:ring-primary focus:border-primary"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 py-3"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              {/* Quick Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={info.title}
                    className="group hover:shadow-lg transition-all duration-300 border-0 cisco-shadow bg-white"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 cisco-gradient rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      <p className="text-primary font-medium mb-1">
                        {info.content}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {info.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Team Contacts */}
              <Card className="cisco-shadow border-0 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-bold text-gray-900">
                    <Users className="w-5 h-5 mr-3 text-primary" />
                    Key Contacts
                  </CardTitle>
                  <p className="text-gray-600 text-sm">
                    Reach out directly to our team members
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {teamContacts.map((member, index) => (
                    <div
                      key={member.name}
                      className="flex items-start space-x-4 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-200"
                    >
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {member.name}
                        </h4>
                        <p className="text-primary font-medium text-sm mb-2">
                          {member.role}
                        </p>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p className="flex items-center">
                            <Mail className="w-3 h-3 mr-2" />
                            {member.email}
                          </p>
                          <p className="flex items-center">
                            <Phone className="w-3 h-3 mr-2" />
                            {member.phone}
                          </p>
                        </div>
                        <div className="mt-2">
                          {member.specialties.map((specialty, idx) => (
                            <span
                              key={idx}
                              className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mr-2 mb-1"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our academy
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How do I join the Cisco Networking Academy?",
                answer: "Registration is completely free! Simply click the 'Register' button and fill out the form with your details. All students from any branch are welcome."
              },
              {
                question: "Are all events and workshops really free?",
                answer: "Yes! 100% of our events, workshops, hackathons, and certification prep sessions are completely free for all registered students. We believe in accessible tech education."
              },
              {
                question: "Do I need prior experience to attend workshops?",
                answer: "Not at all! We offer events for all skill levels, from complete beginners to advanced learners. Each event listing specifies the recommended experience level."
              },
              {
                question: "How can I suggest a new workshop or event topic?",
                answer: "We love hearing from our community! Use the contact form above, select 'Event Suggestion' as the category, and tell us what you'd like to learn about."
              },
              {
                question: "Can I volunteer or join the organizing team?",
                answer: "Absolutely! We're always looking for passionate students to help organize events and mentor others. Contact us with 'Volunteer/Join Team' selected."
              }
            ].map((faq, index) => (
              <Card
                key={index}
                className="cisco-shadow border-0 bg-gradient-to-r from-blue-50 to-white hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 cisco-gradient rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed ml-9">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 cisco-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl md:text-4xl font-bold text-white">
            Ready to Join Our Community?
          </h2>
          <p className="mb-8 text-lg text-blue-100 max-w-2xl mx-auto">
            Don't wait! Start your tech journey today with our free workshops, 
            events, and supportive learning community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => onNavigate('register')}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Register Free Now
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
      </section>
    </div>
  );
}