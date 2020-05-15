import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";


function Navbar() {
  const [navState, setNavState] = useState({
    collapsed: false
  });

  useEffect(() => {
    if (window.innerWidth < 1024 ) {
      setNavState({ ...navState, collapsed: true })
    }
  }, []);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-100 p-6">

      <div className="flex items-center flex-shrink-0 text-orange-500 mr-6">
        <span className="font-semibold text-xl tracking-tight">Project Manager</span>
      </div>
      <div className="block lg:hidden" onClick={() => setNavState({ ...navState, collapsed: !navState.collapsed })}>
        <button className="flex items-center px-3 py-2 border rounded text-orange-500 border-orange-500 hover:text-orange-700 hover:border-orange-700">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div className={navState.collapsed ? "hidden" : "w-full block flex-grow lg:flex lg:items-center lg:w-auto"}>
        <div className="text-sm lg:flex-grow">
          <div className="block mt-4 lg:inline-block lg:mt-0 text-orange-500 hover:text-orange-700 mr-4">
            Docs
          </div>
          <div className="block mt-4 lg:inline-block lg:mt-0 text-orange-500 hover:text-orange-700 mr-4">
            Examples
          </div>
          <div className="block mt-4 lg:inline-block lg:mt-0 text-orange-500 hover:text-orange-700">
            Blog
          </div>
        </div>
        <div className="inline-block text-sm px-4 py-2 leading-none border rounded text-orange-500 border-orange-500 hover:border-transparent hover:text-white hover:bg-orange-500 mt-4 lg:mt-0">Download</div>

      </div>

    </nav>
  )
}


export default Navbar;