import Image from "next/image";

export function Logo() {
    return (
        <div className="flex justify-center">
            <Image
                src={'Logo.svg'}
                width={300}
                height={300}
                alt="Logo"
            />
        </div>
    );
}

