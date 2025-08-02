import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Eye, EyeOff, Mail, Lock, User, GraduationCap, Calendar, ArrowLeft, Network } from 'lucide-react';

// RegisterPage component props:
// - onNavigate: function - callback to navigate to different pages
export function RegisterPage({ onNavigate }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    course: '',
    year: '',
    password: ''
  });

  const courses = [
    'Computer Science Engineering',
    'Information Technology',
    'Electronics & Communication',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Chemical Engineering',
    'Biotechnology',
    'Other'
  ];

  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Masters', 'PhD'];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration attempt:', formData);
    // Show success message and redirect
    alert('Registration successful! Welcome to Cisco Networking Academy.');
    onNavigate('login');
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="w-full h-full cisco-gradient" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      {/* Floating shapes for visual interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-blue-300/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Back Button */}
      <Button
        onClick={() => onNavigate('home')}
        variant="ghost"
        className="absolute top-6 left-6 text-white hover:bg-white/20 transition-colors duration-200"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Button>

      {/* Registration Card */}
      <Card className="relative w-full max-w-lg glassmorphism border-white/20 shadow-2xl animate-fade-in">
        <CardHeader className="text-center pb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-3">
              <Network className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-white">
              Join Our Academy
            </CardTitle>
          </div>
          <p className="text-blue-100 text-sm leading-relaxed">
            Want to join the Cisco Networking Academy @ Campus? Register below to get access to workshops, events, hackathons, and certifications.
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-white font-medium">
                Full Name *
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-200" />
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-blue-200 focus:border-white focus:ring-white/50 transition-all duration-200"
                  required
                />
              </div>
            </div>

            {/* College Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white font-medium">
                College Email ID *
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-200" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your.name@college.edu"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-blue-200 focus:border-white focus:ring-white/50 transition-all duration-200"
                  required
                />
              </div>
            </div>

            {/* Course/Branch */}
            <div className="space-y-2">
              <Label htmlFor="course" className="text-white font-medium">
                Course/Branch *
              </Label>
              <div className="relative">
                <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-200 z-10" />
                <Select value={formData.course} onValueChange={(value) => handleInputChange('course', value)}>
                  <SelectTrigger className="pl-10 bg-white/20 border-white/30 text-white focus:border-white focus:ring-white/50 transition-all duration-200">
                    <SelectValue placeholder="Select your course" className="text-blue-200" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course} value={course}>
                        {course}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Year */}
            <div className="space-y-2">
              <Label htmlFor="year" className="text-white font-medium">
                Year *
              </Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-200 z-10" />
                <Select value={formData.year} onValueChange={(value) => handleInputChange('year', value)}>
                  <SelectTrigger className="pl-10 bg-white/20 border-white/30 text-white focus:border-white focus:ring-white/50 transition-all duration-200">
                    <SelectValue placeholder="Select your year" className="text-blue-200" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white font-medium">
                Password *
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-200" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="pl-10 pr-10 bg-white/20 border-white/30 text-white placeholder:text-blue-200 focus:border-white focus:ring-white/50 transition-all duration-200"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-200 hover:text-white transition-colors duration-200"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Register Button */}
            <Button
              type="submit"
              className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 font-semibold py-3 mt-6"
            >
              Create Account
            </Button>
          </form>

          {/* Login Link */}
          <div className="text-center pt-4">
            <p className="text-blue-200">
              Already have an account?{' '}
              <button 
                onClick={() => onNavigate('login')}
                className="text-white hover:underline font-medium transition-all duration-200"
              >
                Login here
              </button>
            </p>
          </div>

          {/* Terms */}
          <div className="text-center pt-2">
            <p className="text-blue-200 text-xs">
              By creating an account, you agree to participate in our learning community and follow academy guidelines.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Additional Visual Elements */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-blue-200 text-sm">
          © 2025 Cisco Networking Academy @ Campus. Free for all students.
        </p>
      </div>
    </div>
  );
}