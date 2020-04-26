import DashboardChartItem from "./DashboardChartItem.js";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { UPDATE_FOOD_STRING, DELETE_FOOD_LOG_RECORD } from "../../gql/mutations.js";
import { Spacer } from "../Layout/LayoutPrimitives.js";
import { GET_OPEN_LOG_STATE } from "../../gql/queries.js";

const DashboardChart = ({ records, refetch }) => {
  const [updateFoodString] = useMutation(UPDATE_FOOD_STRING);
  const { loading, error, data: { mealType, logType} } = useQuery(GET_OPEN_LOG_STATE)
  const [deleteItem] = useMutation(DELETE_FOOD_LOG_RECORD)


  async function deleteRecord(id) {
    await deleteItem({ variables: { id: id }})
    console.log("in deleteRecord")
    refetch()
  }

  if(loading) return "Loading ..."
  if(error) return `${error}`

  const toggleFav = (item) => {
    let parsedFood = JSON.parse(item.food_string);
    const fav = parsedFood.favorite;
    parsedFood = { ...parsedFood, favorite: !fav };
    updateFoodString({
      variables: {
        id: item.id,
        food_string: JSON.stringify(parsedFood),
      },
    });
    const updateItem = { ...item, food_string: JSON.stringify(parsedFood) };
    return updateItem;
  };
  const activeRecords = records.filter(
    (record) => record.meal_type === mealType
  );

  function totalUpPropertyValuesInArray(arr, prop) {
    let total = 0;
    arr.map(el => {
      total = total += el[prop];
    });
    return total;
  }

  const totalCalories = totalUpPropertyValuesInArray(activeRecords, "calories")
  
  const calorieLabel = (
    logType === "daily" ? `${totalCalories} total calories` : ""
  )

  return (
    <section className="dashboard-chart w-full">
      <div className="w-full flex">
        <div className="flex w-5/12 items-center justify-evenly py-3">
          <div className="w-1/3 text-sm">{`${activeRecords.length} items logged`}</div>
          <div className=" text-sm">{calorieLabel}</div>
        </div>
        <div className="flex w-7/12 justify-center items-center">
          <div className="w-1/6 text-sm text-center">Calories</div>
          <div className="w-1/6 text-sm text-center">Fats</div>
          <div className="w-1/6 text-sm text-center">Protein</div>
          <div className="w-1/6 text-sm text-center">Carbs</div>
          <Spacer />
        </div>
      </div>
      <div className="border-t border-l">
        {activeRecords.map((cv) => {
          return (
            <DashboardChartItem
              data={cv}
              key={cv.id}
              toggleFav={toggleFav}
              deleteRecord={deleteRecord}
              refetch={refetch}
            />
          );
        })}
      </div>
    </section>
  );
};

export default DashboardChart;
