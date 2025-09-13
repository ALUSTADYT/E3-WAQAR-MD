const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1BxelBXRnUxaHlKSU1pNytiRlpaRGJIaEdEOXVvaWJlbndpZENvUXptTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUhUUW83MHlHYiszYTVqVUtpeFRJekhzZVFlY0ZQaG9DTy91eFpLVEhWUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4RVNrNS9Jd25FazU1bHFqcmhVZlN3ZWRVRWF1SWk5M3IwYXRvcXdqeTBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRUFqQUlETzBjWGdmOGJFMHdpY1hRV3lBdlFPdWNxTWszR09adWVMa2dNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1JcE5kZ2hFVzRKekZOWUVDODlyL1dFMnNmNXZYSzNiQjNRZSt3bUhSbm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBvbTZodzYzMGRpdGY1a3NXQkNRM3JGMlkwN1NQbkFzZWpONUVPbmozVEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUFpTWpYcmpUZDJVMjM1Rjc0YnFNby9IOFUwWVJmbnk5Ym9KWGU3NWdHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM2RHdWQ0OW1tcHQ0bG9FNFkyeDVmdm9MV28xdmgzOWlXUFZJeERkVDV5ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZwM2syc2VQWEFTQ1ppYkVEWE9CYlNRWUxna3lMMXFaSGV4cW5JdUpZVkdPMC9aMEZJd0I4Sy8vbWZtQnMrYWptWUI3UVdObmxnZzRoelFFWVdIc2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE5LCJhZHZTZWNyZXRLZXkiOiJXeFU3b3NBYkY5RS9Remp6NnZYUTFTc0hMRmNhNkx3QXdLU3NSbWZ0aUFJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJORFcySDhNMSIsIm1lIjp7ImlkIjoiOTQ3MjU3MDYwMDc6MTdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUGl1bWFqYSIsImxpZCI6IjE5MDc5MTc0MTg5NDg4ODoxN0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0x5TjVJUUZFT0hwbGNZR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlFzNUNRMWJIS0lYSXFMeU9WY0FidmZQd1A1MFh6cDFaS0RFaktEOHlJSDQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkhWSURRTzZpZnQzSW9GU1QveUUyZW1LckZOaGJDeUp5clJlaGJWcDJqNUpNdVpLL1RzZE1MSjltb2k1SHNydDJyNVNzOTBqcWpsNC9mTVFFUFNYRUNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJpMUh5NDFaNnhtN0htM0NRdVdRTnF6Z2NjVmgya3pLRW9rYXFXUjVWSzlqVUl3NkhnWGFTM3BJdGdqWmFvR3BjTWN2bHhodm01M090VTUzdFQzS1BpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzI1NzA2MDA3OjE3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVMT1FrTld4eWlGeUtpOGpsWEFHNzN6OEQrZEY4NmRXU2d4SXlnL01pQisifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1Nzc3MDk4MCwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUY3NiJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝙀3-WAQAR-𝙈𝘿 ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/yoie7u.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "E3-WAQAR-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "E3-WAQAR-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923495178663",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*E3-WAQAR-MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3-WAQAR-MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/yoie7u.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923495178663",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
