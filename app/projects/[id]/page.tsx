"use client";

import { useParams, useRouter } from "next/navigation";
import PhoneMockup from "@/components/projects/PhoneMockup";
import { projects } from "@/mockdata/mockdata";
import { Project } from "@/types/project";

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const project = projects.find(
    (p: Project) => p.id === id
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Project not found
      </div>
    );
  }

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center">
      {/* Back button (optional but recommended) */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 text-white text-sm opacity-70 hover:opacity-100"
      >
        ← Back
      </button>

      {/* Phone slider */}
      <PhoneMockup images={project.screenshots} />
    </div>
  );
}
