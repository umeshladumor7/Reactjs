import React, { useState } from 'react';

const ConditionalRand = () => {
     const [isLoggedIn, setLoggedIn] = useState(false);

     const handleLogin = () => {
          setLoggedIn(true);
     };

     const handleLogout = () => {
          setLoggedIn(false);
     };

     return (
          <div>
               <h1>Conditional Rendering </h1>

               {isLoggedIn ? (
                    <div>
                         <p>Welcome, User! You are logged in.</p>
                         <button onClick={handleLogout}>Logout</button>
                    </div>
               ) : (
                    <div>
                         <p>Please log in to access the content.</p>
                         <button onClick={handleLogin}>Login</button>
                    </div>
               )}
          </div>
     );
};

export default ConditionalRand;
