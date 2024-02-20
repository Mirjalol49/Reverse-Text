//Getting elements from DOM
const inputEl = document.querySelector(".input-text");
const reverseBtn = document.querySelector(".reverse-btn");
const output = document.querySelector(".output");
const copyBtn = document.querySelector(".copy-btn");

reverseBtn.onclick = function () {
  let inputValue = inputEl.value;
  let reversedOutput = "";
  let index = inputValue.length - 1;

  while (index >= 0) {
    reversedOutput += inputValue[index];
    index--;
  }

  if (inputEl.value !== "") {
    output.textContent = reversedOutput;
  }

  copyBtn.textContent = "Copy";

  inputEl.value = "";
  copyBtn.onclick = function copyFunction() {
    navigator.clipboard.writeText(reversedOutput);
    copyBtn.textContent = "Copied";
  };
};
