export default function Header() {
    return (
        <div className="flex flex-row justify-between max-w-2xl mx-auto header">
            <div className="flex flex-row py-2">
                <a href="/">
                    <img className="pr-2" src="home.png"/>
                </a>
                {/* <h3>julianbuckham</h3> */}
            </div>

            <div className="flex flex-row ">
                {/* <a href='/' className="p-2">Home</a> */}
            </div>

            <div className="flex flex-row py-2">
                <a href="https://julianbuckham.vercel.app/" className="pr-2">About</a>
                {/* <a className="">Search</a> */}
                {/* ADD SEARCH ICON */}
            </div>
        </div>
    );
}
