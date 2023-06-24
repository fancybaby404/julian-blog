export default function Header() {
    return (
        <div className="flex flex-row justify-between max-w-3xl mx-auto">
            <div className="py-2">
                <h3>julianbuckham</h3>
            </div>

            <div className="flex flex-row ">
                <a href='/' className="p-2">Home</a>
                <a className="p-2">About</a>
                <a className="p-2">Contact</a>
            </div>

            <div className="py-2">
                <h3>Search</h3>
                {/* ADD SEARCH ICON */}
            </div>
        </div>
    );
}
