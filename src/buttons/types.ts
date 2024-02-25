/*  2024-02-25 21:37:11

Types for Button - CVA

*/

import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./buttonVariants";
import { Simplify } from "type-fest";

export type RequiredVariantProps<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends (...args: any) => any,
  // By default, all variants will be required
  Keys extends keyof VariantProps<T> = keyof VariantProps<T>
> = Simplify<
  // Create an intersection of all variants with those being marked as required
  VariantProps<T> & {
    // For each variant being marked as required, remove null and undefined
    [Variant in Keys]: Exclude<VariantProps<T>[Variant], null | undefined>;
  }
>;

export type ButtonVariants = Omit<
  RequiredVariantProps<typeof buttonVariants>,
  "_content"
>;

export type SVGComponent = React.ComponentType<
  React.SVGAttributes<SVGSVGElement>
>;

export type ButtonProps = Partial<ButtonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  (
    | { leadingIcon?: SVGComponent; trailingIcon?: never }
    | { leadingIcon?: never; trailingIcon?: SVGComponent }
  );

export type IconButtonProps = Omit<
  ButtonProps,
  "rounded" | "leadingIcon" | "trailingIcon" | "children"
> & {
  hiddenLabel: string;
  icon: SVGComponent;
};
