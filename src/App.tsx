import { Activity, Cloud, Globe, ShoppingBag, ShoppingCart, Award, Database, Server, BarChart } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import SectionTitle from './components/SectionTitle';

function App() {
  const awsProjects = [
    {
      title: "Amazon S3 Static Website",
      description: [
        "Created and configured S3 bucket with ACLs, versioning, and public access",
        "Implemented SSL/TLS with AWS Certificate Manager",
        "Set up CloudFront distribution for content delivery",
        "Configured Route 53 for domain management"
      ],
      skills: ["Amazon S3", "CloudFront", "Route 53", "Certificate Manager"],
      gradient: "bg-gradient-to-br from-blue-900/50 to-blue-800/30",
      borderColor: "border-blue-700/30"
    },
    {
      title: "Three-Tier Web Architecture",
      description: [
        "Configured VPC with public/private subnets",
        "Implemented Auto Scaling and Load Balancing",
        "Set up EC2 instances and security groups",
        "Deployed RDS for database layer"
      ],
      skills: ["VPC", "EC2", "Auto Scaling", "RDS", "Load Balancer"],
      gradient: "bg-gradient-to-br from-purple-900/50 to-purple-800/30",
      borderColor: "border-purple-700/30"
    },
    {
      title: "Data Visualization with QuickSight",
      description: [
        "Uploaded and managed datasets in S3",
        "Connected data to QuickSight for analysis",
        "Created interactive visualizations",
        "Implemented complex data queries"
      ],
      skills: ["QuickSight", "Amazon S3", "Data Analysis", "Visualization"],
      gradient: "bg-gradient-to-br from-indigo-900/50 to-indigo-800/30",
      borderColor: "border-indigo-700/30"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-sm fixed w-full z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Globe className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">NS Magic.store</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your One-Stop Digital Solutions Provider
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Expert in E-commerce & Multi-Cloud Solutions with proven experience in Amazon, AWS, GCP, and Azure
          </p>
          <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
            Get Started
          </a>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <SectionTitle title="Professional Experience" />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 p-8 rounded-xl border border-blue-700/30">
              <div className="flex items-center mb-4">
                <ShoppingCart className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold">Amazon E-commerce</h3>
              </div>
              <p className="text-gray-300 mb-4">2 years of hands-on experience in:</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Award className="w-4 h-4 text-blue-400 mr-2" />
                  Store optimization and management
                </li>
                <li className="flex items-center">
                  <Award className="w-4 h-4 text-blue-400 mr-2" />
                  Product listing and SEO
                </li>
                <li className="flex items-center">
                  <Award className="w-4 h-4 text-blue-400 mr-2" />
                  Inventory management
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-xl border border-purple-700/30">
              <div className="flex items-center mb-4">
                <Cloud className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold">Cloud Expertise</h3>
              </div>
              <p className="text-gray-300 mb-4">Current role working with:</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Server className="w-4 h-4 text-purple-400 mr-2" />
                  AWS Cloud Infrastructure
                </li>
                <li className="flex items-center">
                  <Database className="w-4 h-4 text-purple-400 mr-2" />
                  Google Cloud Platform (GCP)
                </li>
                <li className="flex items-center">
                  <Cloud className="w-4 h-4 text-purple-400 mr-2" />
                  Microsoft Azure Solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AWS Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="AWS Cloud Projects" 
            subtitle="Showcasing expertise in cloud architecture and implementation"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awsProjects.map((project, index) => (
              <ProjectCard
                key={index}
                Icon={index === 2 ? BarChart : Cloud}
                {...project}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <SectionTitle title="Our Services" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ShoppingCart className="w-12 h-12 text-blue-400" />,
                title: "E-commerce Solutions",
                description: "Amazon, eBay, Etsy, and Shopify store creation and optimization",
              },
              {
                icon: <Cloud className="w-12 h-12 text-blue-400" />,
                title: "Multi-Cloud Solutions",
                description: "AWS, GCP, and Azure infrastructure setup and management",
              },
              {
                icon: <Activity className="w-12 h-12 text-blue-400" />,
                title: "DevOps Services",
                description: "Streamline your development and operations workflow",
              },
              {
                icon: <ShoppingBag className="w-12 h-12 text-blue-400" />,
                title: "WordPress Development",
                description: "Custom WordPress websites and e-commerce solutions",
              },
            ].map((service, index) => (
              <div key={index} className="bg-gray-800/50 p-8 rounded-xl hover:transform hover:-translate-y-2 transition-all">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gray-800/50 rounded-2xl p-8">
            <SectionTitle title="Get In Touch" />
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-gray-700/50 w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-700/50 w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={4}
                className="bg-gray-700/50 w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold w-full transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NS Magic.store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;