// Ex1

function pow(b, e) {
  if (e === 0) {
    return 1;
  }
  if (typeof b !== "number" || typeof e !== "number") {
    throw new TypeError("base and exponent must be NUMBER");
  }
  if (!Number.isInteger(e)) {
    throw new RangeError("exponent must be an INTEGER");
  }
  if (e < 0) {
    throw new RangeError("exponent must be POSITIVE number");
  }

  return b * pow(b, e - 1);
}

try {
  //   console.log(pow(5, ""));
  //   console.log(pow(5, 2.7));
  //   console.log(pow(5, -2));
  console.log(pow(5, 2));
} catch (err) {
  console.log(err);
}

// Ex2

function validateEmail(email) {
  if (typeof email !== "string") {
    throw new TypeError("email must be STRING");
  }
  const atIndex = email.indexOf("@");
  if (atIndex === -1) {
    throw new Error('Email must contain "@" symbol.');
  }
  if (atIndex === 0 || atIndex === email.length - 1) {
    throw new Error('"@" symbol cannot be the first or the last character.');
  }
  return true;
}

try {
  //   console.log(validateEmail(28338));
  //   console.log(validateEmail("djjfjjdjd"));
  //   console.log(validateEmail("@edkdkdk"));
  //   console.log(validateEmail("jvfjdjdkd@"));
  console.log("anonymous@gmail.com");
} catch (err) {
  console.log(err);
}
