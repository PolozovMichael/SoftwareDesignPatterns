const decorator = (name) => {
    let formatedName = name.slice(0, 1).toUpperCase()
        + name.slice(1, name.length).toLowerCase();
    let address = {
        city : 'Astana',
        street : '38th street'
    }
    console.log(`Hello ${formatedName}, your address is ${address.city}, ${address.street}`);
}

module.exports = {
    decorator
}