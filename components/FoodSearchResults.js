import NutritionFacts from "./NutritionFacts";

export default function FoodSearchResults () {
    const data =
        {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#6cabde74-6a45-4da5-b100-f4138a587484",
            "yield": 1,
            "calories": 22,
            "glycemicIndex": 38,
            "totalWeight": 123,
            "dietLabels": [
                "LOW_FAT",
                "LOW_SODIUM",
                "..."
            ],
            "healthLabels": [
                "FAT_FREE",
                "VEGAN",
                "..."
            ],
            "cautions": [],
            "totalNutrients": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 22.14,
                    "unit": "kcal"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 0.246,
                    "unit": "g"
                },
                "...": {}
            },
            "totalDaily": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 1.107,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 0.37846153846153846,
                    "unit": "%"
                },
                "...": {}
            },
            "ingredients": [
                {
                    "parsed": [
                        {
                            "quantity": 1,
                            "measure": "whole",
                            "food": "Tomatoes, red, ripe, raw, year round average",
                            "foodId": "Food_11529",
                            "foodURI": "http://www.edamam.com/ontologies/edamam.owl#Food_11529",
                            "weight": 123,
                            "retainedWeight": 123,
                            "measureURI": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
                            "status": "OK"
                        }
                    ]
                }
            ]
        }

    return (
        <section className="flex flex-1">
            <div className="border border-black w-1/2 h-full">Something</div>
            <NutritionFacts data={data}/>
        </section>
    )
}