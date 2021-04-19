import CONFIG from "../config";

export default function getColHeight(height: number): string {
  const colHeight = (CONFIG.FIELD_HEIGHT / 100) * height;

  return `${colHeight}px`;
}
