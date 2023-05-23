const db = require("./utils/db");

async function createUser() {
  try {
    await db.user.create({
      data: {
        userName: "xiaohei",
        password: "111",
        nickName: "xx",
      },
    });
    console.log("user ok");
  } catch (err) {
    console.log(err);
  }
}

createUser();
