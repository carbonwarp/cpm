// <button data-copy="text"> copies the text to the clipboard.
document.querySelectorAll<HTMLElement>('[data-copy]').forEach((btn) =>
  btn.addEventListener('click', async () => {
    const label = btn.textContent;
    await navigator.clipboard.writeText(btn.dataset.copy!);
    btn.textContent = 'Copied';
    setTimeout(() => (btn.textContent = label), 1500);
  }),
);
