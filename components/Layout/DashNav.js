import { useQuery } from "@apollo/react-hooks";
import { GET_DASHNAV_STATE } from "../../gql/queries";
import { useRouter } from "next/router"

export default function DashNav() {
  const { data, client } = useQuery(GET_DASHNAV_STATE); //Gets active dashboard component from client cache

  const activeNavControl = data ? data.lowerNav : "journal";
  const router = useRouter()
  return (
    <ul className="w-1/3 flex justify-around text-lg font-medium py-2">
      <li
        className={`${
          activeNavControl === "journal" ? "border-b-4 border-pink-500" : ""
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
          activeNavControl === "progress" ? "border-b-4 border-pink-500" : ""
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
          activeNavControl === "badges" ? "border-b-4 border-pink-500" : ""
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
          activeNavControl === "challenges" ? "border-b-4 border-pink-500" : ""
        } cursor-pointer`}
        value={"challenges"}
        onClick={() =>
          client.writeData({ data: { ...data, lowerNav: "challenges" } })
        }
      >
        Challenges
      </li>
      <li
        className={`${
          activeNavControl === "forums" ? "border-b-4 border-pink-500" : ""
        } cursor-pointer`}
        value={"forums"}
        onClick={() => {
          client.writeData({ data: { ...data, lowerNav: "forums" } });
          router.push("/forum/posts")
        }}
      >
        Forums
      </li>
    </ul>
  );
}
