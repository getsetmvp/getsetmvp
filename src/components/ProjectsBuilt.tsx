import Image from 'next/image';
import { PROJECTS_BUILT } from '@/constants';

export default function ProjectsBuilt() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
          {PROJECTS_BUILT.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_BUILT.projects.map((project, index) => (
            <a 
              key={index} 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative h-60 bg-gray-200">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
