document.querySelectorAll("input").forEach((input) => {
  console.log(input);
  input.addEventListener("input", inputchanged);
});
function inputchanged(e) {
  //   let aa = `--${e.target.name}`;
  //   console.log(aa);
  console.log(e);
  document.documentElement.style.setProperty(
    `--${e.target.name}`,
    e.target.value
  );
}
