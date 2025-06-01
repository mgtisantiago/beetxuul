
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Heart, Target, Users, Award, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Company = () => {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former McKinsey consultant with 10+ years in data strategy for enterprise clients.",
      image: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder", 
      bio: "Ex-Google engineer specializing in scalable data visualization platforms.",
      image: "MR"
    },
    {
      name: "Elena Kozlov",
      role: "Head of Consulting",
      bio: "Data science expert with extensive experience in SME digital transformation.",
      image: "EK"
    }
  ];

  const impacts = [
    { number: "50+", label: "SMEs Transformed" },
    { number: "200+", label: "Dashboards Created" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "3x", label: "Average ROI" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-950 mb-6">
              Empowering SMEs Through Data Excellence
            </h1>
            <p className="text-xl text-primary-700 leading-relaxed">
              Founded on the belief that every business, regardless of size, deserves access to 
              enterprise-level data insights and visualization capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Why */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-primary-950">Our Why</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We started BeetXuul after witnessing countless small and medium enterprises 
                  struggle with data-driven decision making. While large corporations had access 
                  to sophisticated analytics teams and tools, SMEs were left behind.
                </p>
                <p>
                  Our mission is to democratize data visualization and intelligent decision-making 
                  tools, making them accessible, affordable, and actionable for businesses of all sizes.
                </p>
                <p>
                  We believe that when SMEs have the right data insights, they can compete with 
                  industry giants, innovate faster, and create more sustainable growth.
                </p>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-primary-950 text-white p-8">
                <CardContent className="space-y-6">
                  <div className="flex items-center">
                    <Target className="h-6 w-6 text-primary-300 mr-3" />
                    <h3 className="text-xl font-semibold">Our Vision</h3>
                  </div>
                  <p className="text-primary-200 leading-relaxed">
                    To become the leading partner for SMEs worldwide in their data transformation 
                    journey, enabling them to make confident, data-driven decisions that drive 
                    sustainable growth and competitive advantage.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Award className="h-8 w-8 text-primary-600 mr-3" />
              <h2 className="text-3xl font-bold text-primary-950">Our Impact</h2>
            </div>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              Measuring success through the growth and achievements of our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {impacts.map((impact, index) => (
              <Card key={index} className="text-center bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                    {impact.number}
                  </div>
                  <div className="text-primary-800 font-medium">
                    {impact.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-primary-950 text-center mb-8">
              Real Impact Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-lg font-semibold text-primary-950 mb-2">TechFlow Solutions</div>
                <div className="text-primary-600 text-sm mb-3">Technology Services</div>
                <div className="text-gray-600 text-sm">Reduced reporting time by 60% and increased decision accuracy by 40%</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-primary-950 mb-2">GreenLeaf Manufacturing</div>
                <div className="text-primary-600 text-sm mb-3">Manufacturing</div>
                <div className="text-gray-600 text-sm">Optimized supply chain operations, saving $200K annually</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-primary-950 mb-2">Urban Retail Co.</div>
                <div className="text-primary-600 text-sm mb-3">Retail</div>
                <div className="text-gray-600 text-sm">Improved inventory management, reducing waste by 35%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-primary-600 mr-3" />
              <h2 className="text-3xl font-bold text-primary-950">Meet Our Team</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A passionate team of data experts, consultants, and technologists dedicated 
              to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-bold text-primary-950 mb-2">
                    {member.name}
                  </h3>
                  <div className="text-primary-600 font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <button className="text-primary-600 hover:text-primary-800 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Company;
