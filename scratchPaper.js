
const hasRecord = {
    id: data.me.weightLogs[0].id,
    current_weight: weight
  }

  const hasNoRecord = {
    current_weight: weight,
    date: formatDate(currentDate)
  }

  const currentRecord = data.me.weightLogs[0].current_weight;