import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "../../utils/cn";

type CalendarProps = React.ComponentProps<typeof DayPicker>;

export default function Calendar({
    className,
    classNames,
    showOutsideDays = true,
    ...props
}: CalendarProps) {
    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            className={cn("p-1", className)}
            classNames={{
                months: "flex flex-col gap-4",
                month: "space-y-4",
                caption: "relative flex items-center justify-center px-8 pt-1",
                caption_label: "text-[14px] font-semibold text-[#111111]",
                nav: "flex items-center gap-1",
                nav_button: cn(
                    "inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#E40714]/15 text-[#E40714] transition-colors",
                    "hover:bg-[#FFF3F4]"
                ),
                nav_button_previous: "absolute left-0",
                nav_button_next: "absolute right-0",
                table: "w-full border-collapse",
                head_row: "grid grid-cols-7",
                head_cell: "text-center text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6F7271]",
                row: "mt-2 grid grid-cols-7",
                cell: "p-0 text-center text-sm",
                day: cn(
                    "mx-auto h-10 w-10 rounded-full text-[14px] font-medium text-[#111111] transition-colors",
                    "hover:bg-[#FFF3F4] hover:text-[#E40714]"
                ),
                day_selected: "bg-[#E40714] text-white hover:bg-[#E40714] hover:text-white",
                day_today: "border border-[#E40714] text-[#E40714]",
                day_outside: "text-[#6F7271]/50",
                day_disabled: "cursor-not-allowed text-[#6F7271]/30",
                day_hidden: "invisible",
                ...classNames,
            }}
            components={{
                Chevron: ({ orientation, className: iconClassName }) =>
                    orientation === "left" ? (
                        <ChevronLeft className={cn("h-4 w-4", iconClassName)} />
                    ) : (
                        <ChevronRight className={cn("h-4 w-4", iconClassName)} />
                    ),
            }}
            {...props}
        />
    );
}
