import { useState } from 'react';
import { jobPositions, type JobPosition } from '../../data/job';
import JobCard from './Jobcard';
// import ApplicationModal from './ApplicationModal';

type CategoryFilter = 'ALL' | JobPosition['category'];

export default function Jobs() {
    const [activeFilter, setActiveFilter] = useState<CategoryFilter>('ALL');
    const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
    //   const [isModalOpen, setIsModalOpen] = useState(false);
    //   const [selectedJobTitle, setSelectedJobTitle] = useState('');

    // Filter jobs based on active filter
    const filteredJobs = activeFilter === 'ALL'
        ? jobPositions
        : jobPositions.filter(job => job.category === activeFilter);

    //   const handleApplyClick = (jobTitle: string) => {
    //     setSelectedJobTitle(jobTitle);
    //     setIsModalOpen(true);
    //   };

    //   const handleCloseModal = () => {
    //     setIsModalOpen(false);
    //     setSelectedJobTitle('');
    //   };

    return (
        <div className="w-full bg-white">
            {/* Filter div */}
            <div className="w-full bg-white ">
                <div className=" lg:flex justify-between items-center px-6 lg:px-20 py-4 lg:pt-10 lg:pb-[0px]">
                    <div className="flex flex-col mb-4 lg:mb-0">
                        <h2 className="text-[13px] lg:text-[14px] text-center font-medium lg:tracking-[-0.42px] text-[#2D2D2D] mb-0 lg:leading-[20px]">
                            Welcome and thank you for your interest in a career with Reddington Hospital Group. We are always looking for exceptional team members. Find fulfilling career opportunities at Reddington Hospital Group, and join us in providing a comprehensive first-world medical service exceeding all expectations of our valued patients. We encourage applications from all qualified individuals. If you cannot find a position listed for your specialty, you can still submit an online application by clicking the button below to submit your application.
                        </h2>
                    </div>
                </div>
            </div>

            {/* Jobs List div */}
            <div className="px-6 lg:px-20 py-8 lg:pb-[80px] lg:pt-[40px]">
                {filteredJobs.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-600 text-lg mb-4">No positions available in this category.</p>
                        <button
                            onClick={() => setActiveFilter('ALL')}
                            className="text-[#0C2141] font-semibold hover:underline"
                        >
                            View all positions
                        </button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {filteredJobs.map((job) => (
                            <JobCard
                                key={job.id}
                                job={job}
                                isExpanded={expandedJobId === job.id}
                                onToggle={() => setExpandedJobId(expandedJobId === job.id ? null : job.id)}
                            // onApplyClick={() => handleApplyClick(job.title)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}