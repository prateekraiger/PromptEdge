import React from "react";
import ProjectTable from "../components/ProjectTable";

const projects = {
  beginner: [
    {
      name: "Chess Game App",
      description: "A Two Player Chess game application using JavaScript",
      tier: "Beginner",
      link: "https://www.youtube.com/watch?v=SS5amIbX0Mo",
    },
    {
      name: "10 User Interfaces",
      description: "10 User Interfaces using HTML, CSS and JavaScript",
      tier: "Beginner",
      link: "https://www.youtube.com/watch?v=Rz-rey4Q1bw",
    },
    {
      name: "Audio Book",
      description: "PDF to Audio Book using Python",
      tier: "Beginner",
      link: "https://www.youtube.com/watch?v=Flm2YHEFd5A",
    },
    {
      name: "Face Recognition App",
      description: "Face Recognition + Attendance using OpenCV",
      tier: "Beginner",
      link: "https://www.youtube.com/watch?v=sz25xxF_AVE",
    },
    {
      name: "Build Brand Page",
      description: "Design with React",
      tier: "Beginner",
      link: "https://www.youtube.com/watch?v=W7up-w1QYpw",
    },
    {
      name: "TIC TAC TOE",
      description: "Tic Tac Toe game using Python",
      tier: "Beginner",
      link: "https://www.youtube.com/watch?v=BHh654_7Cmw",
    },
    {
      name: "Password Generator",
      description: "Password Generator App using Python",
      tier: "Beginner",
      link: "https://www.youtube.com/watch?v=SwgBZ0BQNLQ",
    },
  ],
  intermediate: [
    {
      name: "Airbnb Clone Application",
      description: "A React App for Airbnb Home page Clone",
      tier: "Intermediate",
      link: "https://www.youtube.com/watch?v=IQaCL8_bwA4",
    },
    {
      name: "TMDB Movie App",
      description: "An interactive Movie Database app using ReactJS",
      tier: "Intermediate",
      link: "https://www.youtube.com/watch?v=ufodJVcpmps",
    },
    {
      name: "Github Jobs App",
      description: "A GitHub Jobs App using React Hooks and Github API",
      tier: "Intermediate",
      link: "https://www.youtube.com/watch?v=fxY1q4SCB64",
    },
    {
      name: "Weather App",
      description: "Weather app in React JS using the Open Weather Map API",
      tier: "Intermediate",
      link: "https://www.youtube.com/watch?v=GuA0_Z1llYU",
    },
    {
      name: "Business Card Generator",
      description: "A Business Card Generator using React JS",
      tier: "Intermediate",
      link: "https://www.youtube.com/watch?v=mGORpgEOsT4",
    },
    {
      name: "React Photo Gallery",
      description: "Photo Gallery App using React JS and Firebase",
      tier: "Intermediate",
      link: "https://www.youtube.com/watch?v=vUe91uOx7R0",
    },
    {
      name: "Chat-Bot Application",
      description: "A Chat-Bot which can answer your queries using python",
      tier: "Intermediate",
      link: "https://www.youtube.com/watch?v=FFT4p6me2g0",
    },
    {
      name: "Movie Recommendation Engine",
      description: "A Movie Recommendation System Using ML",
      tier: "Intermediate",
      link: "https://www.youtube.com/watch?v=XoTwndOgXBM",
    },
    {
      name: "Credit Card Fraud Detection",
      description: "Credit Card Fraud Detection using ML",
      tier: "Intermediate",
      link: "https://www.youtube.com/watch?v=jCoF1rMs_0s",
    },
    {
      name: "Wildfire Tracker With React",
      description: "Wild Fire Detection using React, NASA API",
      tier: "Intermediate",
      link: "https://www.youtube.com/watch?v=ontX4zfVqK8",
    },
    {
      name: "Google Drive Clone With React",
      description: "Google Drive Clone using React, Firebase",
      tier: "Intermediate",
      link: "https://www.youtube.com/watch?v=ljuCH6_jrYE",
    },
    {
      name: "Fitness App",
      description:
        "A fitness app that sends you new workouts per email every day using Python and HarperDB",
      tier: "Intermediate",
      link: "https://www.youtube.com/watch?v=KMkmA4i2FQc",
    },
  ],
  advanced: [
    {
      name: "Facebook Clone Application",
      description: "A facebook Clone Application using React JS and Firebase",
      tier: "Advanced",
      link: "https://www.youtube.com/watch?v=B-kxUMHBxNo",
    },
    {
      name: "Netflix Clone - FullStack",
      description: "A Netflix clone application using TMDB API",
      tier: "Advanced",
      link: "https://www.youtube.com/watch?v=x_EEwGe-a9o",
    },
    {
      name: "Instagram Clone Application",
      description: "An Instagram Clone application using React JS",
      tier: "Advanced",
      link: "https://www.youtube.com/watch?v=f7T48W0cwXM",
    },
    {
      name: "COVID-19 Tracker",
      description: "A COVID-19 Tracker using React JS",
      tier: "Advanced",
      link: "https://www.youtube.com/watch?v=cF3pIMJUZxM",
    },
    {
      name: "Full-Stack Amazon Clone",
      description: "A Full-Stack AMAZON Clone using REACT JS",
      tier: "Advanced",
      link: "https://www.youtube.com/watch?v=RDV3Z1KCBvo",
    },
    {
      name: "Flipkart Clone Application",
      description: "A Full-Stack Flipkart Clone using MERN Stack",
      tier: "Advanced",
      link: "https://www.youtube.com/watch?v=tvdFYmJEaw4",
    },
    {
      name: "Voting Application - MERN",
      description: "A Voting App using MERN Stack",
      tier: "Advanced",
      link: "https://www.youtube.com/watch?v=0oziV0FLhXc",
    },
    {
      name: "Travel Log - MERN STACK",
      description: "Travel Log App using MERN Stack",
      tier: "Advanced",
      link: "https://www.youtube.com/watch?v=5pQsl9u_10M",
    },
    {
      name: "Discord Clone - MERN STACK",
      description: "Discord Clone App using MERN Stack",
      tier: "Advanced",
      link: "https://www.youtube.com/watch?v=YzcnqYNXM90",
    },
    {
      name: "Messenger Clone - MERN STACK",
      description: "Messenger Clone App using MERN Stack",
      tier: "Advanced",
      link: "https://www.youtube.com/watch?v=8GMx8r9zQXg",
    },
    {
      name: "Tik Tok Clone - MERN STACK",
      description: "Tik Tok Clone App using MERN Stack",
      tier: "Advanced",
      link: "https://www.youtube.com/watch?v=g8yGxDMyGi",
    },
    {
      name: "Robinhood Clone",
      description: "Robinhood Clone using React JS",
      tier: "Advanced",
      link: "https://www.youtube.com/watch?v=TxggrQ0nHjY",
    },
    {
      name: "LinkedIn Clone",
      description: "LinkedIn Clone using React JS",
      tier: "Advanced",
      link: "https://www.youtube.com/watch?v=QaYts9sPmcY",
    },
    {
      name: "Signal Clone",
      description: "Signal Clone using React JS",
      tier: "Advanced",
      link: "https://www.youtube.com/watch?v=MJzmZ9qmdaE",
    },
    {
      name: "Gmail Clone",
      description: "Gmail Clone using React JS",
      tier: "Advanced",
      link: "https://www.youtube.com/watch?v=b7nrXjS6Dqs",
    },
    {
      name: "E-Commerce Application",
      description: "MongoDB, Reactjs, Nextjs",
      tier: "Advanced",
      link: "https://www.youtube.com/watch?v=XtciU6BnQdo",
    },
    {
      name: "Full Stack NFT Marketplace",
      description: "Ethereum, Polygon and Next.js",
      tier: "Advanced",
      link: "https://www.youtube.com/watch?v=GKJBEEXUha0",
    },
    {
      name: "Invoice Application",
      description: "Vue 3, Vuex & Firebase",
      tier: "Advanced",
      link: "https://www.youtube.com/watch?v=vsJtN54aA7w",
    },
    {
      name: "Full-Stack Twitter Clone",
      description: "Next JS, Recoil JS, Tailwind CSS, Nextauth & Firebase",
      tier: "Advanced",
      link: "https://www.youtube.com/watch?v=5Wak0iyGCrc",
    },
  ],
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Project Ideas for Developers
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore our curated collection of project ideas for all skill levels
          </p>
        </div>

        {/* Beginner Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Beginner Projects
          </h2>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <ProjectTable projects={projects.beginner} />
          </div>
        </section>

        {/* Intermediate Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Intermediate Projects
          </h2>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <ProjectTable projects={projects.intermediate} />
          </div>
        </section>

        {/* Advanced Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Advanced Projects
          </h2>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <ProjectTable projects={projects.advanced} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
