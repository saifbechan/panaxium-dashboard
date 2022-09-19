import { atom } from 'jotai';

export const profileOpenState = atom(true);

export const displaySignalsState = atom(false);

export const selectedSignalState = atom(1);

export type SectionToggleIds = {
  rhythm_all: boolean;
  rhythm_band: boolean;
  rhythm_channel: boolean;
  connectivity: boolean;
  biomarker_detection: boolean;
};

export const sectionTogglesState = atom<SectionToggleIds>({
  rhythm_all: true,
  rhythm_band: true,
  rhythm_channel: true,
  connectivity: true,
  biomarker_detection: true,
});
