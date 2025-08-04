export function getUserTier(user) {
  if (!user) return 'Free';
  if (user.isPremium) return 'Premium';
  if (user.isEnterprise) return 'Enterprise';
  return 'Free';
}
