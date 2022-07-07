#!/usr/bin/env node

const storage = require('node-persist');

async function init() {
  console.log( "Initialize" )
  await storage.init();
  await storage.setItem('name', 'Demogod')
}

( async() => {
  await init();
  console.log( await storage.getItem( 'name' ) )
})()
