export function setLessVariables(variables) {
  const newVars = {};
  Object.keys(variables).forEach(variable => (newVars[`@${variable}`] = variables[variable]));

  if (window.less) {
    less.modifyVars(newVars);
  }
}
