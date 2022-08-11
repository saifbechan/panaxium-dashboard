import { atom } from 'recoil';

const profileOpenState = atom({
  key: 'profileOpenState',
  default: true,
});

export default profileOpenState;
