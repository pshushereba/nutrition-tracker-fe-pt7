import { useQuery } from "@apollo/react-hooks"

import { USER_DASH_HEADER } from '../gql/queries'

import MaleImg from '../public/undraw_male_avatar_323b.png'
import FemaleImg from '../public/undraw_female_avatar_w3jk.png'
import {useApolloClient} from '@apollo/react-hooks';

export default function DashUser () {
    const { loading, error, data } = useQuery(USER_DASH_HEADER)
    if (loading) return "Loading ..."
    if (error) return `Error: ${error}`
    const client = useApolloClient();
    
    console.log(data.me.weightLogs[0]);
    return (
        <div className="flex-1 flex pl-20">
            <div className="flex flex-col items-center py-2">
                {data.me.profile.gender ? <img src={FemaleImg} className="h-16 w-16 border rounded-full" /> : !data.me.profile.gender ? <img src={MaleImg} className="h-16 w-16 border rounded-full" /> : <img src={MaleImg} className="h-16 w-16 border rounded-full" />}
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
                <div className="">{`${data.me.profile ? data.me.weightLogs[0].current_weight : 0} lbs`}</div>
                <div className="">
                    Current Weight
                </div>
            </div>
        </div>
    )
}