import React from 'react';

function Button(props) {
  return (
    <div className="cursor-pointer flex items-center px-4 py-2 w-full md:w-auto justify-center md:mt-0 mt-5 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-primary hover:bg-white hover:text-primary hover:border-primary outline-none transition duration-300 ease-in-out" onClick={props.onClick}>
      {props.children}
    </div>
  );
}


export default Button;
