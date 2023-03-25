import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="container-fluid back-img">
      <div className="flex justify-center items-center pt-20 pb-20">
        <div className="max-w-6xl rounded-2xl overflow-hidden shadow-lg text-white bg-black  bg-opacity-20 backdrop-filter backdrop-blur-lg ">
          <div className="py-6 ">
            <div className='flex justify-center'>
              <img src='/logo-sirenta.png' className='w-28'></img>

            </div>
          </div>

          <div className="flex justify-center mx-auto items-center px-6">
            <div>
              <div className="mt-8 pb-4 px-8">
                <h2 className="text-5xl font-semibold">
                  Login
                </h2>
                <input className='my-4 block w-full p-1 bg-white text-black rounded' type="text"></input>
                <input className='my-4 block w-full p-1 bg-white text-black rounded' type="password"></input>
                <p className="text-left py-4">Masuk menggunakan NIM dan Password dari akun I-LAB (infotech.umm.ac.id)
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center px-6 mx-auto space-x-12">
            <a href="#"><button className="bg-transparent font-m bg-white text-gray-900  h-12 w-24 rounded-xl">Masuk</button></a>
            <a href="#"><button className="bg-transparent font-m bg-blue-600 hover:bg-blue-700 text-white h-12 w-24 rounded-xl">Daftar</button></a>
          </div>
          <div>
            <div className="flex items-center space-x-12 px-12 mx-auto pt-14 pb-8">
              <a href="#">
                <svg className="h-6 w-6 text-white transform  transition duration-300 hover:text-yellow-400 hover:scale-125" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="#">
                <svg className="h-6 w-6 text-white transform  transition duration-300 hover:text-yellow-400 hover:scale-125" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" /></svg>
              </a>
              <a href="#">
                <svg className="h-8 w-6 text-white transform  transition duration-300 hover:text-yellow-400 hover:scale-125" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" /></svg>
              </a>

            </div>

          </div>
        </div >
      </div >
    </div >
  );
}

export default App;
