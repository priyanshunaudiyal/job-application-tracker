export default function ProjectsPage() {
  const items = [
    {
      title: "Job Application Tracker",
      role: "Personal Project • React + Tailwind",
      description:
        "A dashboard to track applications, statuses, and notes with filters, search, and localStorage persistence.",
      highlights: [
        "Built with React 18 and functional components",
        "Client-side filtering, search, and state management",
        "Clean, responsive UI designed for real-world usage",
      ],
    },
    {
      title: "MarketMatrix",
      role: "Personal Project • React + Node.js + MongoDB",
      description:
        "A financial data platform that visualizes market insights with interactive charts and responsive layouts.",
      highlights: [
        "Integrated real-time-like market data and analytics",
        "Designed charts and dashboards for clarity and usability",
        "Focused on performance and smooth user experience",
      ],
    },
    {
      title: "Lawise.ai",
      role: "Frontend Engineer • Professional Experience",
      description:
        "Working on legal tech web applications with a focus on clean UI, responsive design, and Webflow site management.",
      highlights: [
        "Collaborate with backend and product teams to ship features",
        "Improve UX flows and consistency across the product",
        "Handle deployments and front-end performance optimizations",
      ],
    },
  ];

  return (
    <section className="space-y-4">
      <div className="mb-2">
        <h2 className="text-lg font-semibold">Projects & Experience</h2>
        <p className="text-sm text-slate-400">
          A quick snapshot of the work that represents my skills and impact.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="text-xs text-emerald-300 mt-1">{item.role}</p>
              <p className="text-sm text-slate-300 mt-2">
                {item.description}
              </p>
              <ul className="mt-3 space-y-1 text-xs text-slate-400 list-disc list-inside">
                {item.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
