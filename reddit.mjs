#! /usr/bin/env node
import open from 'open'
import fetch from 'node-fetch'
import yargs from 'yargs'

const { argv } = yargs(process.argv);

const res = await fetch('https://www.reddit.com/.json');
const data = await res.json();
const children = data.data.children;

const randomPost = children[Math.floor(Math.random() * children.length)];

if (argv.print) {
    console.log(`
        Title: ${randomPost.data.title}\n
        Link: https://reddit.com${randomPost.data.permalink}
    `);
}
else {
    open(`https://reddit.com${randomPost.data.permalink}`)
}

