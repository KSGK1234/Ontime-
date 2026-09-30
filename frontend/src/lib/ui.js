export const openDemoModal = () => {
  window.dispatchEvent(new CustomEvent("demo-modal:open"));
};
