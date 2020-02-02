const currentDate: number = Math.floor(new Date().getTime() / 1000.0)

// A year in unix time is roughly this int
const aYear: number = 31556926

// in order to find the time of last year we subtract the current date by a year
export const lastYear: number = currentDate - aYear