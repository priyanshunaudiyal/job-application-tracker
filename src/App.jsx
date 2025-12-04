import { useEffect, useMemo, useState } from "react";
import { mockApplications } from "./data/mockApplications";
import Header from "./components/Header";
import StatsCards from "./components/StatsCards";
import Filters from "./components/Filters";
import ApplicationsTable from "./components/ApplicationsTable";
import ApplicationFormModal from "./components/ApplicationFormModal";
import ProjectsPage from "./components/ProjectsPage";

const loadInitialApplications = () => {
  if (typeof window === "undefined") return mockApplications;
  try {
    const stored = window.localStorage.getItem("applications");
    return stored ? JSON.parse(stored) : mockApplications;
  } catch (err) {
    console.error("Failed to parse applications from localStorage", err);
    return mockApplications;
  }
};

function App() {
  const [applications, setApplications] = useState(loadInitialApplications);
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingApp, setEditingApp] = useState(null);
  const [activePage, setActivePage] = useState("applications");

  useEffect(() => {
    try {
      window.localStorage.setItem("applications", JSON.stringify(applications));
    } catch (err) {
      console.error("Failed to save applications to localStorage", err);
    }
  }, [applications]);

  const handleAddApplication = (newApp) => {
    setApplications((prev) => [
      ...prev,
      { ...newApp, id: Date.now() },
    ]);
  };

  const handleUpdateApplication = (updatedApp) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === updatedApp.id ? updatedApp : app))
    );
  };

  const handleDeleteApplication = (id) => {
    setApplications((prev) => prev.filter((app) => app.id !== id));
  };

  const openAddModal = () => {
    setEditingApp(null);
    setIsModalOpen(true);
  };

  const openEditModal = (app) => {
    setEditingApp(app);
    setIsModalOpen(true);
  };

  const filteredApplications = useMemo(() => {
    return applications.filter((app) => {
      const matchesStatus =
        statusFilter === "All" || app.status === statusFilter;

      const term = searchTerm.toLowerCase();
      const matchesSearch =
        app.company.toLowerCase().includes(term) ||
        app.role.toLowerCase().includes(term);

      return matchesStatus && matchesSearch;
    });
  }, [applications, statusFilter, searchTerm]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Header
        onAddClick={openAddModal}
        activePage={activePage}
        onChangePage={setActivePage}
      />

      <main className="max-w-6xl mx-auto px-4 pb-10">
        {activePage === "applications" ? (
          <>
            <StatsCards applications={applications} />

            <Filters
              statusFilter={statusFilter}
              onStatusChange={setStatusFilter}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />

            <ApplicationsTable
              applications={filteredApplications}
              onEdit={openEditModal}
              onDelete={handleDeleteApplication}
            />
          </>
        ) : (
          <ProjectsPage applications={applications} />
        )}
      </main>

      {isModalOpen && activePage === "applications" && (
        <ApplicationFormModal
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddApplication}
          onUpdate={handleUpdateApplication}
          editingApp={editingApp}
        />
      )}
    </div>
  );
}

export default App;
