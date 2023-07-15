import { LogoSvg } from '~/assests/logo/logo';

import logoStyle from './LogoButton.module.scss';

export const LogoButton = () => {
  return (
    <div className={logoStyle.logo}>
      <button
        className={logoStyle.logo_button}
        // onClick={onClick}
      >
        <LogoSvg />
      </button>
    </div>
  );
};
