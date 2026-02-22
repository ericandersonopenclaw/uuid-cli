#!/usr/bin/env bun
const args = process.argv.slice(2);
const count = parseInt(args[0]) || 1;

for (let i = 0; i < count; i++) {
  console.log(crypto.randomUUID());
}
