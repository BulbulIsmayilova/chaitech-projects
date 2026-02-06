
import { Project } from "@/types/project";
import PhoneMockup from "./PhoneMockup";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white w-full max-w-4xl rounded-3xl p-8 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-3">{project.name}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <p className="text-sm text-gray-400">
              Swipe to explore the app →
            </p>
          </div>

          <PhoneMockup images={project.screenshots} />
        </div>
      </div>
    </div>
  );
}
