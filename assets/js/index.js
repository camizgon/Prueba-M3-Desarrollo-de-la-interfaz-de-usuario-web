document.addEventListener("DOMContentLoaded", function () {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
});

document.addEventListener("DOMContentLoaded", () => {
  const myModal = document.getElementById("myModal");
  const myInput = document.getElementById("myInput");

  if (myModal) {
    myModal.addEventListener("shown.bs.modal", () => {
      myInput.focus();
    });
  }
});

$("#enviar").click(function () {
  alert("Su mensaje fue enviado correctamente");
});
