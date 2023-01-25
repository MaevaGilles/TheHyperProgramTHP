

const PageList = (argument = '') => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, '-');

    const displayResults = (articles) => {
      const resultsContent = articles.map((article) => (
        `<article class="cardGame">
          <h1>${article.name}</h1>
          <a href="#pagedetail/${article.id}">
          <img src="${article.background_image}" id=image alt="${article.name}">
          </a>
        </article>`
      ));
      const resultsContainer = document.querySelector('.page-list .articles');
      resultsContainer.innerHTML = resultsContent.join("\n");
    };

    const fetchList = (url, argument) => {
      const finalURL = argument ? `${url}&search=${argument}` : url;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          displayResults(responseData.results);
          console.log(responseData.results);
        });
    };

    
    fetchList(`https://api.rawg.io/api/games?key=ca4e367fa7684d7e9173ef3c0ddc9f72`, cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles">Loading...</div>
      </section>
    `;

    preparePage();
    console.log(pageContent);
  };

  render();
  
};


export default PageList;