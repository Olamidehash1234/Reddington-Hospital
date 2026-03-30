import { branches } from "../../../data/branches"
import { useParams } from "react-router-dom"
import { branchNameToSlug } from "../../../utils/slugify"

export default function BranchContact() {
    const { name } = useParams<{ name: string }>()
    const branch = branches.find((b) => branchNameToSlug(b.name) === name)

    return (
        <section className="bg-[#F9F9F9] px-[16px] py-[40px] lg:py-[60px] lg:px-[80px]">
            <div className="">
                <div className="relative h-[300px] lg:h-full rounded-[12px]">
                    <img src="/icon/illustrations/contact-frame.svg" alt="mission Frame" className="relative w-full h-full object-cover" />

                    <div className="absolute left-[50px] top-[40px]">
                        <h1 className="text-[#FFFFFF] text-[22px] lg:text-[24px] leading-normal" style={{ fontFamily: "TexGyreAdventor" }}>
                            Contact Information
                        </h1>
                    </div>

                    <div className="absolute left-[50px] right-[50px] top-[95px] grid grid-cols-1 lg:grid-cols-3 gap-[20px] lg:gap-[100px]">
                        <div className="flex max-w-[295px] text-[#FFFFFF]">
                            <p className="text-[13px] lg:text-[15px] font-medium leading-[22px] lg:leading-[24px]">Address: {branch?.address}</p>
                        </div>

                        <div className="flex flex-col gap-[8px] text-[#FFFFFF]">
                            <p className="text-[13px] lg:text-[15px] font-medium leading-[22px] lg:leading-[24px]">
                                Email: {branch?.emails && branch.emails.map((email, index) => (
                                    <span key={index}>
                                        <a href={`mailto:${email}`} className="hover:underline">{email}</a>
                                        {index < branch.emails!.length - 1 && ", "}
                                    </span>
                                ))}
                            </p>
                        </div>

                        <div className="flex flex-col gap-[18px]">
                            <div className="flex flex-col gap-[8px] text-[#FFFFFF]">
                                <p className="text-[13px] lg:text-[15px] font-medium leading-[22px] lg:leading-[24px]">
                                    Contact: {branch?.contact && branch.contact.map((phone, index) => (
                                        <span key={index}>
                                            <a href={`tel:${phone}`} className="hover:underline">{phone}</a>
                                            {index < branch.contact!.length - 1 && ", "}
                                        </span>
                                    ))}
                                </p>
                            </div>
                            {branch?.emergency && (
                                <div className="flex flex-col gap-[8px] text-[#FFFFFF]">
                                    <p className="text-[13px] lg:text-[15px] font-medium leading-[22px] lg:leading-[24px]">
                                        Emergencies: <a href={`tel:${branch.emergency}`} className="hover:underline">{branch.emergency}</a>
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}