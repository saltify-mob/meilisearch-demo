# meilisearch-demo
![saltify-logo](https://github.com/saltify-mob/meilisearch-demo/assets/141512659/115779c7-bff4-4263-a8f6-c3d4cf15c0c8)

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

## Start with setting up the Meilisearch Cloud project and upload your data

1. Follow the instructions on [Meilisearch Cloud](https://www.meilisearch.com/docs/learn/getting_started/cloud_quick_start).
   
2. When uploading your database file as an index, make sure that the Primary key name is the same as the id name in your JSON. We use a JSON file containing a list of people with id, name, and balance. Below, the primary key is "id":
```sh
[
  {
    "id": "6556187eb416523366f70aa0",
    "name": "Holland Doyle",
    "balance": "$1,488.20"
  },
  {
    "id": "6556187e004a67820d0168a7",
    "name": "Marylou Ochoa",
    "balance": "$3,122.83"
  }, ...
```
3. Install Meilisearch in your project src folder.

```sh
 npm install meilisearch

```
4. Import below into your project.

```sh
import { MeiliSearch } from 'meilisearch'
import movies from './movies.json'
```
5. Use it in your project. Make sure that the index name matches the name you specified in the Meilisearch Cloud dashboard, and that the url and api-key matches the ones in your Meilisearch project.

```sh
const client = new MeiliSearch({
  host: 'yourURL',
  apiKey: 'yourAPIKey'
})
client
      .index("people")
      .search(search)
      .then((res) => console.log(res));
```

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
<p align="right">(<a href="#readme-top">back to top</a>)</p>
