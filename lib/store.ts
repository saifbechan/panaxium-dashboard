import { atom } from 'jotai';
import lfpSegment from '../data/lfp-segment';

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

export const signalsMinMaxState = atom<{ min: number; max: number }>(() => {
  const minMax = { min: Infinity, max: -Infinity };
  lfpSegment.map((signalValues) => {
    signalValues.map((signalValue) => {
      if (signalValue < minMax.min) {
        minMax.min = signalValue;
      }
      if (signalValue > minMax.max) {
        minMax.max = signalValue;
      }
    });
  });
  return minMax;
});
