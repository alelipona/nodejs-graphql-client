const request = require('graphql-request').request

const endpoint = 'https://rickandmortyapi.com/graphql'
const query = `
query Query($characterId: ID!) {
  character(id: $characterId) {
    id
    name
  }
}
`;
const id = 3;
const variables = {
  "characterId": id
};
request({
  url: endpoint,
  document: query,
  variables: variables,
//   requestHeaders: headers,
}).then((data) => callResult(data))

function callResult(data){
    console.log(data.character.name);
}
