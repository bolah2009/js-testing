const capitalise = string => {
  const letters = string.toLowerCase();
  const toUpperCase = word => word.toUpperCase();
  const capitaliseWord = word => word.replace(/\w/, toUpperCase);
  return letters.replace(/\w+/g, capitaliseWord);
};

export default capitalise;
