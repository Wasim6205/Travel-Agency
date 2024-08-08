import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div>

      <div
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h4 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Contact
          </h4>
        </div>
      </div>

      <div>
        <div>
            <div>
                <h3>Contact Details</h3>
                <div>
                    <FaEnvelope />
                    <p>info@travelagency.com</p>
                </div>
                <div>
                    <FaPhone />
                    <p>+123 456 7890</p>
                </div>
                <div>
                    <FaMapMarkedAlt />
                    <p>123 Travel St, Jharkhand, India</p>
                </div>
            </div>

            <div>
                <h3>Get in touch</h3>
                <form>
                    
                </form>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
