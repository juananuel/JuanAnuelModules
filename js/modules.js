export function filterSeriesByPlatform(series, platform) {
  return series.filter(serie => serie.platform === platform && serie.isStreaming);
}

export function renderSeries(series, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  series.forEach(serie => {
    const card = document.createElement('div');
    card.classList.add('card')
    card.innerHTML = `
        <h2>${serie.title}</h2>
        <p>Plataforma: ${serie.platform}</p>
    `;
    container.appendChild(card);
  });
}
