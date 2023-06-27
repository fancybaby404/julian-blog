import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
    const URL = window.location.href
    const [data, setData] = useState([]);
    const { blogId } = useParams();

    // FETCH REQ
    const fetchData = async () => {
        axios
            .post(`${URL}/api/getpost`, {
                id: blogId,
            })
            .then((response) => setData(response.data));
    };

    useEffect(() => {
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex flex-col max-w-2xl py-3 mx-auto align-center">
            {data.img ? <img className="max-w-xs mx-auto mb-5 rounded-lg sm:max-w-md" src={data.img}/> : <p/>}
            {/* <h2 className="text-2xl font-bold text-yellow-300">{data.title}</h2> */}
            <h4 className="pb-3 text-xl text-gray-500 text-md">{data.date}</h4>
            <p className="max-w-3xl text-lg"> {data.description} </p>
        </div>
    );
}
