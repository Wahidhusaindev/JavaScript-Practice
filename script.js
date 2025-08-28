const texInput = document.getElementById("texInput");
const charCount = document.getElementById("charCount");

texInput.addEventListener("input", () => {
    const remaining = 50 - texInput.value.length;
    charCount.textContent = remaining;
});
