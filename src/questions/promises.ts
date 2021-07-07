export {};

const fetchUser = () =>
  Promise.resolve({ success: true, user: { name: "James", age: 23 } });

const fetchOtherData = () =>
  Promise.resolve({ success: true, data: { id: 123 } });

/**
 * === TEST ===
 * Once both promises have resolved, log the value "Success" to the console, otherwise if one of them
 * fails log "Failure" to the console.
 */
