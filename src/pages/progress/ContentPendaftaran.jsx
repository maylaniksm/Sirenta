import React, { useState } from 'react'
import { RadioGroup } from '@headlessui/react'


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
                              <div>
                                  <label className="block">No Telp Aktif</label>
                                  <input type="text" className="bg-gray-200 p-2 rounded-lg px-4 w-full" value={"2030"} />
                              </div>
                              <div>
                                  <label className="block">Jenis Kelamin</label>
                                  <RadioGroup as="div" className="mt-2 flex justify-around w-full" value={kelamin} onChange={setKelamin}>
                                    <RadioGroup.Option value="L">
                                      {({ checked }) => (
                                        <span className={checked ? 'p-2 rounded-lg text-white bg-primary' : 'p-2 rounded-lg border-solid border-2 border-primary'}>Laki - laki</span>
                                      )}
                                    </RadioGroup.Option>
                                    <RadioGroup.Option value="P">
                                      {({ checked }) => (
                                        <span className={checked ? 'p-2 rounded-lg text-white bg-primary' : 'p-2 rounded-lg border-solid border-2 border-primary'}>Perempuan</span>
                                      )}
                                    </RadioGroup.Option>
                                  </RadioGroup>
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
                              <div>
                                  <label className="block">No Whatsapp</label>
                                  <input type="text" className="border-solid border-2 border-black p-2 rounded-lg px-4 w-full" value={"086273712323"} />
                              </div>
                              <div>
                                  <label className="block">Lampiran CV .pdf (max 1mb)</label>
                                  <input type="file" className="bg-gray-200 p-2 rounded-lg px-4 w-full" />
                              </div>
                          </div>
                      </div>
                      <div className="w-full">
                          <h1>Skill Kamu</h1>
                          <div className="w-full flex">
                              <div className="border-solid border-2 border-black p-2 rounded-lg px-4">
                                  <input type="checkbox" />
                                  <label >Pemrograman Web</label>
                              </div>
                              <div className="border-solid border-2 border-black p-2 rounded-lg px-4">
                                  <input type="checkbox" />
                                  <label >Pemrograman Mobile</label>
                              </div>
                              <div className="border-solid border-2 border-black p-2 rounded-lg px-4">
                                  <input type="checkbox" />
                                  <label >Desain Grafis</label>
                              </div>
                              <div className="border-solid border-2 border-black p-2 rounded-lg px-4">
                                  <input type="checkbox" />
                                  <label >Videografis</label>
                              </div>
                          </div>
                      </div>
                      <div className="w-full">
                          <h1>Jelaskan Motivasi kamu menjadi asisten laboratorium</h1>
                          <textarea type="text" className="border-solid border-2 border-black p-2 rounded-lg px-4 w-full" value={"gabut"} >
                          </textarea>
                      </div>
                      <div className="w-full">
                          <h1>Jelaskan ide kreatif kamu</h1>
                          <textarea type="text" className="border-solid border-2 border-black p-2 rounded-lg px-4 w-full" value={"tidur"} >
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