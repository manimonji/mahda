let yearElem = document.querySelector(".year");

yearElem.innerHTML = new Date().toLocaleString("fa-IR", { year: "numeric" });