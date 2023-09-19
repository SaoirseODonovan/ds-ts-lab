import {Friend, Colleague, EmailContact} from './myTypes'
import { friends, colleagues } from "./01-basics";

function older(f: Friend){
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

function allOlder(arr: Friend[]) {
    const age_incrememnt: string[] = []; // empty array that holds strings
    for (const friend of arr) { // iterate through each frienf in the array
        const age = older(friend);
         // calls older func which will incremement the age
        age_incrememnt.push(age); //.push adds the new string to the array
    }

    return age_incrememnt;

}
console.log(allOlder(friends));

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) {
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
            extension: e.contact.extension + 1 // to access the extension 
        }
    }
    colleagues.push(coll) // .push adds the new string to the array
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number
  ): EmailContact[] {
    const sorted = colleagues.sort(sorter); // Colleague[] inferred
    const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return result 
  }
  
  console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
  console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

function findFriends(
    friends: Friend[], 
    //string array to be returned
    includeFriend: (friend: Friend) => boolean): string[] { // takes friend objas arg and gives boolean as the output
    const result: string[] = [];

    for (const friend of friends) {
      if (includeFriend(friend)) {
        result.push(friend.name);
      }
    }
    return result
}
    
console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));