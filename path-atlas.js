function renderPathAtlas(){
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const sequenceName = sequence => sequence.title.replace(/^Последовательность\s+\d+[.:]?\s*/, '');
  const levels = Array.from({length:10}, (_, index) => 9 - index);
  return `<details class="path-atlas" open>
    <summary class="path-atlas-heading">
      <span class="path-atlas-seal" aria-hidden="true">✧</span>
      <span><small>АТЛАС ПОТУСТОРОННЕГО</small><strong>Пути и последовательности</strong><em>Все названия от 9-й ступени до 0-й</em></span>
      <span class="path-atlas-count">22 ПУТИ</span>
    </summary>
    <div class="path-atlas-body">
      <p>Каждая строка — путь, каждый столбец — последовательность. Нажмите на название, чтобы открыть её описание.</p>
      <div class="path-atlas-scroll" role="region" aria-label="Таблица путей и последовательностей" tabindex="0">
        <table class="path-atlas-table">
          <thead><tr><th scope="col">Путь</th>${levels.map(level => `<th scope="col"><span>Последовательность</span><strong>${level}</strong></th>`).join('')}</tr></thead>
          <tbody>${BOOK.paths.map(path => `<tr data-atlas-path="${escape(path.slug)}">
            <th scope="row"><a href="#path/${escape(path.slug)}"><img src="assets/${escape(path.asset)}.jpg" alt="" loading="lazy"><span>${escape(path.title)}</span></a></th>
            ${levels.map(level => {const sequence=path.sequences.find(item => item.level===level);return `<td>${sequence ? `<a href="#path/${escape(path.slug)}/${escape(sequence.id)}"><small>${level}</small>${escape(sequenceName(sequence))}</a>` : '—'}</td>`;}).join('')}
          </tr>`).join('')}</tbody>
        </table>
      </div>
      <p class="path-atlas-hint">Листайте таблицу в сторону, чтобы увидеть все последовательности.</p>
    </div>
  </details>`;
}
