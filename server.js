import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json({ limit: "50kb" }));
app.use(rateLimit({ windowMs: 60_000, limit: 100 }));
app.use(express.static("public"));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "All Bet Converter AI API", mode: "prototype" });
});

// Honest placeholder: real conversion needs an approved source-bookmaker
// decoder, event/market mapping, and destination-bookmaker slip creation.
app.post("/api/convert", (req, res) => {
  const { from, to, code, selections } = req.body ?? {};
  if (!from || !to || (!code && !selections)) {
    return res.status(400).json({
      error: "Provide source, destination, and a bet code or explicit selections."
    });
  }
  return res.status(501).json({
    status: "integration_required",
    message: "No bookmaker code adapter is configured. No destination code was invented.",
    from, to,
    nextSteps: [
      "Configure authorized source-bookmaker decoding",
      "Resolve events and map equivalent markets",
      "Check destination market availability",
      "Create and verify a destination slip using an approved integration"
    ]
  });
});

// Odds must come from a licensed/authorized feed; this route deliberately
// does not fabricate fixtures, prices, or predictions.
app.get("/api/odds/status", (_req, res) => {
  res.json({
    connected: false,
    provider: null,
    message: "Connect a licensed odds feed and keep its API key on the server."
  });
});

app.listen(port, () => console.log(`All Bet Converter AI running on port ${port}`));
