const projectStatus = {
  PENDING: {
    description: "Pending Execution",
  },
  SUCCESS: {
    description: "Executed Successfully",
  },
  FAILURE: {
    description: "Execution Failed",
  },
};

class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
  status = projectStatus.PENDING;

  updateProjectStatus(newStatus) {
    if (newStatus) {
      this.status = newStatus;
    }
  }
}

class ProjectIdeaBoard {
  ideas = [];
  constructor(title) {
    this.title = title;
  }
  pin(projectIdea) {
    this.ideas.push(projectIdea);
  }
  unpin(projectIdea) {
    const ideaAfter = this.ideas.filter(
      (idea) => idea.title !== projectIdea.title
    );
    this.ideas = ideaAfter;
  }
  count() {
    return this.ideas.length;
  }
  formatToString() {
    const str =
      this.ideas
        .map(
          (idea) =>
            `${idea.title} (${idea.status.description}) - ${idea.description}`
        )
        .join("\n") + "\n";
    return `${this.title} has ${this.count()} idea(s)\n${
      this.count() > 0 ? str : ""
    }`;
  }
}

const test = new ProjectIdea(
  "Finish FCC",
  "Complete the freeCodeCamp curriculum",
  projectStatus.PENDING
);
test.updateProjectStatus(projectStatus.SUCCESS);

const test2 = new ProjectIdeaBoard("My Project Ideas");

test2.pin(test);

const regime = new ProjectIdea(
  "Fitness Tracker App",
  "An app that tracks user workouts, diet, and sleep patterns."
);

regime.updateProjectStatus(projectStatus.FAILURE);
test2.pin(regime);
console.log(test2.formatToString());
