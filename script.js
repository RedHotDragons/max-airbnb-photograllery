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
  let res = http.get('http://localhost:3001/');
  check(res, {' status was 200': (r) => r.status === 200 });
  sleep(1);
}


// k6 run script.js
