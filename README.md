# steamid-regex
SteamID Regex for all types of steamid
# SteamID Regex
```js
const regex = require("steamid-regex");

regex.steamid("STEAM_0:1:526443130");
// Expected output: true
```
# SteamID3 Regex
```js
const regex = require("steamid-regex");

regex.steamid3("[U:1:873329666]");
// Expected output: true
```
# SteamID64 Regex
```js
const regex = require("steamid-regex");

regex.steamid64("76561198833595394");
// Expected output: true
```
# Responses:
``true`` - input matches with regex
<br>
``false`` - input doesn't match with regex
