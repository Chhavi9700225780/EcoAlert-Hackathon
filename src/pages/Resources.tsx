import React, { useEffect, useState } from 'react';
import { Book, Video, Link as LinkIcon } from 'lucide-react';
import { api } from '../services/api';
import { Resource } from '../types';
import { motion } from 'framer-motion';


const Resources: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const fetchedResources = await api.getResources();
        setResources(fetchedResources);
      } catch (error) {
        console.error('Error fetching resources:', error);
      }
    };

    fetchResources();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      >
        Educational Resources
      </motion.h1>
      <motion.p
        className="text-lg mb-8"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.2 }}
      >
        Explore our curated collection of articles, videos, and links to learn more about environmental issues and how you can make a difference.
      </motion.p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {resources.map((resource, index) => (
          <ResourceCard key={resource.id} {...resource} index={index} />
        ))}
      </motion.div>
    </motion.div>
  );
};

const ResourceCard: React.FC<Resource & { index: number }> = ({ type, title, description, url, index }) => {
  const getIcon = () => {
    switch (type) {
      case 'article':
        return <Book size={24} />;
      case 'video':
        return <Video size={24} />;
      case 'link':
        return <LinkIcon size={24} />;
      default:
        return null;
    }
  };

  return (
    <motion.a
      href={url}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow block"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center mb-4">
        <motion.div
          className="text-green-600 mr-3"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {getIcon()}
        </motion.div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-green-600 capitalize">{type}</p>
    </motion.a>
  );
};

export default Resources;