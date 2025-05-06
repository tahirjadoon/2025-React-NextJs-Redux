const commonJs = {
    
    textDisplayOptions: {
        end: "\x1b[0m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        bold: "\x1b[1m"
    },

    displayEmptyLine: () => {
        console.log("\n");
    },

    displayTitle: (val, char="*", color, isBold = false) => { 
        let length = 8;
        if(val) length = length + val.length;
    
        let character = char.repeat(length);
        const characterMin = char.repeat(3);
        let detail = `${characterMin} ${val} ${characterMin}`;
    
        isAttachEnd = false;
        if(color){
            character = `${color}${character}`;
            detail = `${color}${detail}`;
            isAttachEnd  = true;
        }
    
        if(isBold){
            character = `${commonJs.textDisplayOptions.bold}${character}`;
            detail = `${commonJs.textDisplayOptions.bold}${detail}`;
            isAttachEnd  = true;
        }

        if(isAttachEnd){
            character = `${character}${commonJs.textDisplayOptions.end}`;
            detail = `${detail}${commonJs.textDisplayOptions.end}`;
        }

        //console.log(character);
        console.log(detail);
        //console.log(character);
    },

    displayInfo: (title, value) => {
        if(title && value)
            console.log(title, value);
        else if(title)
            console.log(title);
        else
            console.log(value);
    }
};
