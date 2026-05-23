import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "Snehamuralikumar2810@gmail.com",
      href: "mailto:Snehamuralikumar2810@gmail.com",
      primary: true
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+353 89 972 2387",
      href: "tel:+353899722387"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Dublin, Ireland",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sneha-murali-kumar",
      color: "text-blue-500"
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-gray-800">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Let's <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Inventory Analyst based in Dublin, Ireland with expertise in FMCG and retail
            supply chains. Open to opportunities in inventory management and supply chain analytics.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="card-gradient border-primary/20 shadow-elevated">
            <CardContent className="p-4 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gradient text-center lg:text-left">Get In Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className={`p-3 rounded-lg ${contact.primary ? 'bg-primary/20 text-primary' : 'bg-secondary text-secondary-foreground'} group-hover:scale-110 transition-transform`}>
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      {contact.href !== "#" ? (
                        <a 
                          href={contact.href}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {socialLinks.length > 0 && (
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button 
                      key={index}
                      variant="outline" 
                      size="sm"
                      asChild
                      className="group hover:scale-105"
                    >
                      <a 
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <span className={social.color}>
                          {social.icon}
                        </span>
                        {social.label}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
              )}
            </CardContent>
          </Card>

          {/* Availability & Status */}
          <Card className="card-gradient border-primary/20 shadow-elevated">
            <CardContent className="p-4 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gradient text-center lg:text-left">Current Status</h3>
              
              <div className="space-y-6">
                <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <Badge variant="default" className="text-xs">Available</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Currently open to new opportunities in inventory and supply chain roles
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Education</h4>
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium text-primary">Dublin Business School</p>
                    <p>MSc in Supply Chain Management</p>
                    <p>Jan 2024 – Jan 2025</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Inventory Management",
                      "Demand Forecasting",
                      "Supply Chain Analytics",
                      "Process Improvement",
                      "ERP Systems"
                    ].map((interest, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button 
                    variant="gradient" 
                    className="w-full" 
                    asChild
                  >
                    <a href="mailto:Snehamuralikumar2810@gmail.com">
                      <Mail className="w-4 h-4" />
                      Send Message
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;