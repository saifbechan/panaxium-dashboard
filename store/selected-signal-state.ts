import { atom } from 'recoil';

const selectedSignalState = atom({
  key: 'selectedSignalState',
  default: 12,
});

export default selectedSignalState;
