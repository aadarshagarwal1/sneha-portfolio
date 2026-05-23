import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { TrendingUp, Package, BarChart3, Target, Shield, Award } from "lucide-react";

const KeyAchievements = () => {
  const achievements = [
    {
      title: "99%+ Inventory Accuracy",
      description: "Achieved 99%+ inventory accuracy across ERP and WMS systems through daily stock counts, discrepancy investigations, and corrective actions, directly supporting inventory optimisation and cost efficiency.",
      icon: <Target className="w-8 h-8" />,
      company: "Retail Operations",
      category: "Inventory Control",
      gradient: "from-green-500 to-emerald-500",
      metrics: ["99%+ Accuracy", "ERP & WMS", "Daily Stock Counts"]
    },
    {
      title: "20% Picking Error Reduction",
      description: "Reduced order-picking errors by 20% by diagnosing process gaps through data analysis and redesigning materials-availability workflows, improving stock availability and reducing operational waste.",
      icon: <TrendingUp className="w-8 h-8" />,
      company: "Retail Operations",
      category: "Process Improvement",
      gradient: "from-blue-500 to-cyan-500",
      metrics: ["20% Error Reduction", "Workflow Redesign", "Data Analysis"]
    },
    {
      title: "500+ SKUs Managed",
      description: "Managed inventory replenishment and demand data for 500+ SKUs within a global FMCG supply chain, maintaining accurate stock records and timely purchase order processing.",
      icon: <Package className="w-8 h-8" />,
      company: "Nestlé",
      category: "Inventory Management",
      gradient: "from-purple-500 to-pink-500",
      metrics: ["500+ SKUs", "FMCG Supply Chain", "Purchase Orders"]
    },
    {
      title: "200+ SKUs Monitored",
      description: "Monitored stock movement for 200+ SKUs by identifying demand trends and anticipating future inventory needs, enabling proactive replenishment and preventing stockouts.",
      icon: <BarChart3 className="w-8 h-8" />,
      company: "Retail Operations",
      category: "Demand Forecasting",
      gradient: "from-orange-500 to-red-500",
      metrics: ["200+ SKUs", "Trend Analysis", "Proactive Replenishment"]
    },
    {
      title: "Supplier Performance Scorecards",
      description: "Developed and maintained supplier performance scorecards tracking on-time delivery and quality KPIs, proactively escalating supply risks to protect production continuity.",
      icon: <Shield className="w-8 h-8" />,
      company: "Nestlé",
      category: "Supplier Management",
      gradient: "from-indigo-500 to-blue-500",
      metrics: ["On-Time Delivery KPIs", "Quality Tracking", "Supply Risk Detection"]
    },
    {
      title: "Lean Six Sigma Green Belt",
      description: "Certified in Lean Six Sigma methodologies, applying root cause analysis, process redesign, and standard work to drive continuous improvement across supply chain operations.",
      icon: <Award className="w-8 h-8" />,
      company: "Professional Development",
      category: "Certification",
      gradient: "from-teal-500 to-green-500",
      metrics: ["Green Belt Certified", "Process Redesign", "Root Cause Analysis"]
    }
  ];

  const getGradientClasses = (gradient: string) => {
    return `bg-gradient-to-br ${gradient}`;
  };

  return (
    <section id="achievements" className="py-24 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Key <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Measurable impact delivered through inventory optimisation, demand forecasting,
            and strategic supply chain management across FMCG and retail environments.
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {achievements.map((achievement, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all group overflow-hidden h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-xl ${getGradientClasses(achievement.gradient)} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {achievement.category}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {achievement.company}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-colors">
                            {achievement.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {achievement.description}
                      </p>

                      {/* Key Metrics */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground">Key Metrics</h4>
                        <div className="flex flex-wrap gap-2">
                          {achievement.metrics.map((metric, metricIndex) => (
                            <Badge key={metricIndex} variant="outline" className="text-xs">
                              {metric}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4" />
            <CarouselNext className="right-2 md:right-4" />
          </Carousel>
          
          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {achievements.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-muted-foreground/30"
              />
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16">
          <Card className="card-gradient border-primary/20 shadow-elevated">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">99%+</div>
                  <div className="text-sm text-muted-foreground">Inventory Accuracy</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">20%</div>
                  <div className="text-sm text-muted-foreground">Error Reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">SKUs Managed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;
