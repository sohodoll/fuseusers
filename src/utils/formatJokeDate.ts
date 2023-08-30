export const formatJokeDate = (date: string) => {
  return date.split(' ')[0].split('-').join('.')
}
