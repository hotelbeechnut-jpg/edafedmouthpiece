import { execSync } from "node:child_process";
import { rmSync, mkdirSync, writeFileSync, existsSync } from "node:fs";

const PROJECT_NAME = "Edafe Dmouthpiece";
const WHATSAPP = "2349069137205";

// Run the project's original build
execSync("npm run build:site", { stdio: "inherit" });

// Lock is ON by default. Only DEMO_LOCK=false unlocks the real site.
const locked = process.env.DEMO_LOCK !== "false";

if (locked) {
  const outDir = existsSync("out") ? "out" : "dist";

  rmSync(outDir, { recursive: true, force: true });
  mkdirSync(outDir);

  const msg = encodeURIComponent(
    `Hello, I saw the ${PROJECT_NAME} demo preview and I would like to continue with the project.`
  );

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex, nofollow" />
  <title>Demo Ended</title>
  <style>
    body{margin:0;min-height:100vh;display:grid;place-items:center;
         font-family:system-ui,sans-serif;background:#0f172a;color:#f1f5f9;text-align:center}
    .box{max-width:480px;padding:2rem}
    h1{font-size:1.75rem;margin-bottom:.5rem}
    p{color:#94a3b8;line-height:1.6}
    a{color:#38bdf8}
    .wa{display:inline-block;margin-top:1.25rem;padding:.8rem 1.5rem;
        background:#25d366;color:#fff;font-weight:600;text-decoration:none;border-radius:999px}
    .mail{display:block;margin-top:1rem;font-size:.9rem}
  </style>
</head>
<body>
  <div class="box">
    <h1>This demo preview has ended</h1>
    <p>This was a temporary preview link. To continue with this project, chat with us on WhatsApp.</p>
    <a class="wa" href="https://wa.me/${WHATSAPP}?text=${msg}" target="_blank" rel="noopener">Chat on WhatsApp</a>
    <a class="mail" href="mailto:webdev@talent-loop.org">or email webdev@talent-loop.org</a>
  </div>
</body>
</html>`;

  writeFileSync(`${outDir}/index.html`, html);
  console.log("DEMO LOCK ON: placeholder only.");
} else {
  console.log("DEMO LOCK OFF: real site deployed.");
}
