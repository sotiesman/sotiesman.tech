import { env } from '@sdnsdev/env'

export const getDiscordAvatar = async (discordId: string): Promise<string> => {
	const response = await fetch(`https://discord.com/api/users/${discordId}`, {
		headers: {
			Authorization: `Bot ${env.DISCORD_BOT_TOKEN}`,
		},
	})

	const data = await response.json()

	const makeAvatarUrl = (id: string, avatarNameData: string) => {
		const format = avatarNameData.startsWith('a_') ? 'gif' : 'png'
		return `https://cdn.discordapp.com/avatars/${id}/${avatarNameData}.${format}`
	}

	return makeAvatarUrl(discordId, data.avatar)
}
