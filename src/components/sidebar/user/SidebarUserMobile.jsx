import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function SidebarUserMobile(props) {
    SidebarUserMobile.propTypes = {
        current: PropTypes.string
    }

    function isActiveMenuIcon(name) {
        return props.name === name
            ? "text-primary h-7 w-7 w-full justify-center inline-block text-center"
            : "text-gray-500 h-7 w-7 w-full justify-center inline-block text-center"
    }


    return (
        <div class="font-body w-full">
            <div class="flex justify-between ">
                <div class="flex justify-between w-full">
                    <NavLink to="/dashboard" className="w-full justify-center inline-block text-center pt-2 pb-1">
                        <svg 
                            className={isActiveMenuIcon("dashboard")}
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                        >
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        <span class="tab block text-xs">Dashboard</span>
                    </NavLink>

                    <NavLink to="/pendaftaran" className="w-full justify-center inline-block text-center pt-2 pb-1">
                        <svg 
                            className={isActiveMenuIcon("pendaftaran")}
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
                        <span class="tab block text-xs">Pendaftaran</span>
                    </NavLink>

                    <NavLink to="/pengaduan" className="w-full justify-center inline-block text-center pt-2 pb-1">
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
                        <span class="tab block text-xs">Pengaduan</span>
                    </NavLink>

                    <NavLink to="/" className="w-full justify-center inline-block text-center pt-2 pb-1">
                        <svg 
                            className={isActiveMenuIcon("pengaduan")}
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            stroke-width="2"
                        >
                            <path 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
                            />
                        </svg>
                        <span class="tab block text-xs">Logout</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default SidebarUserMobile;