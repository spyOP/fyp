const hosts = [
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    host_name: "g-pc",
    user: "User1",
    status: "Online",
    lastCheckIn: "",
    assigned_to: "Sadin",
    region: "NA",
    rating: "1",
    note: "this bot is not for sell",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    host_name: "Home-pc",
    user: "PPC",
    status: "Offline",
    lastCheckIn: "",
    assigned_to: "Sadin",
    region: "NA",
    rating: "2",
    note: "this bot is for sell",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    host_name: "public-pc",
    user: "c12",
    status: "Offline",
    lastCheckIn: "",
    assigned_to: "Sadin",
    region: "NA",
    rating: "3",
    note: "this bot is not for sell",
  },
  {
    _id: "5b21ca3dfdfdfdf471819",
    host_name: "personal-pc",
    user: "myselft",
    status: "Online",
    lastCheckIn: "",
    assigned_to: "Ali",
    region: "SA",
    rating: "3",
    note: "this bot is not for sell",
  },
];

export function getHosts() {
  return hosts;
}

export function getHost(id) {
  return hosts.find((h) => h._id === id);
}
