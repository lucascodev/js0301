const pagePayments = document.querySelector("#schedules-payment");

if (pagePayments) {
  const numCard = pagePayments.querySelector("form #number") as HTMLInputElement;

  const valCard = pagePayments.querySelector("form #expiry") as HTMLInputElement;

  const cvv = pagePayments.querySelector("form #cvv") as HTMLInputElement;

  const name = pagePayments.querySelector("form #name") as HTMLSelectElement;

  const bankEm = pagePayments.querySelector("form #bank") as HTMLSelectElement;

  const parc = pagePayments.querySelector(
    "form #installments"
  ) as HTMLSelectElement;

  const cpf = pagePayments.querySelector(
    "form #document"
  ) as HTMLSelectElement;
}
