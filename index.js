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
        if(typeof steamid !== 'string') {
            throw new Error('Not a string!');
        };
        return /^STEAM_\d:\d:\d+$/.test(steamid);
    },
    steamid3(steamid3) {
        if(typeof steamid3 !== 'string') {
            throw new Error('Not a string!');
        };
        return /^\[U:1:[0-9]+\]$/.test(steamid3);
    },
    steamid64(steamid64) {
        if(typeof steamid64 !== 'string') {
            throw new Error('Not a string!');
        };
        return /^(\d{17})$/.test(steamid64);
    }
}
