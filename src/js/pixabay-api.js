export const fetchPhotosByQuery = searchedQuery => {
    const requestParams = new URLSearchParams({
      q: searchedQuery,
      per_page: 9,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      key: '50720550-abdb0a32f459975af0b381b86',
    });
  
    return fetch(`https://pixabay.com/api/?${requestParams}`).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
};
  