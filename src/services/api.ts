import { Resource } from '../types';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


export const api = {
  
 
 

  getResources: async (): Promise<Resource[]> => {
    await delay(100); // Simulate API delay
    return [
      { id: 1, type: 'article', title: 'Understanding Air Pollution', description: 'Learn about the causes and effects of air pollution.', url: '#' },
      { id: 2, type: 'video', title: 'How to Reduce Your Carbon Footprint', description: 'Practical tips for reducing your environmental impact.', url: '#' },
      { id: 3, type: 'link', title: 'Local Environmental Regulations', description: 'A comprehensive guide to environmental laws in your area.', url: '#' },
      { id: 4, type: 'article', title: 'The Impact of Plastic Pollution', description: 'Discover how plastic waste affects our ecosystems.', url: '#' },
      { id: 5, type: 'video', title: 'Sustainable Living Tips', description: 'Easy ways to make your lifestyle more eco-friendly.', url: '#' },
      { id: 6, type: 'link', title: 'Volunteer Opportunities in Your Area', description: 'Find local environmental organizations to support.', url: '#' },
    ];
  },

  
 
};