const PRERENDER_TOKEN = "PUODrYRpt2sWXxjHRuEW";

const BOT_AGENTS = [
  "googlebot", "bingbot", "yandex", "baiduspider",
  "facebookexternalhit", "twitterbot", "rogerbot", "linkedinbot",
  "embedly", "quora link preview", "showyoubot", "outbrain",
  "pinterest", "slackbot", "vkshare", "w3c_validator",
  "whatsapp", "discordbot", "telegrambot", "applebot",
  "redditbot", "chrome-lighthouse",
];

export default async function middleware(request: Request) {
  const userAgent = request.headers.get("user-agent")?.toLowerCase() ?? "";
  const url = new URL(request.url);

  const isBot = BOT_AGENTS.some((bot) => userAgent.includes(bot));
  const isAsset = /\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|map)$/
    .test(url.pathname);

  if (isBot && !isAsset) {
    const prerenderUrl = 
      `https://service.prerender.io${url.pathname}${url.search}`;
    
    const response = await fetch(prerenderUrl, {
      headers: {
        "X-Prerender-Token": PRERENDER_TOKEN,
        "X-Prerender-Host": url.hostname,
      },
    });

    const html = await response.text();
    return new Response(html, {
      status: response.status,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    });
  }
}

export const config = {
  matcher: "/((?!assets/.*).*)",
};
