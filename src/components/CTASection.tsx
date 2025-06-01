
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-100 to-primary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-4">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-primary-800 max-w-3xl mx-auto">
            Take the first step towards data-driven decision making. 
            Let's discuss how we can help your business unlock its full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-none">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6 group-hover:bg-primary-200 transition-colors">
                <Calendar className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-950 mb-4">
                Free Consultation
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Schedule a 30-minute consultation to discuss your data challenges 
                and discover how our solutions can benefit your business.
              </p>
              <Button asChild className="w-full bg-primary-950 hover:bg-primary-800 group">
                <Link to="/contact">
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-none">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6 group-hover:bg-primary-200 transition-colors">
                <MessageCircle className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-950 mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Have questions about our services? Send us a message and our 
                team will get back to you within 24 hours.
              </p>
              <Button asChild variant="outline" className="w-full border-primary-950 text-primary-950 hover:bg-primary-950 hover:text-white group">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-primary-700 text-sm">
            Join 50+ businesses already transforming their data into competitive advantages
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
