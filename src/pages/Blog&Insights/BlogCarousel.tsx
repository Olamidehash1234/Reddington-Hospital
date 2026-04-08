import { useState, useEffect } from 'react'
import { blogArticles, blogCategories } from '../../data/blogs'

export default function BlogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredArticles, setFilteredArticles] = useState(blogArticles)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Filter articles based on selected category
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredArticles(blogArticles)
    } else {
      setFilteredArticles(blogArticles.filter(article => article.category === selectedCategory))
    }
    setCurrentIndex(0)
  }, [selectedCategory])

  const featuredArticle = filteredArticles[0] || blogArticles[0]
  const carouselArticles = filteredArticles.slice(1)

  const handlePrevious = () => {
    if (carouselArticles.length === 0) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselArticles.length - 1 : prevIndex - 1
    )
    setTimeout(() => setIsTransitioning(false), 300)
  }

  const handleNext = () => {
    if (carouselArticles.length === 0) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselArticles.length - 1 ? 0 : prevIndex + 1
    )
    setTimeout(() => setIsTransitioning(false), 300)
  }

  const visibleArticles = carouselArticles.length > 0 
    ? [
        carouselArticles[currentIndex],
        carouselArticles[(currentIndex + 1) % carouselArticles.length],
        carouselArticles[(currentIndex + 2) % carouselArticles.length]
      ]
    : []

  return (
    <section className="w-full bg-[#F9F9F9] py-[40px] lg:py-[40px] px-[16px] lg:px-[80px]">
      <div className="">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-[24px] lg:text-[32px] text-[#000000]">Our Latest News</h2>
        </div>

        {/* Featured Article */}
        <div className="mb-12 bg-gray-50 rounded-lg overflow-hidden border border-[#6F72714D] border-[0.979px]">
          <div className="flex flex-col lg:flex-row">
            {/* Featured Image */}
            <div className="w-full lg:w-2/5 h-64 lg:h-[346px]">
              <img 
                src={featuredArticle.image} 
                alt={featuredArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Featured Content */}
            <div className="w-full lg:w-3/5 p-6 lg:py-[40px] flex flex-col justify-center">
              <h3 className="text-2xl lg:text-[24px] font-semibold lg:leading-[24px] text-gray-900 mb-[10px]">
                {featuredArticle.title}
              </h3>
              <p className="text-sm lg:text-[18px] font-medium text-[#2D2D2D] mb-4 lg:mb-[40px]">
                Posted on, {featuredArticle.date}
              </p>
              <p className="text-gray-700 mb-6 lg:leading-[28.187px] line-clamp-3">
                {featuredArticle.description}
              </p>
              <a 
                href={featuredArticle.link}
                className="text-red-600 font-semibold hover:text-red-700 hover:underline transition-colors w-fit"
              >
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-3">
          {blogCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 lg:px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-red-50 text-red-600 border border-red-300 hover:bg-red-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Carousel */}
        {carouselArticles.length > 0 ? (
          <div className="relative">
            {/* Articles Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
              {visibleArticles.map((article) => (
                <div
                  key={article.id}
                  className={`transition-all duration-300 ${
                    isTransitioning ? 'opacity-50' : 'opacity-100'
                  }`}
                >
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow height-full">
                    {/* Article Image */}
                    <div className="w-full h-48 overflow-hidden bg-gray-200">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Article Content */}
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
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
            <div className="flex justify-between items-center">
              <button
                onClick={handlePrevious}
                className="p-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors shadow-lg hover:shadow-lg"
                aria-label="Previous articles"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Pagination Dots */}
              <div className="flex gap-2">
                {carouselArticles.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsTransitioning(true)
                      setCurrentIndex(index)
                      setTimeout(() => setIsTransitioning(false), 300)
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-red-600 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to article ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors shadow-lg hover:shadow-lg"
                aria-label="Next articles"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
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
