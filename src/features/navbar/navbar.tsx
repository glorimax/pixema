import { LogoButton } from '~/features/navbar/logoBtn/LogoButton';
import { SearchBar } from '~/features/navbar/searchBar/search';
import { UserBlock } from '~/features/navbar/user/userBlock';

import navBarStyle from './NavBar.module.scss';

export const NavBar = () => {
  return (
    <nav className={navBarStyle.navBar}>
      <LogoButton />
      <SearchBar />
      <UserBlock />
    </nav>
  );
};
