const Education = () => {
  const education = [
    {
      degree: "MSc in Supply Chain Management",
      school: "Dublin Business School",
      period: "Jan 2024 – Jan 2025",
      gpa: "",
      coursework: ["Global SCM & Logistics", "Procurement Strategies", "Supply Chain Operations", "Sustainability", "Thesis: Emergence of Digital Procurement and Innovation on Supply Chain Performance in Ireland's Food Industry"],
      logo: "DBS"
    },
    {
      degree: "BE in Food Technology",
      school: "Sri Shakthi Institute of Engineering & Technology",
      period: "Jul 2019 – Apr 2023",
      gpa: "",
      coursework: ["Cold Chain Management", "Food Processing Operations", "Quality & Waste Management", "Storage Systems"],
      logo: "SSIET"
    }
  ];

  const certifications = [
    { name: "Lean Six Sigma Green Belt", issuer: "Six Sigma Academy Amsterdam" },
    { name: "Power BI Certification", issuer: "PwC Switzerland (2025)" },
    { name: "Sourcing, Purchasing & Procurement: Operational Methodology", issuer: "PwC Switzerland" }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Academic foundation in supply chain management and food technology with continuous professional development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {edu.logo}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-blue-400 font-semibold text-lg">{edu.school}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-gray-300 font-medium">{edu.period}</p>
                  {edu.gpa && <p className="text-green-400 font-semibold">GPA: {edu.gpa}</p>}
                </div>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h4 className="text-lg font-semibold text-gray-300 mb-3">
                  {index === 0 ? "Coursework & Thesis:" : "Relevant Coursework:"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, courseIndex) => (
                    <span 
                      key={courseIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-600"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="bg-gray-900 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">Certifications & Professional Development</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-600">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <p className="text-white font-semibold">{cert.name}</p>
                    <p className="text-blue-400 text-sm">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">Technology & Languages</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-300 mb-3">Technology</h4>
                <div className="flex flex-wrap gap-2">
                  {["SAP ERP / WMS", "Microsoft Excel (Advanced)", "Power BI", "Tableau", "SQL", "MS Office Suite"].map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-600">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-300 mb-3">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {["English (Full Professional)", "Tamil (Native)"].map((lang, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-600">{lang}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
