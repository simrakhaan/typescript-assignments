let magicians: string[] = ["anek wala jin", "rmeez", "crish"];

function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = magicians[i] + "the great";
  }
}
make_great(magicians); /// modifies the orignal array
 //show_magicians(magicians); /// shows modified names
