import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getServices } from "@/api";
import {
  MessageSquare,
  GraduationCap,
  Search,
  DollarSign,
  Award,
  CreditCard,
  Plane,
  Home,
} from "lucide-react";

interface Service {
  _id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

const ServicesPage = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Icon mapping for dynamic icons from backend
  const iconMap: { [key: string]: any } = {
    MessageSquare,
    GraduationCap,
    Search,
    DollarSign,
    Award,
    CreditCard,
    Plane,
    Home,
  };

  // Fallback services in case backend is not available
  const fallbackServices = [
    {
      icon: MessageSquare,
      title: "Free Counselling",
      description: "Get expert guidance to choose the right program and university that matches your profile and career goals.",
      features: [
        "One-on-one counseling sessions",
        "Career guidance and assessment",
        "Course and university selection",
        "Application timeline planning",
      ],
    },
    {
      icon: GraduationCap,
      title: "Guaranteed Admission",
      description: "We ensure your admission to top universities with our proven track record and strong partnerships.",
      features: [
        "100% admission guarantee",
        "Strong university partnerships",
        "Application preparation and review",
        "Interview preparation support",
      ],
    },
    {
      icon: Search,
      title: "Customized University Shortlist",
      description: "Personalized university recommendations based on your academic profile and budget requirements.",
      features: [
        "Profile-based university matching",
        "Budget-friendly options",
        "Course compatibility analysis",
        "Detailed university information",
      ],
    },
    {
      icon: DollarSign,
      title: "Best Scholarships",
      description: "Access exclusive scholarships and financial aid opportunities to make your dream affordable.",
      features: [
        "Merit-based scholarships",
        "Need-based financial aid",
        "University-specific grants",
        "Application assistance",
      ],
    },
    {
      icon: Award,
      title: "Government Scholarship Assistance",
      description: "Complete support for government scholarship applications and procedures.",
      features: [
        "Government scholarship identification",
        "Application form assistance",
        "Document preparation",
        "Follow-up support",
      ],
    },
    {
      icon: CreditCard,
      title: "No Payment Until Admission",
      description: "Pay only after you secure admission to your chosen university - our commitment to your success.",
      features: [
        "Zero upfront fees",
        "Payment after admission",
        "Transparent pricing",
        "No hidden charges",
      ],
    },
    {
      icon: Plane,
      title: "Visa Assistance",
      description: "End-to-end visa support with document preparation and interview coaching.",
      features: [
        "Visa application guidance",
        "Document checklist and review",
        "Interview preparation",
        "Embassy appointment support",
      ],
    },
    {
      icon: Home,
      title: "Accommodation Assistance",
      description: "Find safe and comfortable housing options near your chosen university.",
      features: [
        "University accommodation booking",
        "Private housing options",
        "Safety and location guidance",
        "Budget-friendly recommendations",
      ],
    },
  ];

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
      } catch (err) {
        console.error("Error fetching services:", err);
        setError("Using fallback services");
        // Use fallback services if API fails
        setServices(fallbackServices.map((service, index) => ({
          _id: index.toString(),
          title: service.title,
          description: service.description,
          features: service.features,
          icon: service.icon.name || "MessageSquare",
        })));
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">Loading services...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive support for your study abroad journey with guaranteed results
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || MessageSquare;
            return (
              <Card key={service._id} className="border-border/50 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards your study abroad journey with our free consultation
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Book Free Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;