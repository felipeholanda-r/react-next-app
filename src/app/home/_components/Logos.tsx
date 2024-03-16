import Image from "next/image";
import React from "react";

export function LogoFullWhite() {
    return (
        <a className="flex-none" href="#" aria-label="Brand">
            <div className="flex justify-center">
                <Image
                    src={'logo-full-white.svg'}
                    width={150}
                    height={100}
                    alt="Logo"
                />
            </div>
        </a>

    );
}

export function LogoFullBlack() {
    return (
        <a className="flex-none" href="#" aria-label="Brand">
            <div className="flex justify-center">
                <Image
                    src={'logo-full-black.svg'}
                    width={150}
                    height={100}
                    alt="Logo"
                />
            </div>
        </a>

    );
}


