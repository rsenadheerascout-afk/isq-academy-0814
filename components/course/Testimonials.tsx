export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Michael Caldwell',
      role: 'Principal Consultant',
      quote: 'This course helped me recognize the opportunity to integrate climate change into our business strategy...',
    },
    {
      id: 2,
      name: 'Edwin Espina',
      role: 'Research Fellow',
      quote: 'By taking this course, I acquired knowledge and skills crucial for making informed decisions...',
    },
    {
      id: 3,
      name: 'Jonathan Hayes',
      role: 'Director',
      quote: 'The course has greatly enhanced my knowledge and understanding across a wide range of topics...',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-montserrat font-normal">
      {testimonials.map((t) => (
        <div
          key={t.id}
          className="border border-gray-200 p-8 flex flex-col items-center text-center bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          <span className="text-5xl text-gray-300 font-serif leading-none mb-2">
            “
          </span>
          <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
          <h4 className="text-gray-900">
            {t.name}
          </h4>
          <p className="text-xs text-gray-500 mb-6">
            {t.role}
          </p>
          <p className="text-sm text-gray-700 italic">
            "{t.quote}"
          </p>
        </div>
      ))}
    </div>
  );
}