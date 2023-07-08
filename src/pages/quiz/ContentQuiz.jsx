import { Link } from "react-router-dom"
import ButtonPrimary from "../../components/buttons/ButtonPrimary"

export default function Pengaduan() {
    return (
        <>
            <div className="text-third">
                <div>
                    <h1 className="text-2xl font-bold  mb-10">Ujian Berbasis Komputer</h1>

                    <div className="pr-5 py-8">
                        <div>
                            <h1 className="text-xl font-semibold">
                                Ujian ini adalah bagian dari Rekruitmen Asisten 2024
                            </h1>
                            <div class="bg-bgLight text-lg rounded-lg py-2 px-5 my-3">
                                <span class="block sm:inline">Informasi Ujian</span>
                            </div>
                            <div className="mx-5">
                                <ul className="list-decimal">
                                    <li className="mb-2"> 
                                        <h1 className="font-semibold">Kategori Pertanyaan</h1>
                                        <div className="ml-5">
                                            <ul className="list-disc">
                                                <li>Lorem Ipsum</li>
                                                <li>Lorem Ipsum</li>
                                                <li>Lorem Ipsum</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="mb-2"> 
                                        <h1 className="font-semibold">Jumlah Pertanyaan</h1>
                                        <div className="ml-5">
                                            <ul className="list-disc">
                                                <li>Lorem Ipsum</li>
                                                <li>Lorem Ipsum</li>
                                                <li>Lorem Ipsum</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="mb-2"> 
                                        <h1 className="font-semibold">Bobot Penilaian</h1>
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

                        <Link to="/quiz/progress" className="flex justify-center mt-5 w-full">
                            <ButtonPrimary>
                                Mulai Quiz
                            </ButtonPrimary>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}