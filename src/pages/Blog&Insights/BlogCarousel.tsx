import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { blogArticles, blogCategories } from '../../data/blogs'

export default function BlogCarousel() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredArticles, setFilteredArticles] = useState(blogArticles)
  const [featuredIndex, setFeaturedIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const imageRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)

  const animateFeaturedChange = (nextIndex: number) => {
    if (nextIndex === featuredIndex || isAnimating) {
      return
    }

    const targets = [imageRef.current, contentRef.current].filter(Boolean)

    if (targets.length === 0) {
      setFeaturedIndex(nextIndex)
      return
    }

    setIsAnimating(true)

    gsap.to(targets, {
      opacity: 0,
      y: -24,
      duration: 0.28,
      ease: 'power2.in',
      stagger: 0.04,
      onComplete: () => {
        setFeaturedIndex(nextIndex)
      }
    })
  }

  // Filter articles based on selected category
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredArticles(blogArticles)
    } else {
      setFilteredArticles(blogArticles.filter(article => article.category === selectedCategory))
    }
    setFeaturedIndex(0)
  }, [selectedCategory])

  useEffect(() => {
    const targets = [imageRef.current, contentRef.current].filter(Boolean)

    if (targets.length === 0) {
      setIsAnimating(false)
      return
    }

    gsap.fromTo(
      targets,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: 'power3.out',
        stagger: 0.06,
        clearProps: 'transform',
        onComplete: () => setIsAnimating(false),
      }
    )
  }, [featuredIndex])

  useEffect(() => {
    if (filteredArticles.length <= 1) {
      return
    }

    const intervalId = window.setInterval(() => {
      const nextIndex = (featuredIndex + 1) % filteredArticles.length
      animateFeaturedChange(nextIndex)
    }, 3000)

    return () => window.clearInterval(intervalId)
  }, [featuredIndex, filteredArticles, isAnimating])

  const featuredArticle = filteredArticles[featuredIndex] || blogArticles[0]
  const visibleArticles = filteredArticles.slice(1, 4)

  return (
    <section className="w-full bg-[#F9F9F9] py-[30px] lg:py-[40px] px-[16px] lg:px-[80px]">
      <div className="">
        {/* Title */}
        <div className="mb-[30px] lg:mb-12 ">
          <h2 className="text-[24px] lg:text-[32px] text-[#000000]">Our Latest News</h2>
        </div>

        {/* Featured Article */}
        <div className="mb-[24px] bg-gray-50 rounded-lg overflow-hidden border border-[#6F72714D] border-[0.979px]">
          <div className="flex flex-col lg:flex-row">
            {/* Featured Image */}
            <div ref={imageRef} className="w-full lg:w-2/5 h-64 lg:h-[346px] overflow-hidden">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Featured Content */}
            <div className="w-full lg:w-3/5 p-6 lg:py-[40px] flex flex-col justify-between">
              <div ref={contentRef}>
                <h3 className="text-[18px] lg:text-[24px] font-semibold leading-[23px] lg:leading-[34px] text-gray-900 mb-[20px]">
                  {featuredArticle.title}
                </h3>
                <p className="text-sm lg:text-[20px] font-medium text-[#2D2D2D] mb-4 lg:mb-[40px]">
                  Posted on, {featuredArticle.date}
                </p>
                <p className="text-gray-700 mb-6 lg:mb-[30px] text-[14px] lg:text-[20px] lg:leading-[30.187px] line-clamp-3">
                  {featuredArticle.description}
                </p>
                <a
                  href={featuredArticle.link}
                  className="text-red-600 font-semibold text-[14px] hover:text-red-700 hover:underline transition-colors w-fit"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Pagination Dots for Featured Article */}
        {filteredArticles.length > 1 && (
          <div className="flex gap-2 justify-center mt-6 mb-[40px] lg:mb-[80px]">
            {filteredArticles.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  animateFeaturedChange(index)
                }}
                className={`w-3 h-[10px] rounded-full transition-all duration-300 ${index === featuredIndex
                    ? 'bg-red-600 w-[40px]'
                    : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to article ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-[5px] gap-y-[8px] lg:gap-3">
          {blogCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 lg:px-6 py-2 rounded-full text-sm font-semibold transition-all ${selectedCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-red-600 border border-[#E40714] hover:bg-red-100'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Carousel */}
        {visibleArticles.length > 0 ? (
          <div className="relative">
            {/* Articles Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
              {visibleArticles.map((article) => (
                <div
                  key={article.id}
                  className="transition-all duration-300 opacity-100"
                >
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    {/* Article Image */}
                    <div className="w-full h-[220px] overflow-hidden bg-gray-200">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-300"
                      />
                    </div>

                    {/* Article Content */}
                    <div className="p-6">
                      <h4 className="text-[16px] lg:text-lg font-medium text-gray-900 mb-2 line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        {article.date}
                      </p>
                      <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                        {article.description}
                      </p>
                      <a
                        href={article.link}
                        className="text-red-600 font-semibold text-sm hover:text-red-700 transition-colors"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No articles found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
