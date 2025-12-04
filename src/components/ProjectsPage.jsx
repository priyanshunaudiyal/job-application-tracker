export default function ProjectsPage({
  projects,
  onAddProject,
  onEditProject,
  onDeleteProject,
}) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">Projects & Experience</h2>
          <p className="text-sm text-slate-400">
            A snapshot of the work that represents my skills and impact.
          </p>
        </div>
        <button
          onClick={onAddProject}
          className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-medium transition whitespace-nowrap"
        >
          + Add Project
        </button>
      </div>

      {projects.length === 0 ? (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-sm text-slate-400">
          No projects added yet. Click <span className="font-semibold">“Add Project”</span> to create your first one.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-semibold">{item.title}</h3>
                {item.role && (
                  <p className="text-xs text-emerald-300 mt-1">{item.role}</p>
                )}
                {item.techStack && (
                  <p className="text-xs text-slate-400 mt-1">
                    {item.techStack}
                  </p>
                )}
                <p className="text-sm text-slate-300 mt-2">
                  {item.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-300">
                  {item.projectType && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full border border-slate-700 bg-slate-900/80">
                      {item.projectType}
                    </span>
                  )}
                  {item.completionDate && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full border border-slate-700 bg-slate-900/80">
                      {item.completionDate}
                    </span>
                  )}
                </div>
                <div className="mt-3 flex flex-wrap gap-3 text-xs">
                  {item.githubUrl && (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-slate-300 hover:text-emerald-300"
                    >
                      GitHub
                    </a>
                  )}
                  {item.liveUrl && (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-slate-300 hover:text-emerald-300"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-4 flex justify-end gap-2 text-xs">
                <button
                  onClick={() => onEditProject(item)}
                  className="underline text-slate-300 hover:text-emerald-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDeleteProject(item.id)}
                  className="underline text-rose-400 hover:text-rose-300"
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
