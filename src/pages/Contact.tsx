import  { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
   
    try {
      const response = await fetch(`https://reportapp-zpi0.onrender.com/api/v1/contactForm`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted:', formData);
        const data = await response.json();
        console.log(data);
        setFormData({ name: '', email: '', message: '' });
        alert('Thank you for your message. We will get back to you soon!');
       
      }
    } catch (error) {
      alert("Message not send");
      console.log(error);
    }
    // Reset form after submission
    
    
  };

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl mb-8">Get in touch with the EcoAlert team. We're here to help!</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </section>

        <section className="bg-green-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="text-green-600 mr-4" size={24} />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>c9081741@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="text-green-600 mr-4" size={24} />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="text-green-600 mr-4" size={24} />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>123 Green Street, Eco City, EC 12345</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};


export default Contact;