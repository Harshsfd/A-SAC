import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import {
  MessageSquare,
  GraduationCap,
  DollarSign,
  Award,
  Plane,
  Home,
} from "lucide-react";
import heroImage from "@/assets/hero-study-abroad.jpg";

const HomePage = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "Free Counselling",
      description: "Get expert guidance to choose the right program and university that matches your profile and career goals.",
    },
    {
      icon: GraduationCap,
      title: "Guaranteed Admission",
      description: "We ensure your admission to top universities with our proven track record and strong partnerships.",
    },
    {
      icon: DollarSign,
      title: "Best Scholarships",
      description: "Access exclusive scholarships and financial aid opportunities to make your dream affordable.",
    },
    {
      icon: Award,
      title: "Government Scholarship Assistance",
      description: "Complete support for government scholarship applications and procedures.",
    },
    {
      icon: Plane,
      title: "Visa Assistance",
      description: "End-to-end visa support with document preparation and interview coaching.",
    },
    {
      icon: Home,
      title: "Accommodation Support",
      description: "Find safe and comfortable housing options near your chosen university.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Students studying abroad"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/20" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Achievers Study Abroad Consultant
            <span className="block text-2xl md:text-3xl text-primary mt-2">(A-SAC)</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Helping students achieve their dream of studying abroad
          </p>
          
          <p className="text-lg md:text-xl text-accent font-semibold mb-8 italic">
            "You are the dreamers, We will make you achievers"
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">Get Free Counselling</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support for your study abroad journey with guaranteed results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Book your free consultation today and take the first step towards studying abroad
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Book Your Free Consultation Today</Link>
          </Button>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Study Destinations We Cover
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["UK", "USA", "Canada", "Australia", "Ireland", "Europe", "New Zealand"].map((country) => (
              <div
                key={country}
                className="px-6 py-3 bg-gradient-to-r from-accent/20 to-accent-light/20 rounded-full border border-accent/30"
              >
                <span className="font-semibold text-foreground">{country}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;