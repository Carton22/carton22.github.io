document.addEventListener("click", async (event) => {
  const button = event.target.closest("button[data-copy-target]");
  if (!button || button.disabled) return;

  const citation = document.getElementById(button.dataset.copyTarget);
  const status = button.closest("section").querySelector(".copy-status");
  button.disabled = true;
  status.textContent = "";

  try {
    if (!citation || !navigator.clipboard?.writeText) {
      throw new Error("Clipboard unavailable");
    }
    await navigator.clipboard.writeText(citation.textContent);
    button.textContent = "Copied!";
  } catch {
    button.textContent = "Copy failed";
    status.textContent = "Unable to copy automatically. Select and copy the citation above.";
  } finally {
    window.setTimeout(() => {
      button.textContent = "Copy";
      button.disabled = false;
    }, 2000);
  }
});
