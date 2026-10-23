function renderPathAtlas(){
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const sequenceName = sequence => sequence.title.replace(/^Последовательность\s+\d+[.:]?\s*/, '');
  return `<details class="path-atlas" open>
    <summary class="path-atlas-heading">
      <span class="path-atlas-seal" aria-hidden="true">✧</span>
      <span><small>АТЛАС ПОТУСТОРОННЕГО</small><strong>Все пути одним взглядом</strong><em>От последовательности 9 до последовательности 0</em></span>
      <span class="path-atlas-count">22 ПУТИ</span>
    </summary>
    <div class="path-atlas-body">
      <p>Начальная и высшая последовательности каждого пути. Нажмите на строку, чтобы открыть все его ступени и способности.</p>
      <div class="path-atlas-grid">${BOOK.paths.map((path, index) => `<a class="path-atlas-entry" data-atlas-path="${escape(path.slug)}" href="#path/${escape(path.slug)}">
        <span class="path-atlas-number">${String(index + 1).padStart(2, '0')}</span>
        <img src="assets/${escape(path.asset)}.jpg" alt="" loading="lazy">
        <span class="path-atlas-copy"><strong>${escape(path.title)}</strong><small><b>9</b> ${escape(sequenceName(path.sequences[0]))}<i aria-hidden="true">→</i><b>0</b> ${escape(sequenceName(path.sequences[path.sequences.length - 1]))}</small></span>
        <span class="path-atlas-arrow" aria-hidden="true">↗</span>
      </a>`).join('')}</div>
    </div>
  </details>`;
}
