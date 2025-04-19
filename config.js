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
global.owner = process.env.OWNER_NUMBER || "2250143224079";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU1WaEZGdmo0Zk91SkJPSDRmS0J5RUx5NzlsYnUveUYva3g1cGJOWU1FND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXFxK0tZR1czcjExeWl2NDdCUi96bzVsWFZaTnlZK0JrZTZTYVpocitnRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhS29sVGk1UlBYSWNBWDRob2FKQ2FpV0lRTytJT255dFVKMG0rODFyYkhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSQnNvSDlUT3pyTFlZYlVtemd4YXBHMnhZWDBHWFRrOE9tNjNpcHB2UkJJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldIVllGbHJucXJqTjRJSHNPdkpGOXdVN3M2N1hSUmM1N2tWMTZId0IyR3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpHZXJ5TFJibTNqN1I2M2hPV2pTZ2c4NFp6c0hXYnFOMFJ0U25OTm5wblE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0dPTU8rcTltcnplMzJHaUtBai9OdFB6VHNwRVkzKzNBeFlJWGt6OW1sRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiazI0SkxYU2lHR2pNcVo3a1l0WlV4QllVM2s4U3N1SUhlekdKb2dVcGd4ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1tbk9vVGhpRTkrNG5ndUhzVEJUeG5wVXNaSm5kcmZzSjAydkRBVVBYeFBtMjlXZlNkL3cyR3MwamtQUTQ4YXB2Ulg3SlE3a1VZektaYmxLS3FEN2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQzLCJhZHZTZWNyZXRLZXkiOiJEUEJERU5CUFA5VitaSFBwR3BrYU1YeWt3RHdhYjFPY2E4Y005eWNGcXRvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIyNTQzMjI0MDc5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkZBNzNDN0JBNzhGMjRBN0QyQjJDQkU0NDMxNzRBNjk1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDUwMjM0Njl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkZLY0hEWDBvVEYyX3pGX1JPenZ1a1EiLCJwaG9uZUlkIjoiMmFkZTEwNTYtYWRkMi00MzM4LTgyYjAtYjA4NjJlMDMzZTdlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZkcVZrTWJzZjRkUVhzb1NObGxnUWdvUXhrRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0MkMxeGNQRmdlcHBoNVNFRmU1NlRaMmFVNm89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRkNHWEU2OUIiLCJtZSI6eyJpZCI6IjIyNTQzMjI0MDc5OjE2QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQcTdnZWNHRU56amk4QUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJhY2xKSmRnaTBLazRRei93NVNPRUhxYTVqVThzYmFIMEFMNmF1Qi83T0Q4PSIsImFjY291bnRTaWduYXR1cmUiOiJrbDRKamx3TllOS3p4eW9lajZOUy9XMVNWOE42Zmx5RTNMK1JsdjBrMmxtQ2xLM0x6MnREM1FrY3Myck9kcnJDNXRoYTNNSENxRUtjNjdTbThIcS9CZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZFZCUnl1ZkU2OXppK3RkV0JUelBielhTRWVzd083c2ZybkxZWVozZzVUR0tRcUg2OGtMN1VkVkF4MlBjeEJuak1kSkNIalJDY1RDeGNwNEhYZWlVaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjU0MzIyNDA3OToxNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXbkpTU1hZSXRDcE9FTS84T1VqaEI2bXVZMVBMRzJoOUFDK21yZ2YremcvIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ1MDIzNDY0fQ=="
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
