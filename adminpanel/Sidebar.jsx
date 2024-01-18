import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul>
        <a href='/home'><li>HOME</li></a>
       </ul>
        Registrations
       <ul>
       <a href="/Places">
        <li>Places</li></a>
        
       </ul>
       View
       <ul>
       <a href="/PlaceView"><li>Registered Places</li></a>
       <a href="/Hotel"><li>Registered Hotels</li></a>
       <a href="/Restra"><li>Registered Restaurant</li></a>
      </ul>
      
    </div>
  );
};

export default Sidebar;