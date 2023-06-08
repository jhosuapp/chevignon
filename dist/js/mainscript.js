const n = (() => {
  const t = () => {
    console.log("Ultima funcionalidad test");
  };
  return {
    childsTest: function() {
      try {
        t();
      } catch (e) {
      }
    }
  };
})(), s = () => {
  n.childsTest();
};
window.addEventListener("load", () => {
  s();
});
//# sourceMappingURL=mainscript.js.map
