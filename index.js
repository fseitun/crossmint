const axios = require('axios');

const candidateId = "ee32ab09-1e44-49ba-8c70-5f27e9d4bf6e"
const url = 'https://challenge.crossmint.io/api';
const totalSpace = 11 //remember it's zero based! 0-10
const length = 7; //2 to 8

// clearBoard();
for (let i = (totalSpace - length) / 2; i < (totalSpace + length) / 2; i++) {
  // post(i, i, 'polyanets');
  post(i, totalSpace - i - 1, 'polyanets');
}

function post(row, column, type) {
  const data = JSON.stringify({
    "row": row,
    "column": column,
    candidateId
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${url}/${type}`,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  console.log('about to post', row, column);

  axios.request(config)
    .then((response) => {
      console.log('posted', row, column);
    })
    .catch((error) => {
      console.log(error);
    });
}

function deleteTyle(row, column, type) {
  const data = JSON.stringify({
    "row": row,
    "column": column,
    candidateId
  });
  
  console.log('about to delete', row, column);

  let config = {
    method: 'delete',
    maxBodyLength: Infinity,
    url: `${url}/${type}`,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios.request(config)
    .then((response) => {
      console.log('deleted', row, column);
    })
    .catch((error) => {
      console.log(error);
    });
}

function clearBoard() {
  for (let i = 0; i < totalSpace; i++) {
    for (let j = 0; j < totalSpace; j++) {
      deleteTyle(i, j, 'polyanets');
    }
  }
}
