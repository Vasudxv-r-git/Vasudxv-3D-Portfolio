import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

interface InteractiveHoverButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function InteractiveHoverButton({
  children,
  className,
  href,
  ...props
}: InteractiveHoverButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-lg border border-[#7042f88b] p-2 px-6 text-center font-semibold button-primary text-white inline-block max-w-[200px]",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        <div className="bg-[#7042f8] h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 text-white">
        <span>{children}</span>
        <ArrowRightIcon className="h-5 w-5" />
      </div>
    </Link>
  );
}
