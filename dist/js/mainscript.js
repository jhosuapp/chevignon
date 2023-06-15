const r = (() => {
  const n = () => {
    const e = document.querySelector(".loader");
    setTimeout(() => {
      e.classList.add("active");
    }, 1e3);
  }, t = () => {
    const e = document.querySelector(".main-content");
    setTimeout(() => {
      e.classList.add("enable-animation");
    }, 2500);
  };
  return {
    childsLoader: function() {
      try {
        n();
      } catch (e) {
      }
      try {
        t();
      } catch (e) {
      }
    }
  };
})(), i = () => {
  r.childsLoader();
}, s = (() => {
  const n = () => {
    const t = () => {
      const e = screen.height, o = document.querySelectorAll(".ranking-dsc__ctn"), c = e - o[0].scrollHeight;
      o[1].style.maxHeight = `${c}px`;
    };
    t(), window.addEventListener("resize", () => {
      t();
    });
  };
  return {
    childsRanking: function() {
      try {
        n();
      } catch (t) {
      }
    }
  };
})(), a = () => {
  s.childsRanking();
};
window.addEventListener("load", () => {
  i(), a();
});
//# sourceMappingURL=mainscript.js.map
