# Combine Assets for LadyBird website

Example code showing the effect that multiple stylesheet files have on the loading process of our web pages and the
 ways we can solve it.

To run the demo, once you have downloaded the code to your computer, you must have Docker Compose installed.

This will create a nginx reverse proxy link with the site https://www.ladybirdeducation.co.uk/ to used it as an example
to show css combination. 

Then we create the virtual machines with the command:

`docker-compose up`

Then open your browser. You can access the website through the next addresses:

`http://localhost:8090`

This will show the direct site through the reverse proxy.

`http://localhost:8090/index.html`

This will show the cached version of the home page as it was when we created this example.

`http://localhost:8090/index-without-css.html`

This will show the cached version of the home page but without all the css directly located on the website hosting.

`http://localhost:8090/index-combined-css.html`

This will show the cached version of the home page with the combined css files.


More information and videos about SEO, SEM/PPC and WPO on Seocom's Youtube channel:

https://www.youtube.com/channel/UCYjFgEsadoPlqlnmVKPoChw
