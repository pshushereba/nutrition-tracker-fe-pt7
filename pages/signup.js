import { useState, useEffect } from "react";

import CreateUserForm from "../components/form/CreateUserForm";
import LogInSVG from "../components/svg/LogInSVG";
import withApollo from "../lib/apollo";
import Layout from "../components/Layout/index.js";
import {
  CenteredContainer,
  Spacer,
} from "../components/Layout/LayoutPrimitives";

const SignUp = () => {
  const [user, setUser] = useState({});

  return (
    <Layout>
      <div className="flex w-full h-full pt-20">
        <Spacer />
        <div className="w-3/12">
          <CreateUserForm />
        </div>
        <div className="w-5/12">
          <CenteredContainer extraClasses={"ml-48"}>
            <LogInSVG />
          </CenteredContainer>
        </div>
        <Spacer />
      </div>
    </Layout>
  );
};

export default withApollo(SignUp);
