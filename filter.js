// ==UserScript==
// @name    Filter Facebook
// @version 1.0
// @description Filter all sponsored post and reels from facebook while browsing.
// @downloadURL  https://adrules.msar.me/filter.js
// @updateURL    https://adrules.msar.me/filter.js
// @homepageURL  https://adrules.msar.me
// @author       Saiful Alam (msar.me)
// @include *facebook.com*
// @include *fb.com*
// ==/UserScript==

function main() {
  const removeSponsored = () => {
    const words = ["Sponsored", "Patrocinado", "Gesponsert"];
    document.querySelectorAll('div[data-focus="feed_story"]').forEach((el) => {
      const anchorTags = [...el.querySelectorAll("a")].filter((a) => a.href);

      if (
        // Start filtering
        el.querySelector('a[href*="/ads/"]') ||
        words.some((w) => el.innerText.includes(w)) ||
        anchorTags.some(
          (link) =>
            link.href.includes("/ads/") ||
            (link.innerText === "" && link.querySelectorAll("canvas").length > 9),
        )
        // End filtering
      ) {
        el.remove();
      }
    });
  };
  const hideReels = () => {
    [...document.querySelectorAll('div[data-focus="feed_story"]')]
      .filter((el) => {
        const match = [...el.querySelectorAll("h1,h2,h3,h4,span,div")].filter(
          (el) => el.textContent.trim() === "Reels",
        );
  
        return match.length > 0;
      })
      .forEach((item) => item.remove());
  };

  const init = () => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      removeSponsored();
      hideReels();
    }, 100);
  };

  new MutationObserver(init).observe(document.body, {
    childList: true,
    subtree: true,
  });

  window.addEventListener("scroll", init, { passive: true });
  document.addEventListener("scroll", init, {
    passive: true,
    capture: true,
  });
  if ("onscrollend" in window) window.addEventListener("scrollend", init, { passive: true });
}

main();
