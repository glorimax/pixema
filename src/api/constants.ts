export const API_KEY = '7FE89DX-C9X4S6Y-MYEE0B4-8KFMJC9';
export const BASE_API_URL = import.meta.env.VITE_API_URL as string;
export const BASE_KINOAPI_URL = import.meta.env.VITE_KINOAPI_URL as string;

export const pathnames = [
  { label: 'Главная', value: 'home' },
  { label: 'Избранное', value: 'favorites' },
  { label: 'Настройки', value: 'settings' }
];

export const allGenres = [
  { label: 'Сбросить фильтр', value: '' },
  { label: 'Семейные', value: 'семейный' },
  { label: 'Биографии', value: 'биография' },
  { label: 'Боевики', value: 'боевик' },
  { label: 'Вестерны', value: 'вестерн' },
  { label: 'Военные', value: 'военный' },
  { label: 'Детективы', value: 'детектив' },
  { label: 'Детские', value: 'детский' },
  { label: 'Документальные', value: 'документальный' },
  { label: 'Драмы', value: 'драма' },
  { label: 'Исторические', value: 'история' },
  { label: 'Комедии', value: 'комедия' },
  { label: 'Короткометражки', value: 'короткометражка' },
  { label: 'Криминал', value: 'криминал' },
  { label: 'Мелодрамы', value: 'мелодрама' },
  { label: 'Музыкальные', value: 'музыка' },
  { label: 'Мюзиклы', value: 'мюзикл' },
  { label: 'Новости', value: 'новости' },
  { label: 'Приключения', value: 'приключения' },
  { label: 'Спортивные', value: 'спорт' },
  { label: 'Триллеры', value: 'триллер' },
  { label: 'Ужасы', value: 'ужасы' },
  { label: 'Фантастика', value: 'фантастика' },
  { label: 'Фильмы-нуар', value: 'фильм-нуар' },
  { label: 'Фэнтези', value: 'фэнтези' }
];

export const movieTypes = [
  { label: 'Сбросить фильтр', value: '' },
  { label: 'Фильмы', value: 'movie' },
  { label: 'Сериалы', value: 'tv-series' },
  { label: 'Аниме', value: 'anime' },
  { label: 'Аниме-сериалы', value: 'animated-series' },
  { label: 'Телепрограммы', value: 'tv-show' }
];
