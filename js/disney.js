import series from '../data/data.js'
import { filterSeriesByPlatform, renderSeries } from '../js/modules.js';

const filteredSeries = filterSeriesByPlatform(series, 'Disney+');
renderSeries(filteredSeries, 'series-container');