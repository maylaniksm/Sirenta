import SidebarUser from "../components/sidebar/user/SidebarUser";
import SidebarUserMobile from "../components/sidebar/user/SidebarUserMobile";
import React, { useState } from "react";
import PropTypes from 'prop-types';

function LayoutUser(props) {

  LayoutUser.propTypes = {
    sidebar: PropTypes.string
  }

  const [offCanvasMenuIsOpen, setOffCanvasMenuIsOpen] = useState(false);
  const [sidebarActive,  setSidebarActive] = useState("Beranda");
  
  const emitToggle = (toggle) => {
    setOffCanvasMenuIsOpen(toggle);
  };
  
  // React.useEffect(() => {
  //   let newTitle = title || "LayoutUser";
  //   document.title = newTitle;
  // }, [title]);
  
  React.useEffect(() => {
    if (!props.sidebar) {
      setSidebarActive("beranda");
    }
  }, [props.sidebar]);
  
  return (
    <>
      <div className="h-screen flex overflow-hidden">

        <div 
          class="fixed inset-x-0 bottom-0 sm:hidden z-50"
        >
          <div class="bg-gray-100 h-14 bg-opacity-70 backdrop-blur-sm border-t border-gray-300 rounded-t-2xl">
            <div class="max-w-7xl mx-auto px-3">
              <div class="flex items-center justify-around">
                <SidebarUserMobile current={sidebarActive} />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex">
          <SidebarUser current={sidebarActive} />
        </div>

        
        
        <div className="lg:ml-64 flex flex-col w-0 flex-1 overflow-auto">
          <div className="font-body mb-20 sm:mb-0 max-w-7xl mx-auto w-full">
            <div className="px-5 py-10">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
  
  export default LayoutUser;