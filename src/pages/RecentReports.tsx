
import { MapPin, AlertTriangle, TreePine, Droplets } from 'lucide-react';

interface Report {
  id: number;
  category: string;
  description: string;
  location: string;
  latitude: number;
  longitude: number;
  date: string;
  status: 'Active' | 'Resolved' | 'Under Review';
}

interface Props {
  reports: Report[];
}

const RecentReports: React.FC<Props> = ({reports}) => {

  
  const getIcon = (category:any) => {
    switch (category) {
      case 'pollution':
        return <AlertTriangle className="text-red-500" />;
      case 'deforestation':
        return <TreePine className="text-green-500" />;
      case 'water':
        return <Droplets className="text-blue-500" />;
      default:
        return <MapPin className="text-gray-500" />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl text-center font-semibold mb-4">Recent Reports</h2>
      {reports.length === 0 ? (
        <p>No reports yet. Be the first to submit!</p>
      ) : (
        <ul className="space-y-4">
          {reports.map((report:any, index:number) => (
            <li key={index} className="flex items-start">
              <div className="mr-3">{getIcon(report.type)}</div>
              <div>
                <p className="font-semibold">{report.type}</p>
                <p className="text-sm text-gray-600">{report.location}</p>
                <p className="text-sm">{report.description}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecentReports;