
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@beetxuul.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM PST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "San Francisco, CA",
      description: "Schedule an in-person meeting"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 hours",
      description: "We respond to all inquiries quickly"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-950 mb-6">
              Let's Start Your Data Transformation
            </h1>
            <p className="text-xl text-primary-700 leading-relaxed">
              Ready to unlock the power of your data? Get in touch with our team of experts 
              for a free consultation and discover how we can help your business thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-none">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary-950 flex items-center">
                    <Send className="h-6 w-6 mr-3 text-primary-600" />
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-primary-900">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-primary-900">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company" className="text-primary-900">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          className="mt-1"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-primary-900">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-primary-900">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-primary-900">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 min-h-[120px]"
                        placeholder="Tell us about your data challenges and how we can help..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-primary-950 hover:bg-primary-800 group"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-lg border-none">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary-950">
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-primary-50 transition-colors">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-950 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-primary-700 font-medium mb-1">
                          {info.details}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Benefits */}
              <Card className="bg-primary-950 text-white shadow-lg border-none">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Why Contact Us?</h3>
                  <ul className="space-y-3 text-primary-200">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Free 30-minute consultation
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Custom data strategy roadmap
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      No obligation assessment
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Expert recommendations
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-950 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="shadow-sm border-none">
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary-950 mb-3">
                  How long does a typical implementation take?
                </h3>
                <p className="text-gray-600">
                  Most implementations take 4-8 weeks, depending on complexity and data sources. 
                  We provide a detailed timeline during our initial consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-none">
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary-950 mb-3">
                  Do you work with existing data systems?
                </h3>
                <p className="text-gray-600">
                  Yes, we specialize in integrating with existing systems including CRMs, ERPs, 
                  databases, and cloud platforms to create unified dashboards.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-none">
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary-950 mb-3">
                  What ongoing support do you provide?
                </h3>
                <p className="text-gray-600">
                  We offer 24/7 technical support, regular training sessions, system updates, 
                  and performance optimization as part of our service packages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
