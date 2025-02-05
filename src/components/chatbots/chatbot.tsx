"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    kommunicate: any;
  }
}

const Chatbot = () => {
  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "32a6874456e548d787d56bcc4e5d87882",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }, []);

  return <></>;
};

export default Chatbot;
