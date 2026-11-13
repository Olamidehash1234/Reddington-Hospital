import { useId, useState, useEffect, useCallback, type FormEvent } from "react";
import { useLocation } from "react-router-dom";
import Dropdown from "../../components/Dropdown";
import DatePicker from "../../components/ui/date-picker";
import TimePicker from "../../components/ui/time-picker";
import Toast from "../../components/Toast";
import { EmailJSConfigurationError, sendAppointmentRequest } from "./appointmentEmail";
import { branchOptions, departmentOptions, genderOptions } from "./formOptions";

export default function Contactform() {
    const id = useId();
    const location = useLocation();
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [appointmentOptions, setAppointmentOptions] = useState(
        Array.from({ length: 3 }, () => ({ date: undefined as Date | undefined, time: "" }))
    );
    const [scheduleError, setScheduleError] = useState(false);

    const updateAppointmentOption = (index: number, updates: Partial<(typeof appointmentOptions)[number]>) => {
        const nextOptions = appointmentOptions.map((option, optionIndex) =>
            optionIndex === index ? { ...option, ...updates } : option
        );
        setAppointmentOptions(nextOptions);
        setScheduleError(nextOptions.some((option) => !option.date || !option.time));
    };

    const hideToast = useCallback(() => setToastMessage(""), []);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        hideToast();

        const missingOption = appointmentOptions.findIndex((option) => !option.date || !option.time);
        if (missingOption !== -1) {
            setScheduleError(true);
            setToastMessage("Please choose a date and time for each of the three appointment options.");
            document.getElementById(`${id}-preferredDate${missingOption + 1}`)?.focus();
            return;
        }

        const formData = new FormData(event.currentTarget);
        const getValue = (name: string) => formData.get(name)?.toString() ?? "";
        const missingDropdown = [
            { name: "gender", label: "gender" },
            { name: "service", label: "service or department" },
            { name: "branch", label: "preferred branch" },
        ].find((field) => !getValue(field.name));

        if (missingDropdown) {
            setToastMessage(`Please select a ${missingDropdown.label} before sending your appointment request.`);
            document.getElementById(`${id}-${missingDropdown.name}`)?.focus();
            return;
        }

        setIsSubmitting(true);
        try {
            await sendAppointmentRequest(formData);
            setSubmitted(true);
        } catch (error) {
            setToastMessage(
                error instanceof EmailJSConfigurationError
                    ? "We can’t accept appointment requests right now. Please call your preferred branch to book."
                    : "Your request couldn’t be sent. Please try again, or call your preferred branch to book."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        if (window.location.hash === "#contact-form") {
            const element = document.getElementById("contact-form");
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
            }
        }
    }, [location.hash, location.pathname]);

    useEffect(() => {
        if (!submitted) return;

        const timeoutId = window.setTimeout(() => {
            setAppointmentOptions(
                Array.from({ length: 3 }, () => ({ date: undefined as Date | undefined, time: "" }))
            );
            setScheduleError(false);
            setSubmitted(false);
        }, 5000);

        return () => window.clearTimeout(timeoutId);
    }, [submitted]);

    return (
        <section id="contact-form" className="bg-[#F9F9F9] px-[16px] py-[40px] lg:py-[80px] lg:px-[80px]">
            <Toast message={toastMessage} type="error" show={Boolean(toastMessage)} onHide={hideToast} />
            <div className="">
                <div className="overflow-hidden rounded-[20px] bg-[#E40714] px-4 pb-12 pt-10 lg:pt-[50px] lg:px-0">
                    <div className="text-center text-white">
                        <h2
                            className="text-[24px] font-semibold leading-normal lg:text-[32px]"
                            style={{ fontFamily: "TexGyreAdventor" }}
                        >
                            Schedule Your Visit Today
                        </h2>
                        <p className="mx-auto mt-3 max-w-[760px] text-[15px] lg:text-[16px] leading-[23px] text-[#FFFFFF]">
                            Please fill the form below or call the numbers attached to each branch above to book an appointment.
                        </p>
                    </div>

                    <div className="mx-auto mt-10 w-full max-w-[938px] rounded-[12px] bg-white p-6 sm:p-8 lg:p-10">
                        {submitted ? (
                            <div role="status" className="py-10 text-center text-[#111]">
                                <h3 className="text-[22px] font-semibold">Appointment preferences received</h3>
                                <p className="mx-auto mt-4 max-w-[680px] text-[16px] leading-7">
                                    Thank you very much for sending in your appointment preferences. A member of our team will reach out to you to confirm your appointment within 24 hours
                                </p>
                                <p className="mt-4 text-[14px] text-[#4B4B4B]">
                                    This form will reset in 5 seconds.
                                </p>
                            </div>
                        ) : (
                        <form
                            className="grid grid-cols-1 gap-x-6 gap-y-[10px] lg:gap-y-5 md:grid-cols-2"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label htmlFor={`${id}-fullName`} className="mb-2 block text-[14px] font-medium text-[#2D2D2D]">
                                    Full name <span className="text-[#E40714]">*</span>
                                </label>
                                <input
                                    id={`${id}-fullName`}
                                    name="fullName"
                                    placeholder="e.g. Ada Okafor"
                                    className="h-[50px] w-full rounded-[12px] border border-[#6F7271]/60 px-5 text-[16px] text-[#111] placeholder:text-[#6F7271] focus:outline-none focus:border-[#E40714]"
                                    type="text"
                                    autoComplete="name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor={`${id}-email`} className="mb-2 block text-[14px] font-medium text-[#2D2D2D]">
                                    Email address <span className="text-[#E40714]">*</span>
                                </label>
                                <input
                                    id={`${id}-email`}
                                    name="email"
                                    placeholder="e.g. ada@example.com"
                                    className="h-[50px] w-full rounded-[12px] border border-[#6F7271]/60 px-5 text-[16px] text-[#111] placeholder:text-[#6F7271] focus:outline-none focus:border-[#E40714]"
                                    type="email"
                                    autoComplete="email"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor={`${id}-phone`} className="mb-2 block text-[14px] font-medium text-[#2D2D2D]">
                                    Phone number <span className="text-[#E40714]">*</span>
                                </label>
                                <input
                                    id={`${id}-phone`}
                                    name="phone"
                                    placeholder="e.g. +234 801 234 5678"
                                    className="h-[50px] w-full rounded-[12px] border border-[#6F7271]/60 px-5 text-[16px] text-[#111] placeholder:text-[#6F7271] focus:outline-none focus:border-[#E40714]"
                                    type="tel"
                                    autoComplete="tel"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor={`${id}-patientNumber`} className="mb-2 block text-[14px] font-medium text-[#2D2D2D]">
                                    Patient number (optional)
                                </label>
                                <input
                                    id={`${id}-patientNumber`}
                                    name="patientNumber"
                                    placeholder="e.g. RH-012345"
                                    className="h-[50px] w-full rounded-[12px] border border-[#6F7271]/60 px-5 text-[16px] text-[#111] placeholder:text-[#6F7271] focus:outline-none focus:border-[#E40714]"
                                    type="text"
                                />
                            </div>

                            {[1, 2, 3].map((option) => (
                                <fieldset key={option} className="grid grid-cols-1 gap-3 md:col-span-2 md:grid-cols-2">
                                    <legend className="mb-3 text-[16px] text-[#111]">
                                        Preferred appointment option {option} <span className="text-[#E40714]">*</span>
                                    </legend>
                                    <div className="space-y-2">
                                        <label htmlFor={`${id}-preferredDate${option}`} className="block text-[14px] font-medium text-[#2D2D2D]">
                                            Preferred date <span className="text-[#E40714]">*</span>
                                        </label>
                                        <DatePicker
                                            id={`${id}-preferredDate${option}`}
                                            name={`preferredDate${option}`}
                                            placeholder="Choose a date"
                                            value={appointmentOptions[option - 1].date}
                                            onChange={(date) => updateAppointmentOption(option - 1, { date })}
                                            required
                                            invalid={scheduleError && !appointmentOptions[option - 1].date}
                                            className="!text-[16px]"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor={`${id}-preferredTime${option}`} className="block text-[14px] font-medium text-[#2D2D2D]">
                                            Preferred time <span className="text-[#E40714]">*</span>
                                        </label>
                                        <TimePicker
                                            id={`${id}-preferredTime${option}`}
                                            name={`preferredTime${option}`}
                                            placeholder="Choose a time"
                                            value={appointmentOptions[option - 1].time}
                                            onChange={(time) => updateAppointmentOption(option - 1, { time })}
                                            required
                                            invalid={scheduleError && !appointmentOptions[option - 1].time}
                                            className="!text-[16px]"
                                        />
                                    </div>
                                </fieldset>
                            ))}
                            <div className="relative">
                                <label htmlFor={`${id}-gender`} className="mb-2 block text-[14px] font-medium text-[#2D2D2D]">
                                    Gender <span className="text-[#E40714]">*</span>
                                </label>
                                <Dropdown
                                    id={`${id}-gender`}
                                    name="gender"
                                    placeholder="Choose an option"
                                    options={genderOptions}
                                    required
                                />
                            </div>

                            <div className="relative">
                                <label htmlFor={`${id}-service`} className="mb-2 block text-[14px] font-medium text-[#2D2D2D]">
                                    Service or department <span className="text-[#E40714]">*</span>
                                </label>
                                <Dropdown
                                    id={`${id}-service`}
                                    name="service"
                                    placeholder="Choose a department"
                                    options={departmentOptions}
                                    required
                                />
                            </div>

                            <div className="relative">
                                <label htmlFor={`${id}-branch`} className="mb-2 block text-[14px] font-medium text-[#2D2D2D]">
                                    Preferred branch <span className="text-[#E40714]">*</span>
                                </label>
                                <Dropdown
                                    id={`${id}-branch`}
                                    name="branch"
                                    placeholder="Choose a branch"
                                    options={branchOptions}
                                    required
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label htmlFor={`${id}-message`} className="mb-2 block text-[14px] font-medium text-[#2D2D2D]">
                                    Reason for visit <span className="text-[#E40714]">*</span>
                                </label>
                                <textarea
                                    id={`${id}-message`}
                                    name="message"
                                    placeholder="e.g. Follow-up consultation for knee pain"
                                    className="h-[184px] w-full resize-none rounded-[12px] border border-[#6F7271]/60 px-5 py-5 text-[16px] text-[#111] placeholder:text-[#6F7271] focus:outline-none focus:border-[#E40714]"
                                    required
                                />
                            </div>

                            <div className="md:col-span-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="h-[50px] w-full rounded-[12px] bg-[#E40714] px-6 text-[16px] font-semibold text-white transition-opacity hover:opacity-95 focus:outline-none disabled:cursor-wait disabled:opacity-70"
                                >
                                    {isSubmitting ? "Sending request..." : "Book Appointment"}
                                </button>
                            </div>
                        </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
