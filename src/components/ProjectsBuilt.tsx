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
            <div key={index} className="border rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Project Image Placeholder</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
