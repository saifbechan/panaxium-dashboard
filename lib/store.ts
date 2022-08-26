import { atom } from 'jotai';

export const profileOpenState = atom(true);

export type SectionTogglesStateType = {
  'rythm-measurement': boolean;
  'psd-measurement': boolean;
};

export const sectionTogglesState = atom<SectionTogglesStateType>({
  'rythm-measurement': true,
  'psd-measurement': true,
});

export const selectedSignalState = atom(0);
