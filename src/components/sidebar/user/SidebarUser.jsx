import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


function SidebarUser(props) {

    SidebarUser.propTypes = {
        current: PropTypes.string
    }


    function isActiveMenu(name) {
        return props.current === name
          ? "bg-black rounded-xl group py-2 h-12 "
          : "hover:bg-gray-100 hover:text-primary group py-2 h-12 rounded-xl ml-25px ";
      }
    
      function isActiveMenuIcon(name) {
        return props.current === name
          ? "text-primary mr-3 h-6 w-6"
          : "text-third group-hover:text-primary mr-3 h-6 w-6";
      }

      function isActiveText(name) {
        return props.current === name
          ? "font-body text-primary text-sm font-semibold "
          : "font-body text-primary text-sm font-semibold"
      }

  return (

    <div>
        <aside id="default-sidebar" class="font-body fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div class="h-full px-3 py-4 overflow-y-auto bg-white border-r border-gray-300">
                <div class="space-y-2 font-medium">
                    <div>
                        <a href="#" class="flex items-center justify-center p-2 text-gray-900 rounded-lg ">
                            <img src="/logo-sirenta.png" className="w-3/4" alt="" />
                        </a>
                    </div>

                    {/* Start of Profile */}
                    <div>
                        <div class="flex items-center justify-center p-2 text-gray-900 mb-20 rounded-lg ">
                            <div className="w-full text-center text-third">
                                <div className="flex justify-center w-full h-full mb-2">
                                    <img src="/profile.png" className="w-28 h-auto mt-10 block" alt="" />
                                </div>
                                <h1 className="font-semibold text-base">
                                    Septin Dwi Kurnia
                                </h1>
                                <span className="font-normal text-sm">
                                    202210370311320
                                </span>
                                <a href="/"><button className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-4 text-center text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue">
                                    Log Out </button></a>
                            </div>
                        </div>
                    </div>
                    {/* End of Profile */}
                    

                    {/* Start of Sidebar */}
                    <div className="flex flex-col flex-grow">
                        <div>
                            <NavLink to="/dashboard" className="w-full flex items-center pl-7 hover:bg-gray-500" activeClassName={isActiveMenu("dashboard")}>
                                <svg 
                                    className={isActiveMenuIcon("dashboard")}
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 20 20" 
                                    fill="currentColor"
                                >
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>
                                <span className={isActiveText("dashboard")}>Dashboard</span>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/progress" className="w-full flex items-center pl-7 hover:bg-gray-500" activeClassName={isActiveMenu("progress")}>
                                <svg 
                                    className={isActiveMenuIcon("progress")}
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 24 24" 
                                    fill="currentColor"
                                >
                                    <path 
                                        fill-rule="evenodd" 
                                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" 
                                        clip-rule="evenodd" 
                                    />
                                </svg>
                                <span className={isActiveText("progress")}>Pendaftaran</span>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/pengaduan" className="w-full flex items-center pl-7 hover:bg-gray-500" activeClassName={isActiveMenu("pengaduan")}>
                                <svg 
                                    className={isActiveMenuIcon("pengaduan")}
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 24 24" 
                                    fill="currentColor"
                                >
                                    <path 
                                        fill-rule="evenodd" 
                                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" 
                                        clip-rule="evenodd" 
                                    />
                                </svg>
                                <span className={isActiveText("pengaduan")}>Pengaduan</span>
                            </NavLink>
                        </div>
                    </div>
                    {/* End of Sidebar */}

                </div>
            </div>
        </aside>
    </div>
  )
}

export default SidebarUser;