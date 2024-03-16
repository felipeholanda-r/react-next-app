
import { NavbarMenu } from "./_components/NavbarMenu";
import { SidebarMenu } from "./_components/SidebarMenu";

export default function Home() {

    return (
        <div className="bg-gray-50 dark:bg-slate-900 h-screen">

            {/* Menu navbar */}
            <NavbarMenu />


            {/* Menu lateral */}
            <SidebarMenu />


            {/* conteudo */}
            <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 bg-gray-50 dark:bg-slate-900">

                {/* Card da timeline de envios */}
                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-slate-900 dark:border-gray-700">
                        <h3 className="mt-1 text-gray-500 dark:text-white">
                            Timeline
                        </h3>
                    </div>
                    <div className="h-80 overflow-y-auto p-4 md:p-5 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
                        {/* Timeline */}
                        <div>
                            {/* Heading */}
                            <div className="ps-2 my-2 first:mt-0">
                                <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-white">
                                    13/03/2024
                                </h3>
                            </div>
                            {/* End Heading */}

                            {/* Item */}
                            <div className="flex gap-x-3">
                                {/* Left Content */}
                                <div className="w-16 text-end">
                                    <span className="text-xs text-gray-500 dark:text-gray-400">12:05PM</span>
                                </div>
                                {/* End Left Content */}

                                {/* Icon */}
                                <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
                                    <div className="relative z-10 size-7 flex justify-center items-center">
                                        <div className="size-2 rounded-full bg-green-500"></div>
                                    </div>
                                </div>
                                {/* End Icon */}

                                {/* Right Content */}
                                <div className="grow pt-0.5 pb-8">
                                    <h3 className="flex gap-x-1.5 font-medium text-gray-800 dark:text-white">
                                        Notificação enviada
                                    </h3>
                                    <p className="mt-1 text-sm line-clamp-1 hover:line-clamp-none text-gray-600 dark:text-gray-400">
                                        Olá cliente! Seja bem-vindo.
                                    </p>
                                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                                        +55(85)9 9999-8989
                                    </p>
                                </div>
                                {/* End Right Content */}
                            </div>
                            {/* End Item */}

                            {/* Item */}
                            <div className="flex gap-x-3">
                                {/* Left Content */}
                                <div className="w-16 text-end">
                                    <span className="text-xs text-gray-500 dark:text-gray-400">12:05PM</span>
                                </div>
                                {/* End Left Content */}

                                {/* Icon */}
                                <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
                                    <div className="relative z-10 size-7 flex justify-center items-center">
                                        <div className="size-2 rounded-full bg-green-500"></div>
                                    </div>
                                </div>
                                {/* End Icon */}

                                {/* Right Content */}
                                <div className="grow pt-0.5 pb-8">
                                    <h3 className="flex gap-x-1.5 font-medium text-gray-800 dark:text-white">
                                        Notificação enviada
                                    </h3>
                                    <p className="mt-1 text-sm line-clamp-1 hover:line-clamp-none text-gray-600 dark:text-gray-400">
                                        Olá cliente! Seja bem-vindo.
                                    </p>
                                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                                        +55(85)9 9999-8989
                                    </p>
                                </div>
                                {/* End Right Content */}
                            </div>
                            {/* End Item */}

                            {/* Item */}
                            <div className="flex gap-x-3">
                                {/* Left Content */}
                                <div className="w-16 text-end">
                                    <span className="text-xs text-gray-500 dark:text-gray-400">12:05PM</span>
                                </div>
                                {/* End Left Content */}

                                {/* Icon */}
                                <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
                                    <div className="relative z-10 size-7 flex justify-center items-center">
                                        <div className="size-2 rounded-full bg-green-500"></div>
                                    </div>
                                </div>
                                {/* End Icon */}

                                {/* Right Content */}
                                <div className="grow pt-0.5 pb-8">
                                    <h3 className="flex gap-x-1.5 font-medium text-gray-800 dark:text-white">
                                        Notificação enviada
                                    </h3>
                                    <p className="mt-1 text-sm line-clamp-1 hover:line-clamp-none text-gray-600 dark:text-gray-400">
                                        Olá cliente! Seja bem-vindo.
                                    </p>
                                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                                        +55(85)9 9999-8989
                                    </p>
                                </div>
                                {/* End Right Content */}
                            </div>
                            {/* End Item */}

                            {/* Heading */}
                            <div className="ps-2 my-2 first:mt-0">
                                <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-white">
                                    12/03/2024
                                </h3>
                            </div>
                            {/* End Heading */}

                            {/* Item */}
                            <div className="flex gap-x-3">
                                {/* Left Content */}
                                <div className="w-16 text-end">
                                    <span className="text-xs text-gray-500 dark:text-gray-400">12:05PM</span>
                                </div>
                                {/* End Left Content */}

                                {/* Icon */}
                                <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
                                    <div className="relative z-10 size-7 flex justify-center items-center">
                                        <div className="size-2 rounded-full bg-red-500"></div>
                                    </div>
                                </div>
                                {/* End Icon */}

                                {/* Right Content */}
                                <div className="grow pt-0.5 pb-8">
                                    <h3 className="flex gap-x-1.5 font-medium text-gray-800 dark:text-white">
                                        Notificação não enviada
                                    </h3>
                                    <p className="mt-1 text-sm line-clamp-1 hover:line-clamp-none text-gray-600 dark:text-gray-400">
                                        Olá cliente! Seja bem-vindo.
                                    </p>
                                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                                        +55(85)9 9999-8989
                                    </p>
                                </div>
                                {/* End Right Content */}
                            </div>
                            {/* End Item */}

                        </div>
                        {/* End Timeline */}
                    </div>
                </div>

            </div>

        </div>
    );

}