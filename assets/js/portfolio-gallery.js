const photoDialog = document.querySelector(".photo-dialog");
if (photoDialog && typeof photoDialog.showModal === "function") {
  document.querySelectorAll(".enlarge").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const image = photoDialog.querySelector("img");
      image.src = link.href;
      image.alt = link.querySelector("img").alt;
      photoDialog.querySelector("p").textContent = link.parentElement.querySelector("figcaption")?.textContent || "";
      photoDialog.showModal();
    });
  });
  photoDialog.querySelector("button").addEventListener("click", () => photoDialog.close());
}
