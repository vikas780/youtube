import axios from "axios";

const KEY = "AIzaSyAKK1c5LH4oQbiFIi7lZyhIIH5ljPFZ2ZE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
