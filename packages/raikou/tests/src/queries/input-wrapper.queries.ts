export const inputWrapperQueries = {
  getLabel: (container: HTMLElement) =>
    container.querySelector(".raikou-InputWrapper-label")!,
  getError: (container: HTMLElement) =>
    container.querySelector(".raikou-InputWrapper-error")!,
  getRequired: (container: HTMLElement) =>
    container.querySelector(".raikou-InputWrapper-required")!,
  getDescription: (container: HTMLElement) =>
    container.querySelector(".raikou-InputWrapper-description")!,
};
