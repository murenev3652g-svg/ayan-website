
export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  if (req.method === "OPTIONS") { res.status(200).end(); return; }
  const target = req.query.url;
  if (!target) { res.status(400).send("No URL"); return; }
  try {
    const r = await fetch(decodeURIComponent(target));
    const t = await r.text();
    res.status(r.status).send(t);
  } catch(e) {
    res.status(500).send("Error: " + e.message);
  }
}
