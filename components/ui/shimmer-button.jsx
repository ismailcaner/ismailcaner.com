import React from "react";
import { cn } from "@/src/lib/utils";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ShimmerButton = React.forwardRef((
  {
    shimmerColor = "black",
    shimmerSize = "2px",
    shimmerDuration = "3s",
    borderRadius = "10px",
    background = "#282828",
    className,
    children,
    ...props
  },
  ref,
) => {

  const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
    setMounted(true);
  }, [setTheme]);
  
  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);
  if (!mounted) return null;

  return (
    (<button
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": theme === 'dark' ? 'white' : shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": shimmerSize,
          "--bg": theme === 'dark' ? background : 'white',
        }
      }
      className={cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap  border-white/10 p-[1rem] dark:text-white [background:var(--bg)] [border-radius:var(--radius)] dark:text-black",
        "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
        className
      )}
      ref={ref}
      {...props}>
      {/* spark container */}
      <div
        className={cn(
          "-z-30 blur-[0px]",
          "absolute inset-0 overflow-visible [container-type:size]"
        )}>
        {/* spark */}
        <div
          className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
          {/* spark before */}
          <div
            className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
        </div>
      </div>
      {children}
      {/* Highlight */}
      <div
        className={cn(
          "insert-0 absolute size-full",
          // transition
          "transform-gpu transition-all duration-300 ease-in-out",
          // on hover
          "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
          // on click
          "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"
        )} />
      {/* backdrop */}
      <div
        className={cn(
          "absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"
        )} />
    </button>)
  );
});

ShimmerButton.displayName = "ShimmerButton";

export default ShimmerButton;
