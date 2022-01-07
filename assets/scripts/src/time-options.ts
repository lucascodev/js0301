import format from "date-fns/format";
import endOfMonth from "date-fns/endOfMonth";
import startOfMonth from "date-fns/startOfMonth";
import addMonths from "date-fns/addMonths";
import subMonths from "date-fns/subMonths";
import locale from "date-fns/locale/pt-BR";
import queryStringToJSON from "./functions/queryStringToJSON";
import { parse } from "date-fns";
import { TimeOptionsItem } from "./types/timeOptionsItem";

const page = document.querySelector("#time-options") as HTMLElement;

if (page) {
  const timeOptions: TimeOptionsItem[] = [
    {
      name: "9:00",
      value: 9,
    },
    {
      name: "10:00",
      value: 10,
    },
    {
      name: "11:00",
      value: 11,
    },
    {
      name: "12:00",
      value: 12,
    },
    {
      name: "13:00",
      value: 13,
    },
    {
      name: "14:00",
      value: 14,
    },
    {
      name: "15:00",
      value: 15,
    },
    {
      name: "16:00",
      value: 16,
    },
  ];
  const title = page.querySelector("h3") as HTMLHeadingElement;
  const options = page.querySelector(".options") as HTMLDivElement;
  const values = queryStringToJSON();

  const scheduleAt = parse(values.schedule_at, "yyyy-MM-dd", new Date());
const checkSelectedInput = () => {
  const button = page.querySelector("[type=submit]") as HTMLButtonElement;
  if (page.querySelector("[name=option]:checked")) {
button.disabled = false;
  } else {
    button.disabled = true;
  }
}
options.innerHTML = "";  

  timeOptions.forEach((item) => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="radio" name="option" value="${item.value}" />
      <span>${item.name}</span>
      `;
      const labelInput = label.querySelector("input") as HTMLInputElement;
      labelInput.addEventListener("change", checkSelectedInput);
    options.appendChild(label);
  });

  

  title.innerText = format(scheduleAt, "EE, 'de' MMMM 'de' yyyy", { locale });
  console.log(scheduleAt);
}
