function fetchData() {
      const urlInput = document.getElementById('url').value;
      const tableContainer = document.getElementById('table-container');
      const dataTable = document.getElementById('data-table');

      // Buat objek AJAX
      const xhr = new XMLHttpRequest();
      
      // Atur fungsi penanganan ketika permintaan AJAX selesai
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // Konversi JSON yang diterima ke objek JavaScript
          const data = JSON.parse(xhr.responseText);

          // Hapus semua baris tabel sebelum menambahkan yang baru
          dataTable.innerHTML = '';

          // Buat header tabel
          const headerRow = document.createElement('tr');
          for (const key in data[0]) {
            if (data[0].hasOwnProperty(key)) {
              const headerCell = document.createElement('th');
              headerCell.textContent = key;
              headerRow.appendChild(headerCell);
            }
          }
          dataTable.appendChild(headerRow);

          // Tambahkan data ke tabel
          data.forEach(function(item) {
            const dataRow = document.createElement('tr');
            for (const key in item) {
              if (item.hasOwnProperty(key)) {
                const dataCell = document.createElement('td');
                dataCell.textContent = item[key];
                dataRow.appendChild(dataCell);
              }
            }
            dataTable.appendChild(dataRow);
          });

          // Tampilkan tabel
          tableContainer.style.display = 'block';
        }
      };

      // Kirim permintaan GET ke URL yang diinputkan
      xhr.open('GET', urlInput, true);
      xhr.send();
    }
