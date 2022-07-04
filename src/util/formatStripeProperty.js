export function formatStripeProperty(property) {
  const string = property.split('_').join(' ');
  return string.charAt(0).toUpperCase() + string.slice(1);
}
