// noinspection JSUnusedLocalSymbols

import { v4 as uuid } from 'uuid';
import { LoremIpsum } from 'lorem-ipsum';

export const ipsum: LoremIpsum = new LoremIpsum({
  sentencesPerParagraph: {
    min: 4,
    max: 8,
  },
  wordsPerSentence: {
    min: 4,
    max: 16
  },
})

export function randomNumber(from: number = 0, to: number = 10): number {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

export function generateUUID() {
  return uuid();
}

export function generateUrl() {
  return ipsum.generateWords(1).toLowerCase() + '/' + ipsum.generateWords(1);
}

export function generateName() {
  return ipsum.generateWords(randomNumber(2, 3));
}

export function generateShortContent() {
  return ipsum.generateSentences(randomNumber(1, 2));
}

export function generateLongContent() {
  return ipsum.generateParagraphs(1);
}

export function simpleEncode(input: any): string {
  return btoa(JSON.stringify(input));
}

export function simpleDecode<T>(input: string): T {
  try {
    return JSON.parse(atob(input)) as T;
  } catch (e) {
    throw new TypeError('Invalid token format!');
  }
}

