import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

// import { Link } from "react-router-dom";


function Navbar(props) {
  // const [navState, setNavState] = useState({
  //   collapsed: false
  // });

  // useEffect(() => {
  //   if (window.innerWidth < 1024 ) {
  //     setNavState({ ...navState, collapsed: true })
  //   }
  // }, []);

  // <div className="block lg:hidden" onClick={() => setNavState({ ...navState, collapsed: !navState.collapsed })}>
  // <div className={navState.collapsed ? "hidden" : "w-full block flex-grow lg:flex lg:items-center lg:w-auto"}>

  var isOpen = false;

  const navRes = () => {
    isOpen = !isOpen;
    console.log("clicked");
    if (isOpen) {
      document.getElementById("menu-options").classList.add("block");
      document.getElementById("menu-options").classList.remove("hidden");
    } else {
      document.getElementById("menu-options").classList.remove("block");
      document.getElementById("menu-options").classList.add("hidden");
    }
  };

  var leftIsOpen = true;
  const leftNavRes = () => {
    leftIsOpen = !leftIsOpen;
    console.log("clicked");
    if (leftIsOpen) {
      // show menu options
      document.getElementById("left-bar").classList.add("sm:block");
      document.getElementById("left-bar").classList.remove("sm:hidden");
      // hide left toggle open
      document.getElementById("left-toggle-open").classList.add("hidden");
      document.getElementById("left-toggle-open").classList.remove("block");
      // move window content
      document.getElementById("page-content").classList.add("push-right-nav-open");
      document.getElementById("page-content").classList.remove("push-right-nav-closed");
    } else {
      // hide left bar
      document.getElementById("left-bar").classList.remove("sm:block");
      document.getElementById("left-bar").classList.add("sm:hidden");
      // show left toggle open
      document.getElementById("left-toggle-open").classList.add("block");
      document.getElementById("left-toggle-open").classList.remove("hidden");
      // move window content
      document.getElementById("page-content").classList.add("push-right-nav-closed");
      document.getElementById("page-content").classList.remove("push-right-nav-open");
    }
  };

  return (
    <div>
      <div>
        <nav className="z-10 flex w-full fixed items-center justify-between flex-wrap bg-white border-b border-gray-200 p-6">

          <div className="flex items-center flex-shrink-0 text-orange-500 mr-6">
            <Link to="/">
              <span className="font-semibold text-xl tracking-tight">Project Manager</span>
            </Link>
          </div>
          <div className="block sm:hidden" onClick={navRes}>
            <button className="flex items-center px-3 py-2 border rounded text-orange-500 border-orange-500 hover:text-orange-700 hover:border-orange-700">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
          </div>
          <div className="w-full sm:flex sm:items-center justify-between sm:w-auto sm:block hidden" id="menu-options">
            <div className="sm:hidden">
            <Link to="/projects">
              <div className="mt-2 pb-1 w-48 text-md cursor-pointer" onClick={navRes}>
                Projects
              </div>
            </Link>
            <Link to="/projectinfo">
              <div className="mt-2 pb-1 w-48 text-md cursor-pointer" onClick={navRes}>
                Project Info
              </div>
            </Link>
            <Link to="/employees">
              <div className="mt-2 pb-1 w-48 text-md cursor-pointer" onClick={navRes}>
                Employees
              </div>
            </Link>
            </div>
            <div className="inline-block text-sm px-4 py-2 leading-none border rounded text-orange-500 border-orange-500 hover:border-transparent hover:text-white hover:bg-orange-500 mt-4 sm:mt-0">Download</div>

          </div>

        </nav>

        {/* left bar */}
        <div className="hidden sm:block w-64 fixed left-0 mt-20 border-r border-orange-300 p-5" id="left-bar">
          <Link to="/projects">
            <div className="mt-6 pl-3 pb-1 w-48 text-lg menu-item cursor-pointer">
              Projects
          </div>
          </Link>
          <Link to="/projectinfo">
            <div className="mt-6 pl-3 pb-1 w-48 text-lg menu-item cursor-pointer">
              Project Info
          </div>
          </Link>
          <Link to="/employees">
            <div className="mt-6 pl-3 pb-1 w-48 text-lg menu-item cursor-pointer">
              Employees
          </div>
          </Link>
          <div className="h-full w-5 absolute right-0 top-0 hover:bg-orange-100" onClick={leftNavRes}>
            <i className="fas fa-angle-double-left left-toggle-icon text-gray-600"></i>
          </div>
        </div>
        {/* toggle for opening nav */}
        <div className="w-5 fixed left-0 top-0 hover:bg-orange-100 hidden fixed mt-20 border-r border-orange-300" id="left-toggle-open" onClick={leftNavRes}>
          <i className="fas fa-angle-double-right left-toggle-icon text-gray-600"></i>
        </div>
      </div>
      <div className="relative push-right-nav-open push-down" id="page-content">{props.children}</div>
    </div>
  )
}


export default Navbar;