import { FavoriteSvg } from '~/assests/Interface/Favorites';
import { HomeSvg } from '~/assests/Interface/Home';
import { SettingsSvg } from '~/assests/Interface/Setting';
import { TrendsSvg } from '~/assests/Interface/Trends';

import asideStyles from './AsideStyle.module.scss';

export const Aside = () => {
  return (
    <div className={asideStyles.aside}>
      <div className={asideStyles.aside_menu}>
        <button className={asideStyles.menu}>
          <HomeSvg /> Home
        </button>
        <button className={asideStyles.trends}>
          <TrendsSvg /> Trends
        </button>
        <button className={asideStyles.favorite}>
          <FavoriteSvg /> Favorite
        </button>
        <button className={asideStyles.settings}>
          <SettingsSvg /> Settings
        </button>
      </div>
    </div>
  );
};
