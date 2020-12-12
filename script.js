import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 10,
  stages: [
    {duration: '5s', target: 20},
    {duration: '5s', target: 100},
    {duration: '5s', target: 0},
  ]
};

export default function () {
  var id = Math.ceil((Math.random() * 10000000))
  let res = http.get(`http://localhost:3001/${id}`);
  check(res, {' status was 200': (r) => r.status === 200 });
  sleep(1);
}


// k6 run script.js
