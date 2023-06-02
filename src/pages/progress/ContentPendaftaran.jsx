import React, { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import ButtonPrimary from "../../components/buttons/ButtonPrimary"

export default function Pendaftaran() {
  let [kelamin, setKelamin] = useState('L')
  return (
      <>

          <div>
              <h1 className="text-2xl font-bold  mb-10">Progress</h1>

              <div className="pr-5 py-8">
                  <div>
                      <h1>Form pendaftaran reqruitment asistan 2024</h1>
                      <div className="flex justify-center my-5 w-full">
                          <div className="border-solid border-2 border-primary p-1 px-4 rounded text-center">Petunjuk Pengisian</div>
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
                                  <input type="text" className="border-solid border-2 border-black p-2 font-semibold text-sm rounded-lg px-4 w-full" placeholder='081000000' />
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
                              <div className="border-solid border-2 border-black p-2 rounded-lg px-4">
                                  <input type="checkbox" />
                                  <label className="ml-1" >Pemrograman Web</label>
                              </div>
                              <div className="border-solid border-2 border-black p-2 rounded-lg px-4">
                                  <input type="checkbox" />
                                  <label className="ml-1" >Pemrograman Mobile</label>
                              </div>
                              <div className="border-solid border-2 border-black p-2 rounded-lg px-4">
                                  <input type="checkbox" />
                                  <label className="ml-1" >Desain Grafis</label>
                              </div>
                              <div className="border-solid border-2 border-black p-2 rounded-lg px-4">
                                  <input type="checkbox" />
                                  <label className="ml-1" >Videografis</label>
                              </div>
                          </div>
                      </div>
                      <div className="w-full mt-5">
                          <h1 className="text-sm font-semibold">Jelaskan Motivasi kamu menjadi asisten laboratorium</h1>
                          <textarea placeholder='Masukkan text' className="border-solid border-2 border-black p-2 rounded-lg px-4 w-full text-sm font-semibold" />
                      </div>
                      <div className="w-full mt-3">
                          <h1 className="text-sm font-semibold">Jelaskan ide kreatif kamu</h1>
                          <textarea placeholder='Masukkan text' className="border-solid border-2 border-black p-2 rounded-lg px-4 w-full text-sm font-semibold" />
                      </div>
                      <div className="flex justify-around w-full">
                            <ButtonPrimary>
                                Simpan
                            </ButtonPrimary>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}