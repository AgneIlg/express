import { header } from "../components/header.js"

function pageServices () {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Jega</title>
    </head>
    <body>
       ${header()}
        <main>
           <h1>SERVICES puslapis</h1>
      </main>
  </body>
  </html>`
}
export { pageServices }