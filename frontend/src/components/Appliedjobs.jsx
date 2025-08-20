// components/AppliedJobsTable.jsx
import React from 'react';

const AppliedJobsTable = ({job}) => {
    return (
        <div className="overflow-x-auto bg-white rounded-md shadow-md mt-3 mb-16 ">
            <table className="min-w-full text-sm text-left">
                <thead className="bg-gray-100 text-gray-700 uppercase text-base">
                    <tr>
                        <th className="py-3 px-4 text-left">{job?.title}</th>
                        <th className="py-3 px-4">Company</th>
                        <th className="py-3 px-4">Location</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4 text-right">Applied On</th>
                    </tr>
                </thead>
                <tbody>

                    {(
                        [1, 2].map((job, index) => (
                            <tr
                                key={index}
                                className="border-t  hover:bg-gray-200 transition duration-200"
                            >
                                <td className="py-3 px-4 font-medium text-left ">React developer</td>
                                <td className="py-3 px-6 ">tcs</td>
                                <td className="py-3 px-6 ">kolkata</td>

                                <td className="py-3 pr-2 text-center">08-08-2025</td>
                                <td className="py-3 pr-2 text-right">
                                    <span className="px-2 py-1 rounded-full text-xs font-semibold" >  Rejected </span>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default AppliedJobsTable;
