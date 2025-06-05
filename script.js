const imageContainer = document.querySelector(".image-container"); // 画像とキャプションを囲むコンテナ
const imageCaption = document.getElementById("imageCaption");

// マウスが画像に乗った時の処理
imageContainer.addEventListener("mouseover", () => {
  imageCaption.classList.add("show"); // 'show'クラスを追加してキャプションを表示
});

// マウスが画像から離れた時の処理
imageContainer.addEventListener("mouseout", () => {
  imageCaption.classList.remove("show"); // 'show'クラスを削除してキャプションを非表示
});

// 画像ファイルが存在しない場合のために、ダミー画像を準備するか、実際に画像を配置してください
// 例として、`placeholder-image.jpg`という名前の画像を、
// `index.html`や`script.js`と同じフォルダに用意してください。
// もし画像がない場合は、以下のようなURLの画像をsrcに設定することもできます。
// `myImage.src = 'https://via.placeholder.com/400x300/607d8b/FFFFFF?text=Placeholder+Image';`
// のように、JavaScriptで画像を動的に設定することも可能です。
