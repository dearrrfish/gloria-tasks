;(async () => {
  const { cheerio } = await importScripts('gloria-utils');
  const html = await fetch('https://www.g-cores.com/categories/1').then(resp => resp.text());
  const $ = cheerio.load(html);
  return $('.showcase.showcase-article').map((i, el) => ({
    title: $(el).find('.showcase_text h4').text().trim(),
    message: $(el).find('.showcase_info').text().trim(),
    url: $(el).find('.showcase_text a').attr('href'),
    imageUrl: $(el).find('img').attr('src'),
    iconUrl: 'https://static.g-cores.com/favicon.ico',
  })).get().slice(0, 10);
})().then(commit);
