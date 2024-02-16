const URL = "https://icanhazdadjoke.com/";
const btn = document.querySelector("button");
const jokesPara = document.querySelector(".jokespara");

//Asyn awit
// const generateJokes = async () =>{
//     const setHeader = {
//         headers: {
//             Accept :"application/json"
//         }
//     }

    // const res = await fetch(URL ,setHeader);
    // const data = await res.json();
    // //console.log(data.joke);
    // jokesPara.innerText = data.joke;
// }


//Promises
const generateJokes = () => {
  const setHeader = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch(URL, setHeader).then((res) => {
      res.json().then((data) => {
        jokesPara.innerText = data.joke;
      });
    })
    .catch((err) => {
      console.log(err);
    });
};


btn.addEventListener("click", generateJokes);
generateJokes();
