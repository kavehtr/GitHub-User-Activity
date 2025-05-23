import fetch from "node-fetch";

export const fetchAPI = async (params: string) => {
  const response = await fetch(`https://api.github.com/users/${params}/events`);
  const body = await response.json();

  if (body) {
    console.log(body);
  } else {
    console.log("no data!");
  }
};
