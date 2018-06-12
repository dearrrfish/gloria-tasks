;(async () => {
  const { cheerio } = await importScripts('gloria-utils');
  const html = await fetch('http://www.ningmeng.name').then(res => res.text());
  const $ = cheerio.load(html);
  return $('#main article.post-card').map((i, el) => ({
    title: $(el).find('h2.post-card-title').text(),
    url: $(el).find('a').attr('href'),
    iconUrl: 'http://www.ningmeng.name/wp-content/uploads/2018/05/2018052221300826.png',
    imageUrl: (/(src=)(http[^&]*)/.exec($(el).find('img').attr('src') || '') || [])[2]
  })).get();
})().then(commit)