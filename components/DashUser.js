export default function DashUser ({ data }) {
    return (
        <div className="flex-1 flex pl-20">
            <div className="flex flex-col items-center py-2">
                <div className=" h-16 w-16 border border-gray-900 rounded-full"></div>
                <div className="mt-2">
                    {data.me.name}
                </div>
            </div>
            <div className="flex flex-col items-center pl-12 py-2">
                <div className="flex-1"></div>
                <div className="">12 days</div>
                <div className="">
                    Streak
                </div>
            </div>
            <div className="flex flex-col items-center pl-12 py-2">
                <div className="flex-1"></div>
                <div className="">{`${data.me.profile.weight} lbs`}</div>
                <div className="">
                    Current Weight
                </div>
            </div>
        </div>
    )
}