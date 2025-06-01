
import { Target, Zap, Shield, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ValueProposition = () => {
  const values = [
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "Customized data visualization strategies designed specifically for your business needs and objectives."
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Quick deployment of dashboards and analytics tools that integrate seamlessly with your existing workflows."
    },
    {
      icon: Shield,
      title: "Proven Expertise",
      description: "Industry-leading methodologies and technical support throughout your data transformation journey."
    },
    {
      icon: Users,
      title: "Ongoing Support",
      description: "Comprehensive training, webinars, and continuous support to ensure successful adoption and growth."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-4">
            Why Choose BeetXuul?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine deep industry expertise with cutting-edge technology to deliver 
            data solutions that drive real business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-none bg-white"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 transition-colors">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-950 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
