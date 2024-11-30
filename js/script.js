// Mengatur title halaman berdasarkan atribut data-title
let pageTitle = document.body.getAttribute('data-title');
document.title = "My_Portfolio - " + pageTitle;

// Fungsi untuk memberikan transisi saat keluar dari halaman
function fadeOutAndRedirect(url) {
    document.body.classList.add('fade-out'); // Tambahkan class fade-out
    setTimeout(function () {
        window.location.href = url; // Alihkan ke halaman baru setelah transisi
    }, 500); // Waktu delay transisi
}

// Event listener untuk semua link (transisi antar halaman)
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a'); // Ambil semua elemen link

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Hentikan tindakan default link
            const url = this.href; // Ambil URL tujuan
            fadeOutAndRedirect(url); // Panggil fungsi untuk transisi
        });
    });
});

// Ketika halaman dimuat, tampilkan halaman dengan efek fade-in
window.onload = function () {
    document.body.classList.remove('fade-out');
};

// Menandai link yang aktif (aktifkan tombol navigasi berdasarkan halaman)
document.addEventListener('DOMContentLoaded', function () {
    const currentLocation = window.location.href; // Ambil URL saat ini
    const navLinks = document.querySelectorAll('nav ul li a'); // Ambil semua tautan navigasi

    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active'); // Tambahkan kelas 'active' pada link yang cocok
        }
    });
});
