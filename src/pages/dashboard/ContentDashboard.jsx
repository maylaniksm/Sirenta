import CardWellcome from "../../components/card/CardWellcome"
import ButtonPrimary from "../../components/buttons/ButtonPrimary"
import { Link } from "react-router-dom"

export default function Dashboard() {
    return (
        <>
            <div className="text-third">
                <h1 className="text-2xl font-bold  mb-10">Dashboard</h1>
                 
                <CardWellcome />

                <div class="flex flex-col md:flex-row mt-10">
                    <div class="md:w-3/4 text-left">
                        <div>
                            <div className="mb-3">
                                <h1 className="text-xl font-semibold">
                                    Informasi Pendaftaran
                                </h1>
                            </div>
                            <center>
                                <img src="/No data-pana 1.png" className="w-64" alt="" srcset="" />
                                <p>Anda belum terdaftar pada seleksi ini.</p>
                                <div className="mt-2">
                                </div>

                                <Link to="/dashboard/progress">
                                    <ButtonPrimary>
                                        Lihat
                                    </ButtonPrimary>
                                    
                                </Link>
                            </center>
                        </div>
                    </div>
                    <div class="md:w-1/4 text-left mt-5 md:mt-0">
                        <div>
                            <h1 className="text-xl font-semibold">Pengaduan</h1>
                            <div className="mt-3 bg-bgLight w-full h-40 rounded"> </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}
