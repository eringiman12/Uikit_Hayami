
// ------------------------------//　
// --- パンくずリスト処理関係 ---//
// ------------------------------//　
function  BreadList_Byoga_Create_val(e) {
   // オプション詳細
   var C_Option = 
      "<button className=\"MOre\" uk-icon=\"more\" uk-toggle=\"target: #modal-close-default\" uk-tooltip=\"title: オプション表示; pos: right\"></button>"+
      "<div id=\"modal-close-default\" uk-modal>" +
         "<div class=\"MOdal_widow uk-modal-dialog uk-modal-body uk-width-5-6\">" +
            "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>" +
            "<div class=\"title\">" +
               "<h2 class=\"uk-modal-title\">オプション</h2>" +
            "</div>" +
            "<p>ブレッドクラムコンポーネントはリンクで構成されており、リンクは並べて配置され、仕切りで区切られています。<span class=\"Code_bak\">.uk-breadcrumb/span>クラスを<span class=\"Code_bak\">&lt;ul&gt;</span>要素に追加して、コンポーネントを定義します。<span class=\"Code_bak\">&lt;a&gt;</span>リスト内のブレッドクラムアイテムとして要素を使用します。アクティブ状態は、最後の<li>要素に自動的に適用されます。</p>" +
            "<p>リンクなしでリストアイテムを追加する<span class=\"Code_bak\">&lt;span&gt;</span>には、<span class=\"Code_bak\">&lt;a&gt;</span>の代わりに要素を使用します。または、<span class=\"Code_bak\">&lt;a&gt;</span></p>要素に<span class=\"Code_bak\">&lt;uk-disabled&gt;</span>クラスを追加して<span class=\"Code_bak\">&lt;li&gt;</span></p>要素を無効にし、アンカーから<span class=\"Code_bak\">&lt;href&gt;</span>属性を削除して、キーボードナビゲーションからアクセスできないようにします。</p>" +
         "</div>" +
      "</div>"
   
   var C_val = []
   
   // デフォルトの時
   if (e == "Default") {
      C_val = [
         "<div class=\"midashi_H5\"><h5>ビューポートのサイズに応じて、インライン要素の配置を制御します。画像やその他の要素をテキストと要素の間に間隔を空けて配置するには、これらのクラスの1つを追加します。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<ul class=\"uk-breadcrumb\">",
         Tokusyu_Con(8,"&nbsp;") + "<li>Home</li>",
         Tokusyu_Con(8,"&nbsp;") + "<li>Linked Category</li>",
         Tokusyu_Con(8,"&nbsp;") + " <li><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>",
         Tokusyu_Con(4,"&nbsp;") + "</ul>",
         "</div> "
      ]
   }
   // 作成した変数を描画する
   Byouga_Create(C_val)
}

function BreadList_Select_Create() {
   var Ary = [
      "",
      "Default",
   ]
   Option_Add(Ary);
}