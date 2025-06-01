
import { Brain, Code, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  const services = [
    {
      icon: Brain,
      category: "Consulting Services",
      services: [
        {
          title: "Customized Diagnostics",
          description: "Strategic assessment of current processes, challenges, and tools with tailored data visualization plans."
        },
        {
          title: "Training & Support",
          description: "Comprehensive webinars, interactive tutorials, and ongoing support for efficient tool adoption."
        }
      ]
    },
    {
      icon: Code,
      category: "Technology Platform Development",
      services: [
        {
          title: "Dashboard Design & Integration",
          description: "Custom dashboards tailored to your specific workflows and business requirements."
        },
        {
          title: "Technical Support",
          description: "Complete technical and methodological support throughout the entire development process."
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two comprehensive service areas designed to transform your data into actionable insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {services.map((serviceGroup, groupIndex) => (
            <Card key={groupIndex} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary-600">
              <CardHeader className="text-center pb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 transition-colors mx-auto">
                  <serviceGroup.icon className="h-8 w-8 text-primary-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary-950">
                  {serviceGroup.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {serviceGroup.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="border-l-2 border-primary-200 pl-4">
                    <h4 className="font-semibold text-primary-900 mb-2">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary-950 hover:bg-primary-800 px-8">
            <Link to="/services">
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
