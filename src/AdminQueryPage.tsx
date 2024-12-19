// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// interface Query {
//   _id: string;
//   carId: string;
//   userId: string;
//   question: string;
//   answered: boolean;
//   answeredAt: string | null;
//   response: string | null;
//   contactInfo: string;
//   category: string;
//   createdAt: string;
//   updatedAt: string;
// }

// const AdminDashboard = () => {
//   const [queries, setQueries] = useState<Query[]>([]); 
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string>('');
//   const [response, setResponse] = useState<{ [key: string]: string }>({}); // Track response per query

//   useEffect(() => {
//     const fetchQueries = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           setError('You are not authenticated.');
//           return;
//         }

//         const res = await axios.get('http://localhost:8080/api/query/fetch-query', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         console.log(res.data);

//         setQueries(res.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Error fetching queries.');
//         setLoading(false);
//       }
//     };

//     fetchQueries();
//   }, []);

//   const handleMarkAsAnswered = async (queryId: string) => {
//     if (!response[queryId]?.trim()) {
//       setError('Please provide a response.');
//       return;
//     }

//     try {
//       const updatedQuery = {
//         answered: true,
//         answeredAt: new Date().toISOString(),
//         response: response[queryId],
//       };

//       const token = localStorage.getItem('token');
//       await axios.put(`http://localhost:8080/api/query/update-query-status-by-id/${queryId}`, updatedQuery, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });


//       setQueries((prevQueries) =>
//         prevQueries.map((query) =>
//           query._id === queryId ? { ...query, ...updatedQuery } : query
//         )
//       );

//       setResponse((prevResponses) => ({ ...prevResponses, [queryId]: '' }));
//       setError('');
//     } catch (err) {
//       setError('Error updating the query.');
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto py-12 px-6 md:px-12">
//       <div className="bg-white shadow-xl rounded-lg p-8">
//         <h1 className="text-3xl font-semibold text-gray-800 mb-4">Admin Dashboard</h1>

//         {loading ? (
//           <div>Loading queries...</div>
//         ) : error ? (
//           <div className="text-red-500">{error}</div>
//         ) : (
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Queries</h2>
//             <ul>
//               {queries.map((query) => (
//                 <li key={query._id} className="mb-6 p-4 border-b">
//                   <div><strong>Message:</strong> {query.question}</div>
//                   <div><strong>Contact Info:</strong> {query.contactInfo}</div>
//                   <div><strong>Category:</strong> {query.category}</div>
//                   <div><strong>Status:</strong> {query.answered ? 'Answered' : 'Pending'}</div>
//                   <div><strong>Created At:</strong> {new Date(query.createdAt).toLocaleString()}</div>

//                   {!query.answered && (
//                     <div className="mt-4">
//                       <textarea
//                         value={response[query._id] || ''}
//                         onChange={(e) => setResponse({ ...response, [query._id]: e.target.value })}
//                         placeholder="Enter your response"
//                         className="w-full p-3 border border-gray-300 rounded-lg"
//                         rows="4"
//                       ></textarea>
//                       <button
//                         onClick={() => handleMarkAsAnswered(query._id)}
//                         className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                       >
//                         Mark as Answered
//                       </button>
//                     </div>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [response, setResponse] = useState({}); // Track response per query
  const [searchQuery, setSearchQuery] = useState(''); // Search query text
  const [sortBy, setSortBy] = useState('createdAt'); // Default sort by date
  const [sortOrder, setSortOrder] = useState('desc'); // Default descending order

  // Fetch queries from the server
  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('You are not authenticated.');
          return;
        }

        const res = await axios.get('http://localhost:8080/api/query/fetch-query', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setQueries(res.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching queries.');
        setLoading(false);
      }
    };

    fetchQueries();
  }, []);

  // Handle the 'Mark as Answered' functionality
  const handleMarkAsAnswered = async (queryId) => {
  if (!response[queryId]?.trim()) {
    setError('Please provide a response.');
    return;
  }

  const updatedQuery = {
    answered: true,
    answeredAt: new Date().toISOString(),
    answer: response[queryId], // Pass the response here
    status: 'resolved', // Set status to 'resolved' when answered
  };

  try {
    const token = localStorage.getItem('token');
    const res = await axios.put(
      `http://localhost:8080/api/query/update-query-status-by-id/${queryId}`,
      updatedQuery,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Update the local queries state with the updated query response
    setQueries((prevQueries) =>
      prevQueries.map((query) =>
        query._id === queryId ? { ...query, ...updatedQuery } : query
      )
    );

    setResponse((prevResponses) => ({ ...prevResponses, [queryId]: '' }));
    setError('');
  } catch (err) {
    setError('Error updating the query.');
  }
};


  // Filter and sort queries
  const filteredAndSortedQueries = queries
    .filter(
      (query) =>
        query.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        query.contactInfo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        query.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'createdAt') {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
      } else if (sortBy === 'answered') {
        return sortOrder === 'desc' ? b.answered - a.answered : a.answered - b.answered;
      }
      return 0;
    });

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Admin Dashboard</h1>

        {loading ? (
          <div className="text-gray-500 text-lg">Loading queries...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <div>
            {/* Search Bar */}
            <div className="mb-6 flex space-x-4">
              <input
                type="text"
                placeholder="Search queries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="p-2 w-full md:w-1/2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Sort By Dropdown */}
            <div className="flex space-x-4 mb-6">
              <div>
                <label className="text-sm text-gray-700">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="p-2 border border-gray-300 rounded-lg"
                >
                  <option value="createdAt">Date</option>
                  <option value="answered">Status (Answered / Pending)</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-700">Order</label>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="p-2 border border-gray-300 rounded-lg"
                >
                  <option value="desc">Descending</option>
                  <option value="asc">Ascending</option>
                </select>
              </div>
            </div>

            <h2 className="text-xl font-medium text-gray-700 mb-4">Queries</h2>
            <ul className="space-y-6">
              {filteredAndSortedQueries.map((query) => (
                <li
                  key={query._id}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div>
                    <strong className="block text-gray-700">Message:</strong> {query.question}
                  </div>
                  <div>
                    <strong className="block text-gray-700">Contact Info:</strong> {query.contactInfo}
                  </div>
                  <div>
                    <strong className="block text-gray-700">Category:</strong> {query.category}
                  </div>
                  <div>
                    <strong className="block text-gray-700">Created At:</strong>
                    {new Date(query.createdAt).toLocaleString()}
                  </div>
                  <div className="mt-2">
                    <span
                      className={`inline-block text-xs font-semibold text-white py-1 px-3 rounded-full ${
                        query.answered ? 'bg-green-500' : 'bg-yellow-500'
                      }`}
                    >
                      {query.answered ? 'Answered' : 'Pending'}
                    </span>
                  </div>

                  {!query.answered && (
                    <div className="mt-4">
                      <textarea
                        value={response[query._id] || ''}
                        onChange={(e) => setResponse({ ...response, [query._id]: e.target.value })}
                        placeholder="Enter your response"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        rows="4"
                      ></textarea>
                      <button
                        onClick={() => handleMarkAsAnswered(query._id)}
                        className="mt-3 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      >
                        Mark as Answered
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
