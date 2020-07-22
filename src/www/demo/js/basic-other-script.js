'use strict';

console.log('My other script');

const ApplicationModule = (function initApplication () {
  let user;

  const checkNameLength = function(name) {
    const length = name.length;
    const reversed = name
      .split("")
      .reverse()
      .join("");

    console.log('Name is ' + length + ' long');
    console.log(`Reversed, it is ${reversed}`);
  }

  const authenticateUser = function () {
    const username = prompt("What is your username?");
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

  function checkRecords(records) {
    let lastRecord = records[records.length - 1]; // pop() takes the last element off an array

    console.log(`Your last record is ${lastRecord}`);
  }

  authenticateUser();
  checkNameLength(user.username);
  checkRecords(user.records);

  console.log('At the very end user is...', user);

  return {
    check: checkRecords,
    seeUser: function () {
      console.log(user);
    }
  }
})();


// what are the user's records after the above?
//console.log('User records after all the work is done...', user.records);
