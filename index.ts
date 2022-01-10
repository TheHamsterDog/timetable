const path = require('path');
const opn = require('open');

const fs = require('fs')

let content = (fs.readFileSync(path.join(__dirname, 'schedule.txt'), { encoding: 'utf8', flag: 'r' }).split('\n'));

let timeTable = {};

for (let i = 0; i < content.length; i++) {
    let a = content[i].split(':');
    timeTable[a[0]] = a[1].trim();
}
setInterval(async () => {
    let date = new Date();
    let temp = date.getHours().toString() + date.getMinutes().toString();
    if (timeTable[temp] !== undefined) {
        await opn(timeTable[temp]);
    }
}, 60000)
