import { Filter } from '~/assests/Interface/Filter';
import { SearchSvg } from '~/assests/Interface/Search';

import searchBarStyle from './SearchBar.module.scss';

export const SearchBar = () => {
  return (
    <div className={searchBarStyle.search_bar}>
      <form className={searchBarStyle.search_bar_form}>
        <input
          type="text"
          placeholder="Search..."
        />
        <button className={searchBarStyle.search_ico}>
          <SearchSvg />
        </button>
        <button className={searchBarStyle.filter}>
          <Filter />
        </button>
      </form>
    </div>
  );
};
