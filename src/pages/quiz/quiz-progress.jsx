export default function Pengaduan() {
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
                <h1 className="text-2xl font-bold  mb-10">Ujian Berbasis Komputer</h1>

                <div className="pr-5 py-8 pt-6">
                    <div>
                        <h1 className="text-xl">Pengetahuan Umum</h1>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-2 ">
                                <div class="bg-orange-100 rounded-lg p-2 my-3" role="alert">
                                    <span class="block sm:inline">Nomor 1</span>
                                </div>
                                <div>
                                    <ul className="list-decimal">
                                        <li className="mb-2"> Kategori Pertanyaan
                                            <br />
                                            <div className="ml-5">
                                                <ul className="list-disc">
                                                    <li>Lorem Ipsum</li>
                                                    <li>Lorem Ipsum</li>
                                                    <li>Lorem Ipsum</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="mb-2"> Jumlah Pertanyaan
                                            <br />
                                            <div className="ml-5">
                                                <ul className="list-disc">
                                                    <li>Lorem Ipsum</li>
                                                    <li>Lorem Ipsum</li>
                                                    <li>Lorem Ipsum</li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="list-decimal">
                                        <li className="mb-2"> Bobot Penilaian
                                            <br />
                                            <div className="ml-5">
                                                <ul className="list-disc">
                                                    <li>Lorem Ipsum</li>
                                                    <li>Lorem Ipsum</li>
                                                    <li>Lorem Ipsum</li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="">
                                <div className="bg-orange-100 rounded-lg text-white mb-3">
                                    <div className="bg-orange-500 rounded-lg p-3">
                                        Waktu Tersisa
                                    </div>
                                    <center className="p-10">
                                        <strong className="text-gray-800 text-3xl">
                                            00:21:59
                                        </strong>
                                    </center>
                                </div>
                                <div className="bg-orange-100 rounded-lg text-white">
                                    <div className="bg-orange-500 rounded-lg p-3">
                                        Pertanyaan
                                    </div>
                                    <div className="grid grid-cols-5 gap-4 p-5">
                                        <div className="bg-green-400 rounded-lg p-1">
                                            <center>
                                            1
                                            </center>
                                        </div>
                                        <div className="bg-green-400 rounded-lg p-1">
                                            <center>
                                            2
                                            </center>
                                        </div><div className="bg-blue-400 rounded-lg p-1">
                                            <center>
                                            3
                                            </center>
                                        </div><div className="bg-blue-400 rounded-lg p-1">
                                            <center>
                                            4
                                            </center>
                                        </div>
                                        <div className="bg-blue-400 rounded-lg p-1">
                                            <center>
                                            5
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}