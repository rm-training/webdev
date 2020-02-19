console.log('My other script');

// is this safe?
let user;

const checkNameLength = function() {
  // anything wrong here?
  length = name.length;
  // anything wrong here?
  reversed = name.split("").reverse().join("");

  console.log('Name is ' + length + ' long');
  console.log(`Reversed, it is ${reversed}`);
}

const authenticateUser = function () {
  username = prompt("What is your username?");
  user = getUser(username);
}

// nothing wrong here...
// pretend this makes a request to some API/endpoint...
// and returns the user
const getUser = function (username) {
  return {
    id: 5,
    username: username,
    email: 'some@email.com',
    records: ['a', 'b', 'c']
  };
}

// anything wrong here?
function checkRecords(records) {
  let lastRecord = records.pop();

  console.log(`Your last record is ${lastRecord}`);
}

authenticateUser();
checkNameLength(user.username);
checkRecords(user.records);

// what are the user's records after the above?
//console.log('User records after all the work is done...', user.records);