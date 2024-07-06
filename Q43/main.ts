let magicians: string[] = ["alice" , "david" , "chris"];

function make_great(magnicians: string[]):string[]{
    let greatMagicians = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician}the great`);
    });
    return greatMagicians;
}

let greatMagicians = make_great(magicians.slice());// creats a new modified array
console.log("orignal magicians:");
show_magicians(magicians);// show orignal names
console.log("greatmagicians:");
show_magicians(greatMagicians);// show modified names