This project is a stand-alone application that leverages the (webconnex public API)[https://docs.webconnex.io/api/v2/#endpoints] to make requests to a form and inventory and display the published forms with the dates and times and the inventory they have remaining for a given event. 

Note: This was specifically designed with the Stanley Hotel in mind but could be extended to other customers in the future. If you need to do this please initiate the conversation in the `#engineering` channel on slack.

## Architecture
This is a NextJS app which leans heavily on server-side rendering and react. 

Several components are configurable to either show or hide bases on ENV variables.

Please see the confluence document here for more details: https://webconnex.atlassian.net/wiki/spaces/ENG/pages/1048577/Stanley+Hotel+Inventory+Display


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Environment Variables

This project uses [`next/dotenv`](https://nextjs.org/docs/basic-features/environment-variables) to load environment variables from a `.env` file.

## URL Formats

### Ordering of Element

If you want to have an page move up to the front of the listing you can append any number of page IDs to the URL. For example

`http://stanley-hotel.vercel.app/?limit=6&logo=true&order=608698&order=596547&order=596631&order=596627&order=596630&order=603469`


