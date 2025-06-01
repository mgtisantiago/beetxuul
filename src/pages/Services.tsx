
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Brain, Code, CheckCircle, ArrowRight, Factory, ShoppingBag, HeartHandshake, Truck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const sectors = [
    {
      icon: Factory,
      name: "Manufacturing",
      description: "Supply chain optimization, quality control, and production efficiency dashboards."
    },
    {
      icon: ShoppingBag,
      name: "Retail & E-commerce",
      description: "Inventory management, sales analytics, and customer behavior insights."
    },
    {
      icon: HeartHandshake,
      name: "Healthcare",
      description: "Patient analytics, operational efficiency, and compliance reporting."
    },
    {
      icon: Truck,
      name: "Logistics",
      description: "Route optimization, fleet management, and delivery performance tracking."
    }
  ];

  const benefits = [
    "Reduce decision-making time by up to 60%",
    "Increase operational efficiency by 40%",
    "Improve data accuracy and accessibility",
    "Enable real-time performance monitoring",
    "Facilitate better cross-team collaboration",
    "Provide actionable insights for growth"
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We analyze your current data landscape, identify pain points, and understand your specific business objectives."
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Custom data visualization strategy tailored to your workflows, team structure, and growth goals."
    },
    {
      step: "03",
      title: "Design & Development",
      description: "Create intuitive dashboards and implement robust data pipelines that integrate with your existing systems."
    },
    {
      step: "04",
      title: "Training & Launch",
      description: "Comprehensive team training, smooth deployment, and ongoing support to ensure successful adoption."
    },
    {
      step: "05",
      title: "Optimization & Growth",
      description: "Continuous monitoring, performance optimization, and scaling capabilities as your business evolves."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-950 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Data Solutions for SMEs
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              From strategic consulting to technology implementation, we provide end-to-end 
              data visualization solutions that drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two comprehensive service areas designed to transform your data into actionable insights.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Consulting Services */}
            <Card className="border-l-4 border-l-primary-600 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 mx-auto">
                  <Brain className="h-8 w-8 text-primary-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary-950">
                  Consulting Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-2 border-primary-200 pl-6">
                  <h4 className="font-semibold text-primary-900 mb-3 text-lg">
                    Customized Diagnostics
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We assess your current processes, challenges, and tools to offer a strategic 
                    data visualization plan tailored to your organization's unique needs.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary-600 mr-2" />Process analysis and optimization</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary-600 mr-2" />Data infrastructure assessment</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary-600 mr-2" />Custom strategy development</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-primary-200 pl-6">
                  <h4 className="font-semibold text-primary-900 mb-3 text-lg">
                    Training & Support
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Comprehensive webinars, guides, and interactive tutorials with ongoing 
                    support to ensure efficient tool adoption across your team.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary-600 mr-2" />Interactive workshops and webinars</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary-600 mr-2" />Comprehensive documentation</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary-600 mr-2" />24/7 ongoing support</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Technology Platform Development */}
            <Card className="border-l-4 border-l-primary-600 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 mx-auto">
                  <Code className="h-8 w-8 text-primary-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary-950">
                  Technology Platform Development
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-2 border-primary-200 pl-6">
                  <h4 className="font-semibold text-primary-900 mb-3 text-lg">
                    Dashboard Design & Integration
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Design and integration of dashboards tailored to your specific workflows, 
                    ensuring seamless integration with existing systems.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary-600 mr-2" />Custom dashboard development</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary-600 mr-2" />System integration services</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary-600 mr-2" />Real-time data connectivity</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-primary-200 pl-6">
                  <h4 className="font-semibold text-primary-900 mb-3 text-lg">
                    Technical & Methodological Support
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Complete technical and methodological support throughout the entire 
                    development process, ensuring optimal performance and scalability.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary-600 mr-2" />Architecture design and optimization</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary-600 mr-2" />Performance monitoring</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary-600 mr-2" />Scalability planning</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions tailored to the unique challenges and opportunities 
              of different industry sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white border-none">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 transition-colors">
                    <sector.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-950 mb-3">
                    {sector.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {sector.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-primary-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              Measurable improvements that directly impact your bottom line and operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-primary-900/50 rounded-lg p-4 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-primary-300 flex-shrink-0" />
                <span className="text-primary-100">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 5-step methodology that ensures successful implementation and 
              long-term value delivery.
            </p>
          </div>

          <div className="space-y-8">
            {process.map((phase, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {phase.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary-950 mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-6">
            Ready to Transform Your Data Strategy?
          </h2>
          <p className="text-xl text-primary-700 mb-8">
            Let's discuss how our services can help your business unlock its full potential 
            through intelligent data visualization.
          </p>
          <Button asChild size="lg" className="bg-primary-950 hover:bg-primary-800 px-8 group">
            <Link to="/contact">
              Start Your Transformation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
