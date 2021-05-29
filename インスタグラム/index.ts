export default async () => {
    const instagramImage = [].slice.call(document.querySelectorAll('[data-instagram-image]'))
    const instagramurl = [].slice.call(document.querySelectorAll('[data-instagram-url]'))
    if (!instagramImage.length) return
  
    const url = 'api-url';
    (await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(async (data) => {
        const getInstaImages = await data.json();
        const datas = getInstaImages.media.data
        instagramImage.forEach((e, i) => {
          const imageUrl = datas[i].media_url;
          const shortcode = datas[i].permalink;
          e.setAttribute('style', `background-image: url(${imageUrl})`);
          instagramurl[i].setAttribute('href', shortcode);
        });
      })
      .catch(err => {
        console.log(err)
      }));
  }