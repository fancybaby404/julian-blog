import Image from "next/image";

export default function Navbar() {
    return (
        <div className="flex flex-row justify-between max-w-2xl mx-auto header">
            <div className="flex flex-row py-2">
                <a href="/">
                    <Image
                        width={30}
                        height={30}
                        className="pr-2"
                        src="/home.png"
                        alt="home"
                    />
                </a>
            </div>

            <div className="flex flex-row ">
                {/* <a href='/' className="p-2">Home</a> */}
            </div>

            <div className="flex flex-row py-2">
                <a href="https://julianbuckham.vercel.app/" className="pr-2">
                    About
                </a>
                {/* <a className="">Search</a> */}
                {/* ADD SEARCH ICON */}
            </div>
        </div>
    );
}
