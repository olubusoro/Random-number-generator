// const screen = document.querySelector(".screen");
// const number = document.querySelector(".gen");

// const GenNumber = ()=> {
//     const randomNumber = math.floor(math.random() * 10 + 1);
//     screen.innerHTML = randomNumber;
// };

// number.addEventListener("click", GenNumber);


const screen = document.querySelector(".screen");
const number = document.querySelector(".gen");

const GenNumber = () => {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  screen.innerHTML = randomNumber;
};

number.addEventListener("click", GenNumber);

