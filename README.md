# What is this?

A demonstration React app that lists stories on http://www.stuff.co.nz,
and allows the user to quickly view headlines for the most recent,
most visited and most shared stories.

This web app demonstrates the following:

* the use of WebPack as a build system for both dev and prod targets

* the use of [FLIP animations](https://aerotwist.com/blog/flip-your-animations/) with React, using
[react-flip-move](http://joshwcomeau.github.io/react-flip-move/examples/#/?_k=b9uug2)
to animate the rendering of data on the page using CSS Transform Translate.

* the use of [dokku](http://dokku.viewdocs.io/dokku/), a docker-powered PaaS,
to easily deploy our application to a server.

# Installation

	npm install

# Configuration

Configuration such as the URL to use to retrieve our JSON data is kept in `config.json`.

Note that the feed is a augmented proxied version of the normal stuff feed, generated by the
[stuff-augmented-json](https://github.com/jcdarwin/stuff-augmented-json) app.

# Development

	// uses webpack.config.development.js
	npm start

In development, the feed URL in `config.json` is set to be http://localhost:9000/?limit=10,
meaning that we presume you're running the [stuff-augmented-json](https://github.com/jcdarwin/stuff-augmented-json)
app locally too, though you can easily change the URL in `config.json` to point
to another endpoint.

# Build for production

	// uses webpack.config.production.js
	npm run build

We choose to serve [React](https://facebook.github.io/react/),
[ReactDOM](https://www.npmjs.com/package/react-dom) and
[moment](http://momentjs.com/) using a CDN, rather than building them into our bundle,
and so we specifiy them as `externals` in the `webpack.config.production.js`.

We also split out other vendor code contained in the `node_modules` folder into
a separate `vendor.bundle.js`.
Amongst other things, this helps us keep a better eye on the size of our bundled
code and the size of the bundled code of our dependencies.

Once built, you'll be able to view the results by running a web server in the
root directory -- we suggest [http-server](https://www.npmjs.com/package/http-server).

# Deployment

We use [dokku](http://dokku.viewdocs.io/dokku/), so, presuming our dokku server
is to be found at http://dokku.me, deployment is as easy as:

	git remote add dokku dokku@dokku.me:stuff-mini-new

	git push dokku master

We previously used [Florian Heinemann's custom
buildpack](https://www.florianheinemann.com/github/dokku/2014/11/17/Hosting-static-pages-on-Dokku.html), specified in the `.env` file, to deploy a static site.
However, Dokku now has this built in.

When deployed to our dokku server, the presence of the `.static` file is enough to
trigger the buildpack to treat our app as a static site.

Once deployed, we can visit our app at http://stuff-mini-news.dokku.me/

# Discussion

The use of animation between states is something that is not typically done in React,
as React controls the rendering once it detects that state has changed.
However, it is possible using [FLIP animations](https://aerotwist.com/blog/flip-your-animations/),
and we make use of [react-flip-move](http://joshwcomeau.github.io/react-flip-move/examples/#/?_k=b9uug2)
to accomplish this, as outlined in [Joshua Comeau's article](https://medium.com/developers-writing/animating-the-unanimatable-1346a5aab3cd#.pzz6laf8f) and [demonstrated here](http://joshwcomeau.github.io/react-flip-move/examples/#/?_k=gltnz2).



