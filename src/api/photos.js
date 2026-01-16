const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

export async function getCityImages(city) {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${city}&per_page=21`,
    { headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` } }
  );

  if (!response.ok) throw new Error("Could not fetch photo");

  return await response.json();
}
