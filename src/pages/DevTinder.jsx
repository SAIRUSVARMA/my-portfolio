import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DevTinder = () => {
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
      <h1 className="text-4xl md:text-6xl font-bold text-primary">DevTinder</h1>

      {/* Description */}
      <p className="mt-6 text-gray-400 text-lg">
        A full-stack developer matchmaking platform with authentication,
        connection logic, and scalable backend architecture.
      </p>

      {/* 🔥 IMAGE */}
      <img
        src="/images/devtinder.png"
        alt="DevTinder"
        className="rounded-lg mt-6 shadow-lg"
      />

      {/* Sections */}
      <div className="mt-12 space-y-12">
        <div>
          <h2 className="text-2xl font-semibold">Problem</h2>
          <p className="text-gray-400 mt-3">
            Developers lack a platform to connect meaningfully based on skills,
            interests, and collaboration goals.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Solution</h2>
          <p className="text-gray-400 mt-3">
            Built a matchmaking system where users can discover, connect, and
            interact with other developers using a scalable backend.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <p className="text-gray-400 mt-3">
            MERN Stack, JWT Authentication, MongoDB, REST APIs
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Key Features</h2>
          <ul className="text-gray-400 mt-3 space-y-2">
            <li>• Secure authentication system</li>
            <li>• Developer connection logic</li>
            <li>• Scalable backend structure</li>
            <li>• Real-time-like interaction flow</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">What I Learned</h2>
          <p className="text-gray-400 mt-3">
            Designing backend systems, structuring APIs, and building real-world
            scalable applications beyond frontend interfaces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevTinder;
