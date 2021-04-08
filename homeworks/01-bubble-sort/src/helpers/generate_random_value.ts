export default function generateRandomValue(
  min: number = 0,
  max: number = 100
): number {
  return min + Math.round(Math.random() * (max - min));
}
