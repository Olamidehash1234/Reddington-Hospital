import { useId, useState, useEffect } from "react";
import Dropdown from "../../components/Dropdown";
import DatePicker from "../../components/ui/date-picker";
import TimePicker from "../../components/ui/time-picker";

export default function Contactform() {
    const id = useId();
    const [preferredDate, setPreferredDate] = useState<Date | undefined>();
    const [preferredTime, setPreferredTime] = useState<string>();

    useEffect(() => {
        if (window.location.hash === "#contact-form") {
            const element = document.getElementById("contact-form");
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
            }
        }
    }, []);

    return (
        <section id="contact-form" className="bg-[#F9F9F9] px-[16px] py-[40px] lg:py-[80px] lg:px-[80px]">
            <div className="">
                <div className="overflow-hidden rounded-[20px] bg-[#E40714] px-4 pb-12 pt-10 lg:pt-[50px] lg:px-0">
                    <div className="text-center text-white">
                        <h2
                            className="text-[24px] font-semibold leading-normal lg:text-[32px]"
                            style={{ fontFamily: "TexGyreAdventor" }}
                        >
                            Schedule Your Visit Today
                        </h2>
                        <p className="mx-auto mt-3 max-w-[603px] text-[12px] lg:text-[14px] font-semibold leading-[19px] text-[#FFFFFF]">
                            Fill out the form and our team will get back to you within 24
                            hours to confirm your appointment. For emergencies, please call
                            our 24/7 hotline immediately.
                        </p>
                    </div>

                    <div className="mx-auto mt-10 w-full max-w-[938px] rounded-[12px] bg-white p-6 sm:p-8 lg:p-10">
                        <form className="grid grid-cols-1 gap-x-6 gap-y-[10px] lg:gap-y-5 md:grid-cols-2">
                            <div>
                                <label htmlFor={`${id}-fullName`} className="sr-only">
                                    Full name
                                </label>
                                <input
                                    id={`${id}-fullName`}
                                    name="fullName"
                                    placeholder="Full name"
                                    className="h-[50px] w-full rounded-[12px] border border-[#6F7271]/60 px-5 text-[13px] lg:text-[14px] tracking-[-0.54px] text-[#111] placeholder:text-[#6F7271] focus:outline-none focus:border-[#E40714]"
                                    type="text"
                                    autoComplete="name"
                                />
                            </div>

                            <div>
                                <label htmlFor={`${id}-email`} className="sr-only">
                                    Email Address
                                </label>
                                <input
                                    id={`${id}-email`}
                                    name="email"
                                    placeholder="Email Address"
                                    className="h-[50px] w-full rounded-[12px] border border-[#6F7271]/60 px-5 text-[13px] lg:text-[14px] tracking-[-0.54px] text-[#111] placeholder:text-[#6F7271] focus:outline-none focus:border-[#E40714]"
                                    type="email"
                                    autoComplete="email"
                                />
                            </div>

                            <div>
                                <label htmlFor={`${id}-phone`} className="sr-only">
                                    Phone Number
                                </label>
                                <input
                                    id={`${id}-phone`}
                                    name="phone"
                                    placeholder="Phone Number"
                                    className="h-[50px] w-full rounded-[12px] border border-[#6F7271]/60 px-5 text-[13px] lg:text-[14px] tracking-[-0.54px] text-[#111] placeholder:text-[#6F7271] focus:outline-none focus:border-[#E40714]"
                                    type="tel"
                                    autoComplete="tel"
                                />
                            </div>

                            <div className="relative">
                                <label htmlFor={`${id}-preferredDate`} className="sr-only">
                                    Preferred Date
                                </label>
                                <DatePicker
                                    id={`${id}-preferredDate`}
                                    name="preferredDate"
                                    placeholder="Preferred Date"
                                    value={preferredDate}
                                    onChange={setPreferredDate}
                                />
                            </div>

                            <div>
                                <label htmlFor={`${id}-preferredTime`} className="sr-only">
                                    Preferred Time
                                </label>
                                <TimePicker
                                    id={`${id}-preferredTime`}
                                    name="preferredTime"
                                    placeholder="Preferred Time"
                                    value={preferredTime}
                                    onChange={setPreferredTime}
                                />
                            </div>

                            <div className="relative">
                                <label htmlFor={`${id}-gender`} className="sr-only">
                                    Select Gender
                                </label>
                                <Dropdown
                                    id={`${id}-gender`}
                                    name="gender"
                                    placeholder="Select Gender"
                                    options={[
                                        { value: "female", label: "Female" },
                                        { value: "male", label: "Male" },
                                        { value: "other", label: "Other" },
                                        { value: "prefer_not_to_say", label: "Prefer not to say" },
                                    ]}
                                />
                            </div>

                            <div className="relative">
                                <label htmlFor={`${id}-service`} className="sr-only">
                                    Select Service/Department
                                </label>
                                <Dropdown
                                    id={`${id}-service`}
                                    name="service"
                                    placeholder="Select Service/Department"
                                    options={[
                                        { value: "general", label: "General Consultation" },
                                        { value: "pediatrics", label: "Pediatrics" },
                                        { value: "cardiology", label: "Cardiology" },
                                        { value: "laboratory", label: "Laboratory" },
                                    ]}
                                />
                            </div>

                            <div className="relative">
                                <label htmlFor={`${id}-branch`} className="sr-only">
                                    Select Branch
                                </label>
                                <Dropdown
                                    id={`${id}-branch`}
                                    name="branch"
                                    placeholder="Select Branch"
                                    options={[
                                        { value: "multi-specialist-vi", label: "Reddington Multi-Specialist Hospital V.I" },
                                        { value: "ikeja", label: "Reddington Hospital Ikeja" },
                                        { value: "lekki", label: "Reddington Care Hospital Lekki" },
                                        { value: "maxy", label: "Reddington Maxy Super-Specialty Centre" },
                                        { value: "purple-ray", label: "Purple Ray Diagnostic Centre" },
                                        { value: "breast-gynae", label: "Reddington Breast & Gynaecology Centre" },
                                        { value: "davidson", label: "Davidson Surgical & Critical Care Centre" },
                                        { value: "bodycare", label: "The BodyCare Plastic Surgery Centre" },
                                        { value: "wellness", label: "Reddington Wellness & Medical Check-Up Centre" },
                                    ]}
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label htmlFor={`${id}-message`} className="sr-only">
                                    Describe your symptoms or reason for visit
                                </label>
                                <textarea
                                    id={`${id}-message`}
                                    name="message"
                                    placeholder="Describe your symptoms or reason for visit"
                                    className="h-[184px] w-full resize-none rounded-[12px] border border-[#6F7271]/60 px-5 py-5 text-[14px] tracking-[-0.54px] text-[#111] placeholder:text-[#6F7271] focus:outline-none focus:border-[#E40714]"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <button
                                    type="submit"
                                    className="h-[50px] w-full rounded-[12px] bg-[#E40714] px-6 text-[13px] lg:text-[14px] font-semibold text-white transition-opacity hover:opacity-95 focus:outline-none"
                                >
                                    Book Appointment
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
