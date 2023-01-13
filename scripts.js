// 1 -get fetch

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((resp) => resp.json()) //resposta recebida e repassando ela em json
  .then((datas) => {
    console.log(datas); //pegar a data para utilizalos novamente
  })
  .catch((error) => {
    console.log(error); // aqui pegamos um erro e retornamos ele via console console
  });

// 2 - get Axios

axios
  .get("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

// 3- POST fetch

const data = {
  title: "Algum titulo",
  content: "Algum Conteúdo",
  userId: 1,
};
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((resp) => resp.json())
  .then((datas) => {
    console.log(datas);
  })
  .catch((error) => {
    console.log(error);
  });

// 4- POST axios

axios.post("https://jsonplaceholder.typicode.com/posts", data);
