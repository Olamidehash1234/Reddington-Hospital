import { useEffect, useMemo, useRef, useState } from "react";

export type DropdownOption = { value: string; label: string };

interface DropdownProps {
    id: string;
    name: string;
    placeholder: string;
    options: DropdownOption[];
}

export default function Dropdown(props: DropdownProps) {
    const { id, name, placeholder, options } = props;
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const listRef = useRef<HTMLDivElement | null>(null);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<string>("");
    const [activeIndex, setActiveIndex] = useState(0);

    const selectedLabel = useMemo(() => {
        const found = options.find((o) => o.value === value);
        return found?.label ?? "";
    }, [options, value]);

    useEffect(() => {
        if (!open) return;

        const onPointerDown = (e: PointerEvent) => {
            const target = e.target as Node | null;
            if (!target) return;
            if (buttonRef.current?.contains(target)) return;
            if (listRef.current?.contains(target)) return;
            setOpen(false);
        };

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                e.preventDefault();
                setOpen(false);
                buttonRef.current?.focus();
            }
        };

        window.addEventListener("pointerdown", onPointerDown);
        window.addEventListener("keydown", onKeyDown);
        return () => {
            window.removeEventListener("pointerdown", onPointerDown);
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [open]);

    useEffect(() => {
        if (!open) return;
        const selectedIndex = Math.max(
            0,
            options.findIndex((o) => o.value === value)
        );
        setActiveIndex(selectedIndex === -1 ? 0 : selectedIndex);
    }, [open, options, value]);

    const commitValue = (next: string) => {
        setValue(next);
        setOpen(false);
        queueMicrotask(() => buttonRef.current?.focus());
    };

    return (
        <div className="relative">
            <input type="hidden" name={name} value={value} />
            <button
                ref={buttonRef}
                id={id}
                type="button"
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-controls={`${id}-listbox`}
                className="h-[50px] w-full rounded-[12px] border border-[#6F7271]/60 bg-white px-5 pr-12 text-left text-[13px] lg:text-[14px] tracking-[-0.54px] text-[#111] focus:outline-none focus:border-[#E40714]"
                onClick={() => setOpen((v) => !v)}
                onKeyDown={(e) => {
                    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setOpen(true);
                    }
                }}
            >
                <span className={selectedLabel ? "text-[#111]" : "text-[#6F7271]"}>
                    {selectedLabel || placeholder}
                </span>
                <img src="/icon/arrow-down.svg" className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#111]" />
            </button>

            {open ? (
                <div
                    ref={listRef}
                    id={`${id}-listbox`}
                    role="listbox"
                    aria-labelledby={id}
                    tabIndex={-1}
                    className="absolute z-20 mt-2 max-h-64 w-full overflow-auto rounded-[12px] border border-[#6F7271]/40 bg-white py-1 shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
                    onKeyDown={(e) => {
                        if (e.key === "ArrowDown") {
                            e.preventDefault();
                            setActiveIndex((i) => Math.min(options.length - 1, i + 1));
                        } else if (e.key === "ArrowUp") {
                            e.preventDefault();
                            setActiveIndex((i) => Math.max(0, i - 1));
                        } else if (e.key === "Home") {
                            e.preventDefault();
                            setActiveIndex(0);
                        } else if (e.key === "End") {
                            e.preventDefault();
                            setActiveIndex(options.length - 1);
                        } else if (e.key === "Enter") {
                            e.preventDefault();
                            const opt = options[activeIndex];
                            if (opt) commitValue(opt.value);
                        }
                    }}
                >
                    {options.map((opt, idx) => {
                        const isSelected = opt.value === value;
                        const isActive = idx === activeIndex;
                        return (
                            <div
                                key={opt.value}
                                role="option"
                                aria-selected={isSelected}
                                className={[
                                    "cursor-pointer px-4 py-2 text-[14px] tracking-[-0.54px]",
                                    isActive ? "bg-[#E40714] text-[#FFFF]" : "bg-white",
                                    isSelected ? "text-[#E40714]" : "text-[#111]",
                                ].join(" ")}
                                onMouseEnter={() => setActiveIndex(idx)}
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() => commitValue(opt.value)}
                            >
                                {opt.label}
                            </div>
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
}
