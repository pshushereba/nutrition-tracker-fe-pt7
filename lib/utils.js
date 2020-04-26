export function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return [day, month, year].join("-");
}

export function removeCookies(cookieAccess, cookieArr = []) {
  cookieArr.forEach((cookie) => cookieAccess.remove(cookie));
}

export function adjustIntValuesonAnObject(obj, cv, multiplier) {

  const factor = multiplier/cv
  
  Object.keys(obj).map((key) => {
    typeof obj[key] === "number"    
      ? (obj[key] = Math.round(obj[key] * factor))
      : (obj[key] = obj[key]);
  });
}
