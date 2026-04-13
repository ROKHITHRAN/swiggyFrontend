export function getRatingIcon(rating: number): string {
  if (rating >= 4.5) return 'assets/icons/excellent-star.png';
  if (rating >= 3.8) return 'assets/icons/good-star.png';
  if (rating >= 2.5) return 'assets/icons/bad-star.png';
  return 'assets/icons/worst-star.png';
}
