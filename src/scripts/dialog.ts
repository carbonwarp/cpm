// <button data-open="id"> opens <dialog id="id">. Clicking the backdrop closes it.
document.querySelectorAll<HTMLElement>('[data-open]').forEach((btn) =>
  btn.addEventListener('click', () =>
    document.querySelector<HTMLDialogElement>(`#${btn.dataset.open}`)?.showModal(),
  ),
);

document.querySelectorAll('dialog').forEach((dialog) =>
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  }),
);
