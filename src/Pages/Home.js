import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>Click on the links above to navigate to other pages.</p>
    </div>
  );
};
export default Home;

// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const Home = () => {
//   const location = useLocation();

//   return (
//     <div>
//       <h1>Home</h1>
//       <p>Current URL: {location.pathname}</p>
//     </div>
//   );
// };

// export default Home;
