
import { Quote, TrendingUp, Clock, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SuccessStory = () => {
  const metrics = [
    { icon: TrendingUp, value: "40%", label: "Increase in Decision Speed" },
    { icon: Clock, value: "60%", label: "Time Saved on Reporting" },
    { icon: Users, value: "15+", label: "Teams Empowered" }
  ];

  return (
    <section className="py-20 bg-primary-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 animate-float">
          <TrendingUp className="h-32 w-32" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success Story: TechFlow Solutions
          </h2>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto">
            How we transformed a mid-sized technology company's data chaos into strategic clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="space-y-6">
            <Card className="bg-primary-900/50 border-primary-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary-300 mb-4" />
                <blockquote className="text-lg italic text-primary-100 mb-4">
                  "BeetXuul didn't just give us dashboards – they gave us clarity. For the first time, 
                  our entire leadership team could see our performance metrics in real-time and make 
                  decisions confidently."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-300 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-950 font-bold">MR</span>
                  </div>
                  <div>
                    <div className="font-semibold text-primary-100">Maria Rodriguez</div>
                    <div className="text-primary-300 text-sm">CEO, TechFlow Solutions</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-primary-300 mb-3">The Challenge</h3>
              <p className="text-primary-200 mb-4">
                TechFlow Solutions struggled with scattered data across multiple systems, 
                making strategic decisions based on gut feeling rather than data-driven insights.
              </p>
              
              <h3 className="text-xl font-semibold text-primary-300 mb-3">Our Solution</h3>
              <p className="text-primary-200">
                We implemented a comprehensive data visualization platform with real-time 
                dashboards, automated reporting, and custom analytics tailored to their 
                specific KPIs and workflows.
              </p>
            </div>
          </div>

          {/* Metrics */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center mb-8">Results Achieved</h3>
            <div className="space-y-4">
              {metrics.map((metric, index) => (
                <Card key={index} className="bg-primary-800/50 border-primary-600 backdrop-blur-sm hover:bg-primary-700/50 transition-colors">
                  <CardContent className="p-6 flex items-center">
                    <div className="w-12 h-12 bg-primary-300 rounded-full flex items-center justify-center mr-4">
                      <metric.icon className="h-6 w-6 text-primary-950" />
                    </div>
                    <div className="flex-1">
                      <div className="text-3xl font-bold text-primary-300">
                        {metric.value}
                      </div>
                      <div className="text-primary-200">
                        {metric.label}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
