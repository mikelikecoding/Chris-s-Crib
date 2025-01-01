const bcrypt = require("bcrypt");

const hashPassword = async () => {
  const password = "your_password_here";  // Replace with the password you want to hash
  const hash = await bcrypt.hash(password, 10);
  console.log("Hashed Password:", hash);
};

hashPassword();
