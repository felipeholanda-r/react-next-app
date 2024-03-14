import Image from "next/image";
import React from "react";

export function Logo() {
    return (
        <a className="flex-none" href="#" aria-label="Brand">
            <div className="flex justify-center">
                <Image
                    src={'Logo.svg'}
                    width={150}
                    height={100}
                    alt="Logo"
                />
            </div>
        </a>

    );
}

