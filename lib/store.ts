import { atom } from 'jotai';
import lfpSignals from '../data/lfp-signals-500';

export const profileOpenState = atom(true);

export const displaySignalsState = atom(false);

export const selectedSignalState = atom(1);

export const ticksState = atom(0);

export const deviceConfigIndexState = atom<[]>([]);

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

export const signalsMinMaxState = atom<{
  all: { min: number; max: number }[];
  sum: { min: number; max: number };
}>(() => {
  const minMaxAll: { min: number; max: number }[] = [];
  const minMaxSum = { min: Infinity, max: -Infinity };

  lfpSignals.map((signalValues, index) => {
    const minMax = { min: Infinity, max: -Infinity };

    signalValues.map((signalValue) => {
      if (signalValue < minMax.min) {
        minMax.min = signalValue;
      }
      if (signalValue > minMax.max) {
        minMax.max = signalValue;
      }

      if (signalValue < minMaxSum.min) {
        minMaxSum.min = signalValue;
      }
      if (signalValue > minMaxSum.max) {
        minMaxSum.max = signalValue;
      }
    });

    minMaxAll[index] = minMax;
  });

  return { all: minMaxAll, sum: minMaxSum };
});
