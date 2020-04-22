const Discord = require("discord.js")



/**
* Main Client
* @extends Discord.Client
*/
exports = class ClientPlus extends Discord.Client {
    constructor(opts) {
        super(opts);
    }
    /**
    * Deletes Multiple Channels
    * @arg {Array<Channel>} Array of channel objects to delete
    * @returns {Promise<Array<Channel>>}
    */
    multiChannelDelete(channels) {
        if (!channels.length) throw new Error("Channel Array Empty");
        return new Promise((resolve, reject) => {
            let returned = []
            channels.forEach(c => c.delete().then(c2=>returned.push(c2)));
            resolve(returned)
        });
    }
    /**
    * Deletes Multiple Roles
    * @arg {Array<Role>} Array of role objects to delete
    * @arg {String} Reason of deleting the roles
    * @returns {Promise<Array<Role>>}
    */
    multiRoleDelete(roles, reason ) {
        if (!roles.length) throw new Error("Role Array Empty");
        return new Promise((resolve, reject) => {
            let returned = []
            reason ? roles.forEach(r => r.delete(reason).then(r2=>returned.push(r2))) : roles.forEach(r => r.delete().then(r2=>returned.push(r2)));
        });
        
    }
    /**
    * Kicks multiple users
    * @arg {Array<GuildMember>} Array of GuildMember objects to kick
    * @arg {String} Reason of kicking the members
    * @returns {Promise<Array<GuildMember>>}
    */
    multiKick(members, reason) {
        if (!members.length) throw new Error("GuildMember Array Empty");
        return new Promise((resolve, reject) => {
            let returned = []
            reason ? members.forEach(m => m.kick(reason).then(gm=>returned.push(gm))) : members.forEach(m => m.kick().then(gm=>returned.push(gm)));
      
            resolve(returned);
        });
        
    }
    /**
    * Bans multiple users
    * @arg {Array<GuildMember>} Array of GuildMember objects to ban
    * @arg {Object} [options] Ban options
    * @arg {Number} [options.days] Amount of days to ban
    * @arg {String} [options.reason] Reason for banning the members
    * @returns {Promise<Array<GuildMember>>}
    */
    multiBan(members, options = {}) {
        if (!members.length) throw new Error("GuildMember Array Empty");
        return new Promise((resolve, reject) => {
             var returned = []
            members.forEach(m => m.ban(options).then(gm=>returned.push(gm)));
            
            resolve(returned)
        });
    }
}

