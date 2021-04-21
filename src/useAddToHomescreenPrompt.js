import * as React from "react";
export function useAddToHomescreenPrompt() {
  const [isInstalled, setIsInstalled] = React.useState(false);

  React.useEffect(() => {
    const onInstall = () => {
      setIsInstalled(true);
    };
    var mql = window.matchMedia("(display-mode: standalone)");
    mql.addEventListener("change", e => {
      if (e.matches) {
        onInstall();
      } else {
        /* the viewport is more than than 600 pixels wide */
        console.log("This is a wide screen — more than 600px wide.");
      }
    });

    return () => {
      mql.removeEventListener("change", onInstall);
    };
  }, []);
  return [isInstalled];
}
