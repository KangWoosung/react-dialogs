/*  2024-02-25 21:35:54



*/

import { IconButtonProps } from "./types";
import { buttonVariants } from "./buttonVariants";

export function IconButton({
  icon: Icon,
  intent,
  size,
  hiddenLabel,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={buttonVariants({
        className,
        intent,
        rounded: "full",
        size,
        _content: "icon",
      })}
      {...props}
    >
      <p className="sr-only">{hiddenLabel}</p>
      <Icon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
