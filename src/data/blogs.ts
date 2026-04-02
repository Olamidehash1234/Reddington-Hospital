export type BlogArticle = {
  id: string
  title: string
  date: string
  category: 'Health Tips' | 'News' | 'Research' | 'Community' | 'Announcements'
  description: string
  image: string
  link: string
}

const heartImg = "/image/home/blog/heart.png"
const surgeryImg = "/image/home/blog/surgery.png"
const specialtyImg = "/image/home/blog/specialty.png"

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
    image: specialtyImg,
    link: '/blog/maxi-super-specialty-centre'
  },
  {
    id: 'heart-health',
    title: 'UNDERSTANDING HEART HEALTH AND PREVENTION',
    date: 'December 20, 2023',
    category: 'Research',
    description: 'Recent research shows that preventive care is key to maintaining a healthy heart. Learn about the latest findings and recommendations...',
    image: heartImg,
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
