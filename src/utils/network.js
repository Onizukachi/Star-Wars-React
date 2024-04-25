import { HTTP, HTTPS } from '@constants/api'

export const changeHTTP = (url) => {
  const result = url ? url.replace(HTTP, HTTPS) : url
  return result
}

export const getApiResponse = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error('Could not fetch.', res.status)
      return false
    }

    return await res.json();
  } catch (error) {
    console.error('Could not fetch.', error.message);
    return false;
  }
}
