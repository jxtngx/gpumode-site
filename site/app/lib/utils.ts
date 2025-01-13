import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatDate(date: string) {

  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
  })

  return fullDate
}
