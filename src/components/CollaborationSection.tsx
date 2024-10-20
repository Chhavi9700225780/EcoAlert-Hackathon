
import { Users, Building, Globe } from 'lucide-react';

const CollaborationSection = () => {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold text-center mb-8">Collaborate for Change</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Users className="mx-auto mb-4 text-blue-500" size={48} />
          <h3 className="text-xl font-semibold mb-2">Community Involvement</h3>
          <p>Join local initiatives and connect with like-minded individuals to make a difference in your area.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Building className="mx-auto mb-4 text-green-500" size={48} />
          <h3 className="text-xl font-semibold mb-2">Government Partnerships</h3>
          <p>We work closely with local governments to ensure your reports lead to actionable changes in policy and practice.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Globe className="mx-auto mb-4 text-purple-500" size={48} />
          <h3 className="text-xl font-semibold mb-2">NGO Collaboration</h3>
          <p>Partner with environmental NGOs to amplify your impact and support global sustainability initiatives.</p>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;