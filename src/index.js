import inquirer from "inquirer";
import chalk, { colorNames } from "chalk";

const dataStructures = [
  {
    id: 1,
    name: "Arrays",
    difficulty: "Easy",
    completed: false,
  },
  {
    id: 2,
    name: "Linked lists",
    difficulty: "Moderate",
    completed: false,
  },
  {
    id: 3,
    name: "Stacks",
    difficulty: "Easy",
    completed: false,
  },
  {
    id: 4,
    name: "Queues",
    difficulty: "Easy",
    completed: false,
  },
  {
    id: 5,
    name: "Hash tables",
    difficulty: "Moderate",
    completed: false,
  },
  {
    id: 6,
    name: "Binary search trees",
    difficulty: "Hard",
    completed: false,
  },
  {
    id: 7,
    name: "Heaps",
    difficulty: "Hard",
    completed: false,
  },
  {
    id: 8,
    name: "Graphs",
    difficulty: "Hard",
    completed: false,
  },
  {
    id: 9,
    name: "Trees",
    difficulty: "Moderate",
    completed: false,
  },
  {
    id: 10,
    name: "Sets",
    difficulty: "Easy",
    completed: false,
  },
  {
    id: 11,
    name: "Maps",
    difficulty: "Easy",
    completed: false,
  },
  {
    id: 12,
    name: "Tries",
    difficulty: "Moderate",
    completed: false,
  },
  {
    id: 13,
    name: "Bloom filters",
    difficulty: "Easy",
    completed: false,
  },
];

inquirer
  .prompt([
    {
      type: "list",
      name: "dataStructure",
      message: "Please select a data structure to practice:",
      choices: dataStructures.map((ds) => ({
        name: `${
          ds.completed ? chalk.green(ds.name) : chalk.yellow(ds.name)
        } (${ds.difficulty})`,
        value: ds.id,
      })),
    },
  ])
  .then((answers) => {
    // Get the selected data structure from the `dataStructures`
    const dataStructure = dataStructures.find(
      (ds) => ds.id === answers.dataStructure
    );

    // Print the selected data structure
    console.log(`You selected: ${dataStructure.name}`);
  });
