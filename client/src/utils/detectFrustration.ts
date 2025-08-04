export function detectFrustration(text: string): boolean {
  const triggers = ['angry', 'frustrated', 'upset', 'mad', 'annoyed'];
  return triggers.some(trigger => text.toLowerCase().includes(trigger));
}
