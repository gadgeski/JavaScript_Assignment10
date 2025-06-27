目的：今後 TypeScript や React にスケールする為の準備段階

使用技術： JavaScript/CSS/HTML

このコードは、ウェブページに画像と、その画像にマウスカーソルを合わせたときに表示されるキャプション（説明文）を表示するものです。また、マウスカーソルを合わせると枠線が広がって背景がぼやける「Box」要素も含まれています。

各ファイルの役割

<h3>HTML ( index.html )</h3> ウェブページの構造とコンテンツ（画像、キャプション、Box 要素など）を定義します。
<h3>CSS ( style.css )</h3> ウェブページの見た目（色、配置、アニメーションなど）をデザインします。
<h3>JavaScript ( script.js )</h3> 画像にマウスを合わせたときのキャプションの表示・非表示といった、ウェブページの動的な動きを制御します。

<h1>HTML の解説 (index.html)</h1>
  HTML は、ウェブページの骨組みを作るファイルです。

<h3>!DOCTYPE html></h3> これはHTML5という最新のHTMLのバージョンを使っていることを宣言しています。

<h3>html lang="ja"</h3> ウェブページの言語が日本語であることを示しています。

<h3>head</h3> このセクションには、ウェブページには表示されないけれど、ブラウザがページを正しく表示するために必要な情報が含まれています。

<h3>meta charset="UTF-8"</h3> 文字コードをUTF-8に設定しています。これにより、日本語などの文字が正しく表示されます。

<h3>meta name="viewport" content="width=device-width, initial-scale=1.0"</h3> このページがスマートフォンなど様々なデバイスの画面サイズに適切に表示されるように設定しています。

<h3>title</h3> ブラウザのタブやウィンドウに表示されるページのタイトルです。

<h3>link rel="stylesheet" href="style.css"</h3> style.cssという名前のCSSファイルをこのHTMLに読み込んでいます。これにより、HTMLの要素がCSSでデザインされます。

<h3>body</h3> このセクションに書かれた内容が、実際にウェブページに表示されます。
  
<h3>div class="box"></h3> "Box"と書かれた四角いエリアを作成しています。CSSでboxというクラスが適用され、特殊なアニメーションが設定されています。
  
<h3>br</h3> 改行（次の要素を一行下に表示）するためのタグです。
  
<h3>div class="image-container"</h3> 画像とキャプションをグループ化するための入れ物（コンテナ）です。
    
<h3>img id="myImage" src="img/TravelScenery2025_3.png" alt="風景"</h3> 画像を表示するためのタグです。
    
<h3>id="myImage"</h3> JavaScriptでこの画像を特定するための名前（ID）です。
    
<h3>src="img/TravelScenery2025_3.png"</h3> 表示する画像ファイルの場所を示しています。この例では、imgフォルダの中にあるTravelScenery2025_3.pngという画像ファイルが表示されます。
    
<h3>alt="風景"</h3> 画像が表示されなかった場合に代わりに表示されるテキストや、目の不自由な方がスクリーンリーダーを使う際に読み上げられるテキストです。
    
<h3>div id="imageCaption" class="caption"</h3> 画像のキャプション（説明文）を表示する部分です。
      
<h3>id="imageCaption"</h3> JavaScriptでこのキャプションを特定するための名前（ID）です。
      
<h3>class="caption"</h3> CSSでcaptionというクラスが適用され、初期状態では非表示になっていて、マウスをホバーすると下からスライドして表示されるように設定されています。

<h3>script src="script.js"</h3> script.jsという名前のJavaScriptファイルをこのHTMLに読み込んでいます。これにより、HTMLの要素に動きが追加されます。

<h1>CSSコードの解説 (style.css)</h1>
CSSは、ウェブページの見た目をデザインするファイルです。

全体的なスタイル (body)

- body { ... }: ウェブページ全体のスタイルを設定しています。

  - width: 100%;: 幅を画面いっぱいに広げます。

  - background: url(...) no-repeat;: img/TravelScenery2025_2.png という画像を背景に設定し、繰り返さないよう
    にします。

  - background-size: cover;: 背景画像を画面全体に広げ、アスペクト比を維持します。

  - font-family: Arial, sans-serif;: テキストのフォントを設定します。

  - display: flex; flex-direction: column; justify-content: center; align-items: center;: これらは Flexbox というレイアウト方法を使って、ページ内の要素を中央に配置するための設定です。要素を縦一列に並べ（column）、上下左右に中央寄せします。

  - min-height: 100vh;: ページの高さが画面の高さ（ビューポートの高さ）の 100%以上になるように設定します。

  - margin: 0;: ページの余白をなくします。

  - color: #333;: テキストの色を濃いグレーに設定します。
    画像とキャプションのスタイル (.image-container, img, .caption)

- .image-container { ... }: 画像とキャプションを囲むコンテナ（入れ物）のスタイルです。

  - position: relative;: このコンテナを基準として、子要素（.caption）を配置できるようにします。

  - width: 400px; height: 300px;: コンテナのサイズを設定します。

  - overflow: hidden;: コンテナからはみ出す内容を隠します。これにより、初期状態で下に隠れているキャプションが見えなくなります。

  - border: 1px solid #ddd;: 境界線を設定します。

  - box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);: 影をつけ、立体感を出します。

  - border-radius: 10px;: 角を丸くします。

  - transition: transform 0.3s ease-in-out;: transform プロパティ（要素の拡大・縮小など）が変化する際に、0.3 秒かけてゆっくりと変化するように設定します。

- .image-container:hover { transform: scale(1.02); }: マウスカーソルが.image-container の上に乗ったときに、画像が 1.02 倍に少し拡大するアニメーションを設定します。

- img { ... }: image-container 内の画像のスタイルです。

  - width: 100%; height: 100%;: 親要素（.image-container）の幅と高さに合わせます。

  - display: block;: 画像をブロック要素として扱い、余計な余白をなくします。

  - object-fit: cover;: 画像がコンテナに収まるように、アスペクト比を維持しつつトリミングして表示します。

- .caption { ... }: 画像キャプションのスタイルです。

  - position: absolute;: 親要素（.image-container）を基準に自由に配置できるようにします。

  - bottom: 0; left: 0;: 親要素の左下隅に配置します。

  - width: 100%;: 親要素の幅いっぱいに広げます。

  - padding: 15px;: 内側の余白を設定します。

  - background-color: rgba(0, 0, 0, 0.7);: 半透明の黒い背景色を設定します。

  - color: white;: テキストの色を白にします。

  - font-size: 1.1em;: フォントサイズを少し大きくします。

  - text-align: center;: テキストを中央揃えにします。

  - transform: translateY(100%);: 初期状態では、自分の高さ分だけ下に移動させて、画面外に隠します。

  - transition: transform 0.3s ease-out;: transform プロパティが変化する際に、0.3 秒かけてゆっくりと変化するように設定します。これにより、キャプションがスライドするように見えます。

- .caption.show { transform: translateY(0); }: caption クラスに加えて show クラスが追加された場合（JavaScript で追加されます）に、キャプションを元の位置に戻して表示します。
  Box 要素のスタイル (.box)
- .box { ... }: HTML の div タグで作成された「Box」要素のスタイルです。

  - width: 720px; height: 480px;: ボックスのサイズを設定します。

  - margin: 13% auto 0;: 上に 13%の余白、左右は自動で中央寄せ、下は 0 の余白を設定します。

  - display: flex; align-items: center; justify-content: center;: Flexbox を使って、ボックス内のテキストを中央に配置します。

  - color: #fff;: テキストの色を白にします。

  - font-size: 32px; font-weight: bold;: フォントサイズと太さを設定します。

  - position: relative;: 子要素（::before, ::after）を配置するための基準とします。

  - transition: 0.4s;: 変化を 0.4 秒かけてゆっくりとアニメーションさせます。

- .box::before, .box::after: これらは「擬似要素」と呼ばれ、実際の HTML には存在しないけれど、CSS で追加できる要素です。ボックスの角に装飾的な枠線を追加するために使われています。

  - content: "";: 擬似要素に内容がないことを示します。

  - width: 50px; height: 50px;: 初期状態の枠線のサイズです。

  - border-top, border-left, border-bottom, border-right: 上下左右の枠線を設定します。

  - position: absolute;: 親要素（.box）を基準に配置します。

  - top: -1px; left: -1px; / bottom: -1px; right: -1px;: ボックスの角にわずかにはみ出すように配置します。

  - transition: 0.4s; transition-delay: 0.5s;: 変化を 0.4 秒かけてアニメーションさせ、0.5 秒の遅延（ディレイ）を設定します。

- .box:hover:before, .box:hover::after: マウスカーソルが.box の上に乗ったときに、擬似要素のスタイルが変化します。

  - width: 100%; height: 100%;: 擬似要素がボックス全体を覆うようにサイズを拡大します。

  - border-color: rgba(255, 255, 255, 0.3);: 枠線の色を薄い白に変えます。

  - transition-delay: 0s;: 遅延をなくし、すぐにアニメーションが始まるようにします。

  - border-radius: 10px;: 角を丸くします。

- .box:hover: マウスカーソルが.box の上に乗ったときの、ボックス本体のスタイル変化です。

  - background: rgba(255, 255, 255, 0.1);: 半透明の白い背景色に変化します。

  - backdrop-filter: blur(15px);: ボックスの後ろにある要素をぼかします。

  - transition-delay: 0.3s;: 0.3 秒の遅延を設定します。

<h1>JavaScriptコードの解説 (script.js)</h1>
JavaScriptは、ウェブページに動きと対話性を持たせるファイルです。

- const imageContainer = document.querySelector(".image-container");:

  - document.querySelector(".image-container"): HTML の中から image-container というクラスを持つ要素を探し出し、それを imageContainer という名前の定数（変更されない変数）に格納します。

- const imageCaption = document.getElementById("imageCaption");:

  - document.getElementById("imageCaption"): HTML の中から imageCaption という ID を持つ要素を探し出し、それを imageCaption という名前の定数に格納します。

- imageContainer.addEventListener("mouseover", () => { ... });:

  - addEventListener("mouseover", ...): imageContainer という要素に「マウスが上に乗った時（mouseover）」というイベントを監視する設定をします。

  - () => { ... }: イベントが発生したときに実行される処理（関数）です。

  - imageCaption.classList.add("show");: imageCaption という要素に show というクラスを追加します。CSS で show クラスが追加されるとキャプションが表示されるように設定されています。

- imageContainer.addEventListener("mouseout", () => { ... });:

  - addEventListener("mouseout", ...): imageContainer という要素に「マウスが上から離れた時（mouseout）」というイベントを監視する設定をします。

  - imageCaption.classList.remove("show");: imageCaption という要素から show というクラスを削除します。これにより、キャプションが非表示になります。

<h1>【まとめ】</h1>
この JavaScript コードは、image-container にマウスが乗るとキャプションが表示され、マウスが離れるとキャプションが非表示になるというインタラクティブな動きを実現しています。
