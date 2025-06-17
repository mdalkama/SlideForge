import React from 'react';
// Import icons from lucide-react
import { Sparkles, LayoutTemplate, Users } from 'lucide-react';

// --- Reusable Components (defined within the same file for simplicity) ---

// Header Component for the top navigation
const Header = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-600">
          SlideForge
        </a>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#features" className="text-gray-600 hover:text-blue-500 px-3 py-2">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-blue-500 px-3 py-2">Pricing</a>
          <a href="#signup" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md">
            Sign Up
          </a>
        </div>
        {/* Basic mobile menu button can be added here */}
      </div>
    </nav>
  );
};

// Hero Section for the main call-to-action
const HeroSection = () => {
  return (
    <main className="flex-grow container mx-auto px-6 py-24 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
        Create Stunning Presentations, Effortlessly
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl">
        SlideForge is the AI-powered tool that helps you design professional and engaging slideshows in minutes, not hours.
      </p>
      <a
        href="#signup"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-transform duration-150 ease-in-out"
      >
        Get Started for Free
      </a>
    </main>
  );
};

// FeatureCard Component - a small, reusable card for the features section
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg text-center flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Features Section to showcase product benefits
const FeaturesSection = () => {
  // --- UPDATED with lucide-react icons ---
  const features = [
    {
      icon: <Sparkles size={48} strokeWidth={1.5} />,
      title: "AI-Powered Content",
      description: "Just provide a topic, and our AI will generate compelling content and layouts for your slides."
    },
    {
      icon: <LayoutTemplate size={48} strokeWidth={1.5} />,
      title: "Beautiful Templates",
      description: "Choose from a library of professionally designed templates to fit any occasion or brand."
    },
    {
      icon: <Users size={48} strokeWidth={1.5} />,
      title: "Easy Collaboration",
      description: "Invite team members to collaborate in real-time and share your final presentation with a single link."
    }
  ];

  return (
    <section id="features" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose SlideForge?</h2>
          <p className="text-gray-600 mt-2">Everything you need to make an impact.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component for the bottom of the page
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>© {new Date().getFullYear()} SlideForge. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-gray-400 hover:text-white px-3">Privacy Policy</a>
          <span className="text-gray-500">|</span>
          <a href="#" className="text-gray-400 hover:text-white px-3">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};


// --- Main App Component ---
// This is the main component that brings everything together.
function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}

export default App;