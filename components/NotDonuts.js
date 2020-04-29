import React from "react";

const NotDonuts = () => {
  // set the keys of this object
  // to the values from props
  const propsObj = {
    calories: 1256,
    protein: 109,
    fiber: 78,
    fats: 101,
    carbs: 126,
    streak: "",
    weight: "",
  };

  return (
    <section className="notDonuts" style={{ display: "flex" }}>
      {propsObj
        ? Object.keys(propsObj)
            .filter((cv) => {
              return propsObj[cv];
            })
            .map((key) => {
              const firstLetterCap = key[0].toUpperCase() + key.slice(1);
              return (
                <div
                  key={`donut${firstLetterCap}`}
                  className={`not${firstLetterCap}Donut`}
                  style={{
                    "text-align": "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    fontSize: "12px",
                    margin: "5px",
                    fontWeight: "600"
                  }}
                >
                  <p>{firstLetterCap}</p>
                  <p>{propsObj[key]}</p>
                </div>
              );
            })
        : ""}
    </section>
  );
};

export default NotDonuts;
