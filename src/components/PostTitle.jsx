// eslint-disable-next-line react/prop-types
export default function PostTitle( {title, date} ) {
    return (
        <>
            <div className="flex justify-between py-3 cursor-pointer hover:bg-slate-700 hover:rounded-lg align-center">
                <h2 className="text-lg">{ title }</h2>
                <h4 className="text-gray-500 text-md">{date}</h4>
            </div>
            <hr />
        </>
    );
}
