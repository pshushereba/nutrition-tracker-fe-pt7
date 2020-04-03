export default function LowerNav() {
    return (
        <nav className="flex bg-mobileFoot">
        <div className="flex-1"></div>
        <ul className="flex-1 flex justify-around text-lg font-medium py-2">
          <li
            className={`${
              lowerNav === "journal" ? "border-b-2 border-pink-500" : ""
            } cursor-pointer`}
            value={"journal"}
            onClick={() => client.writeData({ data: { ...data,  lowerNav: "journal"}})}
          >
            Food Journal
          </li>
          <li
            className={`${
              lowerNav === "progress" ? "border-b-2 border-pink-500" : ""
            } cursor-pointer`}
            value={"progress"}
            onClick={() => client.writeData({ data: { ...data,  lowerNav: "progress"}})}
          >
            Progress
          </li>
          <li
            className={`${
              lowerNav === "badges" ? "border-b-2 border-pink-500" : ""
            } cursor-pointer`}
            value={"badges"}
            onClick={() => client.writeData({ data: { ...data,  lowerNav: "badges"}})}
          >
            Badges
          </li>
          <li
            className={`${
              lowerNav === "challenges"
                ? "border-b-2 border-pink-500"
                : ""
            } cursor-pointer`}
            value={"challenges"}
            onClick={() => client.writeData({ data: { ...data,  lowerNav: "challenges"}})}
          >
            Challenges
          </li>
        </ul>
        <span className="flex flex-1 text-sm justify-end items-center">
          <time className="pr-32">{lowerNavDate}</time>
        </span>
      </nav>
    )
}