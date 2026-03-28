export type Service = {
    name: string
    image: string
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
    services: Service[]
    doctors: Doctor[]
    servicesDescription?: string
}

const PLACEHOLDER_IMG = "/image/branches/placeholder.png"
const SERVICE_PLACEHOLDER = "/image/services/placeholder.png"
const DOCTOR_IMG = "/image/Awards/hero.png"

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
            { name: "Family Medicine", image: SERVICE_PLACEHOLDER },
            { name: "24-hour Emergency Care", image: SERVICE_PLACEHOLDER },
            { name: "Cardiac Catheterisation Laboratory (CATH LAB)", image: SERVICE_PLACEHOLDER },
            { name: "Full Diagnostic and Imaging Services", image: SERVICE_PLACEHOLDER },
            { name: "Medical Science Laboratory", image: SERVICE_PLACEHOLDER },
            { name: "Primary and Urgent Care", image: SERVICE_PLACEHOLDER },
            { name: "Intensive Care Unit", image: SERVICE_PLACEHOLDER },
            { name: "Coronary Care Unit", image: SERVICE_PLACEHOLDER },
            { name: "Operating Theatres", image: SERVICE_PLACEHOLDER },
        ],
        doctors: [
            { id: 1, name: "Dr. Abiodun Osibamowo", specialization: "Medical Director", image: DOCTOR_IMG },
            { id: 2, name: "Dr. Seyi Oyesola", specialization: "Critical Care Consultant", image: DOCTOR_IMG },
            { id: 3, name: "Dr. Omoye Olisikola", specialization: "Consultant Radiologist", image: DOCTOR_IMG },
            { id: 4, name: "Dr. Jimoh Aderounle", specialization: "Consultant Family Physician", image: DOCTOR_IMG },
            { id: 5, name: "Dr. Jimoh Aderounle", specialization: "Consultant Family Physician", image: DOCTOR_IMG },
            { id: 6, name: "Dr. Jimoh Aderounle", specialization: "Consultant Family Physician", image: DOCTOR_IMG },
            { id: 7, name: "Dr. Jimoh Aderounle", specialization: "Consultant Family Physician", image: DOCTOR_IMG },
            { id: 8, name: "Dr. Jimoh Aderounle", specialization: "Consultant Family Physician", image: DOCTOR_IMG },
            { id: 9, name: "Dr. Jimoh Aderounle", specialization: "Consultant Family Physician", image: DOCTOR_IMG },
        ],
        servicesDescription: "Multi and Sub-Specialty care across all disciplines"
    },
    {
        id: 2,
        name: "Reddington Hospital Ikeja",
        location: "39 Isaac John Street, Ikeja GRA, Lagos",
        address: "39 Isaac John Street, Ikeja GRA, Lagos",
        description: "For nearly two decades, Reddington Hospital Ikeja has served as a trusted healthcare partner to com...",
        fullDescription: "For nearly two decades, Reddington Hospital Ikoyi has served as a trusted healthcare partner to communities across Lagos. With modern facilities and experienced medical staff, we deliver quality healthcare services with a focus on patient satisfaction and clinical excellence.",
        image: PLACEHOLDER_IMG,
        services: [
            { name: "General Medicine", image: SERVICE_PLACEHOLDER },
            { name: "Pediatrics", image: SERVICE_PLACEHOLDER },
            { name: "Obstetrics & Gynecology", image: SERVICE_PLACEHOLDER },
            { name: "Laboratory Services", image: SERVICE_PLACEHOLDER },
        ],
        doctors: [
            { id: 5, name: "Dr. John Afolabi", specialization: "Consultant OB/GYN", image: DOCTOR_IMG },
            { id: 6, name: "Dr. Chukwu Ifeanyi", specialization: "Consultant Pediatrician", image: DOCTOR_IMG },
            { id: 7, name: "Dr. Ngozi Okafor", specialization: "Consultant Physician", image: DOCTOR_IMG },
            { id: 8, name: "Dr. Tunde Adeniyi", specialization: "Laboratory Director", image: DOCTOR_IMG },
        ],
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
        fullDescription: "The Maxy Super-specialty Centre is a unique, multi-disciplinary ambulatory care facility designed to deliver specialized outpatient services with world-class standards. Our centre focuses on providing comprehensive diagnostic and therapeutic services.",
        image: PLACEHOLDER_IMG,
        services: [
            { name: "Specialized Consultations", image: SERVICE_PLACEHOLDER },
            { name: "Diagnostics", image: SERVICE_PLACEHOLDER },
            { name: "Day Surgery", image: SERVICE_PLACEHOLDER },
            { name: "Physical Therapy", image: SERVICE_PLACEHOLDER },
        ],
        doctors: [
            { id: 13, name: "Dr. Kunle Fadeji", specialization: "Specialist Consultant", image: DOCTOR_IMG },
            { id: 14, name: "Dr. Adekunle Adeniyi", specialization: "Diagnostic Expert", image: DOCTOR_IMG },
            { id: 15, name: "Dr. Sade Okafor", specialization: "Day Surgery Specialist", image: DOCTOR_IMG },
            { id: 16, name: "Dr. Bolade Oluyinka", specialization: "Physiotherapist", image: DOCTOR_IMG },
        ],
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
