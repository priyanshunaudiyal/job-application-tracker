const tabs = [
  { id: "applications", label: "Applications" },
  { id: "projects", label: "Projects / Experience" },
];

export default function Header({ onAddClick, activePage, onChangePage }) {
  return (
    <header className="border-b border-slate-800 mb-6">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Job Application Tracker
            </h1>
            <p className="text-sm text-slate-400">
              Keep an eye on every opportunity and highlight your journey.
            </p>
          </div>

          <div className="inline-flex rounded-full bg-slate-900 border border-slate-800 p-1 text-xs">
            {tabs.map((tab) => {
              const isActive = activePage === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onChangePage(tab.id)}
                  className={`px-3 py-1 rounded-full transition ${
                    isActive
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-300 hover:text-slate-50"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {activePage === "applications" && (
          <button
            onClick={onAddClick}
            className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-medium transition whitespace-nowrap"
          >
            + Add Application
          </button>
        )}
      </div>
    </header>
  );
}
