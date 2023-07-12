import './App.styles.scss';
import { FavoriteSvg } from '~/assests/Interface/Favorites';
import { Filter } from '~/assests/Interface/Filter';
import { HomeSvg } from '~/assests/Interface/Home';
import { SettingsSvg } from '~/assests/Interface/Setting';
import { TrendsSvg } from '~/assests/Interface/Trends';

import { ArrowDownSvg } from './assests/Interface/ArrowDown';
import { SearchSvg } from './assests/Interface/Search';
import { LogoButton } from './features/navbar/Menu/logoBtn/LogoButton';

export const App = () => {
  return (
    <div className="container">
      <nav className="navBar">
        <div className="logo">
          <LogoButton />
        </div>
        <div className="search_bar">
          <form className="search_bar-form">
            <input
              type="text"
              placeholder="Search..."
            />
            <button className="search_ico">
              <SearchSvg />
            </button>
            <button className="filter">
              <Filter />
            </button>
          </form>
        </div>
        <div className="user_block">
          <div className="user_ico"></div>
          <p className="user_name">User User</p>
          <button className="user_sm">
            <ArrowDownSvg />
          </button>
        </div>
      </nav>
      <div className="aside">
        <div className="aside_menu">
          <button className="menu">
            <HomeSvg /> Home
          </button>
          <button className="trends">
            <TrendsSvg /> Trends
          </button>
          <button className="favorite">
            <FavoriteSvg /> Favorite
          </button>
          <button className="settings">
            <SettingsSvg /> Settings
          </button>
        </div>
      </div>
    </div>
  );
};
