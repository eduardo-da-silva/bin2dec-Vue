function bin2dec(binaryValue) {
    binaryValue = binaryValue.split("").reverse().join("");
    let total = 0,
        pos = 0;
    for (const bit of binaryValue) {
        total += bit * 2 ** pos++;
    }
    return total;
}

export { bin2dec }