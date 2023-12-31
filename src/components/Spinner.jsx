import Image from "next/image";

export default function Spinner() {
    return (
        <Image
            className="max-w-xs mx-auto mb-5 animate-pulse sm:max-w-md"
            alt="spinner"
            src="/spin.svg"
            width="60"
            height="60"
        />
    );
}
