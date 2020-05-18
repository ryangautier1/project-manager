import React from "react";
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
      document.getElementById("left-bar").classList.add("block");
      document.getElementById("left-bar").classList.remove("hidden");
      // hide left toggle open
      document.getElementById("left-toggle-open").classList.add("hidden");
      document.getElementById("left-toggle-open").classList.remove("block");
    } else {
      // hide left bar
      document.getElementById("left-bar").classList.remove("block");
      document.getElementById("left-bar").classList.add("hidden");
      // show left toggle open
      document.getElementById("left-toggle-open").classList.add("block");
      document.getElementById("left-toggle-open").classList.remove("hidden");
    }
  };

  return (
    <div>
      <div>
        <nav className="z-10 flex w-full fixed items-center justify-between flex-wrap bg-white border-b border-gray-200 p-6">

          <div className="flex items-center flex-shrink-0 text-orange-500 mr-6">
            <span className="font-semibold text-xl tracking-tight">Project Manager</span>
          </div>
          <div className="block lg:hidden" onClick={navRes}>
            <button className="flex items-center px-3 py-2 border rounded text-orange-500 border-orange-500 hover:text-orange-700 hover:border-orange-700">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
          </div>
          <div className="w-full lg:flex lg:items-center justify-between lg:w-auto" id="menu-options">
            <div className="inline-block text-sm px-4 py-2 leading-none border rounded text-orange-500 border-orange-500 hover:border-transparent hover:text-white hover:bg-orange-500 mt-4 lg:mt-0">Download</div>

          </div>

        </nav>

        {/* left bar */}
        <div className="w-64 block fixed left-0 mt-20 border-r border-gray-200 p-5" id="left-bar">
          <div className="mt-6 pl-3 pb-1 w-48 text-lg menu-item">Teams</div>
          <div className="mt-6 pl-3 pb-1 w-48 text-lg menu-item">Employees</div>
          <div className="mt-6 pl-3 pb-1 w-48 text-lg menu-item">Projects</div>
          <div className="mt-6 pl-3 pb-1 w-48 text-lg menu-item">Teams</div>
          <div className="h-full w-5 absolute right-0 top-0 hover:bg-gray-100" onClick={leftNavRes}>
            <i className="fas fa-angle-double-left left-toggle-icon text-gray-600"></i>
          </div>
        </div>
        {/* toggle for opening nav */}
        <div className="w-5 absolute left-0 top-0 hover:bg-gray-100 hidden fixed mt-20 border-r border-gray-200" id="left-toggle-open" onClick={leftNavRes}>
          <i className="fas fa-angle-double-right left-toggle-icon text-gray-600"></i>
        </div>
      </div>
      <div className="relative push-right push-down">{props.children}</div>
    </div>
  )
}


export default Navbar;