import React, { useState } from 'react';

const Navbar = () => {
  return (
    <nav className='relative container mx-auto p-6'>
      {/* flex container */}
      <div className='flex items-center justify-between'>
        <span className=' font-bold font-mono text-3xl'>RateMyGame</span>
        {/* menu items */}
          <div className='flex space-x-6 font-bold'>
              <div>Leaderboards</div>
              <div>Champions</div>
              <div>Game mode</div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar