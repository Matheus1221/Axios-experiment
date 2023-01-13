// 1 -get fetch

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((resp) => resp.json()) //resposta recebida e repassando ela em json
  .then((data) => {
    console.log(data); //pegar a data para utilizalos novamente
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
