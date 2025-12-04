const poll = new Map();

const addOption = (option) => {
  if (option === "") {
    return `Option cannot be empty.`;
  }
  if (!poll.has(option)) {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
  } else {
    return `Option "${option}" already exists.`;
  }
};

const vote = (option, voterId) => {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  } else {
    const setVoter = poll.get(option);
    if (!setVoter.has(voterId)) {
      setVoter.add(voterId);
      return `Voter ${voterId} voted for "${option}".`;
    } else {
      return `Voter ${voterId} has already voted for "${option}".`;
    }
  }
};

const displayResults = () => {
  let output = `Poll Results:\n`;
  poll.forEach((val, key) => {
    output += `${key}: ${val.size} votes\n`;
  });

  return output.trim();
};

addOption("Egypt");
addOption("Turkey");
addOption("Malaysia");
addOption("Turkey");
addOption("Algeria");
vote("Malaysia", "traveler1");
vote("Algeria", "traveler1");
vote("Algeria", "traveler1");
vote("Nigeria", "traveler2");
vote("Egypt", "Wade");
vote("Egypt", "Ka");
vote("Egypt", "Diaw");
poll;

console.log(displayResults());
