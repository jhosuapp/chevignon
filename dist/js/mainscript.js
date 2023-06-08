const n = (() => {
  const t = () => {
    console.log("funci\xF3n ejecutadaa");
  };
  return {
    childsTest: function() {
      try {
        t();
      } catch (s) {
      }
    }
  };
})(), e = () => {
  n.childsTest();
};
window.addEventListener("load", () => {
  e();
});
//# sourceMappingURL=mainscript.js.map
