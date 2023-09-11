const alphanumericRegex = /^[a-zA-Z0-9\.]*$/g;

export const isAlphaNumeric = (text: string) => {
  return text.match(alphanumericRegex);
};
