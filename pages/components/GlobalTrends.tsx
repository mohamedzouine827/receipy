interface StateVariable {
    title: string;
}

// @ts-ignore
export default function GlobalTrends({ stateVariable: StateVariable }) {
    return (
        <div className="flex flex-col mt-4">
            <div className="flex justify-between">
                <h1 className="text-black text-base font-normal">{StateVariable}</h1>
                <h1 className="text-orange-500 text-base font-normal">More</h1>
            </div>
            <div className="flex flex-row justify-between mt-4">
                <div className="rounded-2xl h-[106.4px] w-[157px] bg-black"></div>
                <div className="rounded-2xl h-[106.4px] w-[157px] bg-black"></div>
            </div>
        </div>
    )
}