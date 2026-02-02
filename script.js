const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRbekWNf25uNIikmkC7lcazWJXmrR6BuTuKAzKUJxagoMqk6WIiSishzzsHFLHx4SrA6yihBlNMTiMu/pub?output=csv";

fetch(sheetURL)
  .then(res => res.text())
  .then(text => {
    const rows = text.split("\n").map(r => r.split(","));

    // Ambil baris Juara (sesuaikan nomor baris)
    // Index dimulai dari 0
    const juaraData = rows.slice(11, 14); // baris 12–14 (Juara 1, 2, 3)

    const container = document.getElementById("juara-container");
    container.innerHTML = "";

    juaraData.forEach(row => {
      const posisi = row[0]?.trim();   // Juara 1
      const poster = row[1]?.trim();   // Poster 01

      if (posisi && poster) {
        const div = document.createElement("div");
        div.className = "juara-box";
        div.innerHTML = `
          <h2>${posisi}</h2>
          <p><b>${poster}</b></p>
        `;
        container.appendChild(div);
      }
    });
  });
