interface StateVariable {
    title: string;
}

// @ts-ignore
export default function GlobalTrends({ stateVariable: StateVariable }) {
    return (
        <div className="flex flex-col mt-4">
            <div className="flex justify-between">
                <h1 className="text-black text-xl font-light">{StateVariable}</h1>
            </div>
            <div className="flex flex-row justify-between mt-4">
                <div className="rounded-2xl h-[20vh] w-full bg-black justify-center items-center">
                    <h1 className="text-white">
                        hello
                    </h1>
                </div>

            </div>
        </div>
    )
}