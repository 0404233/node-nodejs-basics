const parseArgs = () => {
    const argsArr = process.argv.slice(2);
    const argsObj = {};

    for(let i = 0; i < argsArr.length; i += 2) {
        argsObj[argsArr[i]] = argsArr[i + 1];
    }

    let result = [];

    Object.keys(argsObj).forEach(key => {
        result.push(`${key} is ${argsObj[key]}`);
    });

    console.log(result.join("\n"))
};

parseArgs();