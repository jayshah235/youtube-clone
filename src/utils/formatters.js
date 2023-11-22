export const viewsFormatter = (num) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num;
};

export const dateFormatter = (dates) => {
  let date = dates;
  const splitDate = date?.split("-");
  const yearAndMonth = splitDate?.slice(0, 2).join("/");
  const getDate = splitDate
    ?.slice(2)
    ?.join("")
    ?.split("")
    .slice(0, 2)
    ?.join("");
  return `${yearAndMonth}/${getDate}`;
};
