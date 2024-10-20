
import { Link } from 'react-router-dom';
import {  Twitter, Instagram,  } from 'lucide-react';

import { Linkedin } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">EcoWatch</h3>
            <p className="text-sm">Empowering communities to protect our environment through crowdsourced data.Connect with your community, share crucial data, and partner with local governments and NGOs to drive positive change. Together, we can create a sustainable future—one report at a time. Let’s protect our planet!</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-green-200 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-green-200 transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-green-200 transition-colors">Contact</Link></li>
              <li><Link to="/report" className="text-sm hover:text-green-200 transition-colors">Report Issue</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-200 transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-green-200 transition-colors"><Twitter size={24} /></a>
              <a href="#" className="hover:text-green-200 transition-colors"><Instagram size={24} /></a>
             
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-green-700 text-center text-sm">
          &copy; {new Date().getFullYear()} EcoWatch. All rights reserved. Made By C&D teams.
        </div>
      </div>
    </footer>
  );
};

export default Footer;