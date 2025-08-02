import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, MapPin, Clock, Users, Search, Filter, Network, Shield, Code, Laptop, Award, ArrowRight } from 'lucide-react';

// EventsPage component props:
// - onNavigate: function - callback to navigate to different pages
export function EventsPage({ onNavigate }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Events', icon: Calendar },
    { id: 'networking', name: 'Networking', icon: Network },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'programming', name: 'Programming', icon: Code },
    { id: 'ai-iot', name: 'AI & IoT', icon: Laptop },
    { id: 'certification', name: 'Certification', icon: Award }
  ];

  const events = [
    {
      id: 1,
      title: 'CCNA Routing & Switching Workshop',
      description: 'Hands-on workshop covering fundamental networking concepts, routing protocols, and switching technologies.',
      date: '2025-02-15',
      time: '2:00 PM - 5:00 PM',
      location: 'Networking Lab 101',
      category: 'networking',
      type: 'Workshop',
      capacity: 30,
      registered: 24,
      instructor: 'Prof. Michael Chen',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop',
      tags: ['CCNA', 'Routing', 'Switching', 'Cisco']
    },
    {
      id: 2,
      title: 'Ethical Hacking Bootcamp',
      description: 'Learn cybersecurity fundamentals, penetration testing techniques, and ethical hacking methodologies.',
      date: '2025-02-18',
      time: '9:00 AM - 4:00 PM',
      location: 'Cybersecurity Lab',
      category: 'cybersecurity',
      type: 'Bootcamp',
      capacity: 25,
      registered: 22,
      instructor: 'Dr. Sarah Kim',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop',
      tags: ['Ethical Hacking', 'Penetration Testing', 'Security']
    },
    {
      id: 3,
      title: 'Python Programming for Beginners',
      description: 'Introduction to Python programming covering basics, data structures, and practical applications.',
      date: '2025-02-20',
      time: '10:00 AM - 1:00 PM',
      location: 'Computer Lab A',
      category: 'programming',
      type: 'Workshop',
      capacity: 40,
      registered: 35,
      instructor: 'Jessica Rodriguez',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop',
      tags: ['Python', 'Programming', 'Beginners', 'Coding']
    },
    {
      id: 4,
      title: 'AI & Machine Learning Hackathon',
      description: '48-hour hackathon focused on building AI solutions for real-world problems using machine learning.',
      date: '2025-02-22',
      time: '9:00 AM - 9:00 AM (+2 days)',
      location: 'Main Auditorium',
      category: 'ai-iot',
      type: 'Hackathon',
      capacity: 60,
      registered: 45,
      instructor: 'Team Mentors',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop',
      tags: ['AI', 'Machine Learning', 'Hackathon', 'Innovation']
    },
    {
      id: 5,
      title: 'Web Development with React',
      description: 'Learn modern web development using React, building responsive and interactive user interfaces.',
      date: '2025-02-25',
      time: '1:00 PM - 5:00 PM',
      location: 'Web Dev Lab',
      category: 'programming',
      type: 'Workshop',
      capacity: 35,
      registered: 28,
      instructor: 'Alex Martinez',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
      tags: ['React', 'Web Development', 'JavaScript', 'Frontend']
    },
    {
      id: 6,
      title: 'IoT Device Security Workshop',
      description: 'Explore IoT security challenges, threat modeling, and secure device implementation strategies.',
      date: '2025-02-28',
      time: '11:00 AM - 3:00 PM',
      location: 'IoT Lab',
      category: 'cybersecurity',
      type: 'Workshop',
      capacity: 20,
      registered: 15,
      instructor: 'Dr. Emily Thompson',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&h=250&fit=crop',
      tags: ['IoT', 'Security', 'Device Security', 'Cybersecurity']
    },
    {
      id: 7,
      title: 'CCNP Certification Prep',
      description: 'Advanced networking concepts preparation for CCNP certification with hands-on lab exercises.',
      date: '2025-03-02',
      time: '9:00 AM - 12:00 PM',
      location: 'Advanced Networking Lab',
      category: 'certification',
      type: 'Certification',
      capacity: 15,
      registered: 12,
      instructor: 'Prof. David Wilson',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop',
      tags: ['CCNP', 'Certification', 'Advanced Networking', 'Cisco']
    },
    {
      id: 8,
      title: 'Cloud Computing with AWS',
      description: 'Introduction to cloud computing concepts and hands-on experience with Amazon Web Services.',
      date: '2025-03-05',
      time: '2:00 PM - 6:00 PM',
      location: 'Cloud Lab',
      category: 'networking',
      type: 'Workshop',
      capacity: 30,
      registered: 18,
      instructor: 'Maria Garcia',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
      tags: ['AWS', 'Cloud Computing', 'Infrastructure', 'DevOps']
    }
  ];

  // Filter events based on search term and category
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case 'workshop': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'hackathon': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'bootcamp': return 'bg-green-100 text-green-800 border-green-200';
      case 'certification': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 cisco-gradient overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=600&fit=crop"
            alt="Tech events and workshops"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Upcoming Events & Workshops
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8 animate-fade-in">
            Join our free tech community events! From hands-on workshops to certification prep, 
            hackathons to bootcamps - all completely free for students.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-200" />
                <Input
                  type="text"
                  placeholder="Search events, topics, or technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-blue-200 focus:border-white focus:ring-white/50"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    variant={selectedCategory === category.id ? 'secondary' : 'outline'}
                    className={`whitespace-nowrap transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-white text-primary'
                        : 'border-white text-white hover:bg-white hover:text-primary'
                    }`}
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">No Events Found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or filters to find more events.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-primary hover:bg-primary/90"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedCategory === 'all' ? 'All Events' : 
                   categories.find(cat => cat.id === selectedCategory)?.name + ' Events'}
                </h2>
                <p className="text-lg text-gray-600">
                  {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} found
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event, index) => (
                  <Card
                    key={event.id}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 cisco-shadow bg-white animate-fade-in overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative">
                      <ImageWithFallback
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={`${getTypeColor(event.type)} font-medium`}>
                          {event.type}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-green-100 text-green-800 border-green-200 font-medium">
                          FREE
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                        {event.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {event.description}
                      </p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-2 text-primary" />
                          {formatDate(event.date)}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-2 text-primary" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-2 text-primary" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="w-4 h-4 mr-2 text-primary" />
                          {event.registered}/{event.capacity} registered
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {event.tags.slice(0, 3).map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="outline"
                            className="text-xs border-primary/30 text-primary/80"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {event.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs border-gray-300 text-gray-600">
                            +{event.tags.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 font-medium">
                          by {event.instructor}
                        </span>
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary/90 transition-all duration-200"
                          disabled={event.registered >= event.capacity}
                        >
                          {event.registered >= event.capacity ? 'Full' : 'Register'}
                          {event.registered < event.capacity && (
                            <ArrowRight className="w-4 h-4 ml-1" />
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 cisco-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl md:text-4xl font-bold text-white">
            Don't See What You're Looking For?
          </h2>
          <p className="mb-8 text-lg text-blue-100 max-w-2xl mx-auto">
            Have an idea for a workshop or event? We're always looking for new topics 
            and learning opportunities based on student interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => onNavigate('contact')}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Suggest an Event
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('about')}
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              Join Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}