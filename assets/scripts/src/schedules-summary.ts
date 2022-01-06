const pageSumm = document.querySelector("#schedules-summary") as HTMLElement;
if (pageSumm) {
  const formPayment = pageSumm.querySelector(
    "form #payment"
  ) as HTMLInputElement;
  const endCard = pageSumm.querySelector(
    "form #creditcard"
  ) as HTMLInputElement;
  const parcel = pageSumm.querySelector(
    "form #installments"
  ) as HTMLInputElement;

  const services = pageSumm.querySelector(
    "form #services"
  ) as HTMLInputElement;

  const dateServices = pageSumm.querySelector(
    "form #schedule_at"
  ) as HTMLInputElement;

  const valueTotal = pageSumm.querySelector(
    "form #total"
  ) as HTMLInputElement;
}
