# steamid-regex
SteamID Regex for all types of steamid
# SteamID Regex
```js
const regex = require("steamid-regex");

console.log(regex.steamid("STEAM_0:1:526443130"));
// Expected output: true
```
# SteamID3 Regex
```js
const regex = require("steamid-regex");

console.log(regex.steamid3("[U:1:873329666]"));
// Expected output: true
```
# SteamID64 Regex
```js
const regex = require("steamid-regex");

console.log(regex.steamid64("76561198833595394"));
// Expected output: true
```
# Steam Link Regex
```js
const regex = require("steamid-regex");

console.log(regex.steamlink("https://steamcommunity.com"));
// Expected output: true

// or
console.log(regex.steamlink("https://steampowered.com"));
// Expected output: true
```
# Responses:
``true`` - input matches with regex
<br>
``false`` - input doesn't match with regex
