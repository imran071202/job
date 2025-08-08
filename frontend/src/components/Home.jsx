import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './shared/Navbar';
import { FaSearch } from "react-icons/fa";
import Footer from './Footer';

const jobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechNova',
    location: 'Bangalore',
    type: 'Full-time',
  },
  {
    id: 2,
    title: 'MERN Stack Engineer',
    company: 'CodeLab',
    location: 'Kolkata',
    type: 'Remote',
  },
  {
    id: 3,
    title: 'Backend Node.js Dev',
    company: 'DevWorks',
    location: 'Hyderabad',
    type: 'Part-time',
  },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="py-20 bg-sky-800 text-white ">
          <div className="w-full mx-auto  flex flex-col md:flex-row items-center justify-center gap-10  text-center">
            <div className="md:w-1/2 space-y-2">
              <h1 className='bg-pink-100 text-sm text-sky-800 md:w-2/5 w-2/3 font-semibold mx-auto rounded-2xl py-1'>Thousands of jobs. One platform</h1>
              <h1 className=" text-3xl md:text-4xl font-bold">Find Yours <span className='text-sky-400 '> Dream</span> <span className=''>Job</span></h1>
              <p className="text-lg">Connecting job seekers with top companies.</p>
              {/* <Link to="/jobs">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer">
                  Explore Jobs
                </button>
              </Link> */}
              <div className="flex mx-auto mt-6 justify-center items-center w-[80%] rounded-lg border-1 border-sky-950 hover:scale-105">
                <input type="text" placeholder='Search jobs' className='bg-slate-300 text-black font-semibold w-[91%] py-3.5 outline-0 border-0 rounded-l-md text-center ' />
                <button className='px-4.5  py-4.5 bg-sky-700 cursor-pointer border-r-1 border-sky-700 hover:bg-sky-950 rounded-r-md text-white w-[17%] md:w-[9%] '><FaSearch /></button>

              </div>
            </div>

          </div>
        </section>

        {/* How it Works */}
        <section className="py-16 bg-gray-200 pb-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-15 text-center ">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-xl font-medium mb-2 border-b-2 pb-1">1. Register</h3>
                <p>Create your free account as a recruiter or job seeker.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2 border-b-2 pb-1">2. Post / Apply</h3>
                <p>Recruiters post jobs and seekers apply instantly.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2 border-b-2 pb-1">3. Get Hired</h3>
                <p>Track applications and get hired faster!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-8 text-center">Featured Jobs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-gray-600">{job.company}</p>
                  <p className="text-sm text-green-700">{job.location} · {job.type}</p>
                  <Link to={`/jobs/${job.id}`}>
                    <button className="mt-4 cursor-pointer bg-sky-700 text-white px-4 py-2 rounded hover:bg-sky-900">
                      Apply Now
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-sky-800 py-12 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to start your career?</h2>
          <p className="mb-4">Join our platform and apply to your dream job today.</p>
          <Link to="/signup">
            <button className="bg-white cursor-pointer text-sky-700 px-6 py-2 rounded hover:bg-gray-200">
              Sign Up Now
            </button>
          </Link>
        </section>

   
        
      </div>
      <Footer/>
    </>
  );
};

export default Home;
