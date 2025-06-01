
import { ArrowRight, TrendingUp, BarChart, PieChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 animate-float">
          <BarChart className="h-16 w-16 text-primary-300" />
        </div>
        <div className="absolute top-40 right-32 animate-float delay-1000">
          <TrendingUp className="h-12 w-12 text-primary-400" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float delay-2000">
          <PieChart className="h-20 w-20 text-primary-200" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Your Data Into
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-100">
              Intelligent Decisions
            </span>
          </h1>
          
          <div className="animate-fade-in-delayed">
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Specialized solutions for data visualization and intelligent decision-making, 
              specifically designed for SMEs. Unlock the power of your data with our 
              customized consulting and technology platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-primary-300 hover:bg-primary-200 text-primary-950 font-semibold px-8 py-3 group">
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-primary-300 text-primary-100 hover:bg-primary-300 hover:text-primary-950 px-8 py-3">
                <Link to="/contact">
                  Get Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-in-right">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-300 mb-2">50+</div>
            <div className="text-primary-200">SMEs Empowered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-300 mb-2">95%</div>
            <div className="text-primary-200">Decision Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-300 mb-2">24/7</div>
            <div className="text-primary-200">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
