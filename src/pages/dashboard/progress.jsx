export default function DashboardProgress() {
    return (
        <>
            <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 py-10" aria-label="Sidebar">
                <div class="h-full px-3 py-4 overflow-y- bg-white border-r border-gray-300">
                    <ul class="space-y-2 font-medium">
                        <li>
                            <a href="#" class="flex items-center justify-center p-2 text-gray-900 rounded-lg ">
                                <img src="/logo-sirenta.png" className="w-3/4" alt="" srcset="" />
                            </a>
                        </li>
                        <li>
                            <div class="flex items-center justify-center p-2 text-gray-900 mb-20 rounded-lg ">
                                <a className="w-full font-semibold text-gray-600 text-center">
                                    <div className="flex justify-center w-full">
                                        <img src="/profile.png" className="w-1/3 mt-10 block" alt="" srcset="" />
                                    </div>
                                    Prince Sarah Connor
                                    <br />
                                    <span className="font-extralight">
                                        202510370311295
                                    </span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-600 rounded-lg  hover:bg-gray-100">
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-600 rounded-lg  hover:bg-gray-100">
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Progress</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-600 rounded-lg  hover:bg-gray-100">
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Pengaduan</span>
                            </a>
                        </li>

                    </ul>
                </div>
            </aside>

            <div className="p-10 sm:ml-64 text-gray-600">
                <h1 className="text-2xl font-bold  mb-10">Dashboard</h1>
                <div className="flex bg-bgLight px-5 py-8 font-semibold justify-between">
                    <div>
                        <h1>Halo, Prince Sarah Connor</h1>
                        <p className="font-light">Selamat datang di sistem rekrutmen Asisten Laboratorium Informatika UMM</p>
                    </div>
                    <img src="/Cross-platform software-rafiki 1.png" className="w-48" alt="" srcset="" />
                </div>
                <div className="flex py-8 font-semibold justify-between">
                    <div className="w-3/4 pr-5">
                        <h1>Informasi Pendaftaran</h1>
                        <div className="flex bg-bgLight px-5 py-8 font-semibold ">
                            <div className="flex items-center">
                                <img src="/Group 9.png" className="w-12" alt="" srcset="" />
                            </div>
                            <div className="ml-5 my-auto">
                                <h1>Fase Saat Ini</h1>
                            </div>
                        </div>
                        <div className="flex py-8 font-semibold justify-between">
                    <div className="w-3/4 pr-5">
                        <div className="flex bg-bgLight px-5 py-8 font-semibold ">
                            <div className="flex items-center">
                                <img src="/Group 9.png" className="w-12" alt="" srcset="" />
                            </div>
                            <div className="ml-5 my-auto">
                                <h1>Progress seleksi anda</h1>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
                    <div className="w-1/4">
                        <h1>Pengaduan</h1>
                        <div className="bg-bgLight w-full h-40 rounded"> </div>
                    </div>
                </div>
               
            </div>
        </>
    )
}
