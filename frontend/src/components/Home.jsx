import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './shared/Navbar';
import { FaSearch } from "react-icons/fa";
import Footer from './Footer';
import { useSelector } from 'react-redux';
import AfterLoginHome from './AfterLoginPage';
import useGetAllJobs from '@/hooks/useGetAllJobs';

const Home = () => {
  useGetAllJobs();

  const { user } = useSelector((store) => store.auth);
  const jobs = useSelector((store) => store.jobs?.allJobs || []);

  // ✅ get jobs from Redux

  const navigate= useNavigate()

  useEffect(() => {

    if(user?.role==="recruiter"){
      navigate("/admin/companies")
    }

    
  }, [])
  

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="py-20 bg-sky-800 text-white ">
          <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-10 text-center">
            <div className="md:w-1/2 space-y-2">
              <h1 className='bg-pink-100 text-sm text-sky-800 md:w-2/5 w-2/3 font-semibold mx-auto rounded-2xl py-1'>
                Thousands of jobs. One platform
              </h1>
              <h1 className="text-3xl md:text-4xl font-bold">
                Find Yours <span className='text-sky-400'>Dream</span> Job
              </h1>
              <p className="text-lg">Connecting job seekers with top companies.</p>
              <div className="flex mx-auto mt-6 justify-center items-center w-[80%] rounded-lg border border-sky-950 hover:scale-105">
                <input
                  type="text"
                  placeholder='Search jobs'
                  className='bg-slate-300 text-black font-semibold w-[91%] py-3.5 outline-0 border-0 rounded-l-md text-center'
                />
                <button className='px-4.5 py-4.5 bg-sky-700 cursor-pointer hover:bg-sky-600 rounded-r-md text-white w-[17%] md:w-[9%]'>
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-8 text-center">Featured Jobs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.length > 0 ? (
                jobs.map((job) => (
                  <div key={job._id} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold">{job?.title}</h3>
                    <p className="text-gray-600">{job?.company?.name}</p>
                    <p className="text-sm text-green-700">{job.location} · {job.jobType}</p>
                    <Link to={`/details/${job?._id}`}>
                      <button className="mt-4 cursor-pointer bg-sky-700 text-white px-4 py-2 rounded hover:bg-sky-900">
                        Apply Now
                      </button>
                      
                    </Link>
                  </div>
                ))
              ) : (
                <p className="text-center col-span-3">No jobs available</p>
              )}
            </div>
          </div>
        </section>

        {/* How it Works */}
        {user ? <AfterLoginHome /> : (
          <>
            <section className="py-16 bg-gray-200 pb-20">
              <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-15 text-center">How It Works</h2>
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
            <section className="bg-sky-800 py-12 text-white text-center">
              <h2 className="text-2xl font-bold mb-2">Ready to start your career?</h2>
              <p className="mb-4">Join our platform and apply to your dream job today.</p>
              <Link to="/signup">
                <button className="bg-white cursor-pointer text-sky-700 px-6 py-2 rounded hover:bg-gray-200">
                  Sign Up Now
                </button>
              </Link>
            </section>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
