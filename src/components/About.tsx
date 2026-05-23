import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Database, Package, TrendingUp } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "Inventory Planning",
      skills: ["Demand Forecasting", "Reorder Point Optimisation", "Stock Level Monitoring", "SKU Management"]
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Inventory Analysis",
      skills: ["Inventory Optimisation", "Stock Movement Analysis", "Trend Identification", "Data-Driven Insights"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "ERP & Systems",
      skills: ["SAP", "WMS", "Advanced Excel", "Power BI", "Tableau", "SQL", "MS Office"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Supply Chain Ops",
      skills: ["FMCG Supply Chain", "Retail Inventory", "Procurement Support", "Cross-functional Collaboration"]
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a results-driven inventory analyst with expertise in FMCG and retail supply chains,
            process optimisation, and data analytics — supported by an MSc in Supply Chain Management
            and Lean Six Sigma Green Belt certification.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          {/* Professional Summary */}
          <Card className="card-gradient border-primary/20 shadow-elevated">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Professional Summary</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Results-driven Inventory Analyst with 3+ years of experience in FMCG and retail supply chains,
                  delivering 99%+ inventory accuracy, 20% reduction in picking errors, and management of 500+ SKUs
                  through advanced demand forecasting and ERP-driven controls.
                </p>
                <p>
                  Expertise in process optimisation, data analytics, and cross-functional collaboration,
                  supported by an <span className="text-primary font-semibold">MSc in Supply Chain Management</span> and
                  Lean Six Sigma Green Belt certification.
                </p>
                <p>
                  Proven ability to enhance operational efficiency and supply reliability in complex,
                  high-volume environments across retail operations and global FMCG manufacturing.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Grid */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center">
            Core <span className="text-gradient">Competencies</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary group-hover:text-accent transition-colors">
                      {category.icon}
                    </div>
                    <h4 className="font-bold text-lg">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Concepts */}
        <div className="mt-12 text-center">
          <h4 className="text-xl font-semibold mb-4 text-muted-foreground">Process Improvement & Reporting</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {["Lean Six Sigma Green Belt", "Root Cause Analysis", "Process Redesign", "Inventory Metrics Reporting", "Supply Risk Detection"].map((concept, index) => (
              <Badge key={index} variant="outline" className="text-sm px-4 py-2">
                {concept}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;