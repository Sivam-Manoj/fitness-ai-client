// Function to fix word spacing dynamically
export const fixSpacing = (text: string): string => {
  return text
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Fix camelCase words
    .replace(/(\w)([.,!?])/g, "$1 $2") // Ensure space before punctuation
    .replace(/([.,!?])(\w)/g, "$1 $2") // Ensure space after punctuation
    .replace(/(\w)([-])/g, "$1 $2") // Ensure space before hyphens
    .replace(/\s+/g, " ") // Normalize spaces
    .trim();
};
