import ButtonPrimary from "../../components/buttons/ButtonPrimary"

export default function ContentQuizProgress() {
    return (
        <>
            <div className="text-third">
                <div>
                    <h1 className="text-2xl font-bold  mb-10">Ujian Berbasis Komputer</h1>

                    <div className="pr-5 py-8">
                        <div className="flex flex-col lg:flex-row">
                            <div class="md:w-4/6 w-full">
                                <h1 className="text-xl font-semibold">
                                    Pengetahuan Umum
                                </h1>
                                <div class="bg-bgLight text-lg rounded-lg py-2 px-5 my-3">
                                    <span class="block sm:inline">
                                        Nomer 1
                                    </span>
                                </div>

                                <div className="my-5">
                                    <h1 className="font-semibold ">
                                        Lorem ipsum sir dolor amet
                                    </h1>
                                </div>
                                <form>
                                    <div class="mb-2">
                                        <input type="radio" id="option1" name="answer" class="mr-2" />
                                        <label for="option1">Option 1</label>
                                    </div>
                                    <div class="mb-2">
                                        <input type="radio" id="option2" name="answer" class="mr-2"/>
                                        <label for="option2">Option 2</label>
                                    </div>
                                    <div class="mb-2">
                                        <input type="radio" id="option3" name="answer" class="mr-2" />
                                        <label for="option3">Option 3</label>
                                    </div>
                                    <div class="mb-4">
                                        <input type="radio" id="option4" name="answer" class="mr-2" />
                                        <label for="option4">Option 4</label>
                                    </div>

                                    <div className="flex justify-between">
                                        <ButtonPrimary>
                                            Prev
                                        </ButtonPrimary>
                                        <ButtonPrimary>
                                            Next
                                        </ButtonPrimary>
                                    </div>
                                </form>
                            </div>

                            <div class="md:w-2/6 w-full pt-8 ml-3">
                                <div className="">
                                    <div className="bg-orange-100 rounded-lg text-white mb-3">
                                        <div className="bg-orange-500 rounded-lg p-3">
                                            Waktu Tersisa
                                        </div>
                                        <center className="p-10">
                                            <strong className="text-gray-800 text-3xl">
                                                00:21:59
                                            </strong>
                                        </center>
                                    </div>
                                    <div className="bg-orange-100 rounded-lg text-white">
                                        <div className="bg-orange-500 rounded-lg p-3">
                                            Pertanyaan
                                        </div>
                                        <div className="grid grid-cols-5 gap-4 p-5">
                                            <div className="bg-green-400 rounded-lg p-1">
                                                <center>
                                                1
                                                </center>
                                            </div>
                                            <div className="bg-green-400 rounded-lg p-1">
                                                <center>
                                                2
                                                </center>
                                            </div><div className="bg-blue-400 rounded-lg p-1">
                                                <center>
                                                3
                                                </center>
                                            </div><div className="bg-blue-400 rounded-lg p-1">
                                                <center>
                                                4
                                                </center>
                                            </div>
                                            <div className="bg-blue-400 rounded-lg p-1">
                                                <center>
                                                5
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}