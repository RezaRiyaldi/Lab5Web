# Tugas Lab 4 Web
## Profil
| #               | Biodata             |
| --------------- | ------------------- |
| **Nama**        | Reza Riyaldi Irawan |
| **NIM**         | 312010284           |
| **Kelas**       | TI.20.A.2           |
| **Mata Kuliah** | Pemrograman Web     |

## Langkah 1 `Persiapan`
1. Buat folder baru bernama `lab5_javascript`.
2. Buat file dengan nama `lab5_javascript.html`.
3. Tambahkan kode berikut.
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Mengenal JavaScript</title>
    <style>
        code {
            color: orangered;
        }
    </style>
</head>

<body>
    <h1>Pengenalan JavaScript</h1>
    <h3>Contoh <code>document.write</code> dan <code>console.log</code></h3>
    <script>
        document.write("Hello World");
        console.log("Hello World");
    </script>
</body>

</html>
```

4. Maka hasilnya akan seperti berikut.

![js 1](img/ss_js1.png)

## Langkah 2 `Alert`
1. Tambahkan kode berikut ke dalam tag `<script>`.

```javascript
window.alert("Ini merupakan pesan untuk anda");
```

2. Maka hasilnya akan seperti berikut.

![alert](img/ss_alert.png)

## Langkah 3 `Method dalam object`
1. Tambahkan kode berikut ke dalam tag `<script>`.
2. Tambahkan kode berikut ke dalam tag `<script>`.

```javascript
document.write("Selamat mencoba javascript <br>");
document.write("Semoga Sukses");
```
1. Maka hasilnya akan seperti berikut.

![method](img/ss_method.png)

## Langkah 4 `Prompt`
1. Tambahkan kode berikut ke dalam tag `<script>`.

```javascript
var nama = prompt("Siapa nama anda?");
document.write("Hai " + nama);
```

2. Saat dijalankan akan meminta suatu inputan yang nanti akan dimasukan kedalam variable `nama`.

![prompt1](img/ss_prompt1.png)

3. Ketika saya menginput nama saya, maka akan tampil seperti berikut.

![prompt2](img/ss_prompt2.png)

## Langkah 5 `Function`
1. Buat function `pesan()`.

```javascript
function pesan() {
    alert("Memanggil javascript lewat body onload");
}
```

2. Tambahkan atribut pada tag `<body>`.

```html
<body onload="pesan()">
```

3. Maka ketika web load akan seperti berikut.

![function](img/ss_function.png)

## Langkah 6 `Operasi Aritmatika`
1. Buat function `aritmatika()` pada tag `<script>`.

```javascript
function aritmatika(bilangan1, bilangan2) {
    document.write("<b>Penjumlahan : </b><br>" + bilangan1 + " + " + bilangan2 + " = " + (bilangan1 + bilangan2) + "<br><br>")

    document.write("<b>Pengurangan : </b><br>" + bilangan1 + " - " + bilangan2 + " = " + (bilangan1 - bilangan2) + "<br><br>")

    document.write("<b>Perkalian : </b><br>" + bilangan1 + " * " + bilangan2 + " = " + (bilangan1 * bilangan2) + "<br><br>")

    document.write("<b>Pembagian : </b><br>" + bilangan1 + " / " + bilangan2 + " = " + (bilangan1 / bilangan2) + "<br><br>")

    document.write("<b>Modulo : </b><br>" + bilangan1 + " % " + bilangan2 + " = " + (bilangan1 % bilangan2) + "<br><br>")
}
```

2. Buat button dengan menambahkan atribut `onclick`.

```html
<button onclick="aritmatika(9, 4)">Klik function aritmatika 9 dan 4</button>
```

3. Sebelum button diklik.

![aritmatika1](img/ss_aritmatika1.png)

4. Ketika button diklik.

![aritmatika2](img/ss_aritmatika2.png)

## Langkah 7 `Kondisi`
1. Tambahkan kode berikut kedalam tag `<script>`.

```javascript
var nilai = prompt("Masukan nilai (0 - 100)");
var hasil= "";

if (nilai < 0 || nilai > 100) {
    alert("Nilai yang anda masukkan tidak valid!")
    location.reload();
} else if (nilai >= 60) {
    hasil = "Lulus";
} else {
    hasil = "Tidak Lulus";
}

document.write("Nilai anda : " + nilai + "<br>");
document.write("Hasil : " + hasil);
```

2. Maka akan meminta inputan 0 - 100.

![kondisi input](img/ss_kondisi_input.png)

3. Apabila memasukkan inputan < 0 atau > 100, maka akan seperti berikut.

![kondisi tidak valid](img/ss_kondisi_!valid.png)

4. Apabila memasukkan >= 60.

![kondisi lulus](img/ss_kondisi_lulus.png)

5. Apabila memasukkan < 60.

![kondisi tidak lulus](img/ss_kondisi_tidaklulus.png)

## Langkah 8 `Switch`
1. Buat function `bilangan()` di dalam tag `<script>`.

```javascript
function bilangan() {
    var bilangan1 = prompt("Input nilai (1 - 5)");
    switch (bilangan1) {
        case '1':
            document.write("Bilangan 1");
            break;

        case '2':
            document.write("Bilangan 2");
            break;

        case '3':
            document.write("Bilangan 3");
            break;

        case '4':
            document.write("Bilangan 4");
            break;

        case '5':
            document.write("Bilangan 5");
            break;

        default:
            document.write("Bilangan lainnya");
            break;
    }
}
```

2. Lalu buat button dengan atribut onclick.

```html
<button onclick="bilangan()">Switch</button>
```

3. Maka hasilnya akan seperti ini.

![switch off](img/ss_switch1.png)

4. Ketika diklikakan meminputa inputan.

![switch input](img/ss_switch_input.png)

5. Apabila yang diinput termasuk kedalam case (1 - 5), akan seperti berikut.

![switch output case](img/ss_switch_ouput_case.png)

6. Apabila yang diinputkan tidak termasuk kedalam case, akan seperti berikut.

![switch output default](img/ss_switch_ouput_default.png)

## Langkah 9 `Form Input`

