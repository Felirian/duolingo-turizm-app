export function addCompletedCourseSlug(slug: string) {
  const stored = localStorage.getItem('completed_course_slugs');
  const slugs = stored ? JSON.parse(stored) : [];
  if (!slugs.includes(slug)) {
    slugs.push(slug);
    localStorage.setItem('completed_course_slugs', JSON.stringify(slugs));
  }
}

export function isCourseSlugCompleted(slug: string) {
  const stored = localStorage.getItem('completed_course_slugs');
  const slugs = stored ? JSON.parse(stored) : [];
  return slugs.includes(slug);
}

export function removeCompletedCourseSlug(slug: string) {
  const stored = localStorage.getItem('completed_course_slugs');
  if (!stored) return;
  const slugs = JSON.parse(stored);
  const filtered = slugs.filter((s: string) => s !== slug);
  localStorage.setItem('completed_course_slugs', JSON.stringify(filtered));
}

export function hasCompletedCourseSlugs() {
  const stored = localStorage.getItem('completed_course_slugs');
  if (!stored) return false;

  try {
    const slugs = JSON.parse(stored);
    return Array.isArray(slugs) && slugs.length > 0;
  } catch {
    return false;
  }
}
