import Tasks from "./Tasks";

const SelectedProject = ({ projects, onDelete }) => {
 
  const dateFormated = new Date(projects.dueDate).toLocaleString('us', {
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  return (
    <section className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex justify-between item-center">
          <h2 className="text-3xl font-bold text-stone-600 mb-2">{projects.title}</h2>
          <button onClick={onDelete} className="text-stone-600 hover:text-stone-950">
            Delete
          </button>
        </div>
        <p className="my-4 text-stone-400">{dateFormated} </p>
        <p className="text-stone-600 white-pre-wrap">{projects.description} </p>
      </header>
      <Tasks />
    </section>
  );
};

export default SelectedProject;
