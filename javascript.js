"use strict";
const btn = document.querySelector(".btn");
const input = document.querySelector(".input-form");
const template = document.querySelector(".form");

const extractValue = function () {
  let val = input.value;
  if (!val) return alert("Enter the task");
  let html = `  <div class="template">
  <div class="loading-icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="load-icon"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    </svg>
  </div>
  <div class="text-content">${val}</div>
  <div class="cross-symb">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="load-icon cross"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </div>`;
  template.insertAdjacentHTML("afterend", html);
  input.value = "";
  let parent = document.querySelector(".cross-symb");
  let target = document.querySelector(".cross");
  let hidden = document.querySelector(".template");
  parent.addEventListener("click", function (e) {
    if (e.target === target) hidden.style.display = "none";
  });
  hidden.addEventListener("click", function () {
    hidden.classList.toggle("templatehover");
  });
};
btn.addEventListener("click", function (e) {
  e.preventDefault();
  extractValue();
});
