

const buton = document.querySelector(`#buton`);
// console.log(buton)

const inp = document.querySelector(`#inp`);



// console.log(inpDeğer);
// console.log(btn);
// console.log(emailRepair);
// console.log(emailRepair.length);

buton.addEventListener(`click`, function () {
  const emailRepair = inp.value.split(`@`).join(`.`).split(`.`);
  // console.log(emailRepair);
  if (emailRepair.length === 3) {
    if (emailRepair[2].length === 2 || emailRepair[2].length === 3) {
      alert(`email adresiniz kabul edilmiştir`);
    } else {
      alert(`hatalı email girdiniz`);
    }
  } else {
    alert(`hatalı email girdiniz`);
  }
});
// console.log(inp.value);

window.addEventListener(`keydown`, (x)=>{
    if(x.key === `Enter`){
        buton.click()

    }
})


window.addEventListener(`load`,() =>{
inp.focus()
})


//* önce html sayfasını olusturdum sonra orda id si buton olan butonumu js tarafında buton diye bir değişkene atadım.Sonra id si inp olan inputumuda inp diye bir değişkene atadım.Sonra dedimki butona tıklanınca git inputa yazılan değeri al onu işleme tabi tut işte split,joın,split yaptım ya heh işte oöyle işleme tabi tuttum naptım biliyonmu split ile önce @ kısmından kestim array oldu sonra join ile aralara nokta koyarak tekrar strıng yaptım sonra ise tekrar split ile noktalardan kestim ve üç elemanlı bir array oluşturmus oldum ve bunu bir değişkene atadım.Sonra koşul sürdüm öne dedimki girilen mailin uzunlugu 3 e eşite gir bakalım bi o kosulun içine ama dur daha bitmedi bir kosul daha koydum önünr dedimki girdiğin emailin son indeksi hani 3 e böldüm ya heh işte o son indeksi eşitse 2 veya 3 e tamam kardeş dogru mail girmişsin değilse yanlıs mail girmişsin hesabı.Eğer zaten ilk kosula hiç girmezse direk yanlıs mail girmişsin diyip yolladım köyüne.