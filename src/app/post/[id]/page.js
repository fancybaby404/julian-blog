"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/Navbar";
import { useParams } from "next/navigation";
import Spinner from "@/components/Spinner";

export default function PostPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const BLOG_ID = useParams().id;

    useEffect(() => {
        setLoading(true);
        axios
            .post('/api/getpost', {
                id: BLOG_ID,
            })
            .then((response) => {
                setLoading(false);
                setData(response.data);
            });
    }, []);

    return (
        <div className="flex flex-col max-w-2xl py-3 mx-auto align-center">
            {loading ? (
                <Spinner />
            ) : (
                <>
                    {data.img && (
                        <Image
                            alt="postimg"
                            priority={true}
                            src={data.img}
                            width={300}
                            height={300}
                            className="max-w-xs mx-auto mb-5 rounded-lg sm:max-w-md"
                        />
                    )}
                    <h2 className="text-2xl font-bold text-yellow-300">
                        {data.title}
                    </h2>
                    <h4 className="pb-3 text-xl text-gray-500 text-md">
                        {data.date && data.date}
                    </h4>
                    <p className="max-w-3xl text-lg">
                        {" "}
                        {data.description && data.description}{" "}
                    </p>
                </>
            )}
        </div>
    )
}
