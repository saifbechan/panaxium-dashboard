import { atom } from 'jotai';

export const profileOpenState = atom(true);

export const displaySignalsState = atom(false);

export const selectedSignalState = atom(1);

export type SectionToggleIds = {
  rythm_all: boolean;
  rythm_band: boolean;
  rythm_channel: boolean;
  connectivity: boolean;
  biomarker_detection: boolean;
};

export const sectionTogglesState = atom<SectionToggleIds>({
  rythm_all: true,
  rythm_band: true,
  rythm_channel: true,
  connectivity: true,
  biomarker_detection: true,
});
