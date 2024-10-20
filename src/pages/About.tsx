
import { Users, BarChart, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">About EcoAlert</h1>
        <p className="text-xl mb-8">Empowering communities to protect our environment through technology and collaboration.</p>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg">
          At EcoAlert, we believe that every individual has the power to make a positive impact on the environment. 
          Our mission is to provide a platform that empowers communities to identify, report, and address environmental 
          issues in their local areas. By leveraging the power of crowdsourced data and artificial intelligence, 
          we aim to create a global network of environmental stewards working together for a sustainable future.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-green-100 p-6 rounded-lg text-center">
          <Users className="mx-auto mb-4 text-green-600" size={48} />
          <h3 className="text-xl font-semibold mb-2">Community-Driven</h3>
          <p>We believe in the power of collective action and community engagement.</p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg text-center">
          <BarChart className="mx-auto mb-4 text-green-600" size={48} />
          <h3 className="text-xl font-semibold mb-2">Data-Informed</h3>
          <p>We use AI and data analysis to prioritize and address environmental issues effectively.</p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg text-center">
          <Globe className="mx-auto mb-4 text-green-600" size={48} />
          <h3 className="text-xl font-semibold mb-2">Globally Connected</h3>
          <p>We foster collaboration between communities, governments, and NGOs worldwide.</p>
        </div>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6">Our Team</h2>
        <p className="text-lg mb-4">
          EcoAlert was founded by a diverse group of environmental scientists, technologists, and community organizers 
          who share a passion for environmental conservation and sustainable development.
        </p>
        <p className="text-lg">
          Our team is committed to developing innovative solutions that make it easy for anyone to contribute to 
          environmental protection efforts. We work tirelessly to ensure that the data collected through our platform 
          leads to meaningful action and positive change in communities around the world.
        </p>
      </section>
    </div>

  );
};

export default About;