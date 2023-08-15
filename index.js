/****************************
*
*  winqdev (aka Vikke)    
*  (c) 2023               
*  steamid-regex package
*  under MIT License
*
****************************/
module.exports = {
    /**
     * 
     * @param {string} steamid Check for a SteamID fakeness
     * @returns true if is an natural steamid, or false if is an fake steamid
     */
    steamid(steamid) {
        if(typeof steamid !== 'string') {
            throw new Error('Not a string!');
        };
        return /^STEAM_\d:\d:\d+$/.test(steamid);
    },
    /**
     * 
     * @param {string} steamid3 Check for a SteamID3 fakeness
     * @returns true if is an natural steamid3, or false if is an fake steamid3
     */
    steamid3(steamid3) {
        if(typeof steamid3 !== 'string') {
            throw new Error('Not a string!');
        };
        return /^\[U:1:[0-9]+\]$/.test(steamid3);
    },
    /**
     * 
     * @param {string} steamid64 Check for a SteamID64 fakeness
     * @returns true if is an natural steamid64, or false if is an fake steamid64
     */
    steamid64(steamid64) {
        if(typeof steamid64 !== 'string') {
            throw new Error('Not a string!');
        };
        return /^(\d{17})$/.test(steamid64);
    },
    /**
     * 
     * @param {string} steamlink Check for Steam's links fakeness
     * @returns true if is an natural steam link, or false if is an fake steam link
     */
    steamlink(steamlink) {
        if(typeof steamlink !== 'string') {
            throw new Error('Not a string!');
        };
        return /https?:\/\/(?:\w+\.)?steamcommunity\.com\/.*/.test(steamlink) ? /https?:\/\/(?:\w+\.)?steamcommunity\.com\/.*/.test(steamlink) : /https?:\/\/(?:\w+\.)?steampowered\.com\/.*/.test(steamlink);
    }
}
