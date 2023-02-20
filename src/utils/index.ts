export function secondsToMinutes(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const minutesAsStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const seconds = totalSeconds % 60;
  const secondsAsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return `${minutesAsStr}:${secondsAsStr}`;
}
