// 1 -get fetch

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
  });

// 2 - get Axios
