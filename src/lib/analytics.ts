// Meta Pixel id je javan — fallback drži tracking radnim i bez env vars na Vercelu.
const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID || "1493711514989751";
const GA_ID = import.meta.env.VITE_GA_ID || "";

let initialized = false;

export function initAnalytics() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;
  try {

  if (PIXEL_ID) {
    (function (f: any, b: Document, e: string, v: string) {
      if (f.fbq) return;
      const n: any = (f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      });
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      const t = b.createElement(e) as HTMLScriptElement;
      t.async = true;
      t.src = v;
      const s = b.getElementsByTagName(e)[0];
      s.parentNode?.insertBefore(t, s);
    })(window as any, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    window.fbq?.("init", PIXEL_ID);
    window.fbq?.("track", "PageView");
  }

  if (GA_ID) {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    }
    (window as any).gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_ID);
  }
  } catch (e) {
    console.warn("[analytics] init failed:", e);
  }
}

export function trackLead() {
  try {
    window.fbq?.("track", "Lead");
    window.gtag?.("event", "generate_lead", { currency: "EUR", value: 1 });
  } catch (e) {
    console.warn("[analytics] trackLead failed:", e);
  }
}
