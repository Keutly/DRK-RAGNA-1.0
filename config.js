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

global.SESSION_ID = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0tmbXpWTk54NEN0TlZSNFpTNy9rSGRxYldFVjNPQ3ZUMEFHNUFwUEVVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzdoa2QranZRRmZIQ1NNSUN2cG5Xc0VtQkRXU2FLWEJsNk9XY05oaXJFRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSHN3NmNZZ0FYUkhYKzNUNUtTRFJscDB3TzJsZnZVRWVqdEhLcU5tR2wwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzMkJrRXNrV2NHYitsWlFBbkRSRnAvQTZoVnhpN0hZVUJJNDMrekpJZVhVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1QWjN0cmZLay85NDFPcTJKc0pvN215Z2hzMGxHOXJRK3k4aDVJeVI4bXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5UWFdveFlLbXVWZ0VJa3AvcHpiMCt1WkVmMnNXaXpDVjNTSU45OWdYU0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEtrSXk3Rm90WTF4UStranJyT3RlM2tmZE9CLzhRL1hBQmNqYnpLZWRGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3ZsQ1pCeGF3cXhibnFBUjJ4WW1aM3VBWmQxblM5cFNTYW1rSFhSU2J3Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFDekpuaklhM0FUOUtLaG43M3QxYyt6RlFySFQrM2tUVVNLUWpCMFpXeElEWU5rVmJtZzlybUplb05samdYRlVhMnNUVjZhS2lJU3VsNlhua3pRTWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI0LCJhZHZTZWNyZXRLZXkiOiJYS2NyRzgzN3lXenZWc1RESDNJUTZIODBuV05ER2wwVThTRXRuY2xpbkRFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIyNTg4MTQ1NzIyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjI5NUVEQjA2QzBGQjVGODlCOEM5OTYwM0NDOUFBQjlGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDAwNjkxODZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlN4bmtVczBZU3llRzcwNzQ3Y2ZDd1EiLCJwaG9uZUlkIjoiNTAyZDQ2ZmYtZjU1Ny00YjI0LTg2MDgtNGNhNjRkZTQ1YzIyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im4xZmxCUEVmOXA0d0ZIZ0cyRnlpb2QvaWcrND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSUduOWpUaC9oM0JrWHlHNy9QTit1QVd1RlE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiM0VRRkJDS1giLCJtZSI6eyJpZCI6IjIyNTg4MTQ1NzIyOjYyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IktldXRseSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2lLeU1BRkVLK3kzYjBHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUVhtbnMzMnZrcitYSFJxQzJqcGM0akVZR2U2Rm9RN1dzOGM0eldVRUVBUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoieFNwMkxsdHdOSHFMOTBIMi9RNkI4UW5KWGJRMW5pczQvOHhiTW5KQTdiRnNBRE16eitEVFgrd25YaWhYNmFQUlM4NTY1c0xwS0x1YU1PTjB2SGZ2RGc9PSIsImRldmljZVNpZ25hdHVyZSI6IjczdWZoQXFLRlNERC96KzloakorWGdybWhKYnVsUWxGdEVoZnhBMng4T3A0RWFTd3phazJjRjhJaTRGS1ZKR3ZSOHRFNnVCbU5FcWpJeUdMZUN1L2hBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI1ODgxNDU3MjI6NjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVUY1cDdOOXI1Sy9seDBhZ3RvNlhPSXhHQm51aGFFTzFyUEhPTTFsQkJBRSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MDA2OTE4MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJbVQifQ=="
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
