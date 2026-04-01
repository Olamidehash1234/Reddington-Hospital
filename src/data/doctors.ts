export type Doctor = {
    id: number
    name: string
    specialty: string
    hospital: string
    type: "in-house" | "external"
    image: string
}

const PLACEHOLDER_IMG = "/image/home/doctor/dct-1.png"

export const inHouseDoctors: Doctor[] = [
    {
        id: 1,
        name: "Dr. Abiodun Osibamowo",
        specialty: "Internal Medicine and Medical Director",
        hospital: "Reddington VI",
        type: "in-house",
        image: PLACEHOLDER_IMG,
    },
    {
        id: 2,
        name: "Dr. John Afolabi",
        specialty: "Obstetrician & Gynaecologist",
        hospital: "Reddington VI",
        type: "in-house",
        image: PLACEHOLDER_IMG,
    },
    {
        id: 3,
        name: "Dr. Muyiwa Fagbohun",
        specialty: "Obstetrician & Gynaecologist",
        hospital: "Reddington VI",
        type: "in-house",
        image: PLACEHOLDER_IMG,
    },
    {
        id: 4,
        name: "Dr. Choma Olieigbe",
        specialty: "Obstetrician & Gynaecologist",
        hospital: "Reddington VI",
        type: "in-house",
        image: PLACEHOLDER_IMG,
    },
]

export const externalDoctors: Doctor[] = [
    {
        id: 5,
        name: "Dr. Olusesan Onabowale",
        specialty: "Medical Director of The Heritage Hospital",
        hospital: "Heritage Hospital",
        type: "external",
        image: PLACEHOLDER_IMG,
    },
    {
        id: 6,
        name: "Dr. Seun Adeyemi",
        specialty: "Cardiothoracic Surgeon",
        hospital: "St. Mary's Medical Centre",
        type: "external",
        image: PLACEHOLDER_IMG,
    },
    {
        id: 7,
        name: "Dr. Folashade Okafor",
        specialty: "Pediatrician",
        hospital: "Children's Medical Centre",
        type: "external",
        image: PLACEHOLDER_IMG,
    },
    {
        id: 8,
        name: "Dr. Emeka Ucheagwu",
        specialty: "Orthopaedic Surgeon",
        hospital: "Ortho Care Hospital",
        type: "external",
        image: PLACEHOLDER_IMG,
    },
]
