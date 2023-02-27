Lien Vercel :  https://gaming-platform-api.vercel.app/

Create a web page that displays a list of games, using the rawg api with the following features: (documentation : https://api.rawg.io/docs/#tag/games, you will need to generate an API key)

The games should be displayed in a responsive grid with four columns on desktop and two columns on mobile devices.
The grid should be displayed in a container of maximum 1440px
Each game card should display the following properties :
image
name
metacritic score
available platforms
Tags (deplayed as tags - maximum 2 displayed)
Clicking on a game should open a modal window that displays the following properties :
image
name
available platforms
complete reviews (ratings property in the API)
games screenshots, in a horyzontal carousel.
Implement a pagination
Implement search functionality that allows the user to search for games by name.
You need to use a modern front-end framework such as React, svelte or Vue.js.
Bonus points for:

Using Svelte (Framework used in the Decathlon tech stack)
Adding filtering (name, release date, popularity, rating)
Implementing client-side caching to reduce the number of API requests.
Making the design visually appealing and user-friendly.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.



Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
