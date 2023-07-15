import { Aside } from '~/features/aside/aside';
import { NavBar } from '~/features/navbar/navbar';

import pageStyle from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <div className={pageStyle.container}>
      <NavBar />
      <Aside />
    </div>
  );
};
