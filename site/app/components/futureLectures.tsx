import ArrowIconRight from '@/app/components/ui/arrowIconRight'
import fs from 'fs'
import { formatDate } from '@/app/lib/utils'

export interface DiscordEvent {
    name: string;
    description: string;
    scheduled_start_time: string;
    entity_metadata: {
        location: string;
    };
}

export function readEventsOnDisplay<T>(filePath: string): T {
    try {
        // Check if file exists
        if (!fs.existsSync(filePath)) {
            console.error(`File not found: ${filePath}`);
            return [] as T;
        }

        // Read and parse JSON file
        const rawData = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(rawData) as T;
    } catch (error) {
        console.error(`Error reading JSON file ${filePath}:`, error);
        return [] as T;
    }
}

export default async function FutureLectures() {

    try {
        const lectures = readEventsOnDisplay<DiscordEvent[]>('app/public/future_events.json');
        
        // Sort lectures by date
        const sortedLectures = [...lectures].sort((a, b) => 
            new Date(a.scheduled_start_time).getTime() - new Date(b.scheduled_start_time).getTime()
        );

        return (
            <div>
                <div className="flex flex-col space-y-3 mb-4">
                    {Array.isArray(sortedLectures) ? (
                        sortedLectures.map((lecture, index) => (
                            <div 
                                key={`lecture-${index}`} 
                                className="w-full flex flex-col align-middle items-center md:flex-row space-x-0 md:space-x-2 hover:bg-accent"
                            >
                                <ArrowIconRight/>
                                <hr/>
                                <p className="text-neutral-900 dark:text-neutral-100 text-left text-balance w-[300px]">
                                    {lecture.name}
                                </p>
                                <p className="text-neutral-600 dark:text-neutral-400 text-center text-pretty w-[100px]">
                                    {lecture.description.replace("Speaker: ", "")}
                                </p>
                                <hr/>
                                <hr/>
                                <p className="text-neutral-600 dark:text-neutral-100 text-left text-balance w-[150px]">
                                    {`${formatDate(lecture.scheduled_start_time)}` }
                                </p>
                            </div>
                        ))
                    ) : (
                        <div>No lectures found</div>
                    )}
                </div>
            </div>
        )
    } catch (error) {
        console.error('Error reading lectures:', error);
        return <div>Unable to load lectures</div>;
    }
}

