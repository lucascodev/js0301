import { previousDay } from "date-fns";
import format from "date-fns/format";
import formatCurrency from "./functions/formatCurrency";
import { ServiceItem } from "./types/serviceItem";

const page = document.querySelector("#schedules-services") as HTMLElement;

if (page) {
  let serviceSelected: number[] = [];
  const services: ServiceItem[] = [
    {
      id: 1,
      name: "Revisão",
      description: "Verificação mínima necessária.",
      price: 100,
    },
    {
      id: 2,
      name: "Alinhamento",
      description: "Alinhamento e Balanceamento.",
      price: 400,
    },
    {
      id: 3,
      name: "Filtros",
      description: "Troca do filtro necessária de ar e combustível .",
      price: 200,
    },
  ];

  const calcTotal = () => {
    const totalElement = document.querySelector(".total") as HTMLSpanElement;
    const selected = services.filter((service) =>
      serviceSelected.find((id) => service.id === id)
    );

    const total = selected
      .map((service) => service.price)
      .reduce((a, b) => a + b, 0);

    totalElement.innerHTML = formatCurrency(total);
  };
  const renderCart = () => {
    const tbody = page.querySelector("tbody") as HTMLTableCaptionElement;

    tbody.innerHTML = "";

    serviceSelected.forEach((id) => {
      const linha = document.createElement("tr");
      const service = services.find((s) => s.id === id);
      if (service) {
        linha.innerHTML = `
          <tr>
            <td>${service.name}</td>
            <td class="price">${formatCurrency(service.price)}</td>
          </tr>
      `;
      }
      tbody.appendChild(linha);
    });
  };
  const serviceSelectedChange = (e: Event) => {
    const input = e.target as HTMLInputElement;
    if (input.checked) {
      serviceSelected.push(Number(input.value));
    } else {
      serviceSelected = serviceSelected.filter(
        (id) => id !== Number(input.value)
      );
    }
    renderCart();
  };

  const tpl = document.querySelector("tpl-label") as HTMLScriptElement;

  const options = page.querySelector(".options") as HTMLDivElement;
  options.innerHTML = "";
  services.forEach((item) => {
    const label = document.createElement("label");

    item.priceFormated = formatCurrency(item.price);

    label.innerHTML = eval("`" + tpl.innerText + "`");

    const labelInput = label.querySelector("input") as HTMLInputElement;

    // labelInput.addEventListener("change", () = {});

    options.appendChild(label);
  });
}
