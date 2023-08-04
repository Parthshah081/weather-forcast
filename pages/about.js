// pages/about.js

import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen relative left-[25%]">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Weatherly</h1>
        <p className="text-gray-600 mb-4">
          Weather App is a simple application that provides current weather information for various locations around the world.
        </p>
        <p className="text-gray-600 mb-4">
          This app is built using Next.js, a React framework for server-side rendering, and Tailwind CSS, a utility-first CSS framework.
        </p>
        <p className="text-gray-600">
          It utilizes a weather API to fetch real-time weather data and display it to the user in a user-friendly interface.
        </p>
      </div>
    </div>
  );
};

export default About;
