(function () {
  function setMenuState(menu, trigger, isOpen) {
    menu.classList.toggle("active", isOpen);
    trigger.setAttribute("aria-expanded", String(isOpen));
  }

  function initNavMenu() {
    const menu = document.querySelector("[data-nav-menu]");
    const trigger = document.querySelector("[data-nav-toggle]");

    if (!menu || !trigger || menu.dataset.navScriptReady === "true") {
      return;
    }

    menu.dataset.navScriptReady = "true";
    setMenuState(menu, trigger, false);

    trigger.addEventListener("click", function () {
      const isOpen = menu.classList.contains("active");
      setMenuState(menu, trigger, !isOpen);
    });

    document.addEventListener("click", function (event) {
      if (!menu.classList.contains("active")) {
        return;
      }

      if (menu.contains(event.target) || trigger.contains(event.target)) {
        return;
      }

      setMenuState(menu, trigger, false);
    });

    window.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setMenuState(menu, trigger, false);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNavMenu);
  } else {
    initNavMenu();
  }
})();