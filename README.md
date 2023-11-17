<div align="center">
    <img src="https://github.com/saltify-mob/meilisearch-demo/assets/141512659/7c2d7485-3117-4970-81eb-eb15455ccc61" alt="Logo" height="300px">
</div>

<div align="center">
<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/93320021/283743255-0ecf7143-f010-410b-aff8-14edc4113e43.gif" />
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

* [Meilisearch Quick Start](https://www.meilisearch.com/docs/learn/getting_started/quick_start)
* [Getting Start with Meilisearch Cloud](https://www.meilisearch.com/docs/learn/getting_started/cloud_quick_start)
<p align="right">(<a href="#readme-top">back to top</a>)</p>
