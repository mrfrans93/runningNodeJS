function panggilNama (nama){
    return `Hi, my name is ${nama}`;
}

//Readline
const readLine = require('readLine');
const rl = readLine.Interface({
input:process.stdin,
output:process.stdout,
});

rl.question('Input your name : ', (nama) => {
    rl.question('Input your phone number : ', (noHP) => {
    const contact = {nama, noHP};
    const file = fs.readFileSync('contacts.json', 'utf-8');
    const contacts = JSON.parse(file);
    contacts.push(contact);
        
    fs.writeFileSync('contacts.json', JSON.stringify(contacts));
        
    console.log('Thank you to input your data');
        
    rl.close();
    });
});

//module.exports = panggilNama;
