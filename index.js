/****************************
*
*  winqdev (aka Vikke)    
*  (c) 2023               
*  steamid-regex package
*  under MIT License
*
****************************/
module.exports = {
    steamid(steamid) {
        var regex = /^STEAM_\d:\d:\d+$/.test(steamid);
        console.log(regex);
        return
    },
    steamid3(steamid3) {
        var regex = /^\[U:1:[0-9]+\]$/.test(steamid3);
        console.log(regex);
        return;
    },
    steamid64(steamid64) {
        var regex = /^(\d{17})$/.test(steamid64);
        console.log(regex);
        return;
    }
}