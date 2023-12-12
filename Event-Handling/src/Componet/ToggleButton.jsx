import React, { useState } from 'react';

const ToggleButton = () => {
     const [isOn, setIsOn] = useState(false);

     const handleToggle = () => {
          setIsOn(!isOn);
     };

     return (
          <div>
               <h1>Toggle Button Example</h1>
               <p>Current state: {isOn ? 'On' : 'Off'}</p>
               <button onClick={handleToggle}>
                    {isOn ? 'Turn Off' : 'Turn On'}
               </button>
          </div>
     );
};

export default ToggleButton;
