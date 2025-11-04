// Seleksi semua elemen input dan elemen pratinjau
const inputNama = document.querySelector("#nama");
const inputJenis = document.querySelector("#jenis");
const inputKuota = document.querySelector("#kuota");
const inputHarga = document.querySelector("#harga");
const inputPulsa = document.querySelector("#pulsa");

const previewNama = document.querySelector("#preview-nama");
const previewJenis = document.querySelector("#preview-jenis");
const previewKuota = document.querySelector("#preview-kuota");
const previewHarga = document.querySelector("#preview-harga");
const previewPulsa = document.querySelector("#preview-pulsa");

// Fungsi untuk memperbarui pratinjau
function updatePreview() {
    previewNama.textContent = `Nama Pembeli: ${inputNama.value || "-"}`;
    previewJenis.textContent = `Jenis Paket: ${inputJenis.value || "-"}`;
    previewKuota.textContent = `Kuota: ${inputKuota.value ? inputKuota.value + " GB" : "-"}`;
    previewHarga.textContent = `Harga: ${inputHarga.value ? "Rp " + inputHarga.value : "-"}`;
    previewPulsa.textContent = `Jumlah Pulsa: ${inputPulsa.value ? "Rp " + inputPulsa.value : "-"}`;
}

// Pasang event listener di setiap input biar real-time
[inputNama, inputJenis, inputKuota, inputHarga, inputPulsa].forEach((input) => {
    input.addEventListener("input", updatePreview);
});