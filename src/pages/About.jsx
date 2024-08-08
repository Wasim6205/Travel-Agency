import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100">

      <div
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h4 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About
          </h4>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center">
                <img src="/images/hero.jpg" alt="" className="rounded-lg shadow-md w-full h-auto" />
            </div>
            <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
                <p className="text-gray-700 mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis eveniet praesentium culpa modi dicta adipisci dolores ducimus, aliquam repellat asperiores. Dolor nemo, quae dicta itaque corrupti obcaecati illo qui minus.</p>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi mollitia illum facere repellat a laboriosam impedit inventore ipsa, magnam magni, fuga sed dolorem odit, consequatur quos. Nesciunt iure illo necessitatibus?</p>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
