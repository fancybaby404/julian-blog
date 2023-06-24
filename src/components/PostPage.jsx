import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function PostPage() {
    const URL = 'http://localhost:4000'
    const [data, setData] = useState([]);
    const { blogId } = useParams();

    // FETCH REQ
    const fetchData = async () => {
        axios
            .post(`${URL}/getpost`, {
                id: blogId,
            })
            .then((response) => setData(response.data));
    };

    useEffect(() => {
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex flex-col items-center justify-center py-3 align-center">
            {data.img ? <img className="max-w-xs rounded-lg sm:max-w-md" src={data.img}/> : <p/>}
            <h2 className="text-lg ">{data.title}</h2>
            <h4 className="pb-3 text-gray-500 text-md">{data.date}</h4>
            <p className="max-w-3xl"> {data.description} </p>
        </div>
    );
}
