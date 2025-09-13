"use client";

import { useEffect, useState, useRef } from 'react';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  buttonText: string;
}

export default function PricingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const pricingPlans: PricingPlan[] = [
    {
      name: "Essential",
      price: "₽85,000",
      period: "Starting from",
      description: "Perfect for intimate gatherings and simple celebrations",
      features: [
        "Wedding day coordination (8 hours)",
        "Vendor recommendations & bookings",
        "Timeline creation & management",
        "Basic floral arrangements",
        "Photography coordination",
        "Emergency kit & on-site support",
        "Post-wedding vendor coordination"
      ],
      highlighted: false,
      buttonText: "Choose Essential"
    },
    {
      name: "Complete",
      price: "₽165,000",
      period: "Most Popular",
      description: "Comprehensive planning for your dream wedding experience",
      features: [
        "Full wedding planning (6 months)",
        "Unlimited consultations & meetings",
        "Venue sourcing & negotiations",
        "Complete vendor management",
        "Custom floral & decor design",
        "Guest management & RSVPs",
        "Rehearsal dinner coordination",
        "Wedding day coordination (12 hours)",
        "Honeymoon planning assistance",
        "Marriage license guidance"
      ],
      highlighted: true,
      buttonText: "Choose Complete"
    },
    {
      name: "Luxury",
      price: "₽285,000",
      period: "Premium Experience",
      description: "Exclusive, high-end wedding planning with white-glove service",
      features: [
        "Premium full-service planning (12 months)",
        "Dedicated wedding planning team",
        "Exclusive venue partnerships",
        "Custom invitation & stationery design",
        "Luxury transportation coordination",
        "Multi-day celebration planning",
        "Destination wedding coordination",
        "Personal wedding website",
        "Professional styling consultation",
        "Post-wedding preservation services",
        "Anniversary celebration planning",
        "24/7 concierge support"
      ],
      highlighted: false,
      buttonText: "Choose Luxury"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="pricing"
      ref={sectionRef} 
      className="section-spacing"
      style={{ backgroundColor: 'var(--warm-linen)' }}
    >
      <div className="container-custom">
        
        {/* Section Title */}
        <div className="text-center mb-20">
          <div className="section-divider mb-8">
            <span>Investment</span>
          </div>
          <h2 
            className={`heading-serif heading-2 mb-8 decorative-line text-gradient transform transition-all duration-800 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Wedding Planning Packages
          </h2>
          <p 
            className={`body-large max-w-3xl mx-auto leading-relaxed transform transition-all duration-800 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Choose the perfect planning package for your special day. Each package includes 
            our signature attention to detail and commitment to making your wedding dreams come true.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative transform transition-all duration-800 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              } ${
                index === 0 ? 'delay-300' : index === 1 ? 'delay-500' : 'delay-700'
              } ${
                plan.highlighted ? 'lg:scale-105 lg:-mt-4' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-gold-accent to-rose-gold text-white px-8 py-3 rounded-full 
                                body-small font-bold shadow-lg border-2 border-white sparkle-animation">
                    ✨ Most Popular ✨
                  </div>
                </div>
              )}

              <div 
                className={`h-full flex flex-col relative overflow-hidden ${
                  plan.highlighted 
                    ? 'card-premium bg-gradient-to-br from-sage via-sage-light to-sage-dark text-white shadow-dramatic' 
                    : 'card-soft hover:shadow-xl'
                } transition-all duration-500`}
              >
                {/* Premium Border Effect for Highlighted Plan */}
                {plan.highlighted && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 pointer-events-none"></div>
                )}
                {/* Header */}
                <div className="text-center mb-8 relative z-10">
                  <h3 className={`heading-serif heading-3 mb-4 ${
                    plan.highlighted ? 'text-white' : 'text-gradient'
                  }`}>
                    {plan.name}
                  </h3>
                  
                  <div className="mb-6">
                    <div className={`heading-serif heading-2 mb-1 ${
                      plan.highlighted ? 'text-white' : 'text-gradient'
                    }`}>
                      {plan.price}
                    </div>
                    <div className={`body-small font-medium ${
                      plan.highlighted ? 'text-white/90' : 'text-sage'
                    }`}>
                      {plan.period}
                    </div>
                  </div>

                  <p className={`body-medium leading-relaxed ${
                    plan.highlighted ? 'text-white/95' : 'text-muted-grey'
                  }`}>
                    {plan.description}
                  </p>
                  
                  {/* Decorative line */}
                  <div className={`w-16 h-1 rounded-full mx-auto mt-4 ${
                    plan.highlighted 
                      ? 'bg-gradient-to-r from-white/50 to-white/30' 
                      : 'bg-gradient-to-r from-sage to-sage-light'
                  }`}></div>
                </div>

                {/* Features */}
                <div className="flex-grow mb-8 relative z-10">
                  <ul className="space-y-5">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-4">
                        <div className={`w-6 h-6 rounded-full mt-1 flex-shrink-0 flex items-center justify-center ${
                          plan.highlighted 
                            ? 'bg-white/20 border-2 border-white/30' 
                            : 'bg-gradient-to-r from-sage to-sage-light'
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${
                            plan.highlighted ? 'bg-white' : 'bg-white'
                          }`}></div>
                        </div>
                        <span className={`body-medium leading-relaxed ${
                          plan.highlighted ? 'text-white/95' : 'text-muted-grey'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-auto relative z-10">
                  <button
                    onClick={scrollToContact}
                    className={`w-full py-5 px-8 rounded-full font-bold text-lg transition-all duration-500 relative overflow-hidden ${
                      plan.highlighted
                        ? 'bg-white text-sage hover:bg-white/95 hover:scale-105 shadow-lg hover:shadow-xl'
                        : 'btn-primary hover:scale-105'
                    }`}
                  >
                    <span className="relative z-10">{plan.buttonText}</span>
                    {plan.highlighted && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div 
          className={`text-center mt-16 transform transition-all duration-1000 delay-900 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-sm">
            <h3 className="heading-serif heading-4 mb-6">
              All Packages Include
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-sage rounded-full"></div>
                </div>
                <h4 className="body-medium font-semibold mb-2">Expert Consultation</h4>
                <p className="body-small text-muted-grey">
                  Personalized guidance from our experienced wedding planners
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-sage rounded-full"></div>
                </div>
                <h4 className="body-medium font-semibold mb-2">Quality Assurance</h4>
                <p className="body-small text-muted-grey">
                  Thorough vendor vetting and quality control processes
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-sage rounded-full"></div>
                </div>
                <h4 className="body-medium font-semibold mb-2">Peace of Mind</h4>
                <p className="body-small text-muted-grey">
                  Comprehensive insurance and backup plans for your special day
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-warm-linen rounded-xl">
              <p className="body-medium text-center">
                <span className="font-semibold">Need something custom?</span> We offer bespoke wedding planning 
                services tailored to your unique vision and budget. Contact us for a personalized quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}