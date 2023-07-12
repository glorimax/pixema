import { type ButtonHTMLAttributes, type ReactElement } from 'react';

export const ButtonStyleAppearance = {
  button: 'button',
  filter: 'filter',
  user: 'user',
  chevron: 'chevron',
  burger: 'burger',
  pagination: 'pagination',
  system: 'system'
};

export type ButtonStyleAppearances =
  (typeof ButtonStyleAppearance)[keyof typeof ButtonStyleAppearance];

export type ButtonProperties = {
  appearance?: ButtonStyleAppearances;
  iconLeft?: ReactElement | null;
  iconRight?: ReactElement | null;
  shouldFitContainer?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
