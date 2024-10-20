import  { useState } from 'react';

const ReportIssue = () => {
  const [formData, setFormData] = useState({
    type: '',
   
    description: '',
    location: '',
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    // Here you would typically send the report data to a server
   
    try {
      const response = await fetch(`https://reportapp-zpi0.onrender.com/api/v1/createReport`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setFormData({ type: '', location: '', description: '' });
        alert('Thank you for your report. We will investigate the issue.');
       
       
      }
    } catch (error) {
      alert("Message not send");
      console.log(error);
    }
    // Reset form after submission
    
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Report an Environmental Issue</h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="type">
              Issue Type
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="">Select an issue type</option>
              <option value="pollution">Pollution</option>
              <option value="deforestation">Deforestation</option>
              <option value="water">Water Issues</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="location">
              Location
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="description">
              Description
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the environmental issue"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors font-semibold"
          >
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
  
};

export default ReportIssue;