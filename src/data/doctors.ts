export type Doctor = {
    id: number
    name: string
    specialty: string
    hospital: string
    type: "in-house" | "external"
    image: string
}

const PLACEHOLDER_IMG = "https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603078/dct-1_tdhl11.png"
const Abiodun = "https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603087/dr.abiodun_ekejvw.jpg"
const Audu = "https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603074/dr.audu_pxxbrf.jpg"
const Chioma = "https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603084/dr.chioma_rqml1r.jpg"
const Muyiwa = "https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775603115/dr.muyiwa_kbm5jk.jpg"

export const inHouseDoctors: Doctor[] = [
    {
        id: 1,
        name: "Dr. Abiodun Osibamowo",
        specialty: "Internal Medicine and Medical Director",
        hospital: "Reddington VI",
        type: "in-house",
        image: Abiodun,
    },
    {
        id: 2,
        name: "Dr. John-Ameh Audu",
        specialty: "Neonatologist",
        hospital: "Reddington VI",
        type: "in-house",
        image: Audu,
    },
    {
        id: 3,
        name: "Dr. Muyiwa Fagbohun",
        specialty: "Obstetrician & Gynaecologist",
        hospital: "Reddington VI",
        type: "in-house",
        image: Muyiwa,
    },
    {
        id: 4,
        name: "Dr. Chioma Ojiegbe",
        specialty: "Obstetrician & Gynaecologist",
        hospital: "Reddington VI",
        type: "in-house",
        image: Chioma,
    },
    {
        id: 5,
        name: "Dr. John Afolabi",
        specialty: "Obstetrician & Gynaecologist",
        hospital: "Reddington VI",
        type: "in-house",
        image: PLACEHOLDER_IMG,
    },
    {
        id: 6,
        name: "Dr. Paschal Nwose",
        specialty: "General Surgeon",
        hospital: "Reddington VI",
        type: "in-house",
        image: PLACEHOLDER_IMG,
    },
    {
        id: 7,
        name: "Dr. Funmi Yusuf",
        specialty: "Paediatrician",
        hospital: "Reddington VI",
        type: "in-house",
        image: PLACEHOLDER_IMG,
    },
    {
        id: 8,
        name: "Dr. Latre Bakoshi",
        specialty: "Dental Surgeon",
        hospital: "Reddington VI",
        type: "in-house",
        image: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775663894/DR._LATRE_BAKOSHI_gnyjqk.jpg',
    },
    {
        id: 9,
        name: "Dr. Chinyere Uzoma",
        specialty: "Ophthalmologist",
        hospital: "Reddington VI",
        type: "in-house",
        image: PLACEHOLDER_IMG,
    },
    {
        id: 10,
        name: "Dr. Babajide Lawson ",
        specialty: "Orthopaedic Surgeon",
        hospital: "Reddington VI",
        type: "in-house",
        image: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775664109/DR._BABAJIDE_LAWSON_k7dfeo.jpg',
    },
    {
        id: 11,
        name: "Dr. Tolu Onabowale",
        specialty: "Hematologist",
        hospital: "Reddington VI",
        type: "in-house",
        image: PLACEHOLDER_IMG,
    },
    {
        id: 12,
        name: "Dr. Esther Adejinmi",
        specialty: "Wellness",
        hospital: "Reddington VI",
        type: "in-house",
        image: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775664208/DR._ESTHER_ADEJINMI_fzj7su.jpg',
    },
    {
        id: 13,
        name: "Dr. Williams Idoko",
        specialty: "Emergency Room",
        hospital: "Reddington VI",
        type: "in-house",
        image: PLACEHOLDER_IMG,
    },
    {
        id: 14,
        name: "Dr. Christian Akude",
        specialty: "Family Medicine",
        hospital: "Reddington VI",
        type: "in-house",
        image: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775664415/DR._CHRISTIAN_AKUDE_sv9ixm.jpg',
    },
    {
        id: 15,
        name: "Dr. Olushola Omoyele",
        specialty: "Radiologist",
        hospital: "Reddington VI",
        type: "in-house",
        image: PLACEHOLDER_IMG,
    },
    {
        id: 16,
        name: "Dr. Nzeogwu",
        specialty: "Radiologist",
        hospital: "Reddington VI",
        type: "in-house",
        image: 'https://res.cloudinary.com/dbe6jr3nj/image/upload/q_auto/f_auto/v1775664564/DR._NWACHUKWU_NZEGWU_jejygy.jpg',
    },
]

export const externalDoctors: Doctor[] = [
    {
        id: 1,
        name: "Dr. Seyi Roberts",
        specialty: "Neurologist",
        hospital: "Reddington VI",
        type: "external",
        image: PLACEHOLDER_IMG,
    },
    {
        id: 2,
        name: "Dr. Odunayo Ikueorowo",
        specialty: "Urologist",
        hospital: "Reddington VI",
        type: "external",
        image: PLACEHOLDER_IMG,
    },
    {
        id: 3,
        name: "Prof. Edward jolayemi",
        specialty: "Neurosurgeon",
        hospital: "Reddington VI",
        type: "external",
        image: PLACEHOLDER_IMG,
    },
    {
        id: 4,
        name: "Prof. Olufemi Ojo",
        specialty: "Pulmonologist",
        hospital: "Reddington VI",
        type: "external",
        image: PLACEHOLDER_IMG,
    },
    {
        id: 5,
        name: "Dr. Viola Ikebudu",
        specialty: "Dermatologist",
        hospital: "Reddington VI",
        type: "external",
        image: PLACEHOLDER_IMG,
    },
    {
        id: 6,
        name: "Dr. Adekunle Jimoh",
        specialty: "Family Medicine",
        hospital: "Reddington VI",
        type: "external",
        image: PLACEHOLDER_IMG,
    },
    {
        id: 7,
        name: "Dr. Joy Uchechukwu",
        specialty: "Gastroenterologist",
        hospital: "Reddington VI",
        type: "external",
        image: PLACEHOLDER_IMG,
    },
    {
        id: 8,
        name: "Dr. Busola Quadri",
        specialty: "Psychiatrist",
        hospital: "Reddington VI",
        type: "external",
        image: PLACEHOLDER_IMG,
    },
    {
        id: 9,
        name: "Dr. Olumide Okeowo",
        specialty: "Psychologist",
        hospital: "Reddington VI",
        type: "external",
        image: PLACEHOLDER_IMG,
    },
    {
        id: 10,
        name: "Dr. Florentina Okeke",
        specialty: "Rheumatologist",
        hospital: "Reddington VI",
        type: "external",
        image: PLACEHOLDER_IMG,
    },
    {
        id: 11,
        name: "Dr. Johnbull Bright",
        specialty: "Family Medicine",
        hospital: "Reddington VI",
        type: "external",
        image: PLACEHOLDER_IMG,
    },
    {
        id: 8,
        name: "Dr. Aramide Olasope",
        specialty: "Nephrologist",
        hospital: "Reddington VI",
        type: "external",
        image: PLACEHOLDER_IMG,
    },
]
