import { useState } from "react";

import AgeGenderHeight from "../components/form/AgeGenderHeight";
import DietPreference from "../components/form/DietPreference";
import Macros from "../components/form/Macros";
import WeightGoalWeight from "../components/form/WeightGoalWeight";
import ActivityLevel from "../components/form/ActivityLevel";
import LogInSVG from "../components/svg/LogInSVG";
import withApollo from "../lib/apollo";
import Layout from "../components/Layout/index";
import { Spacer } from "../components/Layout/LayoutPrimitives";

const CreateProfile = () => {
  const [user, setUser] = useState({});
  const [profileStep, setProfileStep] = useState("dietPreferences");

  return (
    <Layout>
      <div className="w-7/12 mx-auto mt-40">
        <div className="flex">
          <div className="w-1/3">
            <div className="flex flex-col w-full">
              {profileStep === "ageGenderHeight" ? (
                <AgeGenderHeight
                  user={user}
                  setUser={setUser}
                  setProfileStep={setProfileStep}
                />
              ) : profileStep === "weightGoalWeight" ? (
                <WeightGoalWeight
                  user={user}
                  setUser={setUser}
                  setProfileStep={setProfileStep}
                />
              ) : profileStep === "activityLevel" ? (
                <ActivityLevel
                  user={user}
                  setUser={setUser}
                  setProfileStep={setProfileStep}
                />
              ) : profileStep === "dietPreferences" ? (
                <DietPreference
                  user={user}
                  setUser={setUser}
                  setProfileStep={setProfileStep}
                />
              ) : profileStep === "macros" ? (
                <Macros user={user} setUser={setUser} />
              ) : (
                "Error"
              ) //TODO: Proper error handling or default. Will using AgeGender or HeightWeight as default lead to bugs?
              }
            </div>
          </div>
          <Spacer />
          <div className="flex flex-col w-1/2">
            <Spacer />
            <LogInSVG />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withApollo(CreateProfile);
