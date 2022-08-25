import { atom } from 'recoil';

const sectionTogglesState = atom({
  key: 'sectionTogglesState',
  default: { 'rythm-measurement': true },
});

export default sectionTogglesState;
