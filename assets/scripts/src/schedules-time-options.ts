import format from "date-fns/format";
import endOfMonth from "date-fns/endOfMonth";
import startOfMonth from "date-fns/startOfMonth";
import addMonths from "date-fns/addMonths";
import subMonths from "date-fns/subMonths";
import locale from "date-fns/locale/pt-BR";

const page = document.querySelector("#time-options");

if (page) {
  const hoje = new Date();

  const titulo = page.querySelector("h3") as HTMLHeadingElement;
  const horas = page.querySelectorAll(".options label") as NodeList;

  const render = () => {
    titulo.innerText = format(hoje, "EE, 'de' MMMM 'de' yyyy", { locale });
  };

  render();
}
