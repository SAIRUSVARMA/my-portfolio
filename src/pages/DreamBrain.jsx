import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DreamBrain = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen px-6 py-24 max-w-3xl mx-auto">
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="mb-10 text-primary hover:underline"
      >
        ← Back to Portfolio
      </button>

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-primary">
        Dream Brain
      </h1>

      {/* Description */}
      <p className="mt-6 text-gray-400 text-lg">
        An interactive self-discovery and assessment platform built for quick, engaging personal reflection and progress tracking.
      </p>

      {/* 🔥 IMAGE */}
      <img
        src="/images/dreambrain.png"
        alt="Dream Brain"
        className="rounded-lg mt-6 shadow-lg border border-gray-800"
      />

      {/* Sections */}
      <div className="mt-12 space-y-12">
        <div>
          <h2 className="text-2xl font-semibold">Problem</h2>
          <p className="text-gray-400 mt-3">
            Traditional questionnaires and self-reflection platforms are often tedious, visually dated, and complex, leading to low completion rates and poor user engagement.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Solution</h2>
          <p className="text-gray-400 mt-3">
            Designed and developed Dream Brain—a calming, modern web app that guides users through quick, timed assessment questions in a private and judgment-free environment.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <p className="text-gray-400 mt-3">
            React, Tailwind CSS, Node.js, Express, MongoDB, REST APIs
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Key Features</h2>
          <ul className="text-gray-400 mt-3 space-y-2">
            <li>• Guided multi-step assessment flow (~20 sec per question)</li>
            <li>• User Authentication & secure account registration</li>
            <li>• Privacy-focused data architecture with encrypted storage</li>
            <li>• Aesthetic pastel gradient UI with responsive layout</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">What I Learned</h2>
          <p className="text-gray-400 mt-3">
            Managing complex front-end questionnaire state transitions, building responsive multi-step UI flows, and structuring privacy-first backend data schemas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DreamBrain;
