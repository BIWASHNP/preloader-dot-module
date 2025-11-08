let Rationed = 0;
const table = document.getElementById('memberTable');
    const assertion = document.getElementById('assertionText');

    const rows = table.querySelectorAll('tbody tr');
    const count = rows.length;

    assertion.textContent = `Assertion: ${count} members listed upon company prospect at current view.`;