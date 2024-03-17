interface Props {
    title: string;
}
export default function Trends(props : Props) {
    return (
        <div className="flex flex-col mt-4">
            <div className="flex justify-between">
                <h1 className="text-black text-xl font-light">{props.title}</h1>
            </div>
            <div className="flex flex-row justify-between mt-4">
                <div className="rounded-2xl h-[20vh] w-full bg-black">
                </div>

            </div>
        </div>
    )
}