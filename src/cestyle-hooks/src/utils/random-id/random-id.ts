export function randomId() {
  return `cestyle-${Math.random().toString(36).slice(2, 11)}`;
}
