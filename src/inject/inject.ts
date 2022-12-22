(function () {
  (window as any).ckb = {
    a: 1,
    b: 2,
    c: function () {
      console.log("injected funtion invoked.");
    },
  };
})();
