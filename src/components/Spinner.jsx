import Image from "next/image";

export default function Spinner() {
    return (
        <Image
            className="max-w-xs mx-auto mb-5 sm:max-w-md"
            src="/spin.svg"
            width="60"
            height="60"
        />
    );
}
