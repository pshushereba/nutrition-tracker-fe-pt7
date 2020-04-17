import { useQuery } from "@apollo/react-hooks";

import { USER_DASH_HEADER, GET_WEIGHT_LOGS } from "../gql/queries";
import MaleImg from "../public/undraw_male_avatar_323b.png";
import FemaleImg from "../public/undraw_female_avatar_w3jk.png";

export default function DashUser() {
  const { loading, error, data } = useQuery(GET_WEIGHT_LOGS);
  if (loading) return "Loading ...";
  if (error) return `Error: ${error}`;

  return (
    <div className="flex-1 flex pl-20">
      <div className="flex flex-col items-center py-2">
        {data.me.profile.gender ? (
          <img src={FemaleImg} className="h-16 w-16 border rounded-full" />
        ) : !data.me.profile.gender ? (
          <img src={MaleImg} className="h-16 w-16 border rounded-full" />
        ) : (
          <img src={MaleImg} className="h-16 w-16 border rounded-full" />
        )}
        <div className="mt-2">{data.me.name}</div>
      </div>
      <div className="flex flex-col items-center pl-12 py-2">
        <div className="flex-1"></div>
        <div className="">12 days</div>
        <div className="">Streak</div>
      </div>
      <div className="flex flex-col items-center pl-12 py-2">
        <div className="flex-1"></div>
        <div className="">{`${
          data.myWeightLogs ? data.myWeightLogs[0].current_weight : 0
        } lbs`}</div>
        <div className="">Current Weight</div>
      </div>
    </div>
  );
}

