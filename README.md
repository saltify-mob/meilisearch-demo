# meilisearch-demo

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

A public demo, showcasing how to integrate meilisearch into a project.

### Getting Started with Meilisearch

This is an example of how to list things you need to use the software and how to install them.

1. Install Meilisearch.


  ```sh
 npm install meilisearch

```
2. Import below into your project.

```sh
import { MeiliSearch } from 'meilisearch'
import movies from './movies.json'
```
3. Use it in your project.

```sh
const client = new MeiliSearch({
  host: 'http://localhost:7700',
  apiKey: 'aSampleMasterKey'
})
client.index('movies').addDocuments(movies)
  .then((res) => console.log(res))

```
### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
<p align="right">(<a href="#readme-top">back to top</a>)</p>
