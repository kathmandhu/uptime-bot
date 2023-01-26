require('dotenv').config();
module.exports = {
    TOKEN: process.env.TOKEN || '',
    MONGO_DB: process.env.MONGO_DB || '',
    CLIENT_ID: process.env.CLIENT_ID || '',
    OWNERS: ['835126233455919164'],
    SUPPORT_SERVER: '865198018872999966',
    CHANNELS: {
        COMMANDS_LOGS: '1068056196147335219',
        ERROR_COMMAND_LOGS: '1068056272521416754',
    },
};
