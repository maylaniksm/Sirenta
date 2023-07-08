import CardLolos from "../../components/card/CardLolos"
import CardWait from "../../components/card/CardWait"
import { Tab } from '@headlessui/react'

export default function ContentPendaftaran() {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
      
    return(
        <>
            <div className="text-third font-body">
              <h1 className="text-2xl font-bold  mb-10">Progress Pendaftaran</h1>

                <div className="py-8">
                    <div>
                        <h1 className="text-xl font-semibold">
                            Informasi alur pendaftaran
                        </h1>
                    </div>

                    <div className="my-5 w-full overflow-x-auto gap-5">
                        <Tab.Group>
                            <Tab.List className="">
                                <div className="flex justify-between w-full mb-5 overflow-x-auto">
                                    <Tab 
                                        className={({ selected }) =>
                                            classNames(
                                            'flex items-center justify-center h-9 w-56 rounded-lg font-semibold text-sm leading-5',
                                            selected
                                                ? 'bg-primary text-white'
                                                : 'text-third bg-bgLight'
                                            )
                                        }
                                    >
                                        Pendaftaran
                                    </Tab>
                                    <Tab 
                                        className={({ selected }) =>
                                            classNames(
                                            'flex items-center justify-center h-9 w-56 rounded-lg font-semibold text-sm leading-5',
                                            selected
                                                ? 'bg-primary text-white'
                                                : 'text-third bg-bgLight'
                                            )
                                        }
                                    >
                                        Tahap 1
                                    </Tab>
                                    <Tab 
                                        className={({ selected }) =>
                                            classNames(
                                            'flex items-center justify-center h-9 w-56 rounded-lg font-semibold text-sm leading-5',
                                            selected
                                                ? 'bg-primary text-white'
                                                : 'text-third bg-bgLight'
                                            )
                                        }
                                    >
                                        Tahap 2
                                    </Tab>
                                    <Tab 
                                        className={({ selected }) =>
                                            classNames(
                                            'flex items-center justify-center h-9 w-56 rounded-lg font-semibold text-sm leading-5',
                                            selected
                                                ? 'bg-primary text-white'
                                                : 'text-third bg-bgLight'
                                            )
                                        }
                                    >
                                        Tahap 3
                                    </Tab>
                                </div>
                            </Tab.List>

                            <Tab.Panels>
                                <Tab.Panel>
                                    <CardLolos />
                                </Tab.Panel>

                                <Tab.Panel>
                                    <CardLolos />
                                </Tab.Panel>

                                <Tab.Panel>
                                    <CardLolos />
                                </Tab.Panel>

                                <Tab.Panel>
                                    <CardWait />
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </div>
            </div>
        </>
    )
}