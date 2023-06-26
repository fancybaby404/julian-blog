import "./App.css";
import PostTitle from "./components/PostTitle";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function App() {
    const URL = window.location.href
    const [data, setData] = useState([]);

    const fetchData = async () => {
        axios.get(`${URL}/data`).then((response) => setData(response.data));
    };

    useEffect(() => {
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="flex flex-col justify-center m-8 hero">
                <h1 className="flex justify-center text-5xl font-bold text-yellow-300 font-bellow-400 outline-8">
                    hi, i am julian!
                </h1>
                <h4 className="flex justify-center">
                    Software Engineer and Web Developer
                </h4>
                <img
                    src="julian.jpg"
                    className="flex m-2 rounded-md place-self-center w-72"
                ></img>
            </div>

            <div className="max-w-xl mx-auto posts">
                <h1 className="my-4 text-xl">Latest Posts</h1>

                {data.map((item, index) => (
                    <Link key={item._id} to={`/blog/${item._id}`}>
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

export default App;
