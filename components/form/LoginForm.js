import { useMutation } from "@apollo/react-hooks";
import Cookie from "js-cookie";
import { useRouter } from "next/router";

import FormInput from "./FormInput";
import { LOG_IN } from "../../gql/mutations";
import ThunderboltSVG from "../svg/ThunderboltSVG";
import { Spacer } from "../Layout/LayoutPrimitives";
import { useState } from "react";

export default function () {
  const [user, setUser] = useState("");
  const Router = useRouter();

  const variables = {
    email: user.email,
    password: user.password,
  };

  const [login, {}] = useMutation(LOG_IN);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const existingToken = Cookie.get("token");

    if (existingToken) {
      Cookie.remove("token");
    }

    const {
      data: {
        login: {
          token,
          user: { id, name },
        },
      },
    } = await login({ variables: variables });

    Cookie.set("token", token);
    Cookie.set("id", id);
    const nameWithoutWhitespace = (name) => name.trim().split(" ").join("");
    Router.push(
      "/[user]/dashboard",
      `/${nameWithoutWhitespace(name)}/dashboard`
    );
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex mt-2">
        <Spacer />
        <div className="flex flex-col justify-center pb-3">
          <ThunderboltSVG />
        </div>
        <h2 className="text-3xl font-medium my-4">Sign In</h2>
        <Spacer />
      </div>
      <div className="flex">
        <Spacer />
        <p className="text-xl mb-2">Let's start crushing those goals!</p>
        <Spacer />
      </div>
      <form className="flex flex-col w-full">
        <FormInput
          name="email"
          label="E-mail"
          placeHolder="email@email.com"
          type="email"
          required={true}
          setInput={setUser}
          data={user}
        />
        <FormInput
          name="password"
          label="Password"
          placeHolder="password"
          type="password"
          required={true}
          setInput={setUser}
          data={user}
        />
      </form>
      <button
        className="w-full mt-8 py-2 text-white bg-pink-500 rounded hover:bg-pink-600"
        onClick={handleSubmit}
      >
        Let's Go!
      </button>
      <div className="flex">
        <Spacer />
        <p className="mt-6 -mb-12">
          Already a member?{" "}
          <a className="text-gray-900 font-semibold" href="/signin">
            Sign In
          </a>
        </p>
        <Spacer />
      </div>
    </div>
  );
}
