import { useState } from "react";

const labelsData = [
  { id: 1, name: "Typescript" },
  { id: 2, name: "Javascript" },
  { id: 3, name: "Go" },
  { id: 4, name: "React" },
  { id: 5, name: "Python" },
  { id: 6, name: "Ruby" },
  { id: 7, name: "Rust" },
  { id: 8, name: "Java" },
  { id: 9, name: "Node.js" },
  { id: 10, name: "Next.js" },
];

export const MultiSelectDropdown = () => {
  const [labels, setLabels] = useState([]);

  const addLabel = (labelName) => {
    // JavaScript
    if (!labels.includes(labelName)) {
      setLabels([...labels, labelName]);
    }
  };

  console.log("labels", labels);

  return (
    <div className="flex flex-col gap-1 pt-6 justify-center items-center">
      <div className="bg-slate-50 border border-slate-400 w-[500px] h-[45px] rounded-md flex items-center gap-2 pl-1 py-1 flex-wrap overflow-auto">
        {labels.map((label) => {
          return (
            <div class="bg-blue-100 text-blue-800 text-xs font-medium py-0.5 px-1 rounded-sm dark:bg-gray-700 dark:text-blue-400 border border-blue-400 flex items-center gap-1 justify-center">
              {label}
              <button className="text-black">x</button>
            </div>
          );
        })}
      </div>
      <div className="bg-white border border-slate-500 w-[500px] h-[250px] rounded-md  overflow-auto">
        {labelsData.map((label) => {
          return (
            <p
              key={label.id}
              className="cursor-pointer hover:bg-gray-200 p-1.5 text-sm"
              onClick={() => addLabel(label.name)}
            >
              {label.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};
