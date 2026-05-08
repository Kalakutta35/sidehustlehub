import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Best Side Hustles By Profession</h1>

        <p>
          Discover remote jobs, passive income ideas,
          freelancing opportunities and online income guides.
        </p>

        <button>Explore Opportunities</button>
      </section>

      <section className="grid">
        <Link href="/for-nurses">
          <div className="card">
            <h2>Nurses</h2>
            <p>
              Remote healthcare jobs and passive income ideas.
            </p>
          </div>
        </Link>

        <Link href="/for-students">
          <div className="card">
            <h2>Students</h2>
            <p>
              Zero investment side hustles for students.
            </p>
          </div>
        </Link>

        <Link href="/for-teachers">
          <div className="card">
            <h2>Teachers</h2>
            <p>
              Online tutoring and teaching income ideas.
            </p>
          </div>
        </Link>
      </section>
    </main>
  );
}
