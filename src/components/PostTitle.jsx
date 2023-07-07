export default function PostTitle( {title, date} ) {
    return (
        <>
            <div className="flex justify-between py-3 duration-500 cursor-pointer hover:border-yellow-300 hover:text-yellow-300 hover:rounded-lg hover:transition-all align-center">
                <h2 className="text-md">{ title }</h2>
                <h4 className="text-gray-500 text-md">{date}</h4>
            </div>
            <hr />
        </>
    );
}
