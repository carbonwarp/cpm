// Live filter: <input data-filter="#list"> filters the [data-search] items inside #list.
// An input named "q" is also filled from the ?q= URL param, and "/" focuses it.
document.querySelectorAll<HTMLInputElement>('input[data-filter]').forEach((input) => {
  const list = document.querySelector(input.dataset.filter!);
  if (!list) return;
  const items = list.querySelectorAll<HTMLElement>('[data-search]');
  const empty = list.querySelector<HTMLElement>('[data-empty]');

  const run = () => {
    const q = input.value.trim().toLowerCase();
    let shown = 0;
    items.forEach((el) => {
      const hit = el.dataset.search!.includes(q);
      el.hidden = !hit;
      if (hit) shown++;
    });
    if (empty) empty.hidden = shown > 0;
  };

  if (input.name === 'q') input.value = new URLSearchParams(location.search).get('q') ?? '';
  input.addEventListener('input', run);
  run();
});

document.addEventListener('keydown', (e) => {
  if (e.key !== '/' || (e.target as HTMLElement).matches('input, textarea')) return;
  e.preventDefault();
  document.querySelector<HTMLInputElement>('input[name=q]')?.focus();
});
