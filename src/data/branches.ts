export type Service = {
    name: string
    image: string
    description?: string | string[]
    fullDescription?: string
}

export type Doctor = {
    id: number
    name: string
    specialization: string
    image: string
}

export type Branch = {
    id: number
    name: string
    location: string
    address: string
    description: string
    fullDescription: string
    image: string
    Heroimage?: string
    services: Service[]
    doctors: Doctor[]
    servicesDescription?: string
    emails?: string[]
    contact?: string[]
    emergency?: string
}

const PLACEHOLDER_IMG = "/image/branches/placeholder.png"
const Heroimage = "/image/branches/hero.png"
const FamilyMedicine = "/image/branches/medicine.png"
const EmergencyCare = "/image/branches/emergency.png"
const CATHLAB = "/image/branches/cathlab.png"
const Diagnostic = "/image/branches/diagnostic.png"
const MSL = "/image/branches/msl.png"
const Intensive = "/image/branches/intensive.png"
const Urgent = "/image/branches/urgent.png"
const coronary = "/image/branches/coronary.png"
const Operating = "/image/branches/operating.png"
const SERVICE_PLACEHOLDER = "/image/services/placeholder.png"
const DOCTOR_IMG = "/image/home/doctor/dct-1.png"
const Pharmacy = "/image/branches/Pharmacy.png"
const Dental = "/image/branches/dental.png"
const Blog = "/image/home/blog/heart.png"

export const branches: Branch[] = [
    {
        id: 1,
        name: "Reddington Multi-Specialist Hospital Victoria Island",
        location: "12a Idowu Martins Street, Victoria Island, Lagos",
        address: "12a Idowu Martins Street, Victoria Island, Lagos",
        description: "Our flagship hospital and the heart of the Reddington Healthcare Group, this multi-specialist..",
        fullDescription: "Our flagship hospital and the heart of the Reddington Hospital Group, this multi-specialist tertiary facility has set the standard for private healthcare in Nigeria since 2006. It serves as the hub for our most complex medical and surgical cases, bringing together an unparalleled team of consultants and cutting-edge technology under one roof.",
        image: PLACEHOLDER_IMG,
        services: [
            { name: "Family Medicine", image: FamilyMedicine },
            { name: "24-hour Emergency Care", image: EmergencyCare },
            { name: "Cardiac Catheterisation Laboratory (CATH LAB)", image: CATHLAB },
            { name: "Full Diagnostic and Imaging Services", image: Diagnostic },
            { name: "Medical Science Laboratory", image: MSL },
            { name: "Primary and Urgent Care", image: Urgent },
            { name: "Intensive Care Unit", image: Intensive },
            { name: "Coronary Care Unit", image: coronary },
            { name: "Operating Theatres", image: Operating },
        ],
        doctors: [
            { id: 1, name: "Dr. Abiodun Osibamowo", specialization: "Medical Director", image: DOCTOR_IMG },
            { id: 2, name: "DR. LAWSON BABAJIDE", specialization: "CONSULTANT ORTHO SURG", image: DOCTOR_IMG },
            { id: 3, name: "DR. OMOYELE OLUSOLA", specialization: "CONSULTANT RADIOLOGIST", image: DOCTOR_IMG },
            { id: 4, name: "DR. JIMOH ADEKUNLE", specialization: "CONSULTANT FAMILY PHYSICIAN", image: DOCTOR_IMG },
            { id: 5, name: "DR. OKUNEYE TAOFEEK", specialization: "CONSULTANT FAMILY PHYSICIAN", image: DOCTOR_IMG },
            { id: 6, name: "DR. OSHUN JOY", specialization: "CARDIOLOGY CONSULTANT", image: DOCTOR_IMG },
            { id: 7, name: "DR. NWOSE PASCHAL", specialization: "CONSULTANT GENERAL SURGEON", image: DOCTOR_IMG },
            { id: 8, name: "DR. ALAWODE ADENIYI", specialization: "CONSULTANT INTENSIVIST/ANAESTHESIA", image: DOCTOR_IMG },
            { id: 9, name: "Dr. Jimoh Aderounle", specialization: "Consultant Family Physician", image: DOCTOR_IMG },
        ],
        servicesDescription: "Multi and Sub-Specialty care across all disciplines",
        emails: ["customerservices@reddingtonhospital.com", "info@reddingtonhospital.com"],
        contact: ["0201-2715346-8", "0201-2715340", "0916 535 9769"],
        emergency: "0201-2715344",
        Heroimage: Heroimage
    },
    {
        id: 2,
        name: "Reddington Hospital Ikeja",
        location: "39 Isaac John Street, Ikeja GRA, Lagos",
        address: "39 Isaac John Street, Ikeja GRA, Lagos",
        description: "For nearly two decades, Reddington Hospital Ikeja has served as a trusted healthcare partner to com...",
        fullDescription: "For nearly two decades, Reddington Hospital Ikeja has served as a trusted healthcare partner to communities across the Lagos mainland. This one-stop multi-specialist facility brings together experienced consultants, comprehensive diagnostic capabilities, and emergency care in a convenient location, ensuring mainland residents have access to the same quality care our group is renowned for.",
        image: PLACEHOLDER_IMG,
        services: [
            { name: "Family Medicine", image: FamilyMedicine },
            { name: "24-hour Emergency Care", image: EmergencyCare },
            { name: "Full Diagnostic Services", image: Diagnostic },
            { name: "Outpatient Clinics", image: Urgent },
            { name: "Pharmacy", image: Pharmacy },
            { name: "Maternity Services", image: coronary },
            { name: "Laboratory Services", image: MSL },
            { name: "Surgery", image: Operating },
            { name: "Paediatrics", image: Urgent },
            { name: "Cardiology Care", image: Pharmacy },
        ],
        doctors: [
            { id: 5, name: "DR. OLUFISAYO BALOGUN", specialization: "CONSULTANT O&G /MEDICAL DIRECTOR", image: DOCTOR_IMG },
            { id: 6, name: "DR. VALENTINE OKWARA", specialization: "CONSULTANT O&G", image: DOCTOR_IMG },
            { id: 7, name: "DR. TAFA OSUNLAJA", specialization: "CONSULTANT ANASTHETIST", image: DOCTOR_IMG },
            { id: 8, name: "DR. EYITAYO OLONADE", specialization: "CONSULTANT PAEDIATRICIAN", image: DOCTOR_IMG },
            { id: 9, name: "DR. EMMANUEL CHUKWURAH", specialization: "CONSULTANT PAEDIATRICIAN", image: DOCTOR_IMG },
            { id: 10, name: "DR. KENNETH OCHULOR", specialization: "CONSULTANT CARDIOLOGIST", image: DOCTOR_IMG },
            { id: 10, name: "DR. DORKA DORA BEKEE", specialization: "CONSULTANT PAEDIATRICIAN", image: DOCTOR_IMG },
            { id: 10, name: "DR ALIYU ABDULMUMEEN", specialization: "EVENING FAMILY PHYSICIAN", image: DOCTOR_IMG },
        ],
        emails: ["enquiries@reddingtonhospital.com"],
        contact: ["0707 870 1595", "0707 876 0874"],
        servicesDescription: "All Specialty care",
        Heroimage: Heroimage
    },
    {
        id: 3,
        name: "Reddington Care Hospital Lekki",
        location: "15c Admiralty Way, Lekki Phase 1, Lagos",
        address: "15c Admiralty Way, Lekki Phase 1, Lagos",
        description: "A 5-star, one-stop multi-specialist facility established to bring Reddington's signature excelle..",
        fullDescription: "A star, one-stop multi-specialist facility established to bring Reddington's signature excellence and quality care to the Lekki axis. Our facility is equipped with the latest medical technology and staffed with experienced healthcare professionals committed to your wellbeing.",
        image: PLACEHOLDER_IMG,
        services: [
            { name: "Consultation", image: SERVICE_PLACEHOLDER },
            { name: "Diagnostics", image: SERVICE_PLACEHOLDER },
            { name: "Surgery", image: SERVICE_PLACEHOLDER },
            { name: "Mental Health", image: SERVICE_PLACEHOLDER },
            { name: "Wellness Programs", image: SERVICE_PLACEHOLDER },
        ],
        doctors: [
            { id: 9, name: "Dr. Muyiwa Fagbohun", specialization: "Consultant Gynecologist", image: DOCTOR_IMG },
            { id: 10, name: "Dr. Choma Olieigbe", specialization: "General Surgeon", image: DOCTOR_IMG },
            { id: 11, name: "Dr. Folake Adewale", specialization: "Psychiatrist", image: DOCTOR_IMG },
            { id: 12, name: "Dr. Ismail Hassan", specialization: "Wellness Physician", image: DOCTOR_IMG },
        ],
    },
    {
        id: 4,
        name: "Reddington Maxy Super-Specialty Centre",
        location: "14 Akin Olugbade Street, V. I, Lagos 106104",
        address: "14 Akin Olugbade Street, V. I, Lagos 106104",
        description: "The Maxy Super-specialty Centre is a unique, multi-disciplinary ambulatory care facility designed to de...",
        fullDescription: "The Maxy Super-specialty Centre is a unique, multi-disciplinary ambulatory care facility designed to deliver high-quality care in an office-like environment, away from traditional hospital bureaucracy. Staffed by a carefully selected group of highly skilled clinicians, the centre focuses on day-case and outpatient specialty services, ensuring patients receive safe, effective, and efficient care according to internationally accepted guidelines.",
        image: PLACEHOLDER_IMG,
        services: [
            {
                name: "Maxy Dental Centre",
                image: Dental,
                description: [
                    "Cosmetic Dentistry",
                    "Invisalign",
                    "Teeth Whitening",
                    "Implants",
                    "Orthodontics",
                    "Oral and Maxillofacial Surgery"
                ]
            },
            {
                name: "Maxy ENT Centre",
                image: Blog,
                description: [
                    "Ophthalmic consultations",
                    "Glaucoma treatment",
                    "Cataract surgery",
                    "Diabetic retinopathy evaluation",
                ]
            },
            {
                name: "Maxy Endoscopy Centre",
                image: Blog,
                description: [
                    "Colonoscopy",
                    "Gastroscopy",
                    "Bronchoscopy",
                    "Therapeutic endoscopic procedures",
                ]
            },
            {
                name: "Physiotherapy Centre",
                image: Blog,
                description: [
                    "vices rendered",
                    "Joint manipulation",
                    "Rehabilitation",
                    "Sports injury treatment",
                ]
            },
            {
                name: "Audiology & Vestibular Clinic",
                image: Dental,
                description: [
                    "Hearing tests",
                    "Hearing aid services",
                    "Balance disorders",
                ]
            },
            {
                name: "Neurodiagnostic Centre",
                image: Blog,
                description: [
                    "Ambulatory EEG Monitoring",
                    "Transcranial Doppler Ultrasound",
                ]
            },
        ],
        doctors: [
            { id: 13, name: "Dr. Kunle Fadeji", specialization: "Specialist Consultant", image: DOCTOR_IMG },
            { id: 14, name: "Dr. Adekunle Adeniyi", specialization: "Diagnostic Expert", image: DOCTOR_IMG },
            { id: 15, name: "Dr. Sade Okafor", specialization: "Day Surgery Specialist", image: DOCTOR_IMG },
            
        ],
        emails: ["crm@maxycentre.com"],
        contact: ["0803 588 6227", "0810 129 1300"],
        Heroimage: Heroimage,
        servicesDescription: "Multi and Sub-Specialty care across all disciplines"
    },
    {
        id: 5,
        name: "Purple Ray Diagnostic Centre",
        location: "12a Idowu Martins Street, Victoria Island, Lagos",
        address: "12a Idowu Martins Street, Victoria Island, Lagos",
        description: "As GE Healthcare's chosen reference site for West Africa, Purple Ray Diagnostic Centre represents the...",
        fullDescription: "As GE Healthcare's reference site for West Africa, Purple Ray Diagnostic Centre represents the latest in imaging technology. We provide comprehensive diagnostic imaging services including CT scans, ultrasound, and X-ray with expert radiological interpretation.",
        image: PLACEHOLDER_IMG,
        services: [
            { name: "CT Scanning", image: SERVICE_PLACEHOLDER },
            { name: "Ultrasound", image: SERVICE_PLACEHOLDER },
            { name: "X-Ray", image: SERVICE_PLACEHOLDER },
            { name: "MRI", image: SERVICE_PLACEHOLDER },
            { name: "Radiological Reporting", image: SERVICE_PLACEHOLDER },
        ],
        doctors: [
            { id: 17, name: "Dr. Olutayo Bamisile", specialization: "Chief Radiologist", image: DOCTOR_IMG },
            { id: 18, name: "Dr. Chioma Eze", specialization: "Consultant Radiologist", image: DOCTOR_IMG },
            { id: 19, name: "Dr. Adebayo Oladele", specialization: "Interventional Radiologist", image: DOCTOR_IMG },
            { id: 20, name: "Dr. Kemi Adesanya", specialization: "Ultrasound Specialist", image: DOCTOR_IMG },
        ],
    },
    {
        id: 6,
        name: "Reddington Breast & Gynaecology Centre",
        location: "276A Kofo Abayomi Street, near Intercontinental Hotel, Victoria Island, Lagos",
        address: "276A Kofo Abayomi Street, near Intercontinental Hotel, Victoria Island, Lagos",
        description: "The Breast & Gynae Centre is Nigeria's only dedicate...",
        fullDescription: "The Breast & Gynae Centre is Nigeria's dedicated facility for comprehensive breast and gynecological care. Our specialized team provides screening, diagnosis, and treatment for all breast and gynecological conditions with compassionate, evidence-based care.",
        image: PLACEHOLDER_IMG,
        services: [
            { name: "Breast Screening", image: SERVICE_PLACEHOLDER },
            { name: "Gynecological Care", image: SERVICE_PLACEHOLDER },
            { name: "Ultrasound", image: SERVICE_PLACEHOLDER },
            { name: "Biopsy Services", image: SERVICE_PLACEHOLDER },
            { name: "Health Education", image: SERVICE_PLACEHOLDER },
        ],
        doctors: [
            { id: 21, name: "Dr. Femi Okafor", specialization: "Breast Surgeon", image: DOCTOR_IMG },
            { id: 22, name: "Dr. Nneka Ezeoke", specialization: "Consultant Gynaecologist", image: DOCTOR_IMG },
            { id: 23, name: "Dr. Akin Oluwaseun", specialization: "Ultrasound Specialist", image: DOCTOR_IMG },
            { id: 24, name: "Dr. Rukayat Suliat", specialization: "Breast Care Nurse", image: DOCTOR_IMG },
        ],
    },
    {
        id: 7,
        name: "Davidson Surgical & Critical Care Centre",
        location: "2nd Floor, Reddington Hospital, 12a Idowu Martins Street, Victoria Island, Lagos",
        address: "2nd Floor, Reddington Hospital, 12a Idowu Martins Street, Victoria Island, Lagos",
        description: "Named in honour of our founding medical director...",
        fullDescription: "Named in honour of our founding medical director, Dr Neil Davidson FRCP, this state-of-the-art facility represents the pinnacle of integrated surgical and intensive care in Nigeria. What sets the Davidson Centre apart is the tight integration between Surgery, Anaesthesia, and Critical Care teams—a collaboration essential for optimal outcomes following major elective and emergency surgery. Our seven-bedded combined ICU/HDU is equipped with first-world technology and managed by UK-trained intensive care specialists.",
        image: PLACEHOLDER_IMG,
        services: [
            { name: "General Surgery", image: SERVICE_PLACEHOLDER },
            { name: "Trauma Care", image: SERVICE_PLACEHOLDER },
            { name: "ICU/HDU", image: SERVICE_PLACEHOLDER },
            { name: "Anaesthesia", image: SERVICE_PLACEHOLDER },
        ],
        doctors: [
            { id: 25, name: "Dr. Tunde Oladimeji", specialization: "Chief Surgeon", image: DOCTOR_IMG },
            { id: 26, name: "Dr. Chineze Obi", specialization: "Consultant Anaesthetist", image: DOCTOR_IMG },
            { id: 27, name: "Dr. James Udeh", specialization: "ICU Specialist", image: DOCTOR_IMG },
            { id: 28, name: "Dr. Amina Safiya", specialization: "Trauma Surgeon", image: DOCTOR_IMG },
        ],
    },
    {
        id: 8,
        name: "The BodyCare Plastic Surgery Centre",
        location: "276A Kofo Abayomi Street, near Intercontinental Hotel, Victoria Island, Lagos",
        address: "276A Kofo Abayomi Street, near Intercontinental Hotel, Victoria Island, Lagos",
        description: "The BodyCare centre is the latest innovation from t...",
        fullDescription: "The Bodycare Centre is the latest innovation from the Reddington Healthcare Group, offering an extensive range of aesthetic plastic surgery procedures in a confidential and safe environment. Led by highly experienced plastic surgeon Dr Stanley Okoro, who maintains successful practices in both Nigeria and the United States, our team provides customized cosmetic solutions alongside remedial and reconstructive services for congenital defects and burn injuries.",
        image: PLACEHOLDER_IMG,
        services: [
            { name: "Aesthetic Procedures", image: SERVICE_PLACEHOLDER },
            { name: "Reconstructive Surgery", image: SERVICE_PLACEHOLDER },
            { name: "Burn Injury Treatment", image: SERVICE_PLACEHOLDER },
            { name: "Cosmetic Consultations", image: SERVICE_PLACEHOLDER },
        ],
        doctors: [
            { id: 29, name: "Dr. Stanley Okoro", specialization: "Plastic Surgeon", image: DOCTOR_IMG },
            { id: 30, name: "Dr. Zainab Ibrahim", specialization: "Reconstructive Specialist", image: DOCTOR_IMG },
            { id: 31, name: "Dr. David Omokaro", specialization: "Aesthetic Surgeon", image: DOCTOR_IMG },
            { id: 32, name: "Dr. Chisom Nwankwo", specialization: "Burn Care Specialist", image: DOCTOR_IMG },
        ],
    },
    {
        id: 9,
        name: "Reddington Wellness & Medical Check-Up Centre",
        location: "6th Floor, 12a Idowu Martins Street, V.I, Lagos",
        address: "276A Kofo Abayomi Street, near Intercontinental Hotel, Victoria Island, Lagos",
        description: "Good health is our most valuable asset, yet often t...",
        fullDescription: "Good health is our most valuable asset, yet often the most neglected. The Reddington Medical Check-up Centre was established to make comprehensive preventive health screening accessible and convenient. Our flagship Lifescreen programme—the first of its kind in Nigeria—is a total body screening exercise for early detection of tumours and life-threatening abnormalities, assessing your risk for heart disease, diabetes, stroke, and more. Using technology firsts like the 1.5Tesla MRI, 3D Tomo-mammogram, and 3D ABUS, we provide peace of mind through early detection.",
        image: PLACEHOLDER_IMG,
        services: [
            { name: "Full Body Screening", image: SERVICE_PLACEHOLDER },
            { name: "Health Check-up Packages", image: SERVICE_PLACEHOLDER },
            { name: "Advanced Imaging", image: SERVICE_PLACEHOLDER },
            { name: "Preventive Medicine", image: SERVICE_PLACEHOLDER },
            { name: "Wellness Programs", image: SERVICE_PLACEHOLDER },
        ],
        doctors: [
            { id: 33, name: "Dr. Babatunde Adeleke", specialization: "Wellness Director", image: DOCTOR_IMG },
            { id: 34, name: "Dr. Victoria Okonkwo", specialization: "Preventive Medicine", image: DOCTOR_IMG },
            { id: 35, name: "Dr. Oluwaseun Adeyemi", specialization: "Preventive Cardiologist", image: DOCTOR_IMG },
            { id: 36, name: "Dr. Morenike Adesuwa", specialization: "Nutritionist", image: DOCTOR_IMG },
        ],
    },
]
