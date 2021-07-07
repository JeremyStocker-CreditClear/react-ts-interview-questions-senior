export {};

const userObject = {
  name: "Jason",
  age: 28,
  roles: ["basic_access"],
  metadata: {
    createdAt: 1234567890,
  },
};

// The user must be over 18 and their name must be more than 4 characters long
const checkUserMeetsRequirement = (user: any) => {
  if (user.age > "18") {
    if (user.name.length > 4) {
      return true;
    }
    return false;
  }
  return false;
};

// === TEST ===
// Define an interface for the userObject to conform to, and then use that interface to fix the TS errors on the
// `checkUserMeetsRequirement` function

// === TEST ===
// How would you re-write this function to make it more concise?
