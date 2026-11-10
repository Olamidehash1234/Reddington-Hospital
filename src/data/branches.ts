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

const PLACEHOLDER_IMG = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775603305/placeholder_pqduas.png"
const MSL = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775603346/msl_z5cy5q.png"
const SERVICE_PLACEHOLDER = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775603305/placeholder_pqduas.png"
// DOCTOR_IMG placeholder retired — doctors without a real photo are commented out for now
const VI = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775603340/Ikeja-hero_wtksoz.png"
const Ikeja = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1790718468/IMG_4929_p1bi92.jpg"
const Lekki = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775603340/Lekki-hero_ylk27m.png"
const Breast = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775603348/Breast-hero_wmtz9d.png"
const Maxy = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775603364/Maxy-hero_hrie05.png"
const Davidson = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775603331/davidson-hero_ggro9k.png"
const Wellness = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775603308/wellness-hero_ommvb1.png"

// Service-tile images (shared with the services page). Services without a photo use SERVICE_PLACEHOLDER
// until the client supplies an image.
const SvcCardiology = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1781002193/Cardiology_1_vprqz3.jpg"
const SvcCriticalCare = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1781002404/critical_care_h7azeb.jpg"
const SvcDiagImaging = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1781002570/diag-img_ty3bmk.jpg"
const SvcNephrology = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1781003461/Neph_hs7gz8.jpg"
const SvcEmergency = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775662523/emergency_q7tmpg.png"
const SvcFamilyMedicine = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1781002887/Fam_med_zeobaw.jpg"
const SvcGastro = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1781003066/gastro_rhmwtb.jpg"
const SvcHealth = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775662168/health_wevig8.png"
const SvcNeurology = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1781003605/Neurology_ghxmwv.jpg"
const SvcOrthopaedics = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1781003365/ortho_ztb8rj.jpg"
const SvcPaediatrics = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1781003393/paediatrics_jyzpky.jpg"
const SvcPlastic = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1781003829/Plastic_ftfbfa.jpg"
const SvcSurgery = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1781003085/surgery_pjflgp.jpg"
const SvcENT = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1781002705/ent_exsxqu.jpg"
const SvcOandG = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775662588/gyna_p4u0ea.png"
const SvcOphthalmology = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1781003730/optha_hwyhig.jpg"
const SvcPhysio = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1781003738/physio_tvu0ii.jpg"
const SvcBreast = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1781002083/Breast_Health1_wfdryi.jpg"
const SvcDentistry = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1781002543/Dentistry_yk9kbv.jpg"
const SvcAudiology = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775660857/heart_fg0spv.png"

export const branches: Branch[] = [
    {
        id: 1,
        name: "Reddington Multi-Specialist Hospital Victoria Island",
        location: "12 Idowu Martins Street, Victoria Island, Lagos",
        address: "12 Idowu Martins Street, Victoria Island, Lagos",
        description: "Our flagship hospital and the heart of the Reddington Healthcare Group, this multi-specialist..",
        fullDescription: "Our flagship hospital and the heart of the Reddington Hospital Group, this multi-specialist tertiary facility has set the standard for private healthcare in Nigeria since 2006. It serves as the hub for our most complex medical and surgical cases, bringing together an unparalleled team of consultants and cutting-edge technology under one roof.",
        image: VI,
        services: [
            { name: "Anaesthesia", image: SERVICE_PLACEHOLDER },
            { name: "Cardiology", image: SvcCardiology },
            { name: "Critical Care (ICU, NICU, CCU)", image: SvcCriticalCare },
            { name: "Dermatology", image: SERVICE_PLACEHOLDER },
            { name: "Diagnostic Imaging (Purple Ray)", image: SvcDiagImaging },
            { name: "Dialysis", image: SvcNephrology },
            { name: "Dietetics", image: SERVICE_PLACEHOLDER },
            { name: "Endocrinology", image: SERVICE_PLACEHOLDER },
            { name: "Emergency Medicine", image: SvcEmergency },
            { name: "Family Medicine & Primary Care", image: SvcFamilyMedicine },
            { name: "Gastroenterology", image: SvcGastro },
            { name: "Haematology", image: SERVICE_PLACEHOLDER },
            { name: "Health Screening & Wellness", image: SvcHealth },
            { name: "Internal Medicine", image: SERVICE_PLACEHOLDER },
            { name: "Laboratory Services", image: MSL },
            { name: "Nephrology", image: SvcNephrology },
            { name: "Neurology", image: SvcNeurology },
            { name: "Neurosurgery", image: SvcNeurology },
            { name: "Orthopaedics", image: SvcOrthopaedics },
            { name: "Paediatrics", image: SvcPaediatrics },
            { name: "Plastic Surgery", image: SvcPlastic },
            { name: "Psychiatry / Clinical Psychology", image: SERVICE_PLACEHOLDER },
            { name: "Pulmonology", image: SERVICE_PLACEHOLDER },
            { name: "Rheumatology", image: SERVICE_PLACEHOLDER },
            { name: "Surgical Services", image: SvcSurgery },
            { name: "Urology", image: SERVICE_PLACEHOLDER },
        ],
        doctors: [
            { id: 1, name: "Dr. Abiodun Osibamowo", specialization: "Medical Director", image: "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1790630439/Dr_Oshibamwo.png_Consultant_Internal_Medcine__jqzhy7.png" },
            { id: 2, name: "DR. LAWSON BABAJIDE", specialization: "CONSULTANT ORTHO SURG", image: "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1790630730/Dr_Lawson.png_Consultant_Orthopedic_trauma_Surgeon_r4wmzo.png" },
            { id: 3, name: "DR. OMOYELE OLUSOLA", specialization: "CONSULTANT RADIOLOGIST", image: "https://res.cloudinary.com/dbe6jr3nj/image/upload/Dr._Omoyele_VI_jyuqgr.png" },
            // { id: 4, name: "DR. JIMOH ADEKUNLE", specialization: "CONSULTANT FAMILY PHYSICIAN", image: DOCTOR_IMG }, // no new photo / not in updated list
            // { id: 5, name: "DR. OKUNEYE TAOFEEK", specialization: "CONSULTANT FAMILY PHYSICIAN", image: DOCTOR_IMG }, // no photo yet
            { id: 6, name: "DR. OSHUN JOY", specialization: "CARDIOLOGY CONSULTANT", image: "https://res.cloudinary.com/dbe6jr3nj/image/upload/Dr.Joy_Oshun_qkgjqy.png" },
            { id: 7, name: "DR. NWOSE PASCHAL", specialization: "CONSULTANT GENERAL SURGEON", image: "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1790630299/Dr_Nwose.png_Consultant_General_Surgeon_ars4ec.png" },
            { id: 8, name: "DR. ALAWODE ADENIYI", specialization: "CONSULTANT INTENSIVIST/ANAESTHESIA", image: "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1790630593/Dr_Alawode.png_consultant_anesthesiologist_Intensivist__xrwjko.png" },
            // { id: 9, name: "Dr. Jimoh Aderounle", specialization: "Consultant Family Physician", image: DOCTOR_IMG }, // no photo yet
        ],
        servicesDescription: "Multi and Sub-Specialty care across all disciplines",
        emails: ["customerservice.vi@reddingtonhospital.com"],
        contact: ["02012715341-3", "09165359769", "07069196882"],
        emergency: "09155555217",
        Heroimage: VI
    },
    {
        id: 2,
        name: "Reddington Hospital Ikeja",
        location: "39 Isaac John Street, GRA, Ikeja",
        address: "39 Isaac John Street, GRA, Ikeja",
        description: "For nearly two decades, Reddington Hospital Ikeja has served as a trusted healthcare partner to com...",
        fullDescription: "For nearly two decades, Reddington Hospital Ikeja has served as a trusted healthcare partner to communities across the Lagos mainland. This one-stop multi-specialist facility brings together experienced consultants, comprehensive diagnostic capabilities, and emergency care in a convenient location, ensuring mainland residents have access to the same quality care our group is renowned for.",
        image: Ikeja,
        services: [
            { name: "Anaesthesia", image: SERVICE_PLACEHOLDER },
            { name: "Cardiology", image: SvcCardiology },
            { name: "Dietetics", image: SERVICE_PLACEHOLDER },
            { name: "Ear, Nose & Throat (ENT)", image: SvcENT },
            { name: "Emergency Medicine", image: SvcEmergency },
            { name: "Endocrinology", image: SERVICE_PLACEHOLDER },
            { name: "Family Medicine & Primary Care", image: SvcFamilyMedicine },
            { name: "Gastroenterology", image: SvcGastro },
            { name: "Haematology", image: SERVICE_PLACEHOLDER },
            { name: "Health Screening & Wellness", image: SvcHealth },
            { name: "Neurology", image: SvcNeurology },
            { name: "Obstetrics & Gynaecology", image: SvcOandG },
            { name: "Orthopaedics", image: SvcOrthopaedics },
            { name: "Paediatrics", image: SvcPaediatrics },
            { name: "Physiotherapy", image: SvcPhysio },
            { name: "Plastic & Reconstructive Surgery", image: SvcPlastic },
            { name: "Psychiatry / Clinical Psychology", image: SERVICE_PLACEHOLDER },
            { name: "Pulmonology", image: SERVICE_PLACEHOLDER },
            { name: "Surgical Services", image: SvcSurgery },
            { name: "Urology", image: SERVICE_PLACEHOLDER },
        ],
        doctors: [
            { id: 5, name: "DR. OLUFISAYO BALOGUN", specialization: "Consultant Obstetrician and Gynaecologist / Medical Director", image: "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1790630293/Dr_Fisayo_Balogun.png_Consultant_O_G_MD_Ikeja_o0xoag.png" },
            { id: 6, name: "DR. VALENTINE OKWARA", specialization: "Consultant Obstetrician and Gynaecologist", image: "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1790630719/Dr_Valentine_Okwara.png_Consultant_O_G__msck8s.png" },
            { id: 7, name: "DR. TAFA OSUNLAJA", specialization: "CONSULTANT ANAESTHETIST", image: "https://res.cloudinary.com/dbe6jr3nj/image/upload/DR_bxspyk.png" },
            { id: 8, name: "DR. EYITAYO OLONADE", specialization: "CONSULTANT PAEDIATRICIAN", image: "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1790630559/Dr_Olonade.png_Consultant_Paediatrician__rlsevb.png" },
            { id: 9, name: "DR. EMMANUEL CHUKWURAH", specialization: "CONSULTANT RADIOLOGIST", image: "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1790630596/Dr_Chukwura.png_Consultant_Radiologist__yvvdgk.png" },
            { id: 10, name: "DR. KENNETH OCHULOR", specialization: "CONSULTANT CARDIOLOGIST", image: "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1790630873/Dr_Ochulor_Kenneth.png_Consultant_Cardiologist__vg9xzi.png" },
            { id: 10, name: "DR. DORKA DORA BEKEE", specialization: "CONSULTANT PAEDIATRICIAN", image: "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1790630896/Dr_Bekee.png_Consultant_Paediatrician__mnpfky.png" },
        ],
        emails: ["customerservice.ikeja@reddingtonhospital.com"],
        contact: ["08092804119", "09093928064", "07078760874"],
        emergency: "07078760874",
        servicesDescription: "All Specialty care",
        Heroimage: Ikeja
    },
    {
        id: 3,
        name: "Reddington Lekki Hospital",
        location: "15c Admiralty Way, Lekki",
        address: "15c Admiralty Way, Lekki Phase 1, Lagos",
        description: "A 5-star, one-stop multi-specialist facility established to bring Reddington's signature excelle..",
        fullDescription: "A star, one-stop multi-specialist facility established to bring Reddington's signature excellence and quality care to the Lekki axis. Our facility is equipped with the latest medical technology and staffed with experienced healthcare professionals committed to your wellbeing.",
        image: Lekki,
        services: [
            { name: "Cardiology", image: SvcCardiology },
            { name: "Diagnostic Imaging (Purple Ray)", image: SvcDiagImaging },
            { name: "Dietetics", image: SERVICE_PLACEHOLDER },
            { name: "Ear, Nose & Throat (ENT)", image: SvcENT },
            { name: "Emergency Medicine", image: SvcEmergency },
            { name: "Endocrinology", image: SERVICE_PLACEHOLDER },
            { name: "Family Medicine & Primary Care", image: SvcFamilyMedicine },
            { name: "Health Screening & Wellness", image: SvcHealth },
            { name: "Nephrology", image: SvcNephrology },
            { name: "Obstetrics & Gynaecology", image: SvcOandG },
            { name: "Optometry", image: SvcOphthalmology },
            { name: "Orthopaedics", image: SvcOrthopaedics },
            { name: "Paediatrics", image: SvcPaediatrics },
            { name: "Physiotherapy", image: SvcPhysio },
            { name: "Surgical Services", image: SvcSurgery },
        ],
        doctors: [
            { id: 9, name: "Dr. Muyiwa Fagbohun", specialization: "Consultant Gynecologist", image: "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1790630586/Dr_Fagbohun.png_Consultant_O_G_gpsixu.png" },
            { id: 10, name: "Dr. Jaho", specialization: "Consultant Cardiologist", image: "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1790630288/Dr_Jaho.png_Consultant_Cardiologist_CD_Lekki_ym4qje.png" },
            { id: 11, name: "Dr. Grace Andero", specialization: "Consultant Family Physician", image: "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1790630732/Dr_Grace_Andero.png_Consultant_Family_Physician_Lekki_weioge.png" },
            { id: 12, name: "Dr. Ajayi", specialization: "Paediatric SR", image: "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1790631020/Dr_Ajayi.png_Paediatric_SR_gzgmv9.png" },
        ],
        emails: ["customerservice@reddingtonlekki.com"],
        contact: ["09070633144", "08140848692"],
        emergency: "08084078995",
        Heroimage: Lekki,
    },
    {
        id: 4,
        name: "Reddington Maxy Super Speciality Centre",
        location: "14 Akin Olugbade Street, Victoria Island, Lagos",
        address: "14 Akin Olugbade Street, Victoria Island, Lagos",
        description: "The Maxy Super-specialty Centre is a unique, multi-disciplinary ambulatory care facility designed to de...",
        fullDescription: "The Maxy Super-specialty Centre is a unique, multi-disciplinary ambulatory care facility designed to deliver high-quality care in an office-like environment, away from traditional hospital bureaucracy. Staffed by a carefully selected group of highly skilled clinicians, the centre focuses on day-case and outpatient specialty services, ensuring patients receive safe, effective, and efficient care according to internationally accepted guidelines.",
        image: Maxy,
        services: [
            { name: "Audiology", image: SvcAudiology },
            { name: "Dentistry & Maxillofacial Surgery", image: SvcDentistry },
            { name: "Ear, Nose & Throat (ENT)", image: SvcENT },
            { name: "Endoscopy, Gastroscopy & Colonoscopy", image: SvcGastro },
            { name: "Ophthalmology / Optometry", image: SvcOphthalmology },
            { name: "Physiotherapy", image: SvcPhysio },
        ],
        doctors: [
            // { id: 13, name: "Dr. Kunle Fadeji", specialization: "Specialist Consultant", image: DOCTOR_IMG }, // no photo yet
            // { id: 14, name: "Dr. Adekunle Adeniyi", specialization: "Diagnostic Expert", image: DOCTOR_IMG }, // no photo yet
            // { id: 15, name: "Dr. Sade Okafor", specialization: "Day Surgery Specialist", image: DOCTOR_IMG }, // no photo yet

        ],
        emails: ["customerservice@maxycentre.com"],
        contact: ["08035856227", "08101291300", "08162944221"],
        Heroimage: Maxy,
        servicesDescription: "Multi and Sub-Specialty care across all disciplines"
    },
    {
        id: 5,
        name: "Purple Ray Diagnostic Centre",
        location: "12a Idowu Martins Street, Victoria Island, Lagos",
        address: "12a Idowu Martins Street, Victoria Island, Lagos",
        description: "As GE Healthcare's chosen reference site for West Africa, Purple Ray Diagnostic Centre represents the...",
        fullDescription: "As GE Healthcare's chosen reference site for West Africa, Purple Ray Diagnostic Centrerepresents the pinnacle of diagnostic imaging in the region. Our mission is to provide the highest standards of diagnostic testing and care, with access to outstanding technology that enables speedy and accurate diagnosis. From our pioneering 64-slice CT scanner to our advanced MRI and digital mammography, every piece of equipment has been selected to support the best possible patient outcomes.",
        image: PLACEHOLDER_IMG,
        services: [
            { name: "64-Slice CT Sca", image: SERVICE_PLACEHOLDER },
            { name: "1.5 Tesla Digital MRI", image: SERVICE_PLACEHOLDER },
            { name: "Digital Mammography", image: SERVICE_PLACEHOLDER },
            { name: "Digital Fluoroscopy", image: SERVICE_PLACEHOLDER },
            { name: "Digital X-Ray", image: SERVICE_PLACEHOLDER },
            { name: "4D Ultrasound Scan ", image: SERVICE_PLACEHOLDER },
            { name: "Cardiac Diagnostic Services (ECG, Holter, Stress ECG, Echocardiography) ", image: SERVICE_PLACEHOLDER },
            { name: "Full Medical Science Laboratory", image: SERVICE_PLACEHOLDER },
            { name: "integrated PAS/RIS Systems for remote reporting", image: SERVICE_PLACEHOLDER },
        ],
        doctors: [
            // { id: 17, name: "Dr. Olutayo Bamisile", specialization: "Chief Radiologist", image: DOCTOR_IMG }, // no photo yet
            // { id: 18, name: "Dr. Chioma Eze", specialization: "Consultant Radiologist", image: DOCTOR_IMG }, // no photo yet
            // { id: 19, name: "Dr. Adebayo Oladele", specialization: "Interventional Radiologist", image: DOCTOR_IMG }, // no photo yet
            // { id: 20, name: "Dr. Kemi Adesanya", specialization: "Ultrasound Specialist", image: DOCTOR_IMG }, // no photo yet
        ],
        emails: ["purpleray@reddingtonhospital.com"],
        contact: ["0913 735 1756"],
    },
    {
        id: 6,
        name: "Reddington Breast and Gynae Centre",
        location: "276A, Kofo Abayomi Street, beside Intercontinental Hotel, Victoria Island, Lagos",
        address: "276A, Kofo Abayomi Street, beside Intercontinental Hotel, Victoria Island, Lagos",
        description: "The Breast and Gynae Centre is Nigeria's only dedicate...",
        fullDescription: "The Breast and Gynae Centre is Nigeria's only dedicated women's healthcare centre providing comprehensive, holistic care for women at every life stage. Our mission is to deliver advanced, compassionate, and personalized care that spans wellness, curative treatment, and aesthetic services. By bringing together an exclusive team of UK and Nigeria-based specialists with cutting-edge technology, we have created a model for the future of women's health in West Africa.",
        image: Breast,
        services: [
            { name: "Antenatal Care", image: SERVICE_PLACEHOLDER },
            { name: "Breast Clinic", image: SvcBreast },
            { name: "Bodycare (Plastic Surgery)", image: SvcPlastic },
            { name: "Diagnostic Imaging (Radiology)", image: SvcDiagImaging },
            { name: "Family Planning", image: SERVICE_PLACEHOLDER },
            { name: "Health Screening & Wellness", image: SvcHealth },
            { name: "Laboratory Services", image: MSL },
            { name: "Obstetrics & Gynaecology", image: SvcOandG },
        ],
        doctors: [
            { id: 21, name: "Dr. John Afolabi", specialization: "Consultant Obstetrician and Gynaecologist", image: "https://res.cloudinary.com/dbe6jr3nj/image/upload/Dr_rr7ac5.png" },
            { id: 22, name: "Dr. Chioma Ojiegbe", specialization: "Consultant Obstetrician and Gynaecologist", image: "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1791842353/Dr_zsm27s.png" },
            // { id: 21, name: "Dr. Femi Okafor", specialization: "Breast Surgeon", image: DOCTOR_IMG }, // no photo yet
            // { id: 22, name: "Dr. Nneka Ezeoke", specialization: "Consultant Gynaecologist", image: DOCTOR_IMG }, // no photo yet
            // { id: 23, name: "Dr. Akin Oluwaseun", specialization: "Ultrasound Specialist", image: DOCTOR_IMG }, // no photo yet
            // { id: 24, name: "Dr. Rukayat Suliat", specialization: "Breast Care Nurse", image: DOCTOR_IMG }, // no photo yet
        ],
        contact: ["09071978966", "08021193912", "08120494763"],
        emails: ["customer.service@breastandgynae.com"],
        Heroimage: Breast
    },
    {
        id: 7,
        name: "Davidson Surgical and Critical Care Centre",
        location: "2nd Floor, Reddington Hospital, 12a Idowu Martins Street, Victoria Island, Lagos",
        address: "2nd Floor, Reddington Hospital, 12a Idowu Martins Street, Victoria Island, Lagos",
        description: "Named in honour of our founding medical director...",
        fullDescription: "Named in honour of our founding medical director, Dr Neil Davidson FRCP, this state-of-the-art facility represents the pinnacle of integrated surgical and intensive care in Nigeria. What sets the Davidson Centre apart is the tight integration between Surgery, Anaesthesia, and Critical Care teams—a collaboration essential for optimal outcomes following major elective and emergency surgery. Our seven-bedded combined ICU/HDU is equipped with first-world technology and managed by UK-trained intensive care specialists.",
        image: Davidson,
        services: [
            { name: "General Surgery", image: SERVICE_PLACEHOLDER },
            { name: "Colorectal Surgery", image: SERVICE_PLACEHOLDER },
            { name: "Laparoscopic (Keyhole) Surgery", image: SERVICE_PLACEHOLDER },
            { name: "Orthopaedic and Spinal Surgery", image: SERVICE_PLACEHOLDER },
            { name: "Cardiothoracic Surgery", image: SERVICE_PLACEHOLDER },
            { name: "Urology", image: SERVICE_PLACEHOLDER },
            { name: "Percutaneous Cardiac Interventions ", image: SERVICE_PLACEHOLDER },
            { name: "Full Intensive Care", image: SERVICE_PLACEHOLDER },
            { name: "High Dependency Care", image: SERVICE_PLACEHOLDER },
            { name: "Post-operative Recovery", image: SERVICE_PLACEHOLDER },
            { name: "Advanced Infection Control (with dedicated CSSD led by UK-trained professional)", image: SERVICE_PLACEHOLDER },
        ],
        doctors: [
            // { id: 25, name: "Dr. Tunde Oladimeji", specialization: "Chief Surgeon", image: DOCTOR_IMG }, // no photo yet
            // { id: 26, name: "Dr. Chineze Obi", specialization: "Consultant Anaesthetist", image: DOCTOR_IMG }, // no photo yet
            // { id: 27, name: "Dr. James Udeh", specialization: "ICU Specialist", image: DOCTOR_IMG }, // no photo yet
            // { id: 28, name: "Dr. Amina Safiya", specialization: "Trauma Surgeon", image: DOCTOR_IMG }, // no photo yet
        ],
        contact: ["0201-2715346-8", "0201-2715340", "0916 535 9769"],
        Heroimage: Davidson
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
            { name: "Breast Lift and Enhancement", image: SERVICE_PLACEHOLDER },
            { name: "Breast Reduction", image: SERVICE_PLACEHOLDER },
            { name: "Facial Rejuvenation", image: SERVICE_PLACEHOLDER },
            { name: "Mommy Makeover", image: SERVICE_PLACEHOLDER },
            { name: "SmartLipo Liposuction", image: SERVICE_PLACEHOLDER },
            { name: "Tummy Tuck", image: SERVICE_PLACEHOLDER },
            { name: "Buttock Lift ", image: SERVICE_PLACEHOLDER },
            { name: "Vaginal Rejuvenation", image: SERVICE_PLACEHOLDER },
            { name: "Eyelid Surgery", image: SERVICE_PLACEHOLDER },
            { name: "Botox Treatments", image: SERVICE_PLACEHOLDER },
            { name: "Post-burn Reconstruction ", image: SERVICE_PLACEHOLDER },
            { name: "Cleft Palate Repair ", image: SERVICE_PLACEHOLDER },
        ],
        doctors: [
            // { id: 29, name: "Dr. Stanley Okoro", specialization: "Plastic Surgeon", image: DOCTOR_IMG }, // no photo yet
            // { id: 30, name: "Dr. Zainab Ibrahim", specialization: "Reconstructive Specialist", image: DOCTOR_IMG }, // no photo yet
            // { id: 31, name: "Dr. David Omokaro", specialization: "Aesthetic Surgeon", image: DOCTOR_IMG }, // no photo yet
            // { id: 32, name: "Dr. Chisom Nwankwo", specialization: "Burn Care Specialist", image: DOCTOR_IMG }, // no photo yet
        ],
        contact: ["0916 453 8135", "0806 555 1615"],
        Heroimage: PLACEHOLDER_IMG
    },
    {
        id: 9,
        name: "Reddington Wellness and Medical Check-Up Centre",
        location: "6th Floor, 12a Idowu Martins Street, V.I, Lagos",
        address: "276A Kofo Abayomi Street, near Intercontinental Hotel, Victoria Island, Lagos",
        description: "Good health is our most valuable asset, yet often t...",
        fullDescription: "Good health is our most valuable asset, yet often the most neglected. The Reddington Medical Check-up Centre was established to make comprehensive preventive health screening accessible and convenient. Our flagship Lifescreen programme—the first of its kind in Nigeria—is a total body screening exercise for early detection of tumours and life-threatening abnormalities, assessing your risk for heart disease, diabetes, stroke, and more. Using technology firsts like the 1.5Tesla MRI, 3D Tomo-mammogram, and 3D ABUS, we provide peace of mind through early detection.",
        image: Wellness,
        services: [
            { name: "Standard Health Screens", image: SERVICE_PLACEHOLDER },
            { name: "Premier Health Screens", image: SERVICE_PLACEHOLDER },
            { name: "Silver Lifescreen", image: SERVICE_PLACEHOLDER },
            { name: "Gold Lifescreen", image: SERVICE_PLACEHOLDER },
            { name: "Platinum Lifescreen", image: SERVICE_PLACEHOLDER },
            { name: "Bespoke Corporate and Individual Packages", image: SERVICE_PLACEHOLDER },
            { name: "Occupational Health Assessment", image: SERVICE_PLACEHOLDER },
            { name: " Executive Health Physician guidance throughout", image: SERVICE_PLACEHOLDER },
        ],
        doctors: [
            // { id: 33, name: "Dr. Babatunde Adeleke", specialization: "Wellness Director", image: DOCTOR_IMG }, // no photo yet
            // { id: 34, name: "Dr. Victoria Okonkwo", specialization: "Preventive Medicine", image: DOCTOR_IMG }, // no photo yet
            // { id: 35, name: "Dr. Oluwaseun Adeyemi", specialization: "Preventive Cardiologist", image: DOCTOR_IMG }, // no photo yet
            // { id: 36, name: "Dr. Morenike Adesuwa", specialization: "Nutritionist", image: DOCTOR_IMG }, // no photo yet
        ],
        contact: ["0909 555 5507", "0909 555 5508", "0903 000 9575"],
        emails: ["wellness.centre@reddingtonhospital.com"],
        Heroimage: Wellness
    },
]
