import emailjs from "@emailjs/browser";
import { branchOptions, departmentOptions, genderOptions } from "./formOptions";

type EmailJSConfig = {
    serviceId: string;
    templateId: string;
    publicKey: string;
};

export class EmailJSConfigurationError extends Error {
    constructor() {
        super("EmailJS environment variables are not configured.");
        this.name = "EmailJSConfigurationError";
    }
}

function getEmailJSConfig(): EmailJSConfig {
    const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } = import.meta.env;

    if (!VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_TEMPLATE_ID || !VITE_EMAILJS_PUBLIC_KEY) {
        throw new EmailJSConfigurationError();
    }

    return {
        serviceId: VITE_EMAILJS_SERVICE_ID,
        templateId: VITE_EMAILJS_TEMPLATE_ID,
        publicKey: VITE_EMAILJS_PUBLIC_KEY,
    };
}

function getFormValue(formData: FormData, name: string): string {
    return formData.get(name)?.toString() ?? "";
}

function getOptionLabel<T extends { value: string; label: string }>(options: T[], value: string): string {
    return options.find((option) => option.value === value)?.label ?? value;
}

export function createAppointmentTemplateParams(formData: FormData) {
    const gender = getFormValue(formData, "gender");
    const service = getFormValue(formData, "service");
    const branch = getFormValue(formData, "branch");

    return {
        fullName: getFormValue(formData, "fullName"),
        email: getFormValue(formData, "email"),
        phone: getFormValue(formData, "phone"),
        patientNumber: getFormValue(formData, "patientNumber"),
        gender: getOptionLabel(genderOptions, gender),
        service: getOptionLabel(departmentOptions, service),
        branch: getOptionLabel(branchOptions, branch),
        message: getFormValue(formData, "message"),
        preferredDate1: getFormValue(formData, "preferredDate1"),
        preferredTime1: getFormValue(formData, "preferredTime1"),
        preferredDate2: getFormValue(formData, "preferredDate2"),
        preferredTime2: getFormValue(formData, "preferredTime2"),
        preferredDate3: getFormValue(formData, "preferredDate3"),
        preferredTime3: getFormValue(formData, "preferredTime3"),
    };
}

export async function sendAppointmentRequest(formData: FormData): Promise<void> {
    const config = getEmailJSConfig();
    const templateParams = createAppointmentTemplateParams(formData);

    await emailjs.send(config.serviceId, config.templateId, templateParams, {
        publicKey: config.publicKey,
    });
}