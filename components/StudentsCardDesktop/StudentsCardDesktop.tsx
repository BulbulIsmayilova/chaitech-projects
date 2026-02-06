"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Student } from "./types";
import { fetchAcceptedStudentsFromPhotos } from "@/services/studentsApi";
import { Mail, MapPin } from "lucide-react";

const StudentsCardDesktop = () => {
  const [studentsData, setStudentsData] = useState<Student[]>([]);
  const [selectedStudentIndex, setSelectedStudentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchAcceptedStudentsFromPhotos();
      setStudentsData(data);
    } catch (err) {
      console.error("Tələbələr yüklənərkən xəta:", err);
      setError(err instanceof Error ? err.message : "Məlumatlar yüklənmədi");
    } finally {
      setLoading(false);
    }
  };

  const selectStudent = (index: number) => {
    setSelectedStudentIndex(index);
  };

  const handlePrevious = () => {
    setSelectedStudentIndex((prev) =>
      prev === 0 ? studentsData.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setSelectedStudentIndex((prev) => (prev + 1) % studentsData.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [studentsData.length]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          <p className="mt-4 text-gray-600">Yüklənir...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <p className="text-red-600">{error}</p>
          <button
            onClick={loadStudents}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Yenidən cəhd et
          </button>
        </div>
      </div>
    );
  }

  if (studentsData.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center text-gray-600">
          <p>Hələ ki qəbul olunan tələbə məlumatı yoxdur.</p>
        </div>
      </div>
    );
  }

  const selectedStudent = studentsData[selectedStudentIndex];
  return (
    <div className="testimonialSwiper app-container">
      <div className="grid lg:grid-cols-2 lg:gap-16 ">
        <div className="flex items-center justify-center gap-8  rounded-2xl  ">
          <div className="w-[50%] ">
            <Image
              width={400}
              height={320}
              src={selectedStudent.image}
              alt={selectedStudent.name}
              className="w-full  object-cover rounded-xl"
            />
          </div>

          <div className="space-y-4 w-[50%] ">
            <div>
              <h2 className="text-[32px] text-(--neutral-primary) font-bold ">
                {selectedStudent.name}
              </h2>
              <p className="text-gradient font-medium text-lg">
                {selectedStudent.major}
              </p>
            </div>

            <div className="flex items-center gap-2 text-(--light-gray)">
              <MapPin />
              <span>{selectedStudent.location}</span>
            </div>

            <p className="text-(--neutral-primary) leading-relaxed">
              {selectedStudent.testimonial}
            </p>

            <div className="pt-1 ">
              <div className="flex items-center gap-2 text-(--light-gray)">
                <Mail />
                <span className="text-sm break-all">
                  {selectedStudent.email}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="hidden lg:block">
            <div className="students-grid-scroll px-2 pt-3">
              {studentsData.map((student, index) => (
                <div
                  key={student.id}
                  onClick={() => selectStudent(index)}
                  className={`student-card  ${
                    index === selectedStudentIndex ? "student-card-active" : ""
                  }`}
                >
                  <Image
                    width={145}
                    height={250}
                    src={student.image}
                    alt={student.name}
                    className="student-card-image"
                  />

                  <div className="student-card-overlay">
                    <div className="text-(--bg-page) ">
                      <p className="text-[16px] font-semibold">
                        {student.name}
                      </p>
                      <p className="text-[14px] leading-5 opacity-80">
                        {student.major}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsCardDesktop;
