export const capitalizeLetterRegex = (str: string): string => {
  return str.replace(/^./, (match) => match.toUpperCase());
};

export const addSlashConditional = (str: string): string => {
  const slash = '/';

  return str.startsWith(slash) ? str : slash + str;
};
