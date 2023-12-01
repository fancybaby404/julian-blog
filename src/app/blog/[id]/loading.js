import Header from "@/components/Navbar";
import Spinner from "@/components/Spinner";

export default function Loading() {
    return (
        <>
            <Header />

            <div className="flex flex-col max-w-2xl py-3 mx-auto align-center">
                <Spinner />

                <h2 className="text-2xl font-bold text-yellow-300"></h2>
                <h4 className="pb-3 text-xl text-gray-500 text-md"></h4>
                <p className="max-w-3xl text-lg"></p>
            </div>
        </>
    );
}
