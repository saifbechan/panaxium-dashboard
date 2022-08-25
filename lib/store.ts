import { atom } from 'jotai';

export const profileOpenState = atom(true);

export const sectionTogglesState = atom({ 'rythm-measurement': true });

export const selectedSignalState = atom(0);
