export type BlogArticle = {
  id: string
  title: string
  date: string
  category: 'Health Tips' | 'News' | 'Research' | 'Community' | 'Announcements'
  description: string
  image: string
  link: string
}

const heartImg = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775660857/heart_fg0spv.png"
const surgeryImg = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775824912/surgery_mjgzm3.png"
// const specialtyImg = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775660857/heart_fg0spv.png"
const Heart = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775825053/heart_sextpb.png"
const Maxy = "https://res.cloudinary.com/dbe6jr3nj/image/upload/v1775603364/Maxy-hero_hrie05.png"

export const blogArticles: BlogArticle[] = [
  {
    id: 'heart-surgery',
    title: 'WHAT DO YOU KNOW ABOUT YOUR HEART',
    date: 'February 14, 2024',
    category: 'Health Tips',
    description: 'As a central part of the circulatory system, the heart is primarily responsible for pumping blood and distributing oxygen and nutrients...',
    image: heartImg,
    link: '/blog/what-do-you-know-about-your-heart'
  },
  {
    id: 'complex-heart-surgery',
    title: 'REDDINGTON HOSPITAL PERFORMS FIRST COMPLEX OPEN HEART SURGERY',
    date: 'January 28, 2024',
    category: 'News',
    description: 'The Reddington Multi-specialist Hospital has announced a successful complex heart surgery performed by our team of expert cardiologists and surgeons...',
    image: surgeryImg,
    link: '/blog/complex-open-heart-surgery'
  },
  {
    id: 'maxi-specialty-centre',
    title: 'REDDINGTON LAUNCHES MAXI SUPER-SPECIALTY CENTRE',
    date: 'January 15, 2024',
    category: 'Announcements',
    description: 'The Reddington Hospital Group has launched a new healthcare facility that provides super specialized medical services with state-of-the-art equipment...',
    image: Maxy,
    link: '/blog/maxi-super-specialty-centre'
  },
  {
    id: 'heart-health',
    title: 'WHAT DO YOU KNOW ABOUT YOUR HEART',
    date: 'December 20, 2023',
    category: 'Research',
    description: 'Recent research shows that preventive care is key to maintaining a healthy heart. Learn about the latest findings and recommendations...',
    image: Heart,
    link: '/blog/heart-health-prevention'
  },
  {
    id: 'patient-testimonial',
    title: 'PATIENT SUCCESS STORY: LIFE AFTER SURGERY',
    date: 'December 10, 2023',
    category: 'Community',
    description: 'Read how one of our patients successfully recovered from cardiac surgery and returned to their normal life with improved health...',
    image: surgeryImg,
    link: '/blog/patient-success-story'
  }
]

export const blogCategories = ['All', 'Health Tips', 'News', 'Research', 'Community', 'Announcements'] as const
