import fs from 'fs'
import dotenv from 'dotenv'

dotenv.config()

const dataDir = "../app/public/"
const guildId = process.env.GUILD_ID
const token = process.env.DISCORD_TOKEN

if (!guildId || !token) {
    throw new Error('Missing environment variables: GUILD_ID, DISCORD_TOKEN');
}

export function readEventsOnDisplay<T>(filePath: string): T {
  try {
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    // Read and parse JSON file
    const jsonString = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonString) as T;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error(`Invalid JSON in file ${filePath}: ${error.message}`);
    }
    throw error;
  }
}

// recursive deep equality check of two json objects
function compareEvents<T>(obj1: T, obj2: T): boolean {
    // Handle null/undefined cases
    if (obj1 === obj2) return true;
    if (!obj1 || !obj2) return false;

    // Handle different types
    if (typeof obj1 !== typeof obj2) return false;

    // Handle arrays
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        if (obj1.length !== obj2.length) return false;
        return obj1.every((item, index) => compareEvents(item, obj2[index]));
    }

    // Handle objects
    if (typeof obj1 === 'object' && typeof obj2 === 'object') {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) return false;

        return keys1.every(key => 
            Object.prototype.hasOwnProperty.call(obj2, key) &&
            compareEvents(obj1[key], obj2[key])
        );
    }

    // Compare primitive values
    return obj1 === obj2;
}

async function fetchGuildScheduledEvents(guildId, token) {
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
      return events;
  } catch (error) {
      console.error('Error fetching scheduled events:', error);
      throw error;
  }
}

function filterEventProperties(event) {
    return {
        name: event.name,
        description: event.description,
        scheduled_start_time: event.scheduled_start_time,
        entity_metadata: {
            location: event.entity_metadata?.location
        }
    };
}

function writeNewEvents(newEvents): boolean {
    const outputPath = `${dataDir}/future_events.json`;

    try {
        // Ensure directory exists
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        // Write formatted JSON
        fs.writeFileSync(
            outputPath, 
            JSON.stringify(newEvents, null, 2),
            'utf-8'
        );

        console.log(`Successfully wrote events to ${outputPath}`);
        return true;
    } catch (error) {
        console.error('Error writing events:', error);
        throw error;
    }
}

async function main() {
    try {
        const oldEvents = readEventsOnDisplay(`${dataDir}future_events.json`);
        const guildEvents = await fetchGuildScheduledEvents(guildId, token);
        const newEvents = guildEvents.map(filterEventProperties);
        const result = compareEvents(oldEvents, newEvents);
        
        if (result) {
            console.log('No changes detected');
            process.exit(1);
        } else {
            writeNewEvents(newEvents);
            console.log('Changes written successfully');
            process.exit(0);
        }
    } catch (error) {
        console.error('Error in main:', error);
        process.exit(1);
    }
}


main()