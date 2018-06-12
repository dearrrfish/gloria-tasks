;(async () => {
  const { cheerio } = await importScripts('gloria-utils');
  const html = await fetch('https://www.g-cores.com/categories/2').then(resp => resp.text());
  const $ = cheerio.load(html);
  return $('.showcase.showcase-news').map((i, el) => ({
    title: $(el).find('.showcase_text h4').text().trim(),
    message: $(el).find('.showcase_info').text().trim(),
    url: $(el).find('a').attr('href'),
    imageUrl: $(el).find('img').attr('src'),
    iconUrl: 'https://static.g-cores.com/favicon.ico',
  })).get().slice(0, 10);
})().then(commit);
