import { useState } from "react";
import { format } from "date-fns";

import Calendar from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { cn } from "../../utils/cn";

type DatePickerProps = {
    id: string;
    name: string;
    value?: Date;
    onChange: (date: Date | undefined) => void;
    placeholder?: string;
    className?: string;
};

export default function DatePicker({
    id,
    name,
    value,
    onChange,
    placeholder = "Preferred Date",
    className,
}: DatePickerProps) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <input
                type="hidden"
                name={name}
                value={value ? format(value, "yyyy-MM-dd") : ""}
            />
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
                            {value ? format(value, "MMM dd, yyyy") : placeholder}
                        </span>
                        <span className="flex items-center gap-2 text-[#111111]">
                            <img src="/icon/arrow-down.svg" alt="" />
                        </span>
                    </button>
                </PopoverTrigger>
                <PopoverContent side="bottom" className="w-auto p-3">
                    <Calendar
                        mode="single"
                        selected={value}
                        onSelect={(date) => {
                            onChange(date);
                            setOpen(false);
                        }}
                        disabled={{ before: new Date() }}
                    />
                </PopoverContent>
            </Popover>
        </>
    );
}
