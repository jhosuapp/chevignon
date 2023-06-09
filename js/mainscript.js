const n = (() => {
  const t = () => {
    const e = document.querySelector(".loader");
    setTimeout(() => {
      e.classList.add("active");
    }, 1e3);
  }, o = () => {
    const e = document.querySelector(".main-content");
    setTimeout(() => {
      e.classList.add("enable-animation");
    }, 2500);
  };
  return {
    childsLoader: function() {
      try {
        t();
      } catch (e) {
      }
      try {
        o();
      } catch (e) {
      }
    }
  };
})(), a = () => {
  n.childsLoader();
};
window.addEventListener("load", () => {
  a();
});
//# sourceMappingURL=mainscript.js.map
