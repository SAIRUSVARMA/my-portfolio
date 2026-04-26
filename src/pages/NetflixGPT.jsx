import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NetflixGPT = () => {
  const navigate = useNavigate(); // ✅ ADD THIS

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen px-6 py-24 max-w-3xl mx-auto">
      {/* 🔥 BACK BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="mb-10 text-primary hover:underline"
      >
        ← Back to Portfolio
      </button>

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-primary">
        Netflix GPT
      </h1>

      <p className="mt-6 text-gray-400 text-lg">
        AI-powered movie discovery platform integrating GPT with real-time TMDB
        data.
      </p>

      {/* Sections */}
      <div className="mt-12 space-y-12">
        <div>
          <h2 className="text-2xl font-semibold">Problem</h2>
          <p className="text-gray-400 mt-3">
            Traditional movie browsing platforms rely on static filters and
            categories, making discovery limited and less personalized.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Solution</h2>
          <p className="text-gray-400 mt-3">
            Built an AI-powered search system where users can describe what they
            want, and GPT intelligently suggests movies, which are then mapped
            to real TMDB results.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">System Design</h2>
          <p className="text-gray-400 mt-3">
            User input → Backend API → OpenRouter GPT → Parsed movie names →
            TMDB API → UI rendering.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <p className="text-gray-400 mt-3">
            React, Node.js, Express, OpenRouter API, TMDB API, Firebase Auth
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Key Features</h2>
          <ul className="text-gray-400 mt-3 space-y-2">
            <li>• AI-powered movie recommendations</li>
            <li>• Secure backend API handling GPT calls</li>
            <li>• Real-time data mapping with TMDB</li>
            <li>• Responsive Netflix-style UI</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">What I Learned</h2>
          <p className="text-gray-400 mt-3">
            Integrating AI into production workflows, handling API
            orchestration, and transforming unstructured GPT responses into
            structured UI data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NetflixGPT;
