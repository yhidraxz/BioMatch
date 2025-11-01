import React, { useEffect } from "react";

export default function VturbPlayer() {
  useEffect(() => {
    // injeta o script do SDK uma única vez
    const existingScript = document.querySelector(
      'script[src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src =
        "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
      script.async = true;
      document.head.appendChild(script);
    }

    // configura o iframe Vturb depois que o script está carregado
    const iframe = document.getElementById("ifr_690557868764bca5bd179fd2");
    if (iframe) {
      iframe.onload = null;
      iframe.src =
        "https://scripts.converteai.net/a42e650c-b3dd-42c7-a94e-e132b603b19f/players/690557868764bca5bd179fd2/v4/embed.html" +
        (window.location.search || "?") +
        "&vl=" +
        encodeURIComponent(window.location.href);
    }
  }, []);

  return (
    <div
      id="ifr_690557868764bca5bd179fd2_wrapper"
      style={{ margin: "0 auto", width: "100%" }}
    >
      <div
        style={{
          position: "relative",
          padding: "56.25% 0 0 0", // mantém o aspecto 16:9
        }}
        id="ifr_690557868764bca5bd179fd2_aspect"
      >
        <iframe
          id="ifr_690557868764bca5bd179fd2"
          title="Vturb Player"
          frameBorder="0"
          allowFullScreen
          src="about:blank"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          referrerPolicy="origin"
        ></iframe>
      </div>
    </div>
  );
}
