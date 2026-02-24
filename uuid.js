#!/usr/bin/env node

// uuid - UUID generator
// Usage: uuid [count]

const crypto = require('crypto');

const args = process.argv.slice(2);
const count = parseInt(args[0]) || 1;

if (args.includes('--help')) {
  console.log(`uuid 🔑 - UUID generator

Usage: uuid [count]

Examples:
  uuid
  uuid 5
`);
  process.exit(0);
}

for (let i = 0; i < count; i++) {
  console.log(crypto.randomUUID());
}