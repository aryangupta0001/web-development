const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/HTML');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Finaryan Blogs</title>
      <link rel="shortcut icon" href="./images/chandra.ico" type="image/x-icon">
      
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SignWriting&display=swap" rel="stylesheet">
  
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap" rel="stylesheet">
  
      <link rel="preconnect" href="https://fonts.googleapis.com">
  
      <link rel="preconnect" href="https://fonts.googleapis.com">
  
  
  
      
      <style>
          *{
              box-sizing: border-box;
          }
  
          html{
              display: block;
              font-size: 10px;
              margin: auto;
  
          }
  
          body{
              width: 98vw;
              /* height: 200vh; */
              background-color: antiquewhite;
  
              border: 0.2rem solid black;
  
              display: block;
              margin: auto;
  
              margin-top: 0em;
          }
  
          header{
              position: sticky;
              top: 0rem;
          }
  
          .navbar{
              height: 20vh;
  
              display: flex;
              justify-content: space-evenly;
  
              background-color: rgb(14, 57, 232);
  
              position: sticky;
              top: 1rem;
          }
  
          .logo{
              width: 10vw;
          }
          
          #HomeLogo{
              width: 100%;
              height: 100%;
              padding: 1rem 0rem;
  
          }
  
          .quick_links{
              /* background-color: rgba(0, 255, 255, 0.303); */
              display: flex;
              justify-content: space-evenly;
              /* justify-content: center ; */
              
              width: 70vw;
              
          }
          
          .quick_links a{
              display: flex;
              justify-content: center;
              align-items: center;
  
              width: 20vw;
              height: auto;
              /* font-family: 'Barlow Condensed', sans-serif;     */
              /* font-family: 'Roboto', sans-serif; */
              font-family: 'Playfair Display', serif;
  
              text-decoration: none;
              font-size: 3.5em;
              text-align: center;
  
              color: black;
              
              border: 0.05em solid rgb(0, 0, 0); 
              background-color: #fff700;
              border-radius: 3rem;
              
              padding: 0.5rem;
              align-self: center;
          }
          
          .quick_links a:hover{
              background-color: rgb(49, 255, 49);
              /* color: white; */
          }
  
          .account{
              /* background-color: bisque; */
              width: 10vw;
              display: flex;
              justify-content: center;
          }
          
          .account button{
              /* height: auto; */
  
              border: none;
              background-color: white;
              align-self: center;
              text-align: center;
              font-size: 3rem;
  
              cursor: pointer;
          }
  
          #prof_icon{
              max-height: 0.8em;
              margin: auto;
          }
          
          #BProf:hover{
              background-color: aquamarine;
              padding: 0.4em;
          }
  
          #BProf:active{
              background-color: rgb(255, 132, 0);
              color: white;
          }
  
          main{
              display: flex;
              justify-content: space-evenly;
              padding: 1.5rem 0rem;
          }
  
          
          main > .leftsection{
              border: 0.2rem solid black;
              background: url(./images/aside_left_1.jpg);
              background-repeat: repeat-y;
              background-size: contain;
              height: 350vh;
              width: 20vw;
          }
  
          main > .rightsection{
              border: 0.2rem solid black;
              background: url(./images/aside_right_1.jpg);
              background-repeat: repeat-y;
              background-size: contain;
              height: 350vh;
              width: 20vw;
          }
  
          .articles{
              height: 350vh;
              width: 55vw;
              padding: 0rem 1rem;
              background-color: antiquewhite;
          }
          
          .row{
              font-size: 2.8rem;
          }
  
          .row span{
              color: grey;
              font-size: 1.8rem;
              font-style: italic;
              margin-top: 0;
          }
  
          .row h2{
              margin-top: 2rem;
              margin-bottom: 1rem;
          }
  
          .articles a{
              text-decoration: none;
              font-size: xx-large;
              margin: 1.5rem 0rem;
              /* background-color: black; */
  
              color: black;
  
              padding: 0.2rem;
          }
  
          hr{
              height: 0;
              background: white;
              border: 0.1rem solid chartreuse;
              margin: 1rem 0rem;
          }
  
          @media  (min-width: 0px) and (max-width: 426px){
              main > .leftsection{
                  display: none;
              }
  
              main > .rightsection{
                  display: none;
              }
  
              .articles{
                  width: 90vw;
              }
          }
  
          </style>
  </head>
  <body>
      
      <header>
          
          <nav id="nav1" class="navbar">
  
              <div class="logo">
                  <a href="./website.html">    <img src="images/chandra_logo.png" height="120" alt="CHANDRA BLOGS" id="HomeLogo"> </a>
              </div>
  
  
              <div id="QuickLinks" class="quick_links">
  
                  <a href="https://www.youtube.com/" target="_blank">Top Blogs</a>
  
                  <a href="#" target="_blank">Category</a>
  
                  <a href="#" target="_blank">Recent Reads</a>
                  
              </div>
  
              <div class="account">
                  <button class="profile" id="BProf">
                      <img src="./images/prof_icon.png" alt="" id="prof_icon">
                      Profile
                  </button>
              </div>
  
  
          </nav>
              
      </header>
  
      <main>
          <aside class="leftsection">
          </aside>
  
          <div class="articles">
  
              <div class="row" id="row1">
                  <h2>
                      <a href="https://www.nerdwallet.com/article/investing/stock-market-basics-everything-beginner-investors-know#:~:text=Stock%20trading%20involves%20buying%20and,several%20times%20throughout%20the%20day." target="_blank">Stock Market Basics: What Beginner Investors Should Know</a>
                  </h2>
  
                  <span>
                      Posted on 22-Sep-2022
                  </span>
              </div>
              <hr>
  
  
              <div class="row" id="row2">
                  <h2>
                      <a href="https://economictimes.indiatimes.com/industry/banking/finance/banking/know-everything-about-xirr-in-mutual-funds/articleshow/95246361.cms" target="_blank">Know everything about XIRR in mutual funds</a>
                  </h2>
  
                  <span>
                      Posted on 22-Sep-2022
                  </span>
              </div>
              <hr>
  
  
              <div class="row" id="row2">
                  <h2>
                      <a href="https://www.investopedia.com/terms/c/cagr.asp" target="_blank">Compound Annual Growth Rate (CAGR) Formula and Calculation</a>
                  </h2>
  
                  <span>
                      Posted on 22-Sep-2022
                  </span>
              </div>
              <hr>
          
          </div>
  
          <aside class="rightsection">
          </aside>
      </main>
  
  
      </body>
      </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});