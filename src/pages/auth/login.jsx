export default function Login() {
    return (
        <div className="h-screen font-body flex flex-col md:flex-row" >
            <div className="flex items-center justify-center p-3 px-20 sm:p-12 md:w-1/2" >
                <div className="w-full" >
                    <div className="flex justify-center" >
                        <img src="/logo-sirenta.png" className="h-20 mb-10 text-blue-600" fill="none">
                        </img >
                    </div >
                    <h1 className="mb-4 text-2xl font-semibold text-center text-gray-600" >
                        Selamat Datang
                    </h1 >
                    <p className="text-center font-light text-gray-600">
                        Masuk menggunakan NIM dan Password dari akun I-LAB <br />
                        infotech.umm.ac.id
                    </p>
                    <div>
                        <label className="block text-sm">
                            Nomor Induk Mahasiswa (NIM)
                        </label>
                        <input type="email"
                            className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                            placeholder="" />
                    </div >
                    <div>
                        <label className="block mt-4 text-sm">
                            Password
                        </label>
                        <input
                            className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                            placeholder="" type="password" />
                    </div >


                    <button
                        className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue"
                        href="#" >
                        Log in
                    </button >
                    <p className="mt-4 text-center font-extralight" >
                        Butuh bantuan? hubungi tim aslab
                    </p >

                </div >
            </div >
            <div className="h-32 md:h-auto md:w-1/2 bg-primary-light" >
                <img src="/login.png" alt="" />
            </div >

        </div >
    )
}