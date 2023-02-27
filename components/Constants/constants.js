export const API_URL = 'https://api.rawg.io/api/games';
export const KEY_URL = '?key=9d7f98076c7a4b53a1e370aa01cd991e';


export const initialFilters = {
  page: 1,
  search: '',
  ordering: '',
  platforms: '4',
};

export const sort = [
  { title: 'Relevance', dataValue: '' },
  { title: 'Rating (High)', dataValue: '-rating' },
  { title: 'Rating (Low)', dataValue: 'rating' },
  { title: 'Release (New)', dataValue: '-released' },
  { title: 'Release (Old)', dataValue: 'released' },
];

export const platforms = [
  { title: 'PC', dataValue: '4' },
  { title: 'PlayStation', dataValue: '18,167,16' },
  { title: 'XBox', dataValue: '1,186,14' },
  { title: 'Nintendo', dataValue: '7,8,9' },
  { title: 'MacOS', dataValue: '5' },
];
