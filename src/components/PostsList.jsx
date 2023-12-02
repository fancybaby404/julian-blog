import { useEffect, useState } from 'react'
import Spinner from './Spinner';
import axios from 'axios';
import Link from 'next/link';
import PostTitle from './PostTitle';

export default function PostsList() {
    let URL;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setData([])
        setLoading(true);
        axios
            .get('/api/getpost', {
                headers: {
                    'Cache-Control': 'no-store'
                }
            })
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((e) => console.log(e));
    }, []);
    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <>
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
                </>
            )}
        </>
    )
}
