import format from "date-fns/format";
import endOfMonth from "date-fns/endOfMonth";
import startOfMonth from "date-fns/startOfMonth";
import addMonths from "date-fns/addMonths";
import subMonths from "date-fns/subMonths";
import locale from "date-fns/locale/pt-BR"

const page = document.querySelector("#schedules-new");

if (page) {

    const hoje = new Date();
    let inicioMes = startOfMonth(hoje);
    const fimMes = endOfMonth(hoje);

    const btnHoje = page.querySelector(".btn-today") as HTMLButtonElement;
    const btnAnterior = page.querySelector(".btn-prev") as HTMLButtonElement;
    const btnProximo = page.querySelector(".btn-next") as HTMLButtonElement;
    const titulo = page.querySelector("h2") as HTMLHeadingElement;
    const calendar = page.querySelector(".days") as HTMLUListElement;
 

    const render = () => {

        titulo.innerText = format(inicioMes, "MMMM yyyy", { locale });

    }

    btnProximo.addEventListener("click", ()=> {
        inicioMes = addMonths(inicioMes, 1);
        render();
    });

    btnAnterior.addEventListener('click', () => {
        inicioMes = subMonths(inicioMes, 1);
        render();
    });

    btnHoje.addEventListener("click", () => {
        inicioMes = startOfMonth(hoje);
        render();
    });
    

    render();

}