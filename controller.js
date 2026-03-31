import users from "./data.js";

// tampilkan data ke HTML
const index = () => {
  const list = document.getElementById("listUser");
  list.innerHTML = "";

  users.map((user, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${user.nama} | ${user.umur} | ${user.alamat} | ${user.email}
      <button onclick="hapus(${i})">Hapus</button>
    `;
    list.appendChild(li);
  });
};

// tambah data
const store = (user) => {
  users.push(user);
  index();
};

// hapus data
const destroy = (i) => {
  users.splice(i, 1);
  index();
};

export { index, store, destroy };