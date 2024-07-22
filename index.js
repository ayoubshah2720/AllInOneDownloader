const { 
  ndown,
  alldown,
  ytdown,
  tikdown,
  likee,
  threads,
  capcut,
  pintarest,
  GDLink,
  fbdown,
  fbdown2,
  twitterdown
  } = require("nayan-media-downloader")
const express = require('express')
const cors = require('cors')

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get('/fb', async  (req, res) => {
    // let URL = await ndown("https://www.facebook.com/100000959749712/posts/pfbid0288xi44nvodK9d7r3wf4LHeM3dtEsVghQXmz5t59axwz7KdLStYyg4qfvTVrAL27Ll/?app=fbl")
    let URL = await ndown(req.url);
    // console.log(URL)
    res.send(URL);
  });

  app.get('/tiktok', async  (req, res) => {
    let URL = await tikdown(req.url);
    // let URL = await tikdown("https://www.tiktok.com/@zeeshan.ali.702/video/7360711854768901409?is_from_webapp=1&sender_device=pc&web_id=7394411099858257409")
    // console.log(URL)
    res.send(URL);
  });

  app.get('/yt', async  (req, res) => {
    // let URL = await ytdown("https://youtu.be/aRSuyrZFu_Q?si=bsfzgeeGmRpsHqnF")
    let URL = await ytdown(req.url);
    res.send(URL);
  });

  app.get('/twitter', async  (req, res) => {
    // res.render('index');
    // let URL = await twitterdown("https://twitter.com/TeamAbhiSha/status/1743351410761019794?t=vms8wxcU0mQuhVxwGCHjFw&s=19")
    let URL = await twitterdown(req.url);
    res.send(URL);
  });
  
  
  app.get("/facebook", async (req, res) => {
    const key = "Nayan"; //dont change key
    const cookie = "cookie"; //past your fb cookie here
    const link = req.url; //past video link

    fbdown(link, cookie, key).then((data) => {
      res.send(data);
    });
  });
  
  app.get("/facebook2", async (req, res) => {
    const key = "Nayan"; //dont change key
    const cookie = "cookie"; //past your fb cookie here
    const link = req.url; //past video link

    fbdown2(link, key).then(data => {
        res.send(data);
      });
  });
  
  app.get("/gdDown", async (req, res) => {
    const url = req.url; // Public Google Drive Url
    GDLink(url).then(data => {
    res.send(data);
    });
  });

  app.get("/pinterest", async (req, res) => {
    const url = req.url; // pintarest post url
    pintarest(url).then(data => {
    res.send(data);
        });
  });

  app.get("/capCut", async (req, res) => {
    const url = req.url; // capcut link
    capcut(url).then(data => {
    res.send(data);
    });
  });

  app.get("/likee", async (req, res) => {
    const url = req.url; // past url
    likee(url).then(data => { 
    res.send(data); 
    });
  });
  
  app.get("/thread", async (req, res) => {
    const url = req.url; // past url
    threads(url).then(data => { 
        res.send(data); 
      });
  });

  app.get("/aioDown", async (req, res) => {
    const url = req.url; // past url
    alldown(url).then(data => {
    res.send(data);
    });
  });
  
  const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});