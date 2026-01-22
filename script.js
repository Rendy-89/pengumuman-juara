const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRbekWNf25uNIikmkC7lcazWJXmrR6BuTuKAzKUJxagoMqk6WIiSishzzsHFLHx4SrA6yihBlNMTiMu/pub?output=csv";

fetch(sheetURL)
  .then(res => res.text())
  .then(text => {
    const rows = text.split("\n").map(r => r.split(","));

    // Ambil baris Juara (sesuaikan nomor baris)
    // Index dimulai dari 0
    const juaraData = rows.slice(13, 16); // baris 14–16

    const container = document.getElementById("juara-container");
    container.innerHTML = "";

    juaraData.forEach(row => {
      const posisi = row[0];   // Juara 1
      const poster = row[1];   // Poster 01

      const div = document.createElement("div");
      div.className = "juara-box";
      div.innerHTML = `
        <h2>${posisi}</h2>
        <p><b>${poster}</b></p>
      `;
      container.appendChild(div);
    });
  });
