import { useState, Fragment } from 'react'
import ButtonPrimary from "../../components/buttons/ButtonPrimary"
import { Dialog, Transition } from '@headlessui/react'

export default function Pengaduan() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return(
        <>
            <div className="text-third">
              <h1 className="text-2xl font-bold  mb-10">Pengaduan</h1>

                <div className="pr-5 py-8">
                    <div>
                        <h1 className="text-xl font-semibold">
                            Form Pengaduan
                        </h1>
                        <div className="flex justify-center my-5 w-full">
                            <button
                                onClick={openModal}  
                                className="flex items-center px-4 py-2 w-full md:w-auto justify-center md:mt-0 mt-5 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-primary hover:bg-white hover:text-primary hover:border-primary outline-none transition duration-300 ease-in-out"
                            >
                                Petunjuk Pengisian
                            </button>
                        </div>

                        {/* Start of PopUp Modal */}
                        <Transition appear show={isOpen} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto font-body text-third">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                    <div className="bg-primary bg-opacity-50 px-5 py-3">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            Petunjuk Pengisian
                                        </Dialog.Title>
                                    </div>
                                    <div className="mt-2 p-5">
                                        <ul className="list-decimal px-5">
                                            <li className="text-sm font-semibold mb-2">
                                                Pastikan data akun ilab sesuai dengan data terkini Anda, kunjungi infotech.umm.ac.id untuk mengubah data akun.
                                            </li>
                                            <li className="text-sm font-semibold mb-2">
                                                Pastikan data Email dan nomor WhatsApp telah benar, kunjungi infotech.umm.ac.id untuk mengubah data akun.
                                            </li>
                                            <li className="text-sm font-semibold mb-2">
                                                Isi formulir pendaftaran dengan hati-hati dan jujur.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="m-5 flex justify-end">
                                        <button 
                                            type="button"
                                            onClick={closeModal}
                                            className="cursor-pointer flex items-center px-4 py-2 w-full md:w-auto justify-center md:mt-0 mt-5 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-primary hover:bg-white hover:text-primary hover:border-primary outline-none transition duration-300 ease-in-out"
                                        >
                                            Saya Mengerti 
                                        </button>
                                    </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                                </div>
                            </div>
                            </Dialog>
                        </Transition>
                        {/* End of Modal   */}
                    </div>

                    <div className="grid gap-5 mt-5 md:grid-cols-2">
                        <div>
                            <label className="block text-sm font-semibold">Nama Lengkap</label>
                            <div className="bg-gray-200 p-2 rounded-lg px-4 w-full cursor-not-allowed">
                                <h1 className="font-semibold text-sm">
                                    Benjamin
                                </h1>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold">Nomor Induk Mahasiswa</label>
                            <div className="bg-gray-200 p-2 rounded-lg px-4 w-full cursor-not-allowed">
                                <h1 className="font-semibold text-sm">
                                    124134124
                                </h1>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold">Angkatan</label>
                            <div className="bg-gray-200 p-2 rounded-lg px-4 w-full cursor-not-allowed">
                                <h1 className="font-semibold text-sm">
                                    23
                                </h1>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold">Email</label>
                            <div className="bg-gray-200 p-2 rounded-lg px-4 w-full cursor-not-allowed">
                                <h1 className="font-semibold text-sm">
                                    Benjamin@email.com
                                </h1>
                            </div>
                        </div>
                    </div>

                    <form action="">
                        <div className="w-full mt-3">
                            <h1 className="text-sm font-semibold">Pesan aduan</h1>
                            <textarea 
                                rows="4"
                                autoComplete='off'
                                placeholder='Masukkan text' 
                                className="border-solid border border-gray-400 p-2 rounded-lg px-4 w-full text-sm font-semibold" />
                        </div>
                        <div className="flex justify-end mt-5 w-full">
                            <ButtonPrimary>
                                Kirim
                            </ButtonPrimary>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}