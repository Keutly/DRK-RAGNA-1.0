//#ENJOY BRO😍
// Credit: 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨 by      𝙎-𝙏𝞢𝞜
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sandrk766@gmail.com";
global.location = "Port-au-Prince, Haiti";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null"; 
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://testbot_2m27_user:Az7LOxZBevfQ7qiZ2aKDwQ4325uumm4v@dpg-crngb4o8fa8c738fs4b0-a.oregon-postgres.render.com/testbot_2m27";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Bot-hostin/DRK-RAGNA-1.0";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vRR63CN.jpeg,https://i.imgur.com/ovCfp9J.jpeg,https://i.imgur.com/edzo5dj.jpeg";
global.devs = "https://wa.me/2250143224079, https://wa.me/2250143224079";
global.sudo = process.env.SUDO || "2250143224079";
global.owner = process.env.OWNER_NUMBER || "2250788145722";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/yBSoUuw.jpeg,https://i.imgur.com/XrUDzUl.jpeg,https://i.imgur.com/edjZiEx.jpeg,https://i.imgur.com/cdS2R7I.jpeg,https://i.imgur.com/u9FxdwH.jpeg,https://i.imgur.com/HEFIrto.jpeg,https://i.imgur.com/Fc0gIpE.jpeg,https://i.imgur.com/iaJtsma.jpeg,https://i.imgur.com/17yE9Uy.jpeg,https://i.imgur.com/ERGVvpZ.png"
global.waPresence = process.env.WAPRESENCE || " ";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://drk-tech-2.onrender.com/;
global.scan = "https://drk-tech-2.onrender.com/";

global.SESSION_ID = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkNuVmI1b0RVY2pBc3RLRHp0U0V2T29yUDBVbkVFOGxtTVlGaFZRT0FWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2hrVngxYXNaT05aQi9LTkc1WGZReVN6Ky9nZElQVU5jZEhWVXBjRGtDTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5RC9ZUUtPRkFwUDRDNDNGMDIxeTc4anpFMnVtbjZnSXgvckFrN1pQdFVvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4S3VoSEsyVTFiZjRtN2lvVEo0aFg5cDVuTlc5ZWdydnFwcHhjc2pyWFdzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFOcUVGYlBvL2c0N3FoWi80MlB2U3FTK09waUpjV3pWMGxyWXJtRjg3RVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhMSWhUZU9sS1V5b3U1U3loUW9zK05IM1pPSjg2KzVJLy8rOVltMit0WHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFBtNFp5ZGN4Rk9FUVBVaE84WERrc0xBL1FaTkFwTXBaWS9wVWtmVW9sQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU3o2clhXRW5XUTZjU1I3VmdqQkVZNERPMGFreE1UNldycU1NQitUdnFDVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlAvam41TTlITUk0dlQ0ZkNPckh4VWR2Y3F0Q29pYjg4RU4ydEx4d3hqWjVmZnNmdGN6dFBlcVpZYTl4Vkp4TTc5NG1zN2NGbEtLb0YzYUROS3lXQWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODYsImFkdlNlY3JldEtleSI6ImlMS0xPWk9PeVo5ZUpkR2MrRHNwRG9mWk4xTVQ4VkU3cE91ZnhBR2R2YjQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjI1ODgxNDU3MjJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0M0QUQ0N0ZGQkU5MkIzMEEzRUU0RUMwOTJFRDg2MzYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczOTk4NTUzN31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoidUtMd1drdURRU2lRQUFXZVp5R2t3dyIsInBob25lSWQiOiJkNzM2ZTIwMC1iZDhlLTRkNTUtYmM3Yi1hZDMxODhlZThkY2UiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZjZGUmE4NE0rL1VkZFB6R1hWQm9OME5wclZVPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVWSHdqbkFKL1kzbmtoOEVKL3ZPS2I5SDJPaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJaNlgzRUM2NyIsIm1lIjp7ImlkIjoiMjI1ODgxNDU3MjI6NjBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiS2V1dGx5In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPYUt5TUFGRU82azJMMEdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJRWG1uczMydmtyK1hIUnFDMmpwYzRqRVlHZTZGb1E3V3M4YzR6V1VFRUFRPSIsImFjY291bnRTaWduYXR1cmUiOiJwVWtCTU45UDlJSkdCMytjU1pWbTlIbEk0YzRmTlVicnlYYjhwaURwbDBaeU1JTjN5cFFMUmJSdEZjVXFrR1U1MG1ScHdnZUc0UjI3dmlodTArejZEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidlN2aXVnS3dxam9HM0RHRStwMDdrZ1VDNEsyZTl0Mis2YklPcnhYVzBrNzhMMVZsS0J1RzFqMzlnVitqazZEMjYvSWxUUHRuR1g4Z1FOTFJZYk5DaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjU4ODE0NTcyMjo2MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVRjVwN045cjVLL2x4MGFndG82WE9JeEdCbnVoYUVPMXJQSE9NMWxCQkFFIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM5OTg1NTMyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUltVCJ9"
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUFvVHl0L05TODdIZXc2bG1CU21aQmhVSVl0TWpEbndZZjczNDVMY1dHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUTdReE93VU9RMVJLV0xROUlTQzhwS1g4QldYR0dLbUwvZzBadUtPeGpEaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzS3Jqc0tZc2NrWEhuZVNabVRsbG9hd3hTaG9sRTJ5R0FvTkJqQU5Zd0dNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTamZMYklDZTV1b0JQcStsVWtXOUUxY1RyM2pFVXYvUFJkeHIwdDEzWFJNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldOaDhacTV6dDFaNGlyTE1qb3c0Vzlxc3hTMVRZZlVsdmMzaGxYZVJtVWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ1R2hXMlpCL2pDODl6QjRCWU1rYzZYbEpFeEh2dzU1L0dKNUxjYlJIbWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1BheGxCWTRLM2psdDFWYThvK3NWdmVjM0F1NnJGWmJqRVpab0FlYUhtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTJrU2lDL2RZMHBpT1I5bEkySDBkQzRLeHhjMHNLalc3aEtTK0RvNnczND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZabDJ4eUZJMmVUUEJ5VjNhSW80VFJwSXBCa283RU9aT0xXWEdQTnVlVWxnM2JWeTRCY3VCcWYzS1JyOWxNRWZ4VTh3cTJFaE83SHdQOGpUdFlJRERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTksImFkdlNlY3JldEtleSI6InFmK0lVcFVrQkVZU0JkeTVRZG9Rc1ltVzFtVk9CemNKR3ZOR3oxTUdGUnM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjI1NDMyMjQwNzlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDk1QTJBMUJGQTZCMzY1RDQyOUE2MjY3MzExM0UyODcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczOTAyNzQ1MH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjI1NDMyMjQwNzlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiN0M1MEMwQjE5QUE0ODkxREQyMEJBMDBGMDQyNkRBRTcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczOTAyNzQ1MH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNTk1dWF3Ri1RODJZcDA1OTZYa2xJZyIsInBob25lSWQiOiI1ZGVlNmNhOS03Y2MxLTRlNzAtOTdkOC03Njc1NDk5OGYzZDciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnRCellRNlJxSGxLUkJNRkVoRUtITW5McDJRPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZNekxCNCsyeWtsaXlJL3lxVFY5eDBFbXAvVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJRWTZDRENRWiIsIm1lIjp7ImlkIjoiMjI1NDMyMjQwNzk6OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwn6STIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPUHdxYllDRU9ubm5iMEdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJiQ2RmNncvekkyZndYUDBqcFRlZng4QytBMDVBQkFWaWlGN2F4bjZLTEVFPSIsImFjY291bnRTaWduYXR1cmUiOiJvL1dXTkhwN1h6enBBcW9QZXRSR3Bya3NDQjVaK2tZUll4UVdLMzdYeitwdFI3WnNhbmxkS1puVm95QjBiS0YvdW5sdWZjbVVIZzNlSXNFbDNQblZCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWkRDZGk4NDcxWDJVYi83V2pPSmswVTFLMFlid1BQQjAwZ2ozZXJsUTBNUHh4dHRvS0Q2eGRHM3VacGdmc2w1RUJSZ0Q5NXNYYjhscDNZWkE3bGthRHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjU0MzIyNDA3OTo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQld3blgrc1A4eU5uOEZ6OUk2VTNuOGZBdmdOT1FBUUZZb2hlMnNaK2lpeEIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzkwMjc0NDgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSk1BIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨`",
  author: process.env.PACK_AUTHER || " 𝙎-𝙏𝞢𝞜",
  packname: process.env.PACK_NAME || "𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨",
  botname: process.env.BOT_NAME || "ST┘𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨𖤐",
  ownername: process.env.OWNER_NAME || "🌹⃟⃢👑-Keutly-🌹⃟⃢👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "STEN").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
