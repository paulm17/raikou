const simplifyEvent = (evt: MouseEvent) => {
  return {
    evt,
    x: evt.clientX,
    y: evt.clientY,
    target: evt.target,
  };
};
export { simplifyEvent };
