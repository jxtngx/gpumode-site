import { baseUrl } from 'app/sitemap'
import { readEventsOnDisplay, DiscordEvent } from '@/app/components/futureLectures'
import { formatDate } from '@/app/lib/utils'

export async function GET() {
  let allLectures: DiscordEvent[] = readEventsOnDisplay('app/public/future_events.json')

  const itemsXml = allLectures
    .map(
      (event) =>
        `<item>
          <title>${event.name}</title>
          <speaker>${event.description.replace("Speaker: ", "") || ''}</speaker>
          <date>${formatDate(event.scheduled_start_time)}</date>
        </item>`
    )
    .join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>GPU Mode</title>
        <link>${baseUrl}</link>
        <description>cookbookRSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
