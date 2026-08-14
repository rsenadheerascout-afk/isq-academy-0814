import Breadcrumbs from '@/components/Breadcrumbs';
import CourseAccordion from '@/components/course/CourseAccordion';
import Testimonials from '@/components/course/Testimonials';

export default function SingleCoursePage() {
  // Mock data for the accordion sections
  const courseSections = [
    {
      id: 'description',
      title: 'Description',
      content: (
        <div className="space-y-4">
          <p>Climate change is reshaping economies, industries and societies, requiring decision-makers to interpret complex information and respond effectively.</p>
          <p>Through applied activities, you will learn to translate complex insights into clear and evidence-based recommendations.</p>
        </div>
      )
    },
    {
      id: 'modules',
      title: 'Modules and assessment',
      content: <p>Module 1: Introduction to Climate Science... (Content goes here)</p>
    },
    {
      id: 'requirements',
      title: 'Requirements',
      content: <p>No prior technical knowledge is required, but professional experience is recommended.</p>
    }
  ];

  return (
    <main className="min-h-screen bg-white font-montserrat font-sans">
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative w-full h-[450px] bg-gray-900 flex items-center">
        {/* Replace bg-gray-900 with your background image logic */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div> 
        <div className="relative z-10 max-w-5xl px-4 md:px-8 text-white">
          <div className="bg-white/90 backdrop-blur-sm text-black p-8 md:p-12 max-w-2xl inline-block shadow-lg">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Climate Change Strategy for Leaders: Readiness, Resilience and Impact
            </h1>
            <p className="text-base md:text-lg text-gray-700">
              Designed for decision-makers, this course turns climate science into actionable insight.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Page Navigation */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 md:px-8 py-3 flex justify-between items-center shadow-sm">
        <nav className="hidden md:flex space-x-8 text-sm font-semibold text-gray-500">
          <a href="#key-info" className="hover:text-black transition-colors">Key information</a>
          <a href="#about" className="hover:text-black transition-colors">About the course</a>
          <a href="#lead" className="hover:text-black transition-colors">Lead</a>
          <a href="#testimonials" className="hover:text-black transition-colors">Testimonials</a>
        </nav>
        <button className="border-2 border-black px-6 py-2 text-sm font-bold hover:bg-black hover:text-white transition-colors">
          Course brochure
        </button>
      </div>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-20">
        
        {/* Key Information Grid */}
        <section id="key-info" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-gray-200 p-6">
              <p className="text-sm text-gray-500 mb-1 flex items-center gap-2">
                 Price
              </p>
              <p className="text-xl font-bold">US$2,970 - US$3,150</p>
            </div>
            <div className="border border-gray-200 p-6">
              <p className="text-sm text-gray-500 mb-1">Duration</p>
              <p className="text-xl font-bold">8 weeks</p>
            </div>
            <div className="border border-gray-200 p-6">
              <p className="text-sm text-gray-500 mb-1">Commitment</p>
              <p className="text-xl font-bold">6-8 hours per week</p>
            </div>
            <div className="border border-gray-200 p-6">
              <p className="text-sm text-gray-500 mb-1">Study mode</p>
              <p className="text-xl font-bold">Tutor guided / online</p>
            </div>
          </div>
          
          <div className="lg:col-span-1 flex flex-col space-y-4">
            <button className="w-full bg-black text-white py-4 font-bold hover:bg-gray-800 transition-colors shadow-md">
              Download Brochure
            </button>
            <button className="w-full border-2 border-black text-black py-4 font-bold hover:bg-gray-50 transition-colors">
              Request a call
            </button>
          </div>
        </section>

        {/* About the Course (Accordion) */}
        <section id="about" className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">About the course</h2>
          <CourseAccordion items={courseSections} />
        </section>

        {/* Academic Staff / Lead */}
        <section id="lead" className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Academic staff</h2>
          <div className="border border-gray-200 p-8 flex flex-col sm:flex-row items-start sm:space-x-8 bg-white">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex-shrink-0 mb-4 sm:mb-0"></div>
            <div>
              <h3 className="text-xl font-bold text-black border-b border-black inline-block mb-2">
                Professor Jorge Viñuales
              </h3>
              <p className="text-sm text-gray-600 font-medium mb-4">
                Harold Samuel Professor of Law and Environmental Policy
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Jorge Viñuales holds the Harold Samuel Chair of Law and Environmental Policy at the University of Cambridge, where he founded the Cambridge Centre for Environment, Energy and Natural Resource Governance (C-EENRG).
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">What our learners are saying</h2>
          <Testimonials />
        </section>

        {/* Related Context */}
        <section id="related-courses" className="pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Related context</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Placeholder for video/course cards */}
            <div className="bg-gray-100 aspect-video flex items-end p-6 relative overflow-hidden group">
               <div className="absolute inset-0 bg-[url('/placeholder1.jpg')] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"></div>
               <div className="absolute inset-0 bg-black/30"></div>
               <h3 className="relative z-10 text-white font-bold text-lg max-w-xs">Why must organizations transition to sustainable practices?</h3>
            </div>
            <div className="bg-gray-100 aspect-video flex items-end p-6 relative overflow-hidden group">
               <div className="absolute inset-0 bg-[url('/placeholder2.jpg')] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"></div>
               <div className="absolute inset-0 bg-black/30"></div>
               <h3 className="relative z-10 text-white font-bold text-lg max-w-xs">What form does climate misinformation take?</h3>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}