import PostsList from "@/components/PostsList";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="flex flex-col justify-center m-8 hero">
                <h1 className="flex justify-center text-5xl font-bold text-yellow-300 font-bellow-400 outline-8">
                    hi, i am julian!
                </h1>
                <h4 className="flex justify-center">
                    Software Engineer and Web Developer
                </h4>
                <Image
                    alt="julian"
                    width={300}
                    height={300}
                    src="/julian.jpg"
                    className="flex m-2 rounded-md place-self-center"
                />
            </div>

            <div className="max-w-xl mx-auto posts">
                <h1 className="my-4 text-xl">Latest Posts</h1>
                <PostsList />
            </div>
        </>
    )
}
