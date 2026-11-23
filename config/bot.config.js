const digits = value => String(value || "").replace(/\D/g, "");

const configuredOwnerNumber = digits(process.env.OWNER_NUMBER);
const ownerNumber = configuredOwnerNumber || "2348038632534";
const configuredPrefix = process.env.PREFIX;
const prefix = configuredPrefix === undefined || configuredPrefix === "" ? "." : String(configuredPrefix);

const channel = Object.freeze({
  name: "MERLIN XMD ™",
  jid: "120363430518511561@newsletter"
});

export default Object.freeze({
  name: String(process.env.BOT_NAME || "MERLIN XMD").trim() || "MERLIN XMD",
  version: String(process.env.BOT_VERSION || "1.0.0").trim() || "1.0.0",
  prefix,
  ownerName: String(process.env.OWNER_NAME || "MERLIN TECH").trim() || "MERLIN TECH",
  ownerNumber,
  ownerNumbers: Object.freeze([ownerNumber]),
  defaultMode: String(process.env.BOT_MODE || "public").toLowerCase() === "private" ? "private" : "public",
  sessionDirectory: String(process.env.FEI_SESSION_DIR || "./auth_info_baileys").trim() || "./auth_info_baileys",
  dataDirectory: String(process.env.FEI_DATA_DIR || "./data").trim() || "./data",
  logLevel: String(process.env.LOG_LEVEL || "info").trim().toLowerCase(),
  browser: "Chrome",
  channel,
  imageUrl: String(
    process.env.BOT_IMAGE_URL ||
    "https://res.cloudinary.com/kfivvhfe/image/upload/v1795117789/IMG-20261119-WA0116.jpg"
  ).trim(),
  botUrl: String(process.env.BOT_URL || "https://github.com/elonzy82-stack/MERLIN-XMD").trim()
});
