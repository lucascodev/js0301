export default function queryStringToJSON() {
  let values = {} as any;
  const queryString = location.search;

  queryString
    .split("?")[1]
    .split("&")
    .forEach((item) => {
      const nameAndValue = item.split("=");

      values[nameAndValue[0]] = nameAndValue[1];
    });

    return values;
}
