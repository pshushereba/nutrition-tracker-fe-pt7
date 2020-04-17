
const hasRecord = {
    id: data.me.weightLogs[0].id,
    current_weight: weight
  }

  const hasNoRecord = {
    current_weight: weight,
    date: formatDate(currentDate)
  }

  const currentRecord = data.me.weightLogs[0].current_weight;

  <div class="bg-white border rounded shadow">
                        <div class="border-b p-3">
                            <h5 class="uppercase text-grey-dark">Graph</h5>
                        </div>
                        <div class="p-5">
                            <canvas id="chartjs-0" class="chartjs" width="undefined" height="undefined"></canvas>
                            <script>
                            new Chart(document.getElementById("chartjs-0"), {
                                "type": "line",
                                "data": {
                                    "labels": ["January", "February", "March", "April", "May", "June", "July"],
                                    "datasets": [{
                                        "label": "Views",
                                        "data": [65, 59, 80, 81, 56, 55, 40],
                                        "fill": false,
                                        "borderColor": "rgb(75, 192, 192)",
                                        "lineTension": 0.1
                                    }]
                                },
                                "options": {}
                            });
                            </script>
                        </div>
                    </div>