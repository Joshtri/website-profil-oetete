  // Saat pengguna menggulir ke bawah 20px dari atas dokumen, tampilkan tombol
  window.onscroll = function() { scrollFunction() };

  function scrollFunction() {
    const btnScrollUp = document.getElementById("btnScrollUp");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btnScrollUp.style.display = "block";
    } else {
      btnScrollUp.style.display = "none";
    }
  }

  // Ketika pengguna mengklik tombol, gulir ke atas dokumen
  function topFunction() {
    document.body.scrollTop = 0; // Untuk Safari
    document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE, dan Opera
  }