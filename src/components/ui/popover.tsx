import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "../../utils/cn";

function Popover({
    ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
    return <PopoverPrimitive.Root {...props} />;
}

function PopoverTrigger({
    ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
    return <PopoverPrimitive.Trigger {...props} />;
}

function PopoverContent({
    className,
    align = "start",
    side = "bottom",
    sideOffset = 10,
    ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
    return (
        <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
                align={align}
                side={side}
                sideOffset={sideOffset}
                className={cn(
                    "z-50 w-[var(--radix-popover-trigger-width)] rounded-[16px] border border-[#E40714]/15 bg-white p-3 shadow-[0_18px_50px_rgba(17,17,17,0.12)] outline-none",
                    "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                    className
                )}
                {...props}
            />
        </PopoverPrimitive.Portal>
    );
}

export { Popover, PopoverTrigger, PopoverContent };
