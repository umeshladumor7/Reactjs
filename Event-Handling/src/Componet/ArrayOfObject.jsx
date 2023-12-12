
import React from 'react';

const ArrayOfObject = () => {
     const users = [
          {
               id: 1,
               name: 'Umesh',
               age: 23
          },
          {
               id: 2,
               name: 'Hitesh',
               age: 20
          },
          {
               id: 3,
               name: 'Ankit',
               age: 21
          },
     ];

     return (
          <div>
               {users.map((user) => (
                    <p key= {user.id}>
                      Name :   {user.name}, 
                         Age: {user.age}
                    </p>
               ))}
          </div>
     );
};

export default ArrayOfObject;
