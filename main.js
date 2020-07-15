const Discord = require("discord.js");
const discordClient = new Discord.Client();
const puppeteer = require("puppeteer");


const prefix = ",";
discordClient.login(
  process.env.TOKEN
);
discordClient.on("ready", () => {
  console.log(`Logged in as ${discordClient.user.tag}!`);
});
discordClient.on("message", message => {
  if (message.content.substr(0, 1) == prefix) {
    let command = message.content.substr(1).trim();
    if (command === "sao") {
      message.react('✅').then(async f => {
        const browser = await puppeteer.launch({
          headless: true,
          args: ["--no-sandbox"]
        });
        const page = await browser.newPage();
        await page.goto("https://www.livechart.me/anime/9733");
        //days
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
        );
        //hours
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
        );
        //minutes
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
        );
        //episode
        await page.waitForXPath("/html/body/div[3]/div/div[2]/div[2]/div[1]");
        let elHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
        );
        let ebHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
        );
        let esHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
        );
        let deHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[1]"
        );
        let asasa = await page.evaluate(el => el.textContent, elHandle[0]);
        let bsbsb = await page.evaluate(ed => ed.textContent, ebHandle[0]);
        let cscsc = await page.evaluate(es => es.textContent, esHandle[0]);
        let scdsf = await page.evaluate(de => de.textContent, deHandle[0]);
        console.log(asasa, "days");
        console.log(bsbsb, "hours");
        console.log(cscsc, "minutes");
        console.log(scdsf, "episode");
        let rers = " days ";
        let timem = asasa.concat(rers);
        let sers = " hours ";
        let dskd = bsbsb.concat(sers);
        let sww = " minutes ";
        let dsad = cscsc.concat(sww);
        let ctw = "";
        let last = "till next episode ";
        let count = ctw.concat(timem, dskd, dsad, last);
        let ti = " of Sword Art Online";
        let title = scdsf.concat(ti);
        message.channel.send({
          embed: {
            color: 0xdb1e4a,
            
            title: title,
            description: ("Days:", count),
        }
        });
        await browser.close();
      });
    } else if (command === "onp") {
        message.react('✅').then(async f => {
        const browser = await puppeteer.launch({
          headless: true,
          args: ["--no-sandbox"]
        });
        const page = await browser.newPage();
        await page.goto("https://www.livechart.me/anime/321");
        //days
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
        );
        //hours
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
        );
        //minutes
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
        );
        //episode
        await page.waitForXPath("/html/body/div[3]/div/div[2]/div[2]/div[1]");
        let elHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
        );
        let ebHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
        );
        let esHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
        );
        let deHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[1]"
        );
        let asasa = await page.evaluate(el => el.textContent, elHandle[0]);
        let bsbsb = await page.evaluate(ed => ed.textContent, ebHandle[0]);
        let cscsc = await page.evaluate(es => es.textContent, esHandle[0]);
        let scdsf = await page.evaluate(de => de.textContent, deHandle[0]);
        console.log(asasa, "days");
        console.log(bsbsb, "hours");
        console.log(cscsc, "minutes");
        console.log(scdsf, "episode");
        let rers = " days ";
        let timem = asasa.concat(rers);
        let sers = " hours ";
        let dskd = bsbsb.concat(sers);
        let sww = " minutes ";
        let dsad = cscsc.concat(sww);
        let ctw = "";
        let last = "till next episode ";
        let count = ctw.concat(timem, dskd, dsad, last);
        let ti = " of One Piece";
        let title = scdsf.concat(ti);
        message.channel.send({
          embed: {
            color: 0xdb1e4a,
            title: title,
            description: ("Days:", count)
          }
        });
        await browser.close();
      });
    } else if (command === "goh") {
        message.react('✅').then(async f => {
        const browser = await puppeteer.launch({
          headless: true,
          args: ["--no-sandbox"]
        });
        const page = await browser.newPage();
        await page.goto("https://www.livechart.me/anime/9808");
        //days
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
        );
        //hours
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
        );
        //minutes
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
        );
        //episode
        await page.waitForXPath("/html/body/div[3]/div/div[2]/div[2]/div[1]");
        let elHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
        );
        let ebHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
        );
        let esHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
        );
        let deHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[1]"
        );
        let asasa = await page.evaluate(el => el.textContent, elHandle[0]);
        let bsbsb = await page.evaluate(ed => ed.textContent, ebHandle[0]);
        let cscsc = await page.evaluate(es => es.textContent, esHandle[0]);
        let scdsf = await page.evaluate(de => de.textContent, deHandle[0]);
        console.log(asasa, "days");
        console.log(bsbsb, "hours");
        console.log(cscsc, "minutes");
        console.log(scdsf, "episode");
        let rers = " days ";
        let timem = asasa.concat(rers);
        let sers = " hours ";
        let dskd = bsbsb.concat(sers);
        let sww = " minutes ";
        let dsad = cscsc.concat(sww);
        let ctw = "";
        let last = "till next episode ";
        let count = ctw.concat(timem, dskd, dsad, last);
        let ti = " of The God of High School ";
        let title = scdsf.concat(ti);
        message.channel.send({
          embed: {
            color: 0xdb1e4a,
            title: title,
            description: ("Days:", count)
          }
        });
        await browser.close();
      });
    } else if (command === "snk") {
        message.react('✅').then(async f => {
        const browser = await puppeteer.launch({
          headless: true,
          args: ["--no-sandbox"]
        });
        const page = await browser.newPage();
        await page.goto("https://www.livechart.me/anime/9996");
        //days
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
        );
        //hours
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
        );
        //minutes
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
        );
        //episode
        await page.waitForXPath("/html/body/div[3]/div/div[2]/div[2]/div[1]");
        let elHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
        );
        let ebHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
        );
        let esHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
        );
        let deHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[1]"
        );
        let dsHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[3]/div[2]/div[1]/p"
        );
        let asasa = await page.evaluate(el => el.textContent, elHandle[0]);
        let bsbsb = await page.evaluate(ed => ed.textContent, ebHandle[0]);
        let cscsc = await page.evaluate(es => es.textContent, esHandle[0]);
        let scdsf = await page.evaluate(de => de.textContent, deHandle[0]);
        let fdfdf = await page.evaluate(ds => ds.textContent, dsHandle[0])
        console.log(asasa, "days");
        console.log(bsbsb, "hours");
        console.log(cscsc, "minutes");
        console.log(scdsf, "episode");
        console.log(fdfdf, "description")
        let rers = " days ";
        let timem = asasa.concat(rers);
        let sers = " hours ";
        let dskd = bsbsb.concat(sers);
        let sww = " minutes ";
        let dsad = cscsc.concat(sww);
        let ctw = "";
        let last = "till the movie is released";
        let count = ctw.concat(timem, dskd, dsad, last);
        let ti = " of Shingeki no Kyojin: Chronicle ";
        let title = scdsf.concat(ti);
        message.channel.send({
          embed: {
            color: 0xdb1e4a,
            title: title,
            description: (count),
            footer: {
              icon_url: 'https://u.livechart.me/anime/9996/poster_image/acd189b4f31e23fe5d330fec1387b372.jpg?style=small&format=jpg',
              text: fdfdf
            }
          }
        });
        await browser.close();
      });
      } else if (command === "rez") {
          message.react('✅').then(async f => {
          const browser = await puppeteer.launch({
            headless: true,
            args: ["--no-sandbox"]
          });
          const page = await browser.newPage();
          await page.goto("https://www.livechart.me/anime/9387");
          //days
          await page.waitForXPath(
            "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
          );
          //hours
          await page.waitForXPath(
            "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
          );
          //minutes
          await page.waitForXPath(
            "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
          );
          //episode
          await page.waitForXPath("/html/body/div[3]/div/div[2]/div[2]/div[1]");
          let elHandle = await page.$x(
            "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
          );
          let ebHandle = await page.$x(
            "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
          );
          let esHandle = await page.$x(
            "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
          );
          let deHandle = await page.$x(
            "/html/body/div[3]/div/div[2]/div[2]/div[1]"
          );
          let asasa = await page.evaluate(el => el.textContent, elHandle[0]);
          let bsbsb = await page.evaluate(ed => ed.textContent, ebHandle[0]);
          let cscsc = await page.evaluate(es => es.textContent, esHandle[0]);
          let scdsf = await page.evaluate(de => de.textContent, deHandle[0]);
          console.log(asasa, "days");
          console.log(bsbsb, "hours");
          console.log(cscsc, "minutes");
          console.log(scdsf, "episode");
          let rers = " days ";
          let timem = asasa.concat(rers);
          let sers = " hours ";
          let dskd = bsbsb.concat(sers);
          let sww = " minutes ";
          let dsad = cscsc.concat(sww);
          let ctw = "";
          let last = "till next episode ";
          let count = ctw.concat(timem, dskd, dsad, last);
          let ti = " of Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season Part 1";
          let title = scdsf.concat(ti);
          message.channel.send({
            embed: {
              color: 0xdb1e4a,
              title: title,
              description: ("Days:", count)
            }
          });
          await browser.close();
        }); 
       }else if (command === 'airing' ) {
        message.react('✅')
        message.channel.send({
          embed: {
            color: 0xdb1e4a,
            title: "Airing Series commands",
            description:("`,sao` - Sword Art Online\n`,onp` - One Piece\n`,snk` - Shingeki no Kyojin: Chronicle\n`,goh` - The God of Highschool\n`,rez` - Re:Zero kara Hajimeru Isekai Seikatsu Season 2 Part 1\n`,enn` - Enen no Shouboutai: Ni no Shou\n`,ore` - Yahari Ore no Seishun Love Comedy wa Machigatteiru. Kan\n`,rag` - Kanojo, Okarishimasu\n`,sns` - Shokugeki no Souma: Gou no Sara\n`,fru` - Fruits Basket 2nd Season\n`,tmd` - Fugou Keiji: Balance:UNLIMITED\n`,tgp` - Great Pretender\n`,mda` - Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e\n`,uza` - Uzaki-chan wa Asobitai!\n`,fsn` - Fate/Stay Night: Heaven's Feel - III. Spring Song\n`,vio` - Violet Evergarden Movie ")
        }
          
      });
       }else if (command === "enn") {
        message.react('✅').then(async f => {
        const browser = await puppeteer.launch({
          headless: true,
          args: ["--no-sandbox"]
        });
        const page = await browser.newPage();
        await page.goto("https://www.livechart.me/anime/9746");
        //days
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
        );
        //hours
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
        );
        //minutes
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
        );
        //episode
        await page.waitForXPath("/html/body/div[3]/div/div[2]/div[2]/div[1]");
        let elHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
        );
        let ebHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
        );
        let esHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
        );
        let deHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[1]"
        );
        let asasa = await page.evaluate(el => el.textContent, elHandle[0]);
        let bsbsb = await page.evaluate(ed => ed.textContent, ebHandle[0]);
        let cscsc = await page.evaluate(es => es.textContent, esHandle[0]);
        let scdsf = await page.evaluate(de => de.textContent, deHandle[0]);
        console.log(asasa, "days");
        console.log(bsbsb, "hours");
        console.log(cscsc, "minutes");
        console.log(scdsf, "episode");
        let rers = " days ";
        let timem = asasa.concat(rers);
        let sers = " hours ";
        let dskd = bsbsb.concat(sers);
        let sww = " minutes ";
        let dsad = cscsc.concat(sww);
        let ctw = "";
        let last = "till next episode ";
        let count = ctw.concat(timem, dskd, dsad, last);
        let ti = "  of Enen no Shouboutai: Ni no Shou";
        let title = scdsf.concat(ti);
        message.channel.send({
          embed: {
            color: 0xdb1e4a,
            title: title,
            description: ("Days:", count)
          }
        });
        await browser.close();
      });

    } else if (command === "ore") {
      message.react('✅').then(async f => {
        const browser = await puppeteer.launch({
          headless: true,
          args: ["--no-sandbox"]
        });
        const page = await browser.newPage();
        await page.goto("https://www.livechart.me/anime/9363");
        //days
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
        );
        //hours
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
        );
        //minutes
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
        );
        //episode
        await page.waitForXPath("/html/body/div[3]/div/div[2]/div[2]/div[1]");
        let elHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
        );
        let ebHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
        );
        let esHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
        );
        let deHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[1]"
        );
        let asasa = await page.evaluate(el => el.textContent, elHandle[0]);
        let bsbsb = await page.evaluate(ed => ed.textContent, ebHandle[0]);
        let cscsc = await page.evaluate(es => es.textContent, esHandle[0]);
        let scdsf = await page.evaluate(de => de.textContent, deHandle[0]);
        console.log(asasa, "days");
        console.log(bsbsb, "hours");
        console.log(cscsc, "minutes");
        console.log(scdsf, "episode");
        let rers = " days ";
        let timem = asasa.concat(rers);
        let sers = " hours ";
        let dskd = bsbsb.concat(sers);
        let sww = " minutes ";
        let dsad = cscsc.concat(sww);
        let ctw = "";
        let last = "till next episode ";
        let count = ctw.concat(timem, dskd, dsad, last);
        let ti = " of Yahari Ore no Seishun Love Comedy wa Machigatteiru Kan ";
        let title = scdsf.concat(ti);
        message.channel.send({
          embed: {
            color: 0xdb1e4a,
            
            title: title,
            description: ("Days:", count),
        }
        });
        await browser.close();
      });
    } else if (command === "sns") {
        message.react('✅').then(async f => {
        const browser = await puppeteer.launch({
          headless: true,
          args: ["--no-sandbox"]
        });
        const page = await browser.newPage();
        await page.goto("https://www.livechart.me/anime/9725");
        //days
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
        );
        //hours
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
        );
        //minutes
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
        );
        //episode
        await page.waitForXPath("/html/body/div[3]/div/div[2]/div[2]/div[1]");
        let elHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
        );
        let ebHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
        );
        let esHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
        );
        let deHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[1]"
        );
        let asasa = await page.evaluate(el => el.textContent, elHandle[0]);
        let bsbsb = await page.evaluate(ed => ed.textContent, ebHandle[0]);
        let cscsc = await page.evaluate(es => es.textContent, esHandle[0]);
        let scdsf = await page.evaluate(de => de.textContent, deHandle[0]);
        console.log(asasa, "days");
        console.log(bsbsb, "hours");
        console.log(cscsc, "minutes");
        console.log(scdsf, "episode");
        let rers = " days ";
        let timem = asasa.concat(rers);
        let sers = " hours ";
        let dskd = bsbsb.concat(sers);
        let sww = " minutes ";
        let dsad = cscsc.concat(sww);
        let ctw = "";
        let last = "till next episode ";
        let count = ctw.concat(timem, dskd, dsad, last);
        let ti = " of Shokugeki no Souma: Gou no Sara";
        let title = scdsf.concat(ti);
        message.channel.send({
          embed: {
            color: 0xdb1e4a,
            title: title,
            description: ("Days:", count)
          }
        });
        await browser.close();
      });
    } else if (command === "rag") {
        message.react('✅').then(async f => {
        const browser = await puppeteer.launch({
          headless: true,
          args: ["--no-sandbox"]
        });
        const page = await browser.newPage();
        await page.goto("https://www.livechart.me/anime/9707");
        //days
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
        );
        //hours
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
        );
        //minutes
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
        );
        //episode
        await page.waitForXPath("/html/body/div[3]/div/div[2]/div[2]/div[1]");
        let elHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
        );
        let ebHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
        );
        let esHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
        );
        let deHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[1]"
        );
        let asasa = await page.evaluate(el => el.textContent, elHandle[0]);
        let bsbsb = await page.evaluate(ed => ed.textContent, ebHandle[0]);
        let cscsc = await page.evaluate(es => es.textContent, esHandle[0]);
        let scdsf = await page.evaluate(de => de.textContent, deHandle[0]);
        console.log(asasa, "days");
        console.log(bsbsb, "hours");
        console.log(cscsc, "minutes");
        console.log(scdsf, "episode");
        let rers = " days ";
        let timem = asasa.concat(rers);
        let sers = " hours ";
        let dskd = bsbsb.concat(sers);
        let sww = " minutes ";
        let dsad = cscsc.concat(sww);
        let ctw = "";
        let last = "till next episode ";
        let count = ctw.concat(timem, dskd, dsad, last);
        let ti = " of Kanojo, Okarishimasu ";
        let title = scdsf.concat(ti);
        message.channel.send({
          embed: {
            color: 0xdb1e4a,
            title: title,
            description: ("Days:", count)
          }
        });
        await browser.close();
      });
    } else if (command === "fru") {
          message.react('✅').then(async f => {
          const browser = await puppeteer.launch({
            headless: true,
            args: ["--no-sandbox"]
          });
          const page = await browser.newPage();
          await page.goto("https://www.livechart.me/anime/9605");
          //days
          await page.waitForXPath(
            "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
          );
          //hours
          await page.waitForXPath(
            "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
          );
          //minutes
          await page.waitForXPath(
            "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
          );
          //episode
          await page.waitForXPath("/html/body/div[3]/div/div[2]/div[2]/div[1]");
          let elHandle = await page.$x(
            "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
          );
          let ebHandle = await page.$x(
            "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
          );
          let esHandle = await page.$x(
            "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
          );
          let deHandle = await page.$x(
            "/html/body/div[3]/div/div[2]/div[2]/div[1]"
          );
          let asasa = await page.evaluate(el => el.textContent, elHandle[0]);
          let bsbsb = await page.evaluate(ed => ed.textContent, ebHandle[0]);
          let cscsc = await page.evaluate(es => es.textContent, esHandle[0]);
          let scdsf = await page.evaluate(de => de.textContent, deHandle[0]);
          console.log(asasa, "days");
          console.log(bsbsb, "hours");
          console.log(cscsc, "minutes");
          console.log(scdsf, "episode");
          let rers = " days ";
          let timem = asasa.concat(rers);
          let sers = " hours ";
          let dskd = bsbsb.concat(sers);
          let sww = " minutes ";
          let dsad = cscsc.concat(sww);
          let ctw = "";
          let last = "till next episode ";
          let count = ctw.concat(timem, dskd, dsad, last);
          let ti = " of Fruits Basket 2nd Season ";
          let title = scdsf.concat(ti);
          message.channel.send({
            embed: {
              color: 0xdb1e4a,
              title: title,
              description: ("Days:", count)
            }
          });
          await browser.close();
        });
    } else if (command === "tmd") {
      message.react('✅').then(async f => {
        const browser = await puppeteer.launch({
          headless: true,
          args: ["--no-sandbox"]
        });
        const page = await browser.newPage();
        await page.goto("https://www.livechart.me/anime/9777");
        //days
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
        );
        //hours
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
        );
        //minutes
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
        );
        //episode
        await page.waitForXPath("/html/body/div[3]/div/div[2]/div[2]/div[1]");
        let elHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
        );
        let ebHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
        );
        let esHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
        );
        let deHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[1]"
        );
        let asasa = await page.evaluate(el => el.textContent, elHandle[0]);
        let bsbsb = await page.evaluate(ed => ed.textContent, ebHandle[0]);
        let cscsc = await page.evaluate(es => es.textContent, esHandle[0]);
        let scdsf = await page.evaluate(de => de.textContent, deHandle[0]);
        console.log(asasa, "days");
        console.log(bsbsb, "hours");
        console.log(cscsc, "minutes");
        console.log(scdsf, "episode");
        let rers = " days ";
        let timem = asasa.concat(rers);
        let sers = " hours ";
        let dskd = bsbsb.concat(sers);
        let sww = " minutes ";
        let dsad = cscsc.concat(sww);
        let ctw = "";
        let last = "till next episode ";
        let count = ctw.concat(timem, dskd, dsad, last);
        let ti = " of Fugou Keiji: Balance:UNLIMITED ";
        let title = scdsf.concat(ti);
        message.channel.send({
          embed: {
            color: 0xdb1e4a,
            
            title: title,
            description: ("Days:", count),
        }
        });
        await browser.close();
      });
    } else if (command === "tgp") {
        message.react('✅').then(async f => {
        const browser = await puppeteer.launch({
          headless: true,
          args: ["--no-sandbox"]
        });
        const page = await browser.newPage();
        await page.goto("https://www.livechart.me/anime/9502");
        //days
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
        );
        //hours
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
        );
        //minutes
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
        );
        //episode
        await page.waitForXPath("/html/body/div[3]/div/div[2]/div[2]/div[1]");
        let elHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
        );
        let ebHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
        );
        let esHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
        );
        let deHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[1]"
        );
        let asasa = await page.evaluate(el => el.textContent, elHandle[0]);
        let bsbsb = await page.evaluate(ed => ed.textContent, ebHandle[0]);
        let cscsc = await page.evaluate(es => es.textContent, esHandle[0]);
        let scdsf = await page.evaluate(de => de.textContent, deHandle[0]);
        console.log(asasa, "days");
        console.log(bsbsb, "hours");
        console.log(cscsc, "minutes");
        console.log(scdsf, "episode");
        let rers = " days ";
        let timem = asasa.concat(rers);
        let sers = " hours ";
        let dskd = bsbsb.concat(sers);
        let sww = " minutes ";
        let dsad = cscsc.concat(sww);
        let ctw = "";
        let last = "till next episode ";
        let count = ctw.concat(timem, dskd, dsad, last);
        let ti = " of Great Pretender";
        let title = scdsf.concat(ti);
        message.channel.send({
          embed: {
            color: 0xdb1e4a,
            title: title,
            description: ("Days:", count)
          }
        });
        await browser.close();
      });
    } else if (command === "mda") {
        message.react('✅').then(async f => {
        const browser = await puppeteer.launch({
          headless: true,
          args: ["--no-sandbox"]
        });
        const page = await browser.newPage();
        await page.goto("https://www.livechart.me/anime/9627");
        //days
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
        );
        //hours
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
        );
        //minutes
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
        );
        //episode
        await page.waitForXPath("/html/body/div[3]/div/div[2]/div[2]/div[1]");
        let elHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
        );
        let ebHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
        );
        let esHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
        );
        let deHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[1]"
        );
        let asasa = await page.evaluate(el => el.textContent, elHandle[0]);
        let bsbsb = await page.evaluate(ed => ed.textContent, ebHandle[0]);
        let cscsc = await page.evaluate(es => es.textContent, esHandle[0]);
        let scdsf = await page.evaluate(de => de.textContent, deHandle[0]);
        console.log(asasa, "days");
        console.log(bsbsb, "hours");
        console.log(cscsc, "minutes");
        console.log(scdsf, "episode");
        let rers = " days ";
        let timem = asasa.concat(rers);
        let sers = " hours ";
        let dskd = bsbsb.concat(sers);
        let sww = " minutes ";
        let dsad = cscsc.concat(sww);
        let ctw = "";
        let last = "till next episode ";
        let count = ctw.concat(timem, dskd, dsad, last);
        let ti = " of Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e ";
        let title = scdsf.concat(ti);
        message.channel.send({
          embed: {
            color: 0xdb1e4a,
            title: title,
            description: ("Days:", count)
          }
        });
        await browser.close();
      });
    } else if (command === "uza") {
          message.react('✅').then(async f => {
          const browser = await puppeteer.launch({
            headless: true,
            args: ["--no-sandbox"]
          });
          const page = await browser.newPage();
          await page.goto("https://www.livechart.me/anime/9788");
          //days
          await page.waitForXPath(
            "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
          );
          //hours
          await page.waitForXPath(
            "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
          );
          //minutes
          await page.waitForXPath(
            "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
          );
          //episode
          await page.waitForXPath("/html/body/div[3]/div/div[2]/div[2]/div[1]");
          let elHandle = await page.$x(
            "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
          );
          let ebHandle = await page.$x(
            "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
          );
          let esHandle = await page.$x(
            "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
          );
          let deHandle = await page.$x(
            "/html/body/div[3]/div/div[2]/div[2]/div[1]"
          );
          let asasa = await page.evaluate(el => el.textContent, elHandle[0]);
          let bsbsb = await page.evaluate(ed => ed.textContent, ebHandle[0]);
          let cscsc = await page.evaluate(es => es.textContent, esHandle[0]);
          let scdsf = await page.evaluate(de => de.textContent, deHandle[0]);
          console.log(asasa, "days");
          console.log(bsbsb, "hours");
          console.log(cscsc, "minutes");
          console.log(scdsf, "episode");
          let rers = " days ";
          let timem = asasa.concat(rers);
          let sers = " hours ";
          let dskd = bsbsb.concat(sers);
          let sww = " minutes ";
          let dsad = cscsc.concat(sww);
          let ctw = "";
          let last = "till next episode ";
          let count = ctw.concat(timem, dskd, dsad, last);
          let ti = " of Uzaki-chan wa Asobitai! ";
          let title = scdsf.concat(ti);
          message.channel.send({
            embed: {
              color: 0xdb1e4a,
              title: title,
              description: ("Days:", count)
            }
          });
          await browser.close();
        });
      } else if (command === "fsn") {
        message.react('✅').then(async f => {
        const browser = await puppeteer.launch({
          headless: true,
          args: ["--no-sandbox"]
        });
        const page = await browser.newPage();
        await page.goto("https://www.livechart.me/anime/2636");
        //days
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
        );
        //hours
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
        );
        //minutes
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
        );
        //episode
        await page.waitForXPath("/html/body/div[3]/div/div[2]/div[2]/div[1]");
        let elHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
        );
        let ebHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
        );
        let esHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
        );
        let deHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[1]"
        );
        let dsHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[3]/div[2]/div[1]/p"
        );
        let asasa = await page.evaluate(el => el.textContent, elHandle[0]);
        let bsbsb = await page.evaluate(ed => ed.textContent, ebHandle[0]);
        let cscsc = await page.evaluate(es => es.textContent, esHandle[0]);
        let scdsf = await page.evaluate(de => de.textContent, deHandle[0]);
        let fdfdf = await page.evaluate(ds => ds.textContent, dsHandle[0])
        console.log(asasa, "days");
        console.log(bsbsb, "hours");
        console.log(cscsc, "minutes");
        console.log(scdsf, "episode");
        console.log(fdfdf, "description")
        let rers = " days ";
        let timem = asasa.concat(rers);
        let sers = " hours ";
        let dskd = bsbsb.concat(sers);
        let sww = " minutes ";
        let dsad = cscsc.concat(sww);
        let ctw = "";
        let last = "till the movie is released";
        let count = ctw.concat(timem, dskd, dsad, last);
        let ti = " of Fate/Stay Night: Heaven's Feel III. Spring Song ";
        let title = scdsf.concat(ti);
        message.channel.send({
          embed: {
            color: 0xdb1e4a,
            title: title,
            description: (count),
            footer: {
              icon_url: 'https://u.livechart.me/anime/2636/poster_image/e9b9f69dabcb3620fcb13d7726b83264.jpg?style=small&format=jpg',
              text: fdfdf
            }
          }
        });
        await browser.close();
      });
    } else if (command === "vio") {
        message.react('✅').then(async f => {
        const browser = await puppeteer.launch({
          headless: true,
          args: ["--no-sandbox"]
        });
        const page = await browser.newPage();
        await page.goto("https://www.livechart.me/anime/3371");
        //days
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
        );
        //hours
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
        );
        //minutes
        await page.waitForXPath(
          "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
        );
        //episode
        await page.waitForXPath("/html/body/div[3]/div/div[2]/div[2]/div[1]");
        let elHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[3]/div[1]"
        );
        let ebHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[4]/div[1]"
        );
        let esHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[5]/div[1]"
        );
        let deHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[2]/div[1]"
        );
        let dsHandle = await page.$x(
          "/html/body/div[3]/div/div[2]/div[3]/div[2]/div[1]/p"
        );
        let asasa = await page.evaluate(el => el.textContent, elHandle[0]);
        let bsbsb = await page.evaluate(ed => ed.textContent, ebHandle[0]);
        let cscsc = await page.evaluate(es => es.textContent, esHandle[0]);
        let scdsf = await page.evaluate(de => de.textContent, deHandle[0]);
        let fdfdf = await page.evaluate(ds => ds.textContent, dsHandle[0])
        console.log(asasa, "days");
        console.log(bsbsb, "hours");
        console.log(cscsc, "minutes");
        console.log(scdsf, "episode");
        console.log(fdfdf, "description")
        let rers = " days ";
        let timem = asasa.concat(rers);
        let sers = " hours ";
        let dskd = bsbsb.concat(sers);
        let sww = " minutes ";
        let dsad = cscsc.concat(sww);
        let ctw = "";
        let last = "till the movie is released";
        let count = ctw.concat(timem, dskd, dsad, last);
        let ti = " of Violet Evergarden Movie ";
        let title = scdsf.concat(ti);
        message.channel.send({
          embed: {
            color: 0xdb1e4a,
            title: title,
            description: (count),
            footer: {
              icon_url: 'https://u.livechart.me/anime/3371/poster_image/977f7356ec3906be08b138e09511afe9.jpeg?style=small&format=jpg',
              text: fdfdf
            }
          }
        });
        await browser.close();
      });
   }  
};
});

