export {};

const errors = {
  firstName: "First name is required!",
  lastName: "Last name is required!",
  password: "Password is too weak!",
};

/**
 * === TEST ===
 * Create a function called `stripErrorByKey` which takes 2 arguments, the first is an object shaped like `errors`
 * above, and the second argument is `key` which is a string, to remove from the object. In this function return the
 * `errors` object without that particular key. For example I would like to call the function
 * like this `stripErrorByKey(errors, 'password')` and recieve the errors object back without the password key/value pair.
 */
