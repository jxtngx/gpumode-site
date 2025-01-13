export async function fetchGuildScheduledEvents() {
    const guildId = process.env.GUILD_ID
    const token = process.env.DISCORD_TOKEN

  try {
      const response = await fetch(`https://discord.com/api/v10/guilds/${guildId}/scheduled-events`, {
          headers: {
              'Authorization': `Bot ${token}`,
              'Content-Type': 'application/json',
          },
      });

      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      const events = await response.json();
      console.log(events)
      return events;
  } catch (error) {
      console.error('Error fetching scheduled events:', error);
      throw error;
  }
}
