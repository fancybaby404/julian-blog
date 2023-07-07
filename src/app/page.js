"use client";

import Header from "@/components/Header";
import PostTitle from "@/components/PostTitle";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
    let URL;
    const [data, setData] = useState([]);

    useEffect(() => {
        URL = window.location.href;
        axios
            .get(`${URL}/api/data`)
            .then((response) => setData(response.data))
            .catch((e) => console.log(e));
    }, []);

    return (
        <>
            <Header />

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

                {data.map((item, index) => (
                    <Link key={item._id} href={`/blog/${item._id}`}>
                        <PostTitle
                            id={index}
                            title={item.title}
                            description={item.description}
                            date={item.date}
                        />
                    </Link>
                ))}
            </div>
        </>
    );
}
