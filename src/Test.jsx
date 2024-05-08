// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Test = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const options = {
//         method: 'GET',
//         url: 'https://booking-com.p.rapidapi.com/v1/hotels/reviews',
//         params: {
//           locale: 'en-gb',
//           sort_type: 'SORT_MOST_RELEVANT',
//           hotel_id: '1676161',
//           customer_type: 'solo_traveller,review_category_group_of_friends',
//           language_filter: 'en-gb,de,fr'
//         },
//         headers: {
//           'X-RapidAPI-Key': 'a81d2279e5mshe3dd6222ed7d694p1014e3jsncd78d3c6024b',
//           'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
//         }
//       };
      
//       try {
//         const response = await axios.request(options);
//         console.log(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();

//     // Cleanup function to cancel the request if the component is unmounted
//     return () => {
//       // Cancel the request
//     };
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;
//   if (!data) return null;

//   return (
//     <div>
//       {/* Render your data here */}
//       {/* Example: */}
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

// export default Test;
