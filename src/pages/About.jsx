import React from "react";
import { Link } from "react-router-dom";
import { Code, Users, Lightbulb, Zap, BookOpen, Github } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Customized Ideas",
      description:
        "Get project ideas tailored to your skill level and tech stack preferences.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Skill-Based Projects",
      description:
        "Projects categorized by difficulty level to match your expertise.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Multiple Domains",
      description:
        "Explore projects across various domains like web development, mobile apps, and more.",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Learning Resources",
      description:
        "Access curated learning resources and documentation for each project.",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100 text-base-content pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-montserrat">
            About Prompt Edge
          </h1>
          <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
            A platform designed to help developers find their next project,
            whether you're a beginner looking to build your portfolio or an
            experienced developer wanting to explore new technologies.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="card-title text-lg">{feature.title}</h3>
                <p className="text-base-content/80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works Section */}
        <div className="bg-base-200 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Select Your Level</h3>
              <p className="text-base-content/80">
                Choose from beginner, intermediate, or advanced to get ideas
                that match your expertise.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pick Your Stack</h3>
              <p className="text-base-content/80">
                Select the technologies you want to work with, from frontend
                frameworks to backend technologies.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Domain</h3>
              <p className="text-base-content/80">
                Specify the type of project you're interested in, such as web
                development, mobile apps, or data science.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Start?
          </h2>
          <p className="text-xl text-base-content/80 mb-8">
            Generate your next project idea or explore our collection of curated
            projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/idea-generator"
              className="btn btn-primary text-lg px-8 py-3"
            >
              <Zap className="h-5 w-5 mr-2" />
              Generate Ideas
            </Link>
            <Link to="/discover" className="btn btn-outline text-lg px-8 py-3">
              <Github className="h-5 w-5 mr-2" />
              Browse Projects
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
