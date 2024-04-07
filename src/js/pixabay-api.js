const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43151566-329d1ba35c4912218880d8d24';

export const getImages = (searchValue = '') => {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
      searchValue
    )}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
