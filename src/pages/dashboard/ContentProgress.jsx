import CardWellcome from "../../components/card/CardWellcome"
import { Link } from "react-router-dom"

export default function Progress() {
    return (
        <>
            <div className="text-third">
                <h1 className="text-2xl font-bold  mb-10">Dashboard</h1>
                 
                <CardWellcome />

                <div class="flex flex-col md:flex-row mt-10">
                    <div class="md:w-3/4 text-left mr-5">

                        {/* Informasi Pendafataran */}
                        <div>
                            <div className="mb-5">
                                <h1 className="text-xl font-semibold">
                                    Informasi Pendaftaran
                                </h1>
                                <div className="mt-3">
                                    <div className="flex bg-bgLight px-5 font-semibold h-20 md:h-24 w-full border-lg">
                                        <div className="flex justify-between items-center w-full">
                                            <div className="flex justify-start">
                                                <div className="flex justify-center items-center bg-primary h-10 w-10 md:h-14 md:w-14 rounded-lg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 md:w-10 md:h-10 text-white">
                                                        <path fill-rule="evenodd" d="M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V3.936z" clip-rule="evenodd" />
                                                    </svg>

                                                </div>
                                                <div className="ml-5 my-auto">
                                                    <h1 className="font-semibold text-sm md:text-base">Fase Saat Ini</h1>
                                                </div>
                                            </div>
                                            <div className="flex justify-end">
                                            <h1 className="font-semibold text-sm md:text-base">
                                                Tahap 3
                                            </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-3">
                                    <div className="flex bg-bgLight px-5 font-semibold h-20 md:h-24 w-full border-lg">
                                        <div className="flex justify-between items-center w-full">
                                            <div className="flex justify-start">
                                                <div className="flex justify-center items-center bg-primary h-10 w-10 md:h-14 md:w-14 rounded-lg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 md:w-10 md:h-10 text-white">
                                                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div className="ml-5 my-auto">
                                                    <h1 className="font-semibold text-sm md:text-base">Fase Saat Ini</h1>
                                                </div>
                                            </div>
                                            <div className="flex justify-end">
                                            <Link to="/dashboard" className="flex items-center text-primary">
                                                <h1 className="font-semibold text-sm md:text-base">
                                                    Lihat
                                                </h1>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                                                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
                                                </svg>
                                            </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>


                    </div>
                    <div class="md:w-1/4 text-left mt-5 md:mt-0">
                        <div>
                            <h1 className="text-xl font-semibold">Pengaduan</h1>
                            <div className="mt-3 bg-bgLight w-full h-40 rounded"> </div>
                        </div>
                    </div>
                </div>


                {/* Progress Pendaftaran */}
                <div>
                    <div className="mb-3">
                        <h1 className="text-xl font-semibold">
                            Progress Pendaftaran Kamu
                        </h1>
                    </div>

                    <div class="inline-block min-w-full px-3 align-middle">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Tahap</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                        <span class="sr-only">Aksi</span>
                                    </th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200">
                                    <tr>
                                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-third sm:pl-0">Seleksi Tahap 1</td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-900 uppercase">lolos</td>
                                        <td class="whitespace-nowrap px-3 py-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-green-500">
                                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                                        </svg>
                                        </td>
                                        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-0">
                                            <Link to="/dashboard" className="flex items-center text-primary">
                                                <h1 className="font-semibold text-sm">
                                                    Detail
                                                </h1>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                                                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
                                                </svg>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-third sm:pl-0">Seleksi Tahap 2</td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-900 uppercase">lolos</td>
                                        <td class="whitespace-nowrap px-3 py-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-green-500">
                                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                                        </svg>
                                        </td>
                                        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-0">
                                            <Link to="/dashboard" className="flex items-center text-primary">
                                                <h1 className="font-semibold text-sm">
                                                    Detail
                                                </h1>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                                                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
                                                </svg>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-third sm:pl-0">Seleksi Tahap 3</td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-900 uppercase">tidak lolos</td>
                                        <td class="whitespace-nowrap px-3 py-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-red-500">
                                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                                        </svg>
                                        </td>
                                        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-0">
                                            <Link to="/dashboard" className="flex items-center text-primary">
                                                <h1 className="font-semibold text-sm">
                                                    Detail
                                                </h1>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                                                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
                                                </svg>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>
        
        </>
    )
}
