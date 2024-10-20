

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import ReportIssue from './pages/ReportIssue';
import RecentReports from './pages/RecentReports';
import  { useState,useEffect } from 'react';
import Resources from './pages/Resources';


function App() {
  const [Reports, setReports] = useState([]);
  const getReports = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/getReports`, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.data);
        setReports(data.data);
      }
    } catch (error) {
      console.log(`services frontend error: ${error}`);
    }
  };
  useEffect(() => {
    getReports();
   
  }, []);
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow  container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/report" element={<ReportIssue />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/recentreports" element={<RecentReports reports={Reports}/>} />
          </Routes>
        </main>
       
        <Footer />
      </div>
    </Router>
  );
}

export default App;