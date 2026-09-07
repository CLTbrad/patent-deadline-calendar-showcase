const dataUrl = import.meta.env.VITE_DEADLINES_URL || 'data/deadlines.json';

export async function loadDeadlines() {
  const response = await fetch(dataUrl, { cache: 'no-store' });
  if (!response.ok) throw new Error('The public deadline snapshot could not be loaded.');
  const data = await response.json();
  if (!Array.isArray(data.events)) throw new Error('The deadline snapshot is invalid.');
  return data;
}
