import { cn } from "@/utils/cn"
import { Loader2Icon } from "lucide-react"
import React from "react"

export const Spinner = ({ className, ...props}: React.ComponentProps<"svg">) => {
  return (
    <Loader2Icon 
      className={cn(
        "animate-spin",
        className,
      )}
      {...props}
      />
  )
}