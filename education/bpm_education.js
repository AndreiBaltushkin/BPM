//this is json (it is stored as a string):
const birdFacts = '{"fact":"The ostrich lays the biggest egg in the world. It measures 7\" x 5\" and weighs 3 pounds. However, the biggest egg for the size of the mother is laid by the kiwi and is a third of the weight of the bird. It is 5\" long and can weigh as much as 1 lb. This would be the equivalent of an ostrich laying an 88 lb. (40 kg.) egg."}';
//parse method returns valid javascript object from a json string
const parsedBirdFacts = JSON.parse(birdFacts);
//access json's objects by parameters:
parsedBirdFacts.fact;
//on the other hand, stringify turns a Javascript object into a JSON string:
const jsonBirdFacts = JSON.stringify(parsedBirdFacts); //jsonBirdFacts = birdFacts
//For GET requests, can get a whole list of items by id or a specific element
//Example (all people): https://swapi.deb/api/people
//Example (5th person): https://swapi.deb/api/people/5
//Example (by id): https://swapi.deb/api/people/:skywalker (or {{id}} or <id>)
//Example (with query string): https://swapi.deb/api/people/5?color=blue (key=value of json; query part is ignored if not found)

//Use fetch to make API requests (use in bpm.js)