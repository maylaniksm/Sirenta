export default function Login() {
    return (
        <div class="flex min-h-full font-body">
          <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="mx-auto w-full max-w-sm lg:w-96">
              <div className="flex justify-center mb-10">
                <img 
                  class="h-20 w-auto" 
                  src="/logo-sirenta.png"
                  alt="Sirenta"
                />
              </div>

              <div className="text-center">
                <h1 className="mb-4 text-3xl font-semibold text-center text-third" >
                    Selamat Datang
                </h1>

                <p className="text-center text-xs font-normal text-gray-600">
                        Masuk menggunakan NIM dan Password dari akun I-LAB    
                </p>
                <a className="text-center text-xs font-normal text-gray-600 underline underline-offset-1" href="https://infotech.umm.ac.id/" target="_blank" rel="noopener noreferrer">infotech.umm.ac.id</a>
              </div>

              <div class="mt-10">
                <div>
                  <form action="#" method="POST" class="space-y-6">
                    <div>
                      <label for="nim" class="block text-sm font-semibold text-third">Nomor Induk Mahasiswa (NIM)</label>
                      <div class="mt-1">
                        <input id="nim" type="text" required class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                      </div>
                    </div>

                    <div>
                    <label for="password" class="block text-sm font-semibold text-third">Password</label>
                      <div class="mt-1">
                        <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                      </div>
                    </div>

                    <div>
                      <button type="submit" class="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Sign in</button>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
          <div class="relative hidden w-0 flex-1 lg:block bg-bgLight">
            <img 
              class="absolute inset-0 h-full w-full object-cover" 
              src="/login.png"
              alt=""
            />
          </div>
        </div>
    )
}
