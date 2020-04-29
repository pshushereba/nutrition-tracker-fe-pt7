import React from "react";

// this is a placeholder, delete when we have props
// replace every instance of "testObjs ?"
// with the props
// needs an array of objects with weight and date
const testObjs = [
  { date: "01/02/03", weight: 100 },
  { date: "01/03/03", weight: 105 },
  { date: "01/04/03", weight: 110 },
  { date: "01/05/03", weight: 115 },
  { date: "01/06/03", weight: 92 },
];

const WeightGraph = (props) => {
  return (
    <section
      className=" weightGraph flex items-end"
      style={{
        margin: "20px",
        "justify-content": "space-between",
        "max-width": "600px",
        padding: "15px",
        "box-shadow": "0px 3px 3px #777",
        "border-radius": "5px",
      }}
    >
      {/* replace this line and the one below with the correct props */}
      {testObjs
        ? testObjs.map((cv) => {
            return (
              <div
                key={cv.date}
                className="weightGraphEntry"
                style={{
                  display: "flex",
                  "flex-direction": "column",
                  "align-items": "center",
                }}
              >
                <div
                  className="weightGraphBar"
                  style={{
                    background: "#555",
                    padding: "10px 5px",
                    height: cv.weight,
                    color: "white",
                    width: "40px",
                    "text-align": "center",
                  }}
                >
                  {cv.weight}
                </div>
                <p>{cv.date}</p>
              </div>
            );
          })
        : ""}
    </section>
  );
};

export default WeightGraph;
