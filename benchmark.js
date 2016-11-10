#!/usr/bin/env node

const {execSync} = require('child_process')

const run = (runs, name) => {
  let totalTime = 0
  for(let run = 0; run < runs; run++) {
    const domReadyTime = parseInt(execSync(`npm run -s ${name}`).toString(), 10)
    if (!isFinite(domReadyTime)) {
      throw new Error(`Command did not output number: domReadyTime`)
    }
    totalTime += domReadyTime
  }
  return Math.round(totalTime / runs)
}


const runs = 10
console.log(`Average load time for ${runs} app launches`);
console.log(`Empty app        ${run(runs, 'empty')}ms`)
console.log(`With snapshot    ${run(runs, 'snapshot')}ms`)
console.log(`Without snapshot ${run(runs, 'no-snapshot')}ms`)
