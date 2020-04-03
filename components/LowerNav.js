import { useQuery } from "@apollo/react-hooks";
import { GET_DASHBOARD_STATE } from "../gql/queries";
import { Spacer } from "./Layout/LayoutPrimitives";

export default function LowerNav() {
  const { data, client } = useQuery(GET_DASHBOARD_STATE); //Gets active dashboard component from client cache

  const lowerNavDate = () => {
    //  Sets date for lower dash nav, format does not match UX design
    const dateOptions = { year: "numeric", month: "long", day: "numeric" };
    const currentDate = new Date(Date.now());
    return currentDate.toLocaleString("en-US", dateOptions);
  };
  const lowerNav = data ? data.lowerNav : client.cache.data.data.data.lowerNav;

  return (
    <nav className="flex bg-mobileFoot">
      <Spacer />
      <ul className="flex-1 flex justify-around text-lg font-medium py-2">
        <li
          className={`${
            lowerNav === "journal" ? "border-b-2 border-pink-500" : ""
          } cursor-pointer`}
          value={"journal"}
          onClick={() =>
            client.writeData({ data: { ...data, lowerNav: "journal" } })
          }
        >
          Food Journal
        </li>
        <li
          className={`${
            lowerNav === "progress" ? "border-b-2 border-pink-500" : ""
          } cursor-pointer`}
          value={"progress"}
          onClick={() =>
            client.writeData({ data: { ...data, lowerNav: "progress" } })
          }
        >
          Progress
        </li>
        <li
          className={`${
            lowerNav === "badges" ? "border-b-2 border-pink-500" : ""
          } cursor-pointer`}
          value={"badges"}
          onClick={() =>
            client.writeData({ data: { ...data, lowerNav: "badges" } })
          }
        >
          Badges
        </li>
        <li
          className={`${
            lowerNav === "challenges" ? "border-b-2 border-pink-500" : ""
          } cursor-pointer`}
          value={"challenges"}
          onClick={() =>
            client.writeData({ data: { ...data, lowerNav: "challenges" } })
          }
        >
          Challenges
        </li>
      </ul>
      <span className="flex flex-1 text-sm justify-end items-center">
        <time className="pr-32">{lowerNavDate}</time>
      </span>
    </nav>
  );
}