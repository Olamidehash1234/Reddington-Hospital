import { services } from "../../data/services";

const visitingSpecialties = [
    "Urology",
    "Endocrinology",
    "Psychiatry",
    "Clinical Psychology",
    "Dermatology",
    "Rheumatology",
    "Pulmonology",
    "Haematology",
];

export const departmentOptions = [
    ...services.map((service) => ({
        value: service.title.toLowerCase().replace(/\s+/g, "-"),
        label: service.title,
    })),
    ...visitingSpecialties.map((name) => ({
        value: name.toLowerCase().replace(/\s+/g, "-"),
        label: name,
    })),
];

export const genderOptions = [
    { value: "female", label: "Female" },
    { value: "male", label: "Male" },
    { value: "other", label: "Other" },
    { value: "prefer_not_to_say", label: "Prefer not to say" },
];

export const branchOptions = [
    { value: "multi-specialist-vi", label: "Reddington Multi-Specialist Hospital V.I" },
    { value: "ikeja", label: "Reddington Hospital Ikeja" },
    { value: "lekki", label: "Reddington Care Hospital Lekki" },
    { value: "maxy", label: "Reddington Maxy Super-Specialty Centre" },
    { value: "purple-ray", label: "Purple Ray Diagnostic Centre" },
    { value: "breast-gynae", label: "Reddington Breast and Gynaecology Centre" },
    { value: "davidson", label: "Davidson Surgical and Critical Care Centre" },
    { value: "bodycare", label: "The BodyCare Plastic Surgery Centre" },
    { value: "wellness", label: "Reddington Wellness and Medical Check-Up Centre" },
];