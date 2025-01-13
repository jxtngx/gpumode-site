import { readEventsOnDisplay, DiscordEvent } from '@/app/components/futureLectures'
import { formatDate } from '@/app/lib/utils'

export const baseUrl = 'https://gpumode.ai'

export default async function sitemap() {
    let allLectures: DiscordEvent[] = readEventsOnDisplay('app/public/future_events.json')

    let lectures = allLectures.map((event) => ({
        name: event.name,
      }))

    return [...lectures]
}
