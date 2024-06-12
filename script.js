function kirimData() {
    const nama = document.getElementById('nama').value;
    const UID = document.getElementById('uid').value;
    const Server = document.getElementById('server').value;
    const Team = document.getElementById('team').value;
    const Tahun = document.getElementById('tahun').value;
    const tanggal = document.getElementById('tanggal').value;

    const message = `
    Nickname: ${nama}
    UID: ${UID}
    Server: ${Server}
    Team: ${Team}
    Tahun Pendaftaran Tournament: ${Tahun}
    Tanggal Pendaftaran Tournament: ${tanggal}
    `;

    alert(message);
}