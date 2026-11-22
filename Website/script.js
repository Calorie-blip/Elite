// Display hidden sections

const triggers = document.querySelectorAll('[data-index]:not(.Hidden)');
const panels = document.querySelectorAll('.Hidden');

triggers.forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();

    const targetIndex = trigger.dataset.index;
    const targetPanel = document.querySelector(`.Hidden[data-index="${targetIndex}"]`);

    if (!targetPanel) return;

    // 1. Reset all triggers and panels
    triggers.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));

    // 2. Highlight all matching triggers and show the panel
    document.querySelectorAll(`[data-index="${targetIndex}"]:not(.Hidden)`).forEach(match => {
      match.classList.add('active');
    });

    targetPanel.classList.add('active');

    // 3. Always smoothly scroll to the panel (even if it was already open)
    targetPanel.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

function setupDropdownMenu() {
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    // Open when mouse enters
    dropdown.addEventListener('mouseenter', () => {
      dropdown.classList.add('open');
    });

    // Close when mouse leaves
    dropdown.addEventListener('mouseleave', () => {
      dropdown.classList.remove('open');
    });

    // Close immediately when any link inside is clicked
    dropdown.querySelectorAll('.dropdown-menu a').forEach(link => {
      link.addEventListener('click', () => {
        dropdown.classList.remove('open');
      });
    });
  });
}

setupDropdownMenu();

