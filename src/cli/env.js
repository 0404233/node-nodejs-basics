const parseEnv = () => {
    let envArr = [];

    Object.keys(process.env).forEach((envKey) => {
        if(envKey.startsWith("RSS_")) {
            envArr.push(`${envKey}=${process.env[envKey]};`);
        }
    });

    console.log(envArr.join("\n"))
};

parseEnv();