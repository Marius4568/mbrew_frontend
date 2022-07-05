export function capitalize(string) {
  return string
    .split(' ')
    .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
    .join(' ');
}
