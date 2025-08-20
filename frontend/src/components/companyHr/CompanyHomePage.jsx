import React, { useEffect, useState } from "react";
import axios from "axios";
import { COMPANY_API_POINT } from "@/utils/apiPoint";
import Navbar from "../shared/Navbar";
import { IoCreate } from "react-icons/io5";

export default function CompanyHomePage() {
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(`${COMPANY_API_POINT}/getCompany`,{withCredentials:true});
        setCompanies(res.data.companies);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };
    fetchCompanies();
  }, []);

  // search filter
  const filteredCompanies = companies.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-white rounded-xl shadow-md p-4 mb-10 mt-3 md:w-[80%] mx-auto ">
        <div className="flex w-full md:w-2/4 gap-2">
          <input
            type="text"
            placeholder="Search company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg px-3 py-1 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => {}}
            className="bg-sky-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-sky-800"
          >
            Search
          </button>
        </div>

        <button
          onClick={() => alert("Redirect to create company page")}
          className="mt-3 md:mt-0 bg-green-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-green-700 flex items-center gap-1"
        >
          <IoCreate className="text-xl " />Create New Company
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-md overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Logo</th>
              <th className="p-3">Name</th>
              <th className="p-3">Created At</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCompanies.length > 0 ? (
              filteredCompanies.map((company) => (
                <tr
                  key={company._id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-3">
                    {company.logo ? (
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-12 h-12 rounded-full object-cover border"
                      />
                    ) : (
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 text-gray-500">
                        N/A
                      </div>
                    )}
                  </td>
                  <td className="p-3 font-medium">{company.name}</td>
                  <td className="p-3 text-gray-600">
                    {new Date(company.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-3 flex justify-center gap-3">
                    <button className="px-4 py-2 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600">
                      Edit
                    </button>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-6 text-gray-500">
                  No companies found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}
