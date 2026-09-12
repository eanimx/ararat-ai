(function () {
  if (window.location.pathname === "/") {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  } else if ("scrollRestoration" in history) {
    history.scrollRestoration = "auto";
  }
})();
