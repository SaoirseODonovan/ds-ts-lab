import {Friend, Colleague } from './myTypes'
import { friends, colleagues } from "./01-basics";

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

function allOlder(arr: Friend[]): string[] {
    const age_incrememnt: string[] = []; // empty array that holds strings
    for (const friend of arr) { // iterate through each frienf in the array
        const age = older(friend); // calls older func which will incremement the age
        age_incrememnt.push(age); //.push adds the new string to the array
    }

    return age_incrememnt;

}
console.log(allOlder(friends));

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));


function addColleague(colleagues: Colleague[], name: string, department: string, email: string) {
    const e = highestExtension(colleagues);

    const coll: Colleague = {
        name,
        department,
        contact: {
            email,
            extension: e.contact.extension + 1
        }
    }
    colleagues.push(coll)
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));