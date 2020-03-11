import { useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";

const DailyVibe = () => {
  const [quotes, setQuotes] = useState([]);
  const [current, setCurrent] = useState({});

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(r => r.json())
      .then(data => {
        setQuotes(data);
        setCurrent(data[randomizer()]);
      });
  }, []);

  const randomizer = () => {
    return Math.floor(Math.random() * 1000 + 1);
  };

  return (
    <div className="pb-2 border-b-2 border-gray-400 max-w-sm">
      <h2 className="muli text-gray-900 text-xl font-medium">Daily Vibe</h2>
      <p className="muli text-gray-600">{`${current.text} -- ${current.author}`}</p>
    </div>
  );
};

export default DailyVibe;
