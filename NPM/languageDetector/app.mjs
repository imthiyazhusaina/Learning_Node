import { franc } from "franc";
import langs from "langs";

const input = "வணக்கம். என் பெயர் ஹுசைன். நான் தமிழ் பேசுகிறேன். நீங்கள் எப்படி இருக்கிறீர்கள்?";

const langCode = franc(input);

console.log("Language Code:", langCode);

const language = langs.where("3", langCode);

console.log("Language Object:", language);