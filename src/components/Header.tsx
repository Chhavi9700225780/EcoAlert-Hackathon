
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header className="bg-green-600 text-white p-4 shadow-md"
    initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
    >
      <div className="container mx-auto flex items-center justify-between">
      
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Leaf size={24} />
          </motion.div>
          <span className="text-xl font-bold">EcoAlert</span>
        </Link>

        <nav>
          <ul className="flex space-x-6">
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/" className="hover:text-green-200 transition-colors">Home</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/about" className="hover:text-green-200 transition-colors">About</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/contact" className="hover:text-green-200 transition-colors">Contact</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link to="/report" className="bg-white text-green-600 px-4 py-2 rounded-full hover:bg-green-100 transition-colors">Report Issue</Link></motion.li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;