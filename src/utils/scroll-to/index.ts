export const scrollTo = (id: string, offset: number = 0): void => {
  const htmlElement: HTMLElement | null = document.querySelector<HTMLElement>(
    `#${id}`
  );
  if (!htmlElement) return;
  const top: number = htmlElement.offsetHeight || 0;
  window.scrollTo({ top: top - offset, behavior: 'smooth' });
};
