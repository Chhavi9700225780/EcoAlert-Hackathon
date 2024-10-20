
import { Link } from 'react-router-dom';
import { MapPin, AlertTriangle, TreePine, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';
import CollaborationSection from '../components/CollaborationSection';

const Home = () => {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to EcoWatch</h1>
        <p className="text-xl mb-8">Empowering communities to protect our environment through crowdsourced. Connect with your community, share crucial data, and partner with local governments and NGOs to drive positive change. Together, we can create a sustainable future—one report at a time. Let’s protect our planet!</p>
        <Link to="/recentreports" className="bg-green-600 mr-4 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors">
          Recent Reports 
        </Link>
        <Link to="/resources" className="bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors">
          Educational Resources
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          >
          <AlertTriangle className="mx-auto mb-4 text-red-500" size={48} />
          </motion.div>
          <h3 className="text-xl font-semibold mb-2">Pollution</h3>
          <p className="text-gray-600">Report air, water, or soil pollution in your area.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <motion.div
         whileHover={{ rotate: 360 }}
         transition={{ duration: 0.5 }}
        >
          <TreePine className="mx-auto mb-4 text-green-500" size={48} />
          </motion.div>
          <h3 className="text-xl font-semibold mb-2">Deforestation</h3>
          <p className="text-gray-600">Help us track and prevent illegal logging and deforestation.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <motion.div
         whileHover={{ rotate: 360 }}
         transition={{ duration: 0.5 }}
        >
          <Droplets className="mx-auto mb-4 text-blue-500" size={48} />
          </motion.div>
          <h3 className="text-xl font-semibold mb-2">Water Issues</h3>
          <p className="text-gray-600">Report water scarcity, contamination, or flooding incidents.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <motion.div
         whileHover={{ rotate: 360 }}
         transition={{ duration: 0.5 }}
        >
          <MapPin className="mx-auto mb-4 text-purple-500" size={48} />
          </motion.div>
          <h3 className="text-xl font-semibold mb-2">Other Issues</h3>
          <p className="text-gray-600">Report any other environmental concerns in your community.</p>
        </div>
      </section>

      <section className="bg-green-100 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2">Report an Issue</h3>
            <p>Use our easy reporting tool to document environmental issues in your area.</p>
          </div>
          <div className="text-center">
            <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2">Problem Analysis</h3>
            <p>Our Community Members Analysis and processes the data to identify patterns and prioritize issues.</p>
          </div>
          <div className="text-center">
            <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2">Take Action</h3>
            <p>We work with local authorities and NGOs to address the reported issues.</p>
          </div>
        </div>
      </section>
      <section>
      <CollaborationSection/>
      </section>
    </div>
  );
};


export default Home;