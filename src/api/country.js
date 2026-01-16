export async function getCountryData(code) {
  const apiUrl = `https://restcountries.com/v3.1/alpha/${code}`;

  const response = await fetch(apiUrl);

  if (!response.ok) throw new Error("Country not found");

  return await response.json();
}
