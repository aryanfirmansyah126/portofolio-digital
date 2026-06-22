document.addEventListener("DOMContentLoaded", function () {
    // Ambil semua elemen gambar sertifikat yang bisa diklik
    const certImages = document.querySelectorAll('.cert-img');
    // Ambil elemen modal Bootstrap
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    const modalImage = document.getElementById('modalImage');

    // Berikan fungsi klik pada setiap gambar sertifikat
    certImages.forEach(image => {
        image.addEventListener('click', function () {
            // Ubah src gambar di dalam modal sesuai gambar yang diklik
            modalImage.src = this.src;
            modalImage.alt = this.alt;
            // Tampilkan modal pop-up
            imageModal.show();
        });
    });
});