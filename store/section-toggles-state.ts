import { atom } from 'recoil';

const sectionTogglesState = atom({
  key: 'sectionTogglesState',
  default: { 'rythm-measurement': false },
});

export default sectionTogglesState;
