import { ArrowDownSvg } from '~/assests/Interface/ArrowDown';

import userBlockStyle from './UserBlock.module.scss';

export const UserBlock = () => {
  return (
    <div className={userBlockStyle.user_block}>
      <div className={userBlockStyle.user_ico}></div>
      <p className={userBlockStyle.user_name}>User User</p>
      <button className={userBlockStyle.user_sm}>
        <ArrowDownSvg />
      </button>
    </div>
  );
};
