import series from '../data/data.js'
import { filterSeriesByPlatform, renderSeries } from '../js/modules.js';

const filteredSeries = filterSeriesByPlatform(series, 'HBO');
renderSeries(filteredSeries, 'series-container');