import { LogoSvg } from '~/assests/logo/logo';

import logoStyle from './LogoButton.module.scss';

export const LogoButton = () => {
  return (
    <button
      className={logoStyle.logo_button}
      // onClick={onClick}
    >
      <LogoSvg />
    </button>
  );
};
