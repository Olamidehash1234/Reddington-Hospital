import { useState } from "react";

import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { cn } from "../../utils/cn";

type TimePickerProps = {
    id: string;
    name: string;
    value?: string;
    onChange: (time: string) => void;
    placeholder?: string;
    className?: string;
};

const TIME_SLOTS = Array.from({ length: 24 }, (_, hour) => hour)
    .flatMap((hour) => [0, 30].map((minute) => {
        const suffix = hour >= 12 ? "PM" : "AM";
        const displayHour = hour % 12 === 0 ? 12 : hour % 12;
        const displayMinute = minute.toString().padStart(2, "0");
        return `${displayHour}:${displayMinute} ${suffix}`;
    }))
    .filter((slot) => slot !== "12:00 AM");

export default function TimePicker({
    id,
    name,
    value,
    onChange,
    placeholder = "Preferred Time",
    className,
}: TimePickerProps) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <input type="hidden" name={name} value={value ?? ""} />
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <button
                        id={id}
                        type="button"
                        className={cn(
                            "flex h-[50px] w-full items-center justify-between rounded-[12px] border border-[#6F7271]/60 bg-white px-5 text-left text-[13px] lg:text-[14px] tracking-[-0.54px] text-[#111111] transition-colors",
                            "focus:outline-none focus:border-[#E40714]",
                            className
                        )}
                    >
                        <span className={cn(!value && "text-[#6F7271]")}>
                            {value || placeholder}
                        </span>
                        <span className="flex items-center gap-2 text-[#111111]">
                            <img src="/icon/arrow-down.svg" alt="" />
                        </span>
                    </button>
                </PopoverTrigger>
                <PopoverContent side="bottom" className="p-2">
                    <div className="max-h-64 space-y-1 overflow-y-auto pr-1">
                        {TIME_SLOTS.map((slot) => (
                            <button
                                key={slot}
                                type="button"
                                onClick={() => {
                                    onChange(slot);
                                    setOpen(false);
                                }}
                                className={cn(
                                    "flex w-full items-center rounded-[12px] px-3 py-2.5 text-left text-[14px] font-medium text-[#111111] transition-colors",
                                    value === slot
                                        ? "bg-[#E40714] text-white"
                                        : "hover:bg-[#FFF3F4] hover:text-[#E40714]"
                                )}
                            >
                                {slot}
                            </button>
                        ))}
                    </div>
                </PopoverContent>
            </Popover>
        </>
    );
}
