import React from 'react';
import Image from "next/image";

export function ColapsedMenuBrand(props: { srcLogo: string }) {
    return (
        <div className="me-5 lg:me-0 lg:hidden">
            <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">
                <Image
                    src={props.srcLogo}
                    width={39}
                    height={39}
                    alt="Logo"
                />
            </a>
        </div>
    );
}

type option = {
    name: string,
    link: string
}
export function AvatarAndOptions(props: { srcAvatar: string, userName: string, options: option[] }) {
    return (
        <div className="flex flex-row items-center justify-end gap-2">
            {/* Botão de notificações */}
            <button type="button" className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
            </button>

            {/* Avatar e opções */}
            <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
                {/* Avatar */}
                <button id="hs-dropdown-with-header" type="button" className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    <Image src={props.srcAvatar} width={38} height={38} alt="Avatar" className="inline-block size-[38px] rounded-full ring-2 ring-white dark:ring-gray-800" />
                </button>


                {/* Menu de opções */}
                <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-dropdown-with-header">
                    <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-gray-700">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Olá,</p>
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-300">{props.userName}</p>
                    </div>

                    <div className="mt-2 py-2 first:pt-0 last:pb-0">

                        {props.options.map((option) => (
                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href={option.link}>{option.name}</a>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}

export function NavbarMenu() {
    return (
        <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-gray-800 dark:border-gray-700" >
            <nav className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8" aria-label="Global">
                {/* Menu colapsado */}
                <div className="sticky top-0 inset-x-0 z-20 bg-white px-2 sm:px-4 md:px-6 lg:hidden dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center">

                        {/* Botão do menu colapsado */}
                        <button type="button" className="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                        </button>

                    </div>
                </div>

                {/* Logo que aparece quando o menu lateral some */}
                <ColapsedMenuBrand srcLogo="logo-img.svg" />


                {/* Avatar e notificações */}
                <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">

                    {/* Div para espaçamento */}
                    <div className="hidden sm:block">
                    </div>

                    {/* Notificações, Avatar e opções */}
                    <AvatarAndOptions
                        srcAvatar="/avatar.png"
                        userName="James Bond"
                        options={[
                            { name: 'Perfil', link: '#' },
                            { name: 'Sair', link: '#' }
                        ]}
                    />


                </div>
            </nav>
        </header >
    );
}