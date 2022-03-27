let a = [];
a[0] = 'いちご';
a[1] = 'りんご';
a[2] = 'さくらんぼ';
a[3] = 'みかん';
a[4] = 'もも';
a[5] = 'ぶどう';
a[6] = 'すいか';
a[7] = 'かき';
a[8] = 'なし';
a[9] = 'くり';
a[10] = 'すもも';
a[11] = 'レモン';
a[12] = 'バナナ';
a[13] = 'キウイフルーツ';
a[14] = 'パイナップル';
a[15] = 'メロン';
a[16] = 'パパイヤ';
a[17] = 'マンゴー';
a[18] = 'だいこん';
a[19] = 'えだまめ';
a[20] = 'きゅうり';
a[21] = 'レタス';
a[22] = 'キャベツ';
a[23] = 'じゃがいも';
a[24] = 'かぼちゃ';
a[25] = 'しいたけ';
a[26] = 'にんじん';
a[27] = 'ゴーヤ';
a[28] = 'さつまいも';
a[29] = 'たけのこ';
a[30] = 'にんにく';
a[31] = 'ねんこん';
a[32] = 'なす';
a[33] = 'おくら';
a[34] = 'たまねぎ';
a[35] = 'とうもろこし';
a[36] = 'はくさい';
a[37] = 'にら';
a[38] = 'ほうれんそう';
a[39] = 'とまと';
a[40] = 'とうがらし';
a[41] = 'アスパラガス';
a[42] = 'ブロッコリー';
a[43] = 'ピーマン';
let b = [];
b[0] = 'Dâu tây';
b[1] = 'Quả Táo';
b[2] = 'Quả Cherry';
b[3] = 'Quả Cam';
b[4] = 'Quả Đào';
b[5] = 'Nho';
b[6] = 'Dưa hấu';
b[7] = 'Quả Hồng';
b[8] = 'Quả Lê';
b[9] = 'Hạt dẻ';
b[10] = 'Quả Mận';
b[11] = 'Quả Chanh';
b[12] = 'Quả Chuối';
b[13] = 'Trái Kiwi';
b[14] = 'Trái Dứa';
b[15] = 'Dưa lưới';
b[16] = 'Đu đủ';
b[17] = 'Quả Xoài';
b[18] = 'Củ cải trắng';
b[19] = 'Đậu tương';
b[20] = 'Dưa chuột';
b[21] = 'Xà lách';
b[22] = 'Bắp cải';
b[23] = 'Khoai tây';
b[24] = 'Bí ngô';
b[25] = 'Nấm hương';
b[26] = 'Cà rốt';
b[27] = 'Mướp đắng';
b[28] = 'Khoai lang';
b[29] = 'Măng tre';
b[30] = 'Tỏi';
b[31] = 'Củ sen';
b[32] = 'Cà tím';
b[33] = 'Đậu bắp';
b[34] = 'Hành tây';
b[35] = 'Bắp ngô';
b[36] = 'Cải thảo';
b[37] = 'Hẹ';
b[38] = 'Cải bó xôi (rau chân vịt)';
b[39] = 'Cà chua';
b[40] = 'Ớt';
b[41] = 'Măng tây';
b[42] = 'Súp lơ';
b[43] = 'Ớt chuông xanh';
let dem = 1;
let x = 0;
let c = [];
let j = 0;
c[0] = 0;
let card;
function myFuntion(){
  card = document.querySelector(".card__inner");
  card.addEventListener("click", function () {
    card.classList.toggle('is-flipped');
  });
}
function get_random_image() {
  let check;
  do {
    check = true;
    x = Math.floor(Math.random() * a.length);
    for (i = 0; i <= j; i++) {
      if (c[i] == x) {
        check = false;
        break;
      }
    }
    if (check == true) {
      document.getElementById("hiddenNumber").innerHTML = x;
      document.getElementById('txtFront').innerHTML = a[x];
      document.getElementById('imageBack').innerHTML = '<img src="flash-image/' + x + '.jpg" style="width:180px;">';
      document.getElementById('txtBack').innerHTML = b[x];
      c[j] = x;
      j++;
      console.log(c);
      dem++;

    }
  }
  while (check == false && j < a.length)
}
function display() {
  document.getElementById("backgroundPlay").innerHTML = '<div class="card">' +
    '<div class="card__inner">' +
    '<div class="card__face card__face--front">' +
    '<div id="txtFront">' +
    '</div>' +
    '</div>' +
    '<div class="card__face card__face--back">' +
    '<div id="imageBack">' +
    '</div>' +
    '<div id="txtBack">' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div id="buttonPlayContainer">' +
    '<button class="buttonPlay" onclick="ditiep()">Tiếp tục</button>' +
    '</div>';
}
function ngaunhien() {
  display();
  get_random_image();
  document.getElementById("background").innerHTML = "";
  myFuntion();
}
function ditiep() {
  display();
  get_random_image();
  if (dem > a.length) {
    document.getElementById('imageBack').innerHTML = '';
    document.getElementById('txtBack').innerHTML = '';
    document.getElementById('txtFront').innerHTML = "Bạn muốn ôn tập lại?";
    document.getElementById('buttonPlayContainer').innerHTML = '<button class="buttonPlay" onclick="ngaunhien()">Ôn tập lại</button>';
    c = [];
    j = 0;
    dem = 1;
  }
  myFuntion();
  card.classList.remove('is-flipped');
}