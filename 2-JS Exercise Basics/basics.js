let greetingText = "Hi i'm saif";
let announce = "my age is:";
let age = 26;
let hobbies = ["Chess", "Painting", "swamming"];
let job = {
  title: "developer",
  place: "cairo",
  salary: 5000 + "$",
};
alert(greetingText);
alert(announce);
alert(age);
announce = "my hobbies is:";
alert(announce);
alert(hobbies);
announce = "my fav is:";
alert(announce);
alert(hobbies[0]);
announce = "my job is:";
alert(announce);
alert(job.title);
announce = "work in:";
alert(announce);
alert(job.place);
announce = "my salary is:";
alert(announce);
alert(job.salary);

let totaladultyears = age - 18;
announce = "my adult years is:";
alert(announce);
alert(totaladultyears);

function CalculatingAdultYears(Agenumber) {
  let result;
  result = Agenumber - 18;
  return result;
}

totaladultyears = CalculatingAdultYears(age);
announce = "my adult years for sure is:";
alert(announce);
alert(totaladultyears);