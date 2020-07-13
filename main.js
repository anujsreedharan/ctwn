const Discord = require("discord.js");
const discordClient = new Discord.Client();
const puppeteer = require("puppeteer");
const express = require("express");


const prefix = ",";

discordClient.login(
  "process.env.TOKEN"
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
    } else if (command === "op") {
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
    }
  }
});
