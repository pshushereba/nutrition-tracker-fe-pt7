import { useQuery } from "@apollo/react-hooks"

import { USER_DASH_HEADER } from '../gql/queries'

import MalePlaceHolderSVG from '../components/svg/MalePlaceHolderSVG.js';
import FemalePlaceHolderSVG from '../components/svg/FemalePlaceHolderSVG.js';
import MaleImg from '../public/undraw_male_avatar_323b.png'
import FemaleImg from '../public/undraw_female_avatar_w3jk.png'

export default function DashUser () {
    const { loading, error, data } = useQuery(USER_DASH_HEADER)
    console.log("In DashUser", data.me.profile.gender)
    if (loading) return "Loading ..."
    if (error) return `Error: ${error}`

    return (
        <div className="flex-1 flex pl-20">
            <div className="flex flex-col items-center py-2">
            <div className="h-16 w-16 border border-gray-900 rounded-full bg-transparent">
                {data.me.profile.gender ? <img src={FemaleImg} className="h-16 w-16 border rounded-full" /> : <img src={MaleImg} className="h-16 w-16 border rounded-full" />}
                
            </div>
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
                <div className="">{`${data.me.profile ? data.me.profile.weight : 0} lbs`}</div>
                <div className="">
                    Current Weight
                </div>
            </div>
        </div>
    )
}