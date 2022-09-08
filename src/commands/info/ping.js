const Command = require('../../structures/Command')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            description: 'Check bot ping.'
        })
    }

    run = (interaction) => {
        interaction.reply({ content: `🏓 Pong! Latency: **${Math.round(this.client.ws.ping)} ms**` });
    };
};