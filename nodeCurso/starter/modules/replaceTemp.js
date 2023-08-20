module.exports = (temp, data) => {
    let output = temp.replace(/{%NAME%}/g, data.productName)
    output = output.replace(/{%IMG%}/g, data.image)
    output = output.replace(/{%PRICE%}/g, data.price)
    output = output.replace(/{%FROM%}/g, data.from)
    output = output.replace(/{%NUTRIENTS%}/g, data.nutrients)
    output = output.replace(/{%QUANTITY%}/g, data.quantity)
    output = output.replace(/{%DESCRIPTION%}/g, data.description)
    output = output.replace(/{%ID%}/g, data.id)

    if(data.organic != true) {
        output = output.replace(/{%ORGANIC%}/g, 'not-organic')
    }
    return output
}