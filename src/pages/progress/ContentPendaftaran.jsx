import React, { useState, Fragment } from 'react'
import { RadioGroup } from '@headlessui/react'
import ButtonPrimary from "../../components/buttons/ButtonPrimary"
import { Dialog, Transition } from '@headlessui/react'

export default function Pendaftaran() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  let [kelamin, setKelamin] = useState('L')
  return (
      <>

          <div className="text-third">
              <h1 className="text-2xl font-bold  mb-10">Pendaftaran</h1>

              <div className="pr-5 py-8">
                  <div>
                      <h1 className="text-xl font-semibold">
                        Form pendaftaran reqruitment asistan 2024
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
                                            <li className="text-sm font-semibold mb-2">
                                                Jika CV atau Nilai KHS Anda belum siap, Anda bisa menguploadnya secara menyusul sebelum pendaftaran ditutup.
                                            </li>
                                            <li className="text-sm font-semibold mb-2">
                                                Setelah mendaftar, Anda bisa membatalkan pendaftaran maupun mengubah formulir Anda jika diperlukan.
                                            </li>
                                            <li className="text-sm font-semibold mb-2">
                                                Status akan berubah ketika Anda berhasil mendaftar.
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


                        {/* Start of Form */}
                        <form action="">
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
                                <div>
                                    <label className="block text-sm font-semibold">No Telp Aktif</label>
                                    <div className="bg-gray-200 p-2 rounded-lg px-4 w-full cursor-not-allowed">
                                        <h1 className="font-semibold text-sm">
                                            213213123123
                                        </h1>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold">No Whatsapp</label>
                                    <input type="text" className="border-solid border border-gray-400 p-2 font-semibold text-sm rounded-lg px-4 w-full" placeholder='081000000' />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold">Jenis Kelamin</label>
                                    <RadioGroup as="div" className="mt-2 flex justify-start" value={kelamin} onChange={setKelamin}>
                                        <div className="cursor-pointer mr-3">
                                            <RadioGroup.Option value="L">
                                            {({ checked }) => (
                                                <span className={checked ? 'p-2 rounded-lg text-white bg-primary' : 'p-2 rounded-lg border-solid border-2 border-primary'}>Laki - laki</span>
                                            )}
                                            </RadioGroup.Option>
                                        </div>
                                        <div className="cursor-pointer">
                                            <RadioGroup.Option value="P">
                                            {({ checked }) => (
                                                <span className={checked ? 'p-2 rounded-lg text-white bg-primary' : 'p-2 rounded-lg border-solid border-2 border-primary'}>Perempuan</span>
                                            )}
                                            </RadioGroup.Option>
                                        </div>
                                    </RadioGroup>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold">Lampiran CV .pdf (max 1mb)</label>
                                    <input type="file" className="bg-gray-200 p-2 rounded-lg px-4 w-full" />
                                </div>
                            </div>

                            <div className="w-full mt-5">
                                <h1 className="block text-sm font-semibold">Skill Kamu</h1>
                                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                                    <div className="border-solid border border-gray-400 p-2 rounded-lg px-4">
                                        <input id="web" type="checkbox" />
                                        <label for="web" className="ml-1" >Pemrograman Web</label>
                                    </div>
                                    <div className="border-solid border border-gray-400 p-2 rounded-lg px-4">
                                        <input id="mobile" type="checkbox" />
                                        <label for="mobile" className="ml-1" >Pemrograman Mobile</label>
                                    </div>
                                    <div className="border-solid border border-gray-400 p-2 rounded-lg px-4">
                                        <input id="desain" type="checkbox" />
                                        <label for="desain" className="ml-1" >Desain Grafis</label>
                                    </div>
                                    <div className="border-solid border border-gray-400 p-2 rounded-lg px-4">
                                        <input id="video" type="checkbox" />
                                        <label for="video" className="ml-1" >Videografis</label>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mt-5">
                                <h1 className="text-sm font-semibold">Jelaskan Motivasi kamu menjadi asisten laboratorium</h1>
                                <textarea 
                                    rows="4"
                                    autoComplete='off'
                                    placeholder='Masukkan text'
                                    className="border-solid border border-gray-400 p-2 rounded-lg px-4 w-full text-sm font-semibold" />
                            </div>
                            <div className="w-full mt-3">
                                <h1 className="text-sm font-semibold">Jelaskan ide kreatif kamu</h1>
                                <textarea 
                                    rows="4"
                                    autoComplete='off'
                                    placeholder='Masukkan text' 
                                    className="border-solid border border-gray-400 p-2 rounded-lg px-4 w-full text-sm font-semibold" />
                            </div>
                            <div className="flex justify-around w-full">
                                    <ButtonPrimary>
                                        Simpan
                                    </ButtonPrimary>
                            </div>
                        </form>
                  </div>
              </div>
          </div>
      </>
  )
}