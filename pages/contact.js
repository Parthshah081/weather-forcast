// pages/contact.js

import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen relative left-[35%]">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-4">
          Feel free to reach out to us if you have any questions or feedback.
        </p>
        <form className="max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="text-gray-800 font-semibold">Name</label>
            <input type="text" id="name" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-800 font-semibold">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-gray-800 font-semibold">Message</label>
            <textarea id="message" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500" rows="5"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
