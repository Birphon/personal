import os
import discord
from discord.ext import commands
import json

# Load environment variables from the .env file
from dotenv import load_dotenv
load_dotenv()

intents = discord.Intents.all()
bot = commands.Bot(command_prefix='!', intents=intents)

# Load configuration data from config.json
if os.path.exists('menu_config.json'):
    with open('menu_config.json', 'r') as file:
        config_data = json.load(file)

@bot.event
async def on_ready():
    print(f'Logged in as {bot.user.name}')

@bot.event
async def on_message(message):
    # Ignore messages from the bot itself
    if message.author == bot.user:
        return

    # Check if the message is in the specified channel and has the correct format
    if message.guild and message.guild.name == 'YourServerName' and message.channel.id == int(config_data["main_channel_id"]):
        # Check for keywords related to each thread channel in the message content
        thread_channel_id = None
        role_id = None
        for channel_id, role_name in config_data["target_threads"].items():
            if channel_id in message.content.lower():
                thread_channel_id = channel_id
                role_id = role_name
                break

        # Check if the thread channel ID exists
        if thread_channel_id and role_id:
            thread_channel = bot.get_channel(int(thread_channel_id))
            role_mention = f'<@&{int(role_id)}>'  # Mention the role

            # Create a message with the desired formatting
            formatted_message = f'{role_mention}\n#{thread_channel_id}\n{message.content}'

            # Reply to the original message to preserve formatting
            await thread_channel.send(formatted_message, reference=message)

            # Clear the original channel
            await message.channel.purge(limit=1)  # Remove the original message

    await bot.process_commands(message)

def run_bot():
    # Use the BOT_TOKEN from the environment variables
    bot.run(os.getenv('BOT_TOKEN'))
