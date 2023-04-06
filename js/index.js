 // Show segitiga calculator form when button 1 is clicked
   function showSegitiga() {
       document.getElementById("segitiga").style.display = "block";
       document.getElementById("jajargenjang").style.display = "none";
   }
   
   // Show jajargenjang calculator form when button 2 is clicked
   function showJajargenjang() {
       document.getElementById("jajargenjang").style.display = "block";
       document.getElementById("segitiga").style.display = "none";
   }
   
   // Hitung luas segitiga dan tampilkan hasil
   function hitungLuasSegitiga() {
       var alas = parseFloat(document.getElementById("alas").value);
       var tinggi = parseFloat(document.getElementById("tinggi").value);
       var hasilLuas = (alas * tinggi) / 2;

       if(isNaN(alas) || isNaN(tinggi)){
        alert("Format Salah!");
       }else{
       document.getElementById("hasilLuasSegitiga").value = hasilLuas;
       }
   }
   
   // Hitung keliling segitiga dan tampilkan hasil
   function hitungKelilingSegitiga() {
        let sisi1 = parseInt(document.getElementById("sisi1").value);
        let sisi2 = parseInt(document.getElementById("sisi2").value);
        let sisi3 = parseInt(document.getElementById("sisi3").value);
        let hasilKeliling = sisi1 + sisi2 + sisi3;

        if(isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)){
        alert("Format Salah!");
    }else{
        document.getElementById("hasilKelilingSegitiga").value = hasilKeliling;
    }
   }
   
   // Hitung luas jajargenjang dan tampilkan hasil
   function hitungLuasJajargenjang() {
       let alas = parseInt(document.getElementById("alasJajargenjang1").value);
       let tinggi = parseInt(document.getElementById("tinggiJajargenjang").value);
       let hasilLuas = alas * tinggi;

       if(isNaN(alas) || isNaN(tinggi)){
        alert("Format Salah!");
       }else{
       document.getElementById("hasilLuasJajargenjang").value = hasilLuas;
       }
   }
   
   // Hitung keliling jajargenjang dan tampilkan hasil
   function hitungKelilingJajargenjang() {
       let alas = document.getElementById("alasJajargenjang").value;
       let sisiMiring = document.getElementById("sisiMiringJajargenjang").value;
       let hasilKeliling = (2 * alas) + (2 * sisiMiring);

       if(isNaN(alas) || isNaN(sisiMiring)){
        alert("Format Salah!");
       }else{
       document.getElementById("hasilKelilingJajargenjang").value = hasilKeliling;
       }
   }