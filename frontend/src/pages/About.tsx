import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Globe, Award } from "lucide-react";

const AboutPage = () => {
  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: "Free Counselling",
      description: "Comprehensive guidance at no cost to help you make informed decisions.",
    },
    {
      icon: Users,
      title: "No Payment Until Admission",
      description: "Pay only after you secure admission to your chosen university.",
    },
    {
      icon: Award,
      title: "Scholarship Guidance",
      description: "Expert assistance in finding and applying for scholarships and financial aid.",
    },
    {
      icon: Globe,
      title: "Visa Support",
      description: "Complete visa application support with high success rates.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About A-SAC
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner in achieving international education dreams
          </p>
        </div>

        {/* Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Achievers Study Abroad Consultant (A-SAC) is a leading educational consultancy 
              dedicated to helping students achieve their dreams of studying abroad. With years 
              of experience and strong partnerships with top universities worldwide, we provide 
              comprehensive support throughout your study abroad journey.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of experienced counselors understands the complexities of international 
              education and is committed to providing personalized guidance to each student, 
              ensuring they make the best decisions for their future.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-lg text-foreground leading-relaxed">
              To help students achieve their dream of studying abroad by providing expert 
              guidance, guaranteed admissions, and comprehensive support services that make 
              international education accessible and successful for every aspiring student.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Why Choose A-SAC?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-8">
            Our Track Record
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">500+</div>
              <div className="text-primary-foreground/90">Students Placed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">95%</div>
              <div className="text-primary-foreground/90">Visa Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">50+</div>
              <div className="text-primary-foreground/90">Partner Universities</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;