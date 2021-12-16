Moralis.initialize = process.env.APPLICATION_ID; // Application id from moralis.io
Moralis.serverURL = process.env.serverURL; //Server url from moralis.io

async function login() {
  try {
    user = await Moralis.Web3.authenticate();
    console.log(user);
    alert("User logged in");
  } catch (error) {
    console.log(error);
  }
}

document.getElementById("login_button").onclick = login;
