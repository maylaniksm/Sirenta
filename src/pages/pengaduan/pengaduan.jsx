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
                <h1 className="text-2xl font-bold  mb-10">Progress</h1>

                <div className="pr-5 py-8">
                    <div>
                        <h1>Form Layanan Pengaduan</h1>
                        <div className="flex justify-center my-5 w-full">
                            <div className="border-solid border-2 border-primary p-1 px-4 rounded text-center">Petunjuk Pengaduan</div>
                        </div>
                        <div className="flex">
                            <div className="w-1/2 pr-2">
                                <div>
                                    <label className="block">Nama Lengkap</label>
                                    <input type="text" className="bg-gray-200 p-2 rounded-lg px-4 w-full" value={"anjai"} />
                                </div>
                                <div>
                                    <label className="block">Angkatan</label>
                                    <input type="text" className="bg-gray-200 p-2 rounded-lg px-4 w-full" value={"2020"} />
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div>
                                    <label className="block">Nomor Induk Mahasiswa</label>
                                    <input type="text" className="bg-gray-200 p-2 rounded-lg px-4 w-full" value={"421151525ßß"} />
                                </div>
                                <div>
                                    <label className="block">Email</label>
                                    <input type="email s" className="bg-gray-200 p-2 rounded-lg px-4 w-full" value={"email@gmail.com"} />
                                </div>  
                            </div>
                        </div>
                        <div className="w-full">
                            <h1>Pesan Aduan</h1>
                            <textarea type="text" className="border-solid border-2 border-black p-2 rounded-lg px-4 w-full" value={"gabut"} >
                            </textarea>
                        </div>
                        <div className="flex justify-around w-full">
                            <button className="p-2 rounded-lg text-white bg-primary">Kirim</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}