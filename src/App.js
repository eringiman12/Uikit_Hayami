import './asset/css/App.css'

// ----------------- //　
// --     jsx    -- //
// ----------------- //　 
function App() {
    return ( 
      <div className = "App" >
         <header className = "App-header"> </header>
         <select className='Select_Component' id="Main_Select" onChange={handleChange.bind()}>
            <option></option>
            <option> アコーディオン </option>
            <option> アラート </option>
            <option> 整列 </option>
            <option> アニメーション </option>
            <option> 記事 </option>
            <option> 背景 </option>
            <option> バッジ </option>
            <option> 基本 </option>
            <option> パンくずリスト </option>
            <option> ボタン </option>
            <option> カード </option>
            <option> 閉じる </option>
            <option> カラム </option>
            <option> コメント </option>
            <option> コンテナ </option>
         </select>
         <select className='Select_Component' id="Sub_Select" onChange={SubhandleChange.bind()}>
         </select>
         <button className="All_Copy" uk-icon="copy" uk-tooltip="title: UikitのCDNをコピーします。; pos: right" onClick={Allcopy}></button>
         <div className='Byoga_Area uk-flex'>
            <div id="Byoga_Design"></div>
            <div id="Byoga_Src"><div id="content"></div></div>
         </div>
      </div>
    )
}

// セレクトボックスのイベント
const handleChange = (e) => {
   // 選択された値を代入
   var select_val = e.target.value
   if (select_val == "アコーディオン") {
      Acodion_Select_Create()
   } else if (select_val == "アラート") {
      Alert_Select_Create()
   } else if (select_val == "整列") {
      Align_Select_Create()
   } else if (select_val == "アニメーション") {
      Animation_Select_Create()
   } else if (select_val == "記事") {
      Article_Select_Create()
   } else if (select_val == "背景") {
      Background_Select_Create()
   } else if (select_val == "バッジ") {
      Badge_Select_Create()
   } else if (select_val == "基本") {
      Base_Select_Create()
   } else if (select_val == "パンくずリスト") {
      BreadList_Select_Create()
   } else if (select_val == "ボタン") {
      Button_Select_Create()
   } else if (select_val == "カード") {
      Card_Select_Create()
   } else if (select_val == "閉じる") {
      Close_Select_Create()
   } else if (select_val == "カラム") {
      Column_Select_Create()
   } else if (select_val == "コメント") {
      Comment_Select_Create()
   } else if (select_val == "コンテナ") {
      Container_Select_Create()
   }  
}

// サブレクトボックスのイベント
const SubhandleChange = (e) => {
   // メインセレクトボックスで選択されている値
   var Main_select = document.getElementById("Main_Select").value   
   
   // 描画内容選択条件分岐
   if (Main_select == "アコーディオン") {
      Acodion_Byoga_Create_val(e.target.value)
   } else if (Main_select == "アラート") {
      Alert_Byoga_Create_val(e.target.value)
   } else if (Main_select == "整列") {
      Align_Byoga_Create_val(e.target.value) 
   } else if (Main_select == "アニメーション") {
      Animation_Byoga_Create_val(e.target.value) 
   } else if (Main_select == "記事") {
      Article_Byoga_Create_val(e.target.value) 
   } else if (Main_select == "背景") {
      Background_Byoga_Create_val(e.target.value) 
   } else if (Main_select == "バッジ") {
      Badge_Byoga_Create_val(e.target.value) 
   } else if (Main_select == "基本") {
      Base_Byoga_Create_val(e.target.value) 
   } else if (Main_select == "パンくずリスト") {
      BreadList_Byoga_Create_val(e.target.value) 
   } else if (Main_select == "ボタン") {
      Button_Byoga_Create_val(e.target.value) 
   } else if (Main_select == "カード") {
      Card_Byoga_Create_val(e.target.value) 
   } else if (Main_select == "閉じる") {
      Close_Byoga_Create_val(e.target.value) 
   } else if (Main_select == "カラム") {
      Column_Byoga_Create_val(e.target.value) 
   } else if (Main_select == "コメント") {
      Comment_Byoga_Create_val(e.target.value) 
   } else if (Main_select == "コンテナ") {
      Container_Byoga_Create_val(e.target.value) 
   }
}

// ----------------------//　
// --  Acodion処理関係 --//
// ----------------------//　
// アコーディオン要素作成変数を作る関数
function  Acodion_Byoga_Create_val(e) {
   // オプション詳細
   var C_Option = 
      "<button className=\"MOre\" uk-icon=\"more\" uk-toggle=\"target: #modal-close-default\" uk-tooltip=\"title: オプション表示; pos: right\"></button>"+
      "<div id=\"modal-close-default\" uk-modal>" +
         "<div class=\"MOdal_widow uk-modal-dialog uk-modal-body uk-width-5-6\">" +
            "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>" +
            "<div class=\"title\">" +
               "<h2 class=\"uk-modal-title\">オプション</h2>" +
            "</div>" +
            "<p>これらのオプションはいずれも、コンポーネント属性に適用できます。複数のオプションはセミコロンで区切ります。</p>" +
            "<table class=\"uk-table uk-table-striped\">" +
               "<thead>" +
                  "<tr>" +
                     "<th>オプション</th>" +
                     "<th>値</th>" +
                     "<th>Default</th>" +
                     "<th>説明</th>" +
                  "</tr>" +
               "</thead>" +
               "<tbody>" +
                  "<tr>" +
                     "<td style=\"color:red\">active</td>" +
                     "<td>Number</td>" +
                     "<td style=\"color:red\">false</td>" +
                     "<td>最初に開く要素のインデックス。</td>" +
                  "</tr>"  +
                  "<tr>" +
                     "<td style=\"color:red\">animation</td>" +
                     "<td>Boolean</td>" +
                     "<td style=\"color:red\">true</td>" +
                     "<td>アイテムを直接またはトランジションで表示します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">collapsible</td>" +
                     "<td>Boolean</td>" +
                     "<td style=\"color:red\">true</td>" +
                     "<td>すべてのアイテムを閉じることができます。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">content</td>" +
                     "<td>String</td>" +
                     "<td style=\"color:red\">> .uk-accordion-content</td>" +
                     "<td>アコーディオンのコンテンツ要素を選択するコンテンツセレクター。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">duration</td>" +
                     "<td>Number</td>" +
                     "<td style=\"color:red\">200</td>" +
                     "<td>ミリ秒単位のアニメーション期間。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">multiple</td>" +
                     "<td>Boolean</td>" +
                     "<td style=\"color:red\">false</td>" +
                     "<td>	複数のオープンアイテムを許可します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">targets</td>" +
                     "<td>String</td>" +
                     "<td style=\"color:red\">	> *</td>" +
                     "<td>	アコーディオンアイテムを切り替えるトグルセレクター。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">transition</td>" +
                     "<td>String</td>" +
                     "<td style=\"color:red\">ease</td>" +
                     "<td>	アイテムを公開するときに使用するトランジション。関数を緩和するためのキーワードを使用します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">offset</td>" +
                     "<td>Number</td>" +
                     "<td style=\"color:red\">0</td>" +
                     "<td>	スクロールトップにピクセルオフセットが追加されました。</td>" +
                  "</tr>" +
               "</tbody>" +
            "</table>" +
         "</div>" +
      "</div>"
   var C_val = []
   
   // デフォルトの時
   if (e == "Default") {
      C_val = [
         "<div class=\"midashi_H5\"><h5>アイテムのヘッダーをクリックして、個別に表示できるアイテムのリストを作成します。</h5></div>",
         C_Option,
         "<ul uk-accordion>",
         Tokusyu_Con(4,"&nbsp;") + "<li class=\"uk-open\">",
         Tokusyu_Con(8,"&nbsp;") + "<a class=\"uk-accordion-title\" href=\"#\">1番目</a>",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-accordion-content\">",
         Tokusyu_Con(12,"&nbsp;") + "<p>こちらが1番目になります。</p>" ,
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</li>",
         Tokusyu_Con(4,"&nbsp;") + "<li>",
         Tokusyu_Con(8,"&nbsp;") + "<a class=\"uk-accordion-title\" href=\"#\">2番目</a>",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-accordion-content\">",
         Tokusyu_Con(12,"&nbsp;") + "<p>こちらが2番目になります。</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</li>",
         Tokusyu_Con(4,"&nbsp;") + "<li>",
         Tokusyu_Con(8,"&nbsp;") + "<a class=\"uk-accordion-title\" href=\"#\" >3番目 </a>",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-accordion-content\">",
         Tokusyu_Con(12,"&nbsp;") +"<p>こちらが3番目になります。</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</li>",
         "</ul> "
      ]
   } else if(e == "折りたたみなし") {
       // No collapsingの時
       C_val = [
         "<div class=\"midashi_H5\"><h5>デフォルトでは、すべてのアコーディオンアイテムを折りたたむことができます。この動作を防ぎ、常に1つの開いているアイテムを維持するcollapsible: falseには、属性にオプションを追加します。</h5></div>",
         C_Option,
         "<ul uk-accordion=\"collapsible: false\">",
         Tokusyu_Con(4,"&nbsp;") + "<li class=\"uk-open\">",
         Tokusyu_Con(8,"&nbsp;") + "<a class=\"uk-accordion-title\" href=\"#\">1番目</a>",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-accordion-content\">",
         Tokusyu_Con(12,"&nbsp;") + "<p>こちらが1番目になります。</p>" ,
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</li>",
         Tokusyu_Con(4,"&nbsp;") + "<li>",
         Tokusyu_Con(8,"&nbsp;") + "<a class=\"uk-accordion-title\" href=\"#\">2番目</a>",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-accordion-content\">",
         Tokusyu_Con(12,"&nbsp;") + "<p>こちらが2番目になります。</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</li>",
         Tokusyu_Con(4,"&nbsp;") + "<li>",
         Tokusyu_Con(8,"&nbsp;") + "<a class=\"uk-accordion-title\" href=\"#\" >3番目 </a>",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-accordion-content\">",
         Tokusyu_Con(12,"&nbsp;") +"<p>こちらが3番目になります。</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</li>",
         "</ul> "
      ]
   } else if(e == "複数の開いているアイテム") {
      // No collapsingの時
      C_val = [
         "<div class=\"midashi_H5\"><h5>他のセクションを開いたときに一方が折りたたまれずに複数のコンテンツセクションを同時に表示するにはmultiple: true、属性にオプションを追加しuk-accordionます。</h5></div>",
         C_Option,
         "<ul uk-accordion=\"multiple: true\">",
         Tokusyu_Con(4,"&nbsp;") + "<li class=\"uk-open\">",
         Tokusyu_Con(8,"&nbsp;") + "<a class=\"uk-accordion-title\" href=\"#\">1番目</a>",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-accordion-content\">",
         Tokusyu_Con(12,"&nbsp;") + "<p>こちらが1番目になります。</p>" ,
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</li>",
         Tokusyu_Con(4,"&nbsp;") + "<li>",
         Tokusyu_Con(8,"&nbsp;") + "<a class=\"uk-accordion-title\" href=\"#\">2番目</a>",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-accordion-content\">",
         Tokusyu_Con(12,"&nbsp;") + "<p>こちらが2番目になります。</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</li>",
         Tokusyu_Con(4,"&nbsp;") + "<li>",
         Tokusyu_Con(8,"&nbsp;") + "<a class=\"uk-accordion-title\" href=\"#\" >3番目 </a>",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-accordion-content\">",
         Tokusyu_Con(12,"&nbsp;") +"<p>こちらが3番目になります。</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</li>",
         "</ul> "
      ]
   } else if(e == "開いているアイテムの設定") {
      C_val = [
         "<div class=\"midashi_H5\"><h5>属性にactive: <index>オプションを追加して1つのアイテムを開くこともできます。たとえば、2番目の要素を表示します（インデックスはゼロベースです）。これによりクラスが上書きされることに注意してください。</h5></div>",
         C_Option,
         "<ul uk-accordion=\"multiple: true\">",
         Tokusyu_Con(4,"&nbsp;") + "<li class=\"uk-open\">",
         Tokusyu_Con(8,"&nbsp;") + "<a class=\"uk-accordion-title\" href=\"#\">1番目</a>",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-accordion-content\">",
         Tokusyu_Con(12,"&nbsp;") + "<p>こちらが1番目になります。</p>" ,
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</li>",
         Tokusyu_Con(4,"&nbsp;") + "<li class=\"uk-open\">",
         Tokusyu_Con(8,"&nbsp;") + "<a class=\"uk-accordion-title\" href=\"#\">2番目</a>",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-accordion-content\">",
         Tokusyu_Con(12,"&nbsp;") + "<p>こちらが2番目になります。</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</li>",
         Tokusyu_Con(4,"&nbsp;") + "<li>",
         Tokusyu_Con(8,"&nbsp;") + "<a class=\"uk-accordion-title\" href=\"#\" >3番目 </a>",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-accordion-content\">",
         Tokusyu_Con(12,"&nbsp;") +"<p>こちらが3番目になります。</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</li>",
         "</ul> "
      ]
   }
   // 作成した変数を描画する
   Byouga_Create(C_val)
}

// アコーディオンサブ選択メニュー作成関数
function Acodion_Select_Create() {
   var Ary = [
      "",
      "Default",
      "折りたたみなし",
      "複数の開いているアイテム",
      "開いているアイテムの設定",
   ]
   Option_Add(Ary);
}

// ----------------------//　
// --  Alert処理関係 --//
// ----------------------//　
function  Alert_Byoga_Create_val(e) {
   // オプション詳細
   var C_Option = 
      "<button className=\"MOre\" uk-icon=\"more\" uk-toggle=\"target: #modal-close-default\" uk-tooltip=\"title: オプション表示; pos: right\"></button>"+
      "<div id=\"modal-close-default\" uk-modal>" +
         "<div class=\"MOdal_widow uk-modal-dialog uk-modal-body uk-width-5-6\">" +
            "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>" +
            "<div class=\"title\">" +
               "<h2 class=\"uk-modal-title\">オプション</h2>" +
            "</div>" +
            "<p>これらのオプションはいずれも、コンポーネント属性に適用できます。複数のオプションはセミコロンで区切ります。</p>" +
            "<table class=\"uk-table uk-table-striped\">" +
               "<thead>" +
                  "<tr>" +
                     "<th>オプション</th>" +
                     "<th>値</th>" +
                     "<th>Default</th>" +
                     "<th>説明</th>" +
                  "</tr>" +
               "</thead>" +
               "<tbody>" +
                  "<tr>" +
                     "<td style=\"color:red\">animation</td>" +
                     "<td>Boolean, String</td>" +
                     "<td style=\"color:red\">true</td>" +
                     "<td>フェードアウトするか、アニメーションコンポーネントを使用します。</td>" +
                  "</tr>"  +
                  "<tr>" +
                     "<td style=\"color:red\">duration</td>" +
                     "<td>Number</td>" +
                     "<td style=\"color:red\">150</td>" +
                     "<td>ミリ秒単位のアニメーション期間。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">sel-close</td>" +
                     "<td>CSS selector</td>" +
                     "<td style=\"color:red\">.uk-alert-close</td>" +
                     "<td>クローズトリガー要素。</td>" +
                  "</tr>" +
               "</tbody>" +
            "</table>" +
            "<p><span class=\"Code_bak\">animation</span>はプライマリオプションであり、属性値の唯一のオプションである場合は、そのキーを省略できます。</p>" +
         "</div>" +
      "</div>"
   var C_val = []
   
   // デフォルトの時
   if (e == "Default") {
      C_val = [
         "<div class=\"midashi_H5\"><h5>成功、警告、およびエラーメッセージを表示します。このコンポーネントを適用するには、uk-alert属性をブロック要素に追加します。</h5></div>",
         C_Option,
         "<div uk-alert>",
         Tokusyu_Con(4,"&nbsp;") + "ここはサンプルになります。",
         "</div> "
      ]
   } else if(e == "閉じるボタン") {
       // No collapsingの時
       C_val = [
         "<div class=\"midashi_H5\"><h5>閉じるボタンを作成してその機能を有効にするには、アラートボックス内のまたは要素に.uk-alert-closeクラスを追加します。閉じるアイコンを適用するには、閉じるコンポーネントから属性を追加します。</h5></div>",
         C_Option,
         "<div uk-alert>",
         Tokusyu_Con(4,"&nbsp;") + "<a class=\"uk-alert-close\" uk-close></a>",
         Tokusyu_Con(4,"&nbsp;") + "<h3>Notice</h3>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-accordion-content\">",
         Tokusyu_Con(8,"&nbsp;") + "<p>ここはサンプルになります。</p>" ,
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
      ]
   } else if(e == "スタイル修飾子") {
      // No collapsingの時
      C_val = [
         "<div class=\"midashi_H5\"><h5>利用可能ないくつかのスタイル修飾子があります。次のクラスのいずれかを追加するだけで、別の外観を適用できます。</h5></div>",
         C_Option,
         "<div class=\"uk-alert-primary\" uk-alert>",
         Tokusyu_Con(4,"&nbsp;") + "<a class=\"uk-alert-close\" uk-close></a>",
         Tokusyu_Con(4,"&nbsp;") + "<p>ここはサンプルになります。01</p>",
         "</div>",
         "<div class=\"uk-alert-success\" uk-alert>",
         Tokusyu_Con(4,"&nbsp;") + "<a class=\"uk-alert-close\" uk-close></a>",
         Tokusyu_Con(4,"&nbsp;") + "<p>ここはサンプルになります。02</p>",
         "</div>",
         "<div class=\"uk-alert-warning\" uk-alert>",
         Tokusyu_Con(4,"&nbsp;") + "<a class=\"uk-alert-close\" uk-close></a>",
         Tokusyu_Con(4,"&nbsp;") + "<p>ここはサンプルになります。03</p>",
         "</div>",
         "<div class=\"uk-alert-danger\" uk-alert>",
         Tokusyu_Con(4,"&nbsp;") + "<a class=\"uk-alert-close\" uk-close></a>",
         Tokusyu_Con(4,"&nbsp;") + "<p>ここはサンプルになります。04</p>",
         "</div>",
      ]
   }
   // 作成した変数を描画する
   Byouga_Create(C_val)
}

function Alert_Select_Create() {
   var Ary = [
      "",
      "Default",
      "閉じるボタン",
      "スタイル修飾子",
   ]
   Option_Add(Ary);
}

// ----------------------//　
// --- Align処理関係 ---//
// ---------------------//　
function  Align_Byoga_Create_val(e) {
   // オプション詳細
   var C_Option = 
      "<button className=\"MOre\" uk-icon=\"more\" uk-toggle=\"target: #modal-close-default\" uk-tooltip=\"title: オプション表示; pos: right\"></button>"+
      "<div id=\"modal-close-default\" uk-modal>" +
         "<div class=\"MOdal_widow uk-modal-dialog uk-modal-body uk-width-5-6\">" +
            "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>" +
            "<div class=\"title\">" +
               "<h2 class=\"uk-modal-title\">オプション</h2>" +
            "</div>" +
            "<p>これらのオプションはいずれも、コンポーネント属性に適用できます。複数のオプションはセミコロンで区切ります。</p>" +
            "<table class=\"uk-table uk-table-striped\">" +
               "<thead>" +
                  "<tr>" +
                     "<th>クラス名</th>" +
                     "<th>説明</th>" +
                  "</tr>" +
               "</thead>" +
               "<tbody>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-align-left</td>" +
                     "<td>要素を左にフロートさせ、右と下のマージンを作成します。</td>" +
                  "</tr>"  +
                  "<tr>" +
                     "<td style=\"color:red\">uk-align-right</td>" +
                     "<td>要素を右にフロートさせ、左マージンと下マージンを作成します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-align-center</td>" +
                     "<td>要素を中央に配置し、下マージンを作成します。</td>" +
                  "</tr>" +
               "</tbody>" +
            "</table>" +
            "<div class=\"title\">" +
               "<h2 class=\"uk-modal-title\">レスポンシブ</h2>" +
            "</div>" +
            "<table class=\"uk-table uk-table-striped\">" +
               "<thead>" +
                  "<tr>" +
                     "<th>クラス名</th>" +
                     "<th>説明</th>" +
                  "</tr>" +
               "</thead>" +
               "<tbody>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-align-left@s<br/>uk-align-right@s</td>" +
                     "<td>640px以上のデバイス幅にのみ影響します。</td>" +
                  "</tr>"  +
                  "<tr>" +
                     "<td style=\"color:red\">uk-align-left@m<br/>uk-align-right@m</td>" +
                     "<td>960px以上のデバイス幅にのみ影響します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-align-left@l<br/>uk-align-right@l</td>" +
                     "<td>1200px以上のデバイス幅にのみ影響します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-align-left@xl<br/>uk-align-right@xl</td>" +
                     "<td>1600px以上のデバイス幅にのみ影響します。</td>" +
                  "</tr>" +
               "</tbody>" +
            "</table>" +
         "</div>" +
      "</div>"
   
   var C_val = []
   
   // デフォルトの時
   if (e == "Default") {
      C_val = [
         "<div class=\"midashi_H5\"><h5>ビューポートのサイズに応じて、インライン要素の配置を制御します。画像やその他の要素をテキストと要素の間に間隔を空けて配置するには、これらのクラスの1つを追加します。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<img class=\"uk-align-left uk-margin-remove-adjacent\" src=\"./light.jpg\"  width=\"225\" height=\"150\" alt=\"Example image\">",
         Tokusyu_Con(4,"&nbsp;") + " <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
         Tokusyu_Con(4,"&nbsp;") + "  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
         "</div> "
      ]
   } else if(e == "レスポンシブ") {
       // No collapsingの時
       C_val = [
         "<div class=\"midashi_H5\"><h5>UIkitは、レスポンシブアライメントクラスを多数提供しています。基本的に、それらは通常のアライメントクラスと同じように機能しますが、それらが有効になるブレークポイントを表す接尾辞がある点が異なります。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<img class=\"uk-align-center uk-align-right@m uk-margin-remove-adjacent\" src=\"./light.jpg\"  width=\"225\" height=\"150\" alt=\"Example image\">",
         Tokusyu_Con(4,"&nbsp;") + " <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
         Tokusyu_Con(4,"&nbsp;") + "  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
         "</div> "
      ]
   } 
   // 作成した変数を描画する
   Byouga_Create(C_val)
}

function Align_Select_Create() {
   var Ary = [
      "",
      "Default",
      "レスポンシブ",
   ]
   Option_Add(Ary);
}

// ----------------------//　
// --- Animation処理関係 ---//
// ---------------------//　
function Animation_Byoga_Create_val(e) {
   // オプション詳細(フェード用)
   var Fade_Opti = 
      "<button className=\"MOre\" uk-icon=\"more\" uk-toggle=\"target: #modal-close-default\" uk-tooltip=\"title: オプション表示; pos: right\"></button>"+
      "<div id=\"modal-close-default\" uk-modal>" +
         "<div class=\"MOdal_widow uk-modal-dialog uk-modal-body uk-width-5-6\">" +
            "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>" +
            "<div class=\"title\">" +
               "<h2 class=\"uk-modal-title\">オプション</h2>" +
            "</div>" +
            "<p>これらのオプションはいずれも、コンポーネント属性に適用できます。複数のオプションはセミコロンで区切ります。</p>" +
            "<table class=\"uk-table uk-table-striped\">" +
               "<thead>" +
                  "<tr>" +
                     "<th>クラス名</th>" +
                     "<th>説明</th>" +
                  "</tr>" +
               "</thead>" +
               "<tbody>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-animation-fade</td>" +
                     "<td>	要素がフェードインします。</td>" +
                  "</tr>"  +
                  "<tr>" +
                     "<td style=\"color:red\">uk-animation-scale-up<br/>uk-animation-scale-down</td>" +
                     "<td>要素がフェードインし、スケールアップまたはスケールダウンします。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-animation-slide-top<br/>uk-animation-slide-bottom<br/>uk-animation-slide-left<br/>uk-animation-slide-right<br/></td>" +
                     "<td>要素はフェードインし、上、下、左、または右から独自の高さまたは幅でスライドします。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\"uk-animation-slide-top-small<br/>uk-animation-slide-bottom-small<br/>uk-animation-slide-left-small<br/>uk-animation-slide-right-small<br/></td>" +
                     "<td>要素はフェードインし、固定ピクセル値で指定された短い距離で上、下、左、または右からスライドインします。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\"uk-animation-slide-top-medium<br/>uk-animation-slide-bottom-medium<br/>uk-animation-slide-left-medium<br/>uk-animation-slide-right-medium<br/></td>" +
                     "<td>要素は、固定ピクセル値で指定された中程度の距離で、上、下、左、または右からフェードインしてスライドインします。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-animation-kenburns</td>" +
                     "<td>要素は、フェードインせずに非常にゆっくりとスケールアップします。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-animation-shake</td>" +
                     "<td>	要素が揺れます。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-animation-stroke</td>" +
                     "<td>SVG要素のストロークが描画されます。</td>" +
                  "</tr>" +
               "</tbody>" +
            "</table>" +
            "<p>ホバーまたはフォーカスでアニメーションを切り替えるには、<span class=\"Code_bak\">.uk-animation-toggle</span>クラスを親要素に追加します。<span class=\"Code_bak\">tabindex=\"0\"</span>また、キーボードナビゲーションやタッチデバイスでアニメーションをフォーカス可能にするために追加します。</p>"+
         "</div>" +
      "</div>"
                  
   // スケーリングアニメーション用
   var Fade_Opti = 
      "<button className=\"MOre\" uk-icon=\"more\" uk-toggle=\"target: #modal-close-default\" uk-tooltip=\"title: オプション表示; pos: right\"></button>"+
      "<div id=\"modal-close-default\" uk-modal>" +
      "<div class=\"MOdal_widow uk-modal-dialog uk-modal-body uk-width-5-6\">" +
         "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>" +
         "<div class=\"title\">" +
            "<h2 class=\"uk-modal-title\">オプション</h2>" +
         "</div>" +
         "<p>デフォルトでは、スケーリングアニメーションは中心から始まります。この動作を変更するには、ユーティリティコンポーネント.uk-transform-origin-*からクラスの1つを追加します。</p>"+
         "<pre class=\"big_width\"><code>&lt;div class=\"uk-animation-scale-up uk-transform-origin-bottom-right\"&gt;&lt;/div&gt;</code></pre>" +
      "</div>" +
      "</div>"
               
   // Kenburns効果用
   var Kenburns = 
      "<button className=\"MOre\" uk-icon=\"more\" uk-toggle=\"target: #modal-close-default\" uk-tooltip=\"title: オプション表示; pos: right\"></button>"+
      "<div id=\"modal-close-default\" uk-modal>" +
         "<div class=\"MOdal_widow uk-modal-dialog uk-modal-body uk-width-5-6\">" +
            "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>" +
            "<div class=\"title\">" +
               "<h2 class=\"uk-modal-title\">オプション</h2>" +
            "</div>" +
            "<p>単純なKenBurns効果を追加するには、.uk-animation-kenburns任意の画像にクラスを追加します。ユーティリティコンポーネントのクラス.uk-animation-reverseまたはクラスの1つを適用して、効果を変更することもできます。</p>"+
            "<p>デフォルトでは、アニメーションはページの読み込み時に開始されます。この例では、Scrollspyコンポーネントを使用して、画像がビューに入ったときの効果を切り替えました。</p>"+
            "<pre class=\"big_width\"><code>&lt;img class=\"uk-animation-kenburns\" src=\"\" alt=\"\"&gt;</code></pre>" +
         "</div>" +
      "</div>"
               
   // SVGストローク用
   var SVG_stroke = 
      "<button className=\"MOre\" uk-icon=\"more\" uk-toggle=\"target: #modal-close-default\" uk-tooltip=\"title: オプション表示; pos: right\"></button>"+
      "<div id=\"modal-close-default\" uk-modal>" +
         "<div class=\"MOdal_widow uk-modal-dialog uk-modal-body uk-width-5-6\">" +
            "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>" +
            "<div class=\"title\">" +
               "<h2 class=\"uk-modal-title\">オプション</h2>" +
            "</div>" +
            "<p>アニメーションコンポーネントは、SVGストロークをアニメーション化するために使用できます。この効果は、SVGストロークが目の前に描かれているように見えます。SVG画像は、インラインSVGとしてマークアップに挿入する必要があります。これは、手動で、またはSVGコンポーネントを使用して実行できます。</p>"+
            "<p>次の例は、インラインSVGを手動で追加する方法を示しています。ストロークの正確な長さを知る必要があるため、UIkitではカスタムプロパティで長さを設定する必要があります--uk-animation-stroke。この例では、ストロークの長さは46です。</p>"+
            "<pre class=\"big_width\">" +
               "<code>" +
                  "<p>&lt;svg class=\"uk-animation-stroke\" style=\"--uk-animation-stroke: 46;\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"&gt;</p>" +
                     "<p>&lt;path fill=\"none\" stroke=\"#000\" stroke-width=\"1\" d=\"\"/&gt;</p>" +
                  "<p>&lt;/svg&gt;</p>"+
               "</code>" +
            "</pre>" +
         "</div>" +
      "</div>"         
   
   var C_val = []
   var C_Option = ""
   // フェード処理
   if (e == "フェード") {
      C_Option = Fade_Opti
      C_val = [
         "<div class=\"midashi_H5\"><h5>フェード表示です。</h5></div>",
         C_Option,
         "<div class=\"uk-flex\">",
         "<div class=\"uk-width-4-5 uk-grid-match\" uk-grid>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-fade\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">フェード</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
         "<div class=\"uk-width-4-5 uk-grid-match\" uk-grid>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-fade uk-animation-reverse\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">フェード</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
         "<div class=\"uk-width-4-5\">",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-fast uk-animation-fade\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">フェード</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
         "</div>",
      ]
   } else if(e == "拡大") {
      C_Option = Fade_Opti
       C_val = [
         "<div class=\"midashi_H5\"><h5>フェード表示です。</h5></div>",
         C_Option,
         "<div class=\"uk-flex\">",
         "<div class=\"uk-width-4-5 uk-grid-match\" uk-grid>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-scale-up\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">拡大</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
         "<div class=\"uk-width-4-5 uk-grid-match\" uk-grid>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-scale-up uk-animation-reverse\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">拡大</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
         "</div>",
      ]
   } else if(e == "拡縮") {
      C_Option = Fade_Opti
      C_val = [
        "<div class=\"midashi_H5\"><h5>拡縮表示です。</h5></div>",
        C_Option,
        "<div class=\"uk-flex\">",
        "<div class=\"uk-width-4-5 uk-grid-match\" uk-grid>",
        Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
        Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-scale-down\">",
        Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">拡縮</p>",
        Tokusyu_Con(8,"&nbsp;") + "</div>",
        Tokusyu_Con(4,"&nbsp;") + "</div>",
        "</div>",
        "<div class=\"uk-width-4-5 uk-grid-match\" uk-grid>",
        Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
        Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-scale-down uk-animation-reverse\">",
        Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">拡縮</p>",
        Tokusyu_Con(8,"&nbsp;") + "</div>",
        Tokusyu_Con(4,"&nbsp;") + "</div>",
        "</div>",
        "</div>",
     ]
  } else if(e == "震える") {
      C_Option = Fade_Opti
      C_val = [
         "<div class=\"midashi_H5\"><h5>震える表示です。</h5></div>",
         C_Option,
         "<div class=\"uk-flex\">",
         "<div class=\"uk-width-4-5 uk-grid-match\" uk-grid>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-shake\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">震える</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
         "<div class=\"uk-width-4-5 uk-grid-match\" uk-grid>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-shake uk-animation-reverse\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">震える</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
         "</div>",
      ]
   } else if(e == "左フェードイン") {
      C_Option = Fade_Opti
      C_val = [
         "<div class=\"midashi_H5\"><h5>震える表示です。</h5></div>",
         C_Option,
         "<div class=\"uk-flex\">",
         "<div class=\"uk-width-4-5 uk-grid-match\" uk-grid>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-slide-left\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">左フェードイン</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
         "<div class=\"uk-width-4-5 uk-grid-match\" uk-grid>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-slide-left uk-animation-reverse\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">左フェードアウト</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
         "</div>",
         "</div><br/><br/>",
         "<div class=\"uk-flex\">",
         "<div class=\"uk-width-4-5 uk-grid-match\" uk-grid>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-slide-left-small\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">左smallフェードイン</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
         "</div>",
         "</div><br/><br/>",
         "<div class=\"uk-flex\">",
         "<div class=\"uk-width-4-5 uk-grid-match\" uk-grid>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-slide-left-medium\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">左midiumフェードイン</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
         "<div class=\"uk-width-4-5 uk-grid-match\" uk-grid>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-slide-left-medium uk-animation-reverse\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">左midiumフェードアウト</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
         "</div>",
         "</div>",
         "</div><br/><br/>",
      ]
   } else if(e == "右フェードイン") {
      C_Option = Fade_Opti
      C_val = [
         "<div class=\"midashi_H5\"><h5>震える表示です。</h5></div>",
         C_Option,
         "<div class=\"uk-flex\">",
         "<div class=\"uk-width-4-5 uk-grid-match\" uk-grid>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-slide-right\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">右フェードイン</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
         "<div class=\"uk-width-4-5 uk-grid-match\" uk-grid>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-slide-right uk-animation-reverse\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">右フェードアウト</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
         "</div><br/><br/>",
         "<div class=\"uk-flex\">",
         "<div class=\"uk-width-4-5 uk-grid-match\" uk-grid>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-slide-right-small\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">右smallフェードイン</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
         "</div><br/><br/>",
         "<div class=\"uk-flex\">",
         "<div class=\"uk-width-4-5 uk-grid-match\" uk-grid>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-slide-right uk-animation-slide-right-medium\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">右mediumフェードイン</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
         "<div class=\"uk-width-4-5 uk-grid-match\" uk-grid>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-slide-right uk-animation-slide-right-medium uk-animation-reverse\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">右mediumフェードアウト</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
         "</div>",
      ]
   } else if(e == "上フェードイン") {
      C_Option = Fade_Opti
      C_val = [
         "<div class=\"midashi_H5\"><h5>震える表示です。</h5></div>",
         C_Option,
         "<div class=\"uk-flex\">",
         "<div class=\"uk-width-4-5 uk-grid-match\" uk-grid>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-slide-top\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">上フェードイン</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
         "<div class=\"uk-width-4-5 uk-grid-match\" uk-grid>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-slide-top uk-animation-reverse\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">上フェードアウト</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
         "</div><br/><br/>",
         "<div class=\"uk-flex\">",
         "<div class=\"uk-width-4-5 uk-grid-match\" uk-grid>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-slide-top-small\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">上smallフェードイン</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
         "</div><br/><br/>",
         "<div class=\"uk-flex\">",
         "<div class=\"uk-width-4-5 uk-grid-match\" uk-grid>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body  uk-animation-slide-top-medium\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">上mediumフェードイン</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
         "<div class=\"uk-width-4-5 uk-grid-match\" uk-grid>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-slide-top-medium uk-animation-reverse\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">上mediumフェードアウト</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
         "</div>",
      ]
   }  else if(e == "下フェードイン") {
      C_Option = Fade_Opti
      C_val = [
         "<div class=\"midashi_H5\"><h5>震える表示です。</h5></div>",
         C_Option,
         "<div class=\"uk-flex\">",
         "<div class=\"uk-width-4-5 uk-grid-match\" uk-grid>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-slide-bottom\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">下フェードイン</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
         "<div class=\"uk-width-4-5 uk-grid-match\" uk-grid>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-slide-bottom uk-animation-reverse\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">下フェードアウト</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
         "</div><br/><br/>",
         "<div class=\"uk-flex\">",
         "<div class=\"uk-width-4-5 uk-grid-match\" uk-grid>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-slide-bottom-small\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">下smallフェードイン</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
         "</div><br/><br/>",
         "<div class=\"uk-flex\">",
         "<div class=\"uk-width-4-5 uk-grid-match\" uk-grid>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body  uk-animation-slide-bottom-medium\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">下mediumフェードイン</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
         "<div class=\"uk-width-4-5 uk-grid-match\" uk-grid>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-slide-bottom-medium uk-animation-reverse\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">下mediumフェードアウト</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
         "</div>",
      ]
   }  else if(e == "スケーリングアニメーション") {
      C_Option = Fade_Opti
      C_val = [
         "<div class=\"midashi_H5\"><h5>スケーリングアニメーションです。</h5></div>",
         C_Option,
         "<div class=\"uk-flex\">",
         "<div class=\"uk-child-width-1-3@s\" uk-grid>",
         Tokusyu_Con(4,"&nbsp;") + " <div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-scale-up uk-transform-origin-bottom-right\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">下スケーリング</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + " <div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-scale-up uk-transform-origin-top-center\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">上中央スケーリング</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + " <div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-animation-scale-up uk-transform-origin-bottom-center\">",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-center\">下中央スケーリング</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
         "</div>"
      ]
   } else if(e == "KenBurns効果") {
      C_Option = Kenburns
      C_val = [
         "<div class=\"midashi_H5\"><h5>KenBurns効果です。</h5></div>",
         C_Option,
         "<div class=\"uk-child-width-1-2@s uk-grid-small\" uk-grid>",
         Tokusyu_Con(4,"&nbsp;") + "<div>",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-overflow-hidden\">",
         Tokusyu_Con(12,"&nbsp;") + "<img src=\"./dark.jpg\" alt=\"Example image\" uk-scrollspy=\"cls: uk-animation-kenburns; repeat: true\">",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "<div>",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-overflow-hidden\">",
         Tokusyu_Con(12,"&nbsp;") + "<img src=\"./dark.jpg\" alt=\"Example image\" class=\"uk-animation-reverse uk-transform-origin-top-right\" uk-scrollspy=\"cls: uk-animation-kenburns; repeat: true\">",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>",
      ]
   } else if(e == "SVGストローク") {
      C_Option = SVG_stroke
      C_val = [
         "<div class=\"midashi_H5\"><h5>SVGストロークです。</h5></div>",
         C_Option,
         "<div class=\"uk-child-width-1-2@m uk-text-center\" uk-grid>",
         Tokusyu_Con(8,"&nbsp;") + " <div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(12,"&nbsp;") + "<img class=\"uk-animation-stroke\" width=\"400\" height=\"400\" src=\"./strokes.svg\" alt=\"\" uk-svg=\"stroke-animation: true\">",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + " <div class=\"uk-animation-toggle\" tabindex=\"0\">",
         Tokusyu_Con(12,"&nbsp;") + "<img class=\"uk-animation-stroke uk-animation-reverse\" width=\"400\" height=\"400\" src=\"./strokes.svg\" alt=\"\" uk-svg=\"stroke-animation: true\">",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         "</div>",
      ]
   }  
     
   // 作成した変数を描画する
   Byouga_Create(C_val)
}

function Animation_Select_Create() {
   var Ary = [
      "",
      "フェード",
      "拡大",
      "拡縮",
      "震える",
      "左フェードイン",
      "右フェードイン",
      "上フェードイン",
      "下フェードイン",
      "スケーリングアニメーション",
      "KenBurns効果",
      "SVGストローク"
   ]
   Option_Add(Ary)
}

// -------------------------//　
// ---- Article処理関係 ----//
// -------------------------//　
function Article_Byoga_Create_val(e) {
     // オプション詳細
     var C_Option = 
         "<button className=\"MOre\" uk-icon=\"more\" uk-toggle=\"target: #modal-close-default\" uk-tooltip=\"title: オプション表示; pos: right\"></button>"+
         "<div id=\"modal-close-default\" uk-modal>" +
            "<div class=\"MOdal_widow uk-modal-dialog uk-modal-body uk-width-5-6\">" +
               "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>" +
               "<div class=\"title\">" +
                  "<h2 class=\"uk-modal-title\">オプション</h2>" +
               "</div>" +
               "<p>これらのオプションはいずれも、コンポーネント属性に適用できます。複数のオプションはセミコロンで区切ります。</p>" +
               "<table class=\"uk-table uk-table-striped\">" +
                  "<thead>" +
                     "<tr>" +
                        "<th>クラス名</th>" +
                        "<th>説明</th>" +
                     "</tr>" +
                  "</thead>" +
                  "<tbody>" +
                     "<tr>" +
                        "<td style=\"color:red\">uk-article</td>" +
                        "<td>このクラスを追加して、Articleコンポーネントを定義します。通常、これには<article>要素を使用します。</td>" +
                     "</tr>"  +
                     "<tr>" +
                        "<td style=\"color:red\">uk-article-title</td>" +
                        "<td>このクラスを見出しに追加して、記事のタイトルを作成します。通常、これには要素を使用します。</td>" +
                     "</tr>" +
                     "<tr>" +
                        "<td style=\"color:red\">uk-article-meta</td>" +
                        "<td>このクラスを、記事に関するメタデータを含む段落に追加します。</td>" +
                     "</tr>" +
                  "</tbody>" +
               "</table>" +
               "<p>Textコンポーネント.uk-text-leadのクラスを使用して、先頭の段落を作成します。</p>" +
            "</div>" +
         "</div>"
     
   var C_val = []

   // デフォルトの時
   if (e == "Default") {
      C_val = [
         "<div class=\"midashi_H5\"><h5>ページ内に記事を作成します。</h5></div>",
         C_Option,
         "<article class=\"uk-article\">",
         Tokusyu_Con(4,"&nbsp;") + "<h1 class=\"uk-article-title\"><a class=\"uk-link-reset\" href=\"\">Heading</a></h1>",
         Tokusyu_Con(4,"&nbsp;") + "<p class=\"uk-article-meta\">Written by <a href=\"#\">Super User</a> on 12 April 2012. Posted in <a href=\"#\">Blog</a></p>",
         Tokusyu_Con(4,"&nbsp;") + "<p class=\"uk-text-lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>",
         Tokusyu_Con(4,"&nbsp;") + " <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-grid-small uk-child-width-auto\" uk-grid>",
         Tokusyu_Con(8,"&nbsp;") + "<div>",
         Tokusyu_Con(12,"&nbsp;") + "<a class=\"uk-button uk-button-text\" href=\"#\">Read more</a>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "<div>",
         Tokusyu_Con(12,"&nbsp;") + "<a class=\"uk-button uk-button-text\" href=\"#\">5 Comments</a>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</article> "
      ]
   } 
   // 作成した変数を描画する
   Byouga_Create(C_val)
}

// セレクトボックスのoption生成
function  Article_Select_Create() {
   var Ary = [
      "",
      "Default",
   ]
   Option_Add(Ary)
}

// ----------------------------//　
// ---- Background処理関係 ----//
// ----------------------------//　
function Background_Byoga_Create_val(e) {
   // オプション詳細(デフォルト)
   var Default = 
      "<button className=\"MOre\" uk-icon=\"more\" uk-toggle=\"target: #modal-close-default\" uk-tooltip=\"title: オプション表示; pos: right\"></button>"+
      "<div id=\"modal-close-default\" uk-modal>" +
         "<div class=\"MOdal_widow uk-modal-dialog uk-modal-body uk-width-5-6\">" +
            "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>" +
            "<div class=\"title\">" +
               "<h2 class=\"uk-modal-title\">オプション</h2>" +
            "</div>" +
            "<p>要素に背景色を適用するには、次のクラスのいずれかを追加します。各モディファイアの実際の色は、選択またはカスタマイズしたUIkitスタイルによって定義されます。</p>" +
            "<table class=\"uk-table uk-table-striped\">" +
               "<thead>" +
                  "<tr>" +
                     "<th>クラス名</th>" +
                     "<th>説明</th>" +
                  "</tr>" +
               "</thead>" +
               "<tbody>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-default</td>" +
                     "<td>デフォルトの背景色を適用します。</td>" +
                  "</tr>"  +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-muted</td>" +
                     "<td>ミュートされた背景色を適用します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-primary</td>" +
                     "<td>主な背景色を適用します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-secondary</td>" +
                     "<td>二次背景色を適用します。</td>" +
                  "</tr>" +
               "</tbody>" +
            "</table>" +
            "<p>各背景の視認性を高めるためにコンテンツを調整するには、 Inverseコンポーネント.uk-lightからまたは.uk-darkクラスを追加します。パディングコンポーネントを使用して、要素にパディングを追加します。</p>" +
         "</div>" +
      "</div>"
  // サイズ修飾子
  var Sizemodifiers = 
      "<button className=\"MOre\" uk-icon=\"more\" uk-toggle=\"target: #modal-close-default\" uk-tooltip=\"title: オプション表示; pos: right\"></button>"+
      "<div id=\"modal-close-default\" uk-modal>" +
         "<div class=\"MOdal_widow uk-modal-dialog uk-modal-body uk-width-5-6\">" +
            "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>" +
            "<div class=\"title\">" +
               "<h2 class=\"uk-modal-title\">オプション</h2>" +
            "</div>" +
            "<table class=\"uk-table uk-table-striped\">" +
               "<thead>" +
                  "<tr>" +
                     "<th>クラス名</th>" +
                     "<th>説明</th>" +
                  "</tr>" +
               "</thead>" +
               "<tbody>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-cover</td>" +
                     "<td>包含領域を完全にカバーするように背景画像を拡大縮小します。</td>" +
                  "</tr>"  +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-contain</td>" +
                     "<td>幅と高さが含まれる領域内に収まる限り、背景画像を拡大縮小します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-width-1-1</td>" +
                     "<td>使用可能な幅の100％を埋めるように、背景画像を拡大縮小します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-height-1-1</td>" +
                     "<td>使用可能な高さの100％を満たすように、背景画像を拡大縮小します。</td>" +
                  "</tr>" +
               "</tbody>" +
            "</table>" +
            "<p>これらのクラスを使用すると、背景の位置が自動的に中央に移動し、background-repeatがno-repeatに設定されます。</p>" +
         "</div>" +
      "</div>"
  
 // 位置修飾子
 var Positionmodifiers = 
      "<button className=\"MOre\" uk-icon=\"more\" uk-toggle=\"target: #modal-close-default\" uk-tooltip=\"title: オプション表示; pos: right\"></button>"+
      "<div id=\"modal-close-default\" uk-modal>" +
         "<div class=\"MOdal_widow uk-modal-dialog uk-modal-body uk-width-5-6\">" +
            "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>" +
            "<div class=\"title\">" +
               "<h2 class=\"uk-modal-title\">オプション</h2>" +
            "</div>" +
            "<table class=\"uk-table uk-table-striped\">" +
               "<thead>" +
                  "<tr>" +
                     "<th>クラス名</th>" +
                     "<th>説明</th>" +
                  "</tr>" +
               "</thead>" +
               "<tbody>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-top-left</td>" +
                     "<td>画像の初期位置は左上隅です。</td>" +
                  "</tr>"  +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-top-center</td>" +
                     "<td>画像の初期位置は上部にあります。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-top-right</td>" +
                     "<td>	画像の初期位置は右上隅にあります。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-center-left</td>" +
                     "<td>	画像の初期位置は左側です。。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-center-center</td>" +
                     "<td>画像の初期位置は中央にあります。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-center-right</td>" +
                     "<td>画像の初期位置は右側です。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-bottom-left</td>" +
                     "<td>	画像の初期位置は左下隅です。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-bottom-center</td>" +
                     "<td>	画像の初期位置は下にあります。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-bottom-right</td>" +
                     "<td>画像の初期位置は右下隅です。</td>" +
                  "</tr>" +
               "</tbody>" +
            "</table>" +
         "</div>" +
      "</div>"
 // レスポンシブ
 var Responsive = 
      "<button className=\"MOre\" uk-icon=\"more\" uk-toggle=\"target: #modal-close-default\" uk-tooltip=\"title: オプション表示; pos: right\"></button>"+
      "<div id=\"modal-close-default\" uk-modal>" +
         "<div class=\"MOdal_widow uk-modal-dialog uk-modal-body uk-width-5-6\">" +
            "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>" +
            "<div class=\"title\">" +
               "<h2 class=\"uk-modal-title\">オプション</h2>" +
            "</div>" +
            "<p>次のクラスのいずれかを追加して、背景画像の表示を特定のビューポートサイズに制限します。</p><p>これは、テキストが判読できないように画像とコンテンツが電話の画面で重なっている場合に最適です。</p>" +
            "<table class=\"uk-table uk-table-striped\">" +
               "<thead>" +
                  "<tr>" +
                     "<th>クラス名</th>" +
                     "<th>説明</th>" +
                  "</tr>" +
               "</thead>" +
               "<tbody>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-image@s</td>" +
                     "<td>640px以上のデバイス幅で背景画像を表示します。</td>" +
                  "</tr>"  +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-image@m</td>" +
                     "<td>960px以上のデバイス幅で背景画像を表示します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-image@l</td>" +
                     "<td>1200px以上のデバイス幅で背景画像を表示します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-image@xl</td>" +
                     "<td>1600px以上のデバイス幅で背景画像を表示します。</td>" +
                  "</tr>" +
               "</tbody>" +
            "</table>" +
         "</div>" +
      "</div>"

 // ブレンドモード
 var BrendMode = 
      "<button className=\"MOre\" uk-icon=\"more\" uk-toggle=\"target: #modal-close-default\" uk-tooltip=\"title: オプション表示; pos: right\"></button>"+
      "<div id=\"modal-close-default\" uk-modal>" +
         "<div class=\"MOdal_widow uk-modal-dialog uk-modal-body uk-width-5-6\">" +
            "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>" +
            "<div class=\"title\">" +
               "<h2 class=\"uk-modal-title\">オプション</h2>" +
            "</div>" +
            "<p>次のクラスのいずれかを追加して、背景画像にさまざまなブレンドモードを適用します。これらを背景色クラスと組み合わせることもできます。背景ブレンドモードがどのように機能するかをよりよく理解するには、このCSSTricksの記事を参照してください。</p>" +
            "<table class=\"uk-table uk-table-striped\">" +
               "<thead>" +
                  "<tr>" +
                     "<th>クラス名</th>" +
                     "<th>説明</th>" +
                  "</tr>" +
               "</thead>" +
               "<tbody>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-blend-multiply</td>" +
                     "<td>このクラスは、ブレンドモードを乗算に設定します。</td>" +
                  "</tr>"  +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-blend-screen</td>" +
                     "<td>このクラスは、ブレンドモードを画面に設定します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-blend-overlay</td>" +
                     "<td>このクラスは、ブレンドモードをオーバーレイに設定します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-blend-darken</td>" +
                     "<td>このクラスは、ブレンドモードを暗くするように設定します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-blend-lighten</td>" +
                     "<td>このクラスは、ブレンドモードを明るく設定します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-blend-color-dodge</td>" +
                     "<td>このクラスは、ブレンドモードをカラードッジに設定します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-blend-color-burn</td>" +
                     "<td>このクラスは、ブレンドモードをカラーバーンに設定します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-blend-hard-light</td>" +
                     "<td>このクラスは、ブレンドモードをハードライトに設定します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-blend-soft-light</td>" +
                     "<td>このクラスは、ブレンドモードをソフトライトに設定します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-blend-difference</td>" +
                     "<td>このクラスは、ブレンドモードを差分に設定します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-blend-exclusion</td>" +
                     "<td>このクラスは、ブレンドモードを除外に設定します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-blend-hue</td>" +
                     "<td>このクラスは、ブレンドモードを色相に設定します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-blend-saturation</td>" +
                     "<td>このクラスは、ブレンドモードを飽和に設定します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-blend-color</td>" +
                     "<td>このクラスは、ブレンドモードをカラーに設定します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-background-blend-luminosity</td>" +
                     "<td>このクラスは、ブレンドモードを明度に設定します。</td>" +
                  "</tr>" +
               "</tbody>" +
            "</table>" +
         "</div>" +
      "</div>"
 var C_val = []
 var C_Option = ""
 // デフォルトの時
 if (e == "Default") {
   C_Option = Default
   C_val = [
      "<div class=\"midashi_H5\"><h5>要素にさまざまな背景を追加するためのユーティリティクラスのコレクション。</h5></div>",
      C_Option,
      "<div class=\"uk-flex\">",
      Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-child-width-1-2@s uk-text-center\" uk-grid>",
      Tokusyu_Con(8,"&nbsp;") + "<div>",
      Tokusyu_Con(12,"&nbsp;") + "<div class=\"uk-background-default uk-padding uk-panel\">",
      Tokusyu_Con(16,"&nbsp;") + "<p class=\"uk-h4\">Default</p>",
      Tokusyu_Con(12,"&nbsp;") + "</div>",
      Tokusyu_Con(8,"&nbsp;") + "</div>",
      Tokusyu_Con(8,"&nbsp;") + "<div>",
      Tokusyu_Con(12,"&nbsp;") + "<div class=\"uk-background-muted uk-padding uk-panel\">",
      Tokusyu_Con(16,"&nbsp;") + "<p class=\"uk-h4\">Muted</p>",
      Tokusyu_Con(12,"&nbsp;") + "</div>",
      Tokusyu_Con(8,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "</div>",
      "</div><br/><br/><br/>" +
      "<div class=\"uk-flex\">",
      Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-child-width-1-2@s uk-text-center\" uk-grid>",
      Tokusyu_Con(8,"&nbsp;") + "<div>",
      Tokusyu_Con(12,"&nbsp;") + "<div class=\"uk-background-primary uk-padding uk-panel\">",
      Tokusyu_Con(16,"&nbsp;") + "<p class=\"uk-h4\">Default</p>",
      Tokusyu_Con(12,"&nbsp;") + "</div>",
      Tokusyu_Con(8,"&nbsp;") + "</div>",
      Tokusyu_Con(8,"&nbsp;") + "<div>",
      Tokusyu_Con(12,"&nbsp;") + "<div class=\"uk-background-secondary uk-padding uk-panel\">",
      Tokusyu_Con(16,"&nbsp;") + "<p class=\"uk-h4\">Muted</p>",
      Tokusyu_Con(12,"&nbsp;") + "</div>",
      Tokusyu_Con(8,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "</div>",
      "</div> "
   ]
 } else if (e == "サイズ修飾子") {
   C_Option = Sizemodifiers
   C_val = [
      "<div class=\"midashi_H5\"><h5>このコンポーネントは、固有の比率を維持することによって背景画像のサイズを指定するクラスを備えています。</h5></div>",
      C_Option,
      Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-child-width-1-2@s uk-light\" uk-grid>",
      Tokusyu_Con(8,"&nbsp;") + "<div>",
      Tokusyu_Con(12,"&nbsp;") + "<div class=\"uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle\" style=\"background-image: url(./dark.jpg);\">",
      Tokusyu_Con(16,"&nbsp;") + "<p class=\"uk-h4\">Cover</p>",
      Tokusyu_Con(12,"&nbsp;") + "</div>",
      Tokusyu_Con(8,"&nbsp;") + "</div>",
      Tokusyu_Con(8,"&nbsp;") + "<div>",
      Tokusyu_Con(12,"&nbsp;") + "<div class=\"uk-background-contain uk-background-muted uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle\" style=\"background-image: url(./dark.jpg);\">",
      Tokusyu_Con(16,"&nbsp;") + "<p class=\"uk-h4\">Contain</p>",
      Tokusyu_Con(12,"&nbsp;") + "</div>",
      Tokusyu_Con(8,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "</div>",
   ]
 } else if (e == "位置修飾子") {
   C_Option = Positionmodifiers
   C_val = [
      "<div class=\"midashi_H5\"><h5>画像の背景位置を変更するには（デフォルトでは領域の左上隅にあります）、次のクラスのいずれかを追加します。</h5></div>",
      C_Option,
      Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-child-width-1-2@s uk-light\" uk-grid>",
      Tokusyu_Con(8,"&nbsp;") + "<div>",
      Tokusyu_Con(12,"&nbsp;") + "<div class=\"uk-background-top-right uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-middle uk-flex-center\" style=\"background-image: url(./dark.jpg);\">",
      Tokusyu_Con(16,"&nbsp;") + "<p class=\"uk-h4\">Top Right</p>",
      Tokusyu_Con(12,"&nbsp;") + "</div>",
      Tokusyu_Con(8,"&nbsp;") + "</div>",
      Tokusyu_Con(8,"&nbsp;") + "<div>",
      Tokusyu_Con(12,"&nbsp;") + "<div class=\"uk-background-top-left uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-middle uk-flex-center\" style=\"background-image: url(./dark.jpg);\">",
      Tokusyu_Con(16,"&nbsp;") + "<p class=\"uk-h4\">Top Left</p>",
      Tokusyu_Con(12,"&nbsp;") + "</div>",
      Tokusyu_Con(8,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "</div>",
   ]
 } else if (e == "繰り返しなし") {
   C_val = [
      "<div class=\"midashi_H5\"><h5>小さい画像が繰り返されて背景領域を埋めないようにするには、.uk-background-norepeatクラスを追加します。</h5></div>",
      C_Option,
      Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-background-norepeat\"></div>",
   ]
 } else if (e == "アタッチメント") {
   C_val = [
      "<div class=\"midashi_H5\"><h5>固定の背景添付ファイルを適用して、サイトをスクロールしている間、画像がその位置に留まるようにすることもできます。※スマホサイズにウィンドウを小さくし、スクロールしてみてください。</h5></div>",
      C_Option,
      Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-background-fixed uk-background-center-center uk-height-medium uk-width-large\" style=\"background-image: url(./dark.jpg);\"></div>",
   ]
 } else if (e == "レスポンシブ") {
   C_Option = Responsive
   C_val = [
      "<div class=\"midashi_H5\"><h5>以下の例の効果を確認するには、ブラウザウィンドウのサイズを変更してください。</h5></div>",
      C_Option,
      Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-background-image@m uk-background-cover uk-background-muted uk-height-medium uk-width-large uk-flex uk-flex-center uk-flex-middle\" style=\"background-image: url(./dark.jpg);\">",
      Tokusyu_Con(8,"&nbsp;") + "<p class=\"uk-h4 uk-margin-remove uk-visible@m uk-light\">Image shown</p>",
      Tokusyu_Con(8,"&nbsp;") + "<p class=\"uk-h4 uk-margin-remove uk-hidden@m\">Image not shown</p>",
      Tokusyu_Con(4,"&nbsp;") + "</div>"
   ]
 } else if (e == "ブレンドモード") {
   C_Option = BrendMode
   C_val = [
      "<div class=\"midashi_H5\"><h5>以下の例の効果を確認するには、ブラウザウィンドウのサイズを変更してください。</h5></div>",
      C_Option,
      "<div class=\"uk-child-width-1-2 uk-child-width-1-3@s uk-grid-small uk-light\" uk-grid>",
      Tokusyu_Con(4,"&nbsp;") + "<div>",
      Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-background-blend-multiply uk-background-primary uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle\" style=\"background-image: url(./photo.jpg);\">",
      Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-h4\">Multiply</p>",
      Tokusyu_Con(8,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "<div>",
      Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-background-blend-screen uk-background-primary uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle\" style=\"background-image: url(./photo.jpg);\">",
      Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-h4\">screen</p>",
      Tokusyu_Con(8,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "<div>",
      Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-background-blend-overlay uk-background-primary uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle\" style=\"background-image: url(./photo.jpg);\">",
      Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-h4\">overlay</p>",
      Tokusyu_Con(8,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "<div>",
      Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-background-blend-darken uk-background-primary uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle\" style=\"background-image: url(./photo.jpg);\">",
      Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-h4\">darken</p>",
      Tokusyu_Con(8,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "<div>",
      Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-background-blend-lighten uk-background-primary uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle\" style=\"background-image: url(./photo.jpg);\">",
      Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-h4\">lighten</p>",
      Tokusyu_Con(8,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "<div>",
      Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-background-blend-color-dodge uk-background-primary uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle\" style=\"background-image: url(./photo.jpg);\">",
      Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-h4\">dodge</p>",
      Tokusyu_Con(8,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "<div>",
      Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-background-blend-color-burn uk-background-primary uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle\" style=\"background-image: url(./photo.jpg);\">",
      Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-h4\">burn</p>",
      Tokusyu_Con(8,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "<div>",
      Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-background-blend-hard-light  uk-background-primary uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle\" style=\"background-image: url(./photo.jpg);\">",
      Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-h4\">Hard Light</p>",
      Tokusyu_Con(8,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "<div>",
      Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-background-blend-soft-light  uk-background-primary uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle\" style=\"background-image: url(./photo.jpg);\">",
      Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-h4\">Soft Light</p>",
      Tokusyu_Con(8,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "<div>",
      Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-background-blend-difference  uk-background-primary uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle\" style=\"background-image: url(./photo.jpg);\">",
      Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-h4\">Difference</p>",
      Tokusyu_Con(8,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "<div>",
      Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-background-blend-exclusion  uk-background-primary uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle\" style=\"background-image: url(./photo.jpg);\">",
      Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-h4\">Exclusion</p>",
      Tokusyu_Con(8,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "<div>",
      Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-background-blend-hue  uk-background-primary uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle\" style=\"background-image: url(./photo.jpg);\">",
      Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-h4\">Hue</p>",
      Tokusyu_Con(8,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "<div>",
      Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-background-blend-saturation  uk-background-primary uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle\" style=\"background-image: url(./photo.jpg);\">",
      Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-h4\">Saturation</p>",
      Tokusyu_Con(8,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "<div>",
      Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-background-blend-color  uk-background-primary uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle\" style=\"background-image: url(./photo.jpg);\">",
      Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-h4\">Color</p>",
      Tokusyu_Con(8,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "<div>",
      Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-background-blend-luminosity  uk-background-primary uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle\" style=\"background-image: url(./photo.jpg);\">",
      Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-h4\">Luminosity</p>",
      Tokusyu_Con(8,"&nbsp;") + "</div>",
      Tokusyu_Con(4,"&nbsp;") + "</div>",
      "</div>"
   ]
 }
 // 作成した変数を描画する
 Byouga_Create(C_val)
}

// セレクトボックスのoption生成
function  Background_Select_Create() {
 var Ary = [
    "",
    "Default",
    "サイズ修飾子",
    "位置修飾子",
    "繰り返しなし",
    "アタッチメント",
    "レスポンシブ",
    "ブレンドモード",
 ]
 Option_Add(Ary)
}

// ----------------------------//　
// ---- Badge処理関係 ----//
// ----------------------------//
function Badge_Byoga_Create_val(e) {
       // オプション詳細
       var C_Option = 
            "<button className=\"MOre\" uk-icon=\"more\" uk-toggle=\"target: #modal-close-default\" uk-tooltip=\"title: オプション表示; pos: right\"></button>"+
            "<div id=\"modal-close-default\" uk-modal>" +
               "<div class=\"MOdal_widow uk-modal-dialog uk-modal-body uk-width-5-6\">" +
                  "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>" +
                  "<div class=\"title\">" +
                     "<h2 class=\"uk-modal-title\">オプション</h2>" +
                  "</div>" +
                  "<p>バッジを作成するには、または要素.uk-badgeのようなインライン要素にクラスを追加するだけです。<a><span></p>" +
               "</div>" +
            "</div><br/><br/><br/>"
       
     var C_val = []
  
     // デフォルトの時
     if (e == "Default") {
        C_val = [
           "<div class=\"midashi_H5\"><h5>見栄えの良い通知バッジを簡単に作成できます。</h5></div>",
           C_Option,
          "<span class=\"uk-badge\">1</span>",
          "<span class=\"uk-badge\">100</span>"
        ]
     } 
     // 作成した変数を描画する
     Byouga_Create(C_val)
}
function  Badge_Select_Create() {
   var Ary = [
      "",
      "Default",
   ]
   Option_Add(Ary)
}


// ----------------------------//　
// ---- Badge処理関係 ----//
// ----------------------------//
function Base_Byoga_Create_val(e) {
   // オプション詳細(デフォルト)
   var def = 
      "<p>" + 
         "Baseコンポーネントは、有名なNormalize.cssのスタイルを利用して、すべてのブラウザーで要素を一貫してレンダリングし、色、余白、フォントサイズなどのデフォルトのスタイルを適用します。" +
      "</p>" +
      "<p> " + 
         "フォーム、ボタン、およびテーブルの要素は、デフォルトでは正規化またはスタイル設定されていません。これは、特定のコンポーネントクラスで発生します。UIkitは、サードパーティのCSSとの堅牢性と競合のない状態を維持するために、プレーンなHTML要素にできるだけ少ないスタイルを適用しようとします。" +
      "</p>"
   
   // オプション詳細(リンク)
   var Link = 
      "<p>"+
         "<span class=\"Code_bak\">" +
            "&lt;a&gt;" +
         "</span>" +
         "要素を使用してテキストをハイパーテキストに変換します。" +
         "<span class=\"Code_bak\">" +
            ".uk-link"+
         "</span>" +
         "クラスをまたは同様の要素に追加して" +
         "<span class=\"Code_bak\">" +
            "&lt;span&gt;" +
         "</span>" +
         "、デフォルトのリンクスタイルを適用することもできます。" +
      "</p>"
   
   // オプション詳細(テキストレベルのセマンティクス)
   var Responsive = 
      "<button className=\"MOre\" uk-icon=\"more\" uk-toggle=\"target: #modal-close-default\" uk-tooltip=\"title: オプション表示; pos: right\"></button>"+
      "<div id=\"modal-close-default\" uk-modal>" +
         "<div class=\"MOdal_widow uk-modal-dialog uk-modal-body uk-width-5-6\">" +
            "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>" +
            "<div class=\"title\">" +
               "<h2 class=\"uk-modal-title\">オプション</h2>" +
            "</div>" +
            "<table class=\"uk-table uk-table-striped\">" +
               "<thead>" +
                  "<tr>" +
                     "<th>エレメント</th>" +
                     "<th>説明</th>" +
                  "</tr>" +
               "</thead>" +
               "<tbody>" +
                  "<tr>" +
                     "<td style=\"color:red\">&lt;abbr&gt;</td>" +
                     "<td>タイトルが付いたabbr要素を使用して略語を定義します。</td>" +
                  "</tr>"  +
                  "<tr>" +
                     "<td style=\"color:red\">&lt;b&gt;</td>" +
                     "<td>b要素を使用して太字のテキストを作成します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">&lt;cite&gt;</td>" +
                     "<td>引用要素を使用して作品のタイトルを定義します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">&lt;code&gt;</td>" +
                     "<td>code elementを使用してインラインコードスニペットを定義します</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">&lt;del&gt;</td>" +
                     "<td>デル要素を使用して、ドキュメントの変更を削除済みテキストとしてマークします</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">&lt;dfn&gt;</td>" +
                     "<td>タイトルが付いたdfn要素を使用して定義用語を作成します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">&lt;em&gt;</td>" +
                     "<td>em要素を使用してテキストを強調します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">&lt;i&gt;</td>" +
                     "<td>i要素を使用してテキストの一部を引き立たせます。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">&lt;ins&gt;</td>" +
                     "<td>ins要素を使用して、ドキュメントの変更を挿入されたテキストとしてマークします</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">&lt;kbd&gt;</td>" +
                     "<td>kbd要素を使用して、ブラウザのデフォルトの等幅フォントで入力を表示します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">&lt;mark&gt;</td>" +
                     "<td>mark要素を使用して意味のないテキストを強調表示する</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">&lt;q&gt;</td>" +
                     "<td>q要素を使用してインライン引用符を定義します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">&lt;s&gt;</td>" +
                     "<td>s要素を使用して取り消し線でテキストを定義します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">&lt;s&gt;</td>" +
                     "<td>s要素を使用して取り消し線でテキストを定義します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">&lt;samp&gt;</td>" +
                     "<td>サンプリング要素を出力</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">&lt;small&gt;</td>" +
                     "<td>小さい要素を使用して小さい印刷のテキストを強調解除します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">&lt;span&gt;</td>" +
                     "<td>span要素を使用してインラインコンテナを定義します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">&lt;strong&gt;</td>" +
                     "<td>strong要素を使用して特別な重要性を意味します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">&lt;sub&gt;</td>" +
                     "<td>sub要素を使用して添え字テキストを定義します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">&lt;sup&gt;</td>" +
                     "<td>sup要素を使用して上付きテキストを定義します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">&lt;u&gt;</td>" +
                     "<td>u要素を使用して下線付きのテキストを定義します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">&lt;var&gt;</td>" +
                     "<td>var要素を使用して変数を定義します。</td>" +
                  "</tr>" +
               "</tbody>" +
            "</table>" +
         "</div>" +
      "</div>"
      
   // オプション詳細(埋め込みコンテンツ)
   var umekomi = 
      "<button className=\"MOre\" uk-icon=\"more\" uk-toggle=\"target: #modal-close-default\" uk-tooltip=\"title: オプション表示; pos: right\"></button>"+
      "<div id=\"modal-close-default\" uk-modal>" +
         "<div class=\"MOdal_widow uk-modal-dialog uk-modal-body uk-width-5-6\">" +
            "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>" +
            "<div class=\"title\">" +
               "<h2 class=\"uk-modal-title\">オプション</h2>" +
            "</div>" +
            "<p>画像や<span class=\"Code_bak\">&lt;img&gt;</span>、<span class=\"Code_bak\">&lt;svg&gt;</span>、<span class=\"Code_bak\">&lt;video&gt;</span>、<span class=\"Code_bak\">&lt;audio&gt;</span>は、UIkit ではデフォルトで応答します。レイアウトが狭い場合、サイズを調整して比率を維持します。この現象を回避するには、ユーティリティ コンポーネントの .uk-preserve-width-width クラスを要素または任意のコンテナーに追加します。</p>" +
         "</div>" +
      "</div><br/><br/><br/>"
      
   // 見出し
   var midashi =
      "<button className=\"MOre\" uk-icon=\"more\" uk-toggle=\"target: #modal-close-default\" uk-tooltip=\"title: オプション表示; pos: right\"></button>"+
      "<div id=\"modal-close-default\" uk-modal>" +
         "<div class=\"MOdal_widow uk-modal-dialog uk-modal-body uk-width-5-6\">" +
            "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>" +
            "<div class=\"title\">" +
               "<h2 class=\"uk-modal-title\">オプション</h2>" +
            "</div>" +
            "<p><span class=\"Code_bak\">&lt;h1&gt;</span>や、<span class=\"Code_bak\">&lt;h6&gt;</span>要素を使用して見出しを定義します。</p>" +
            "<p><span class=\"Code_bak\">&lt;.uk-h2&gt;</span>、<span class=\"Code_bak\">&lt;uk-h3&gt;</span>、<span class=\"Code_bak\">&lt;uk-h4&gt;</span>、<span class=\"Code_bak\">&lt;uk-h5&gt;</span>、<span class=\"Code_bak\">&lt;uk-h6&gt;</span>、またはクラスを追加して、見出しのサイズを変更します。<br/>例えばたとえば、h1をh3のように見せます。</p>" +
         "</div>" +
      "</div><br/><br/><br/>"
      
   // リスト
   var List =
      "<button className=\"MOre\" uk-icon=\"more\" uk-toggle=\"target: #modal-close-default\" uk-tooltip=\"title: オプション表示; pos: right\"></button>"+
      "<div id=\"modal-close-default\" uk-modal>" +
         "<div class=\"MOdal_widow uk-modal-dialog uk-modal-body uk-width-5-6\">" +
            "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>" +
            "<div class=\"title\">" +
               "<h2 class=\"uk-modal-title\">オプション</h2>" +
            "</div>" +
            "<p>要素と順序付きリストの<span class=\"Code_bak\">&lt;ul&gt;</span>要素を使用して、<span class=\"Code_bak\">&lt;ol&gt;</span>順序なしリストを作成します。<span class=\"Code_bak\">&lt;li&gt;</span> 要素は、リスト項目を定義します。</p>" +
         "</div>" +
      "</div><br/><br/><br/>"
    
   var C_val = []
   var C_Option = ""
   // デフォルトの時
   if (e == "Default") {
      C_Option = def
      C_val = [
         "<div class=\"midashi_H5\"><h5>見栄えの良い通知バッジを簡単に作成できます。</h5></div>",
         C_Option,
      ]
   } else if(e == "リンク") {
      C_Option = Link
      C_val = [
         "<div class=\"midashi_H5\"><h5>リンク</h5></div>",
         C_Option,
      ]
   } else if(e == "テキストレベルのセマンティクス") {
      C_Option = Responsive
      C_val = [
         "<div class=\"midashi_H5\"><h5>オプションのリストは、最も一般的に使用されるテキストレベルのセマンティクスとその利用方法の概要を示しています。</h5></div>",
         C_Option,
      ]
   } else if(e == "埋め込みコンテンツ") {
      C_Option = umekomi
      C_val = [
         "<div class=\"midashi_H5\"><h5>画像の埋め込みコンテンツについてです。</h5></div>",
         C_Option,
         "<div class=\"uk-width-large\">",
         Tokusyu_Con(4,"&nbsp;") + "<img src=\"./photo.jpg\" alt=\"Image\">",
         "</div>"
      ]
   } else if(e == "段落") {
      C_Option = ""
      C_val = [
         "<div class=\"midashi_H5\"><h5>要素を使用して段落を作成します。</h5></div>",
         C_Option,
         "<div class=\"uk-width-large\">",
         Tokusyu_Con(4,"&nbsp;") + "<h1>h1 Heading 1</h1>",
         "</div>"
      ]
   } else if (e == "見出し") {
      C_Option = midashi
      C_val = [
         "<div class=\"midashi_H5\"><h5>要素を使用して段落を作成します。</h5></div>",
         C_Option,
         "<div class=\"uk-width-large\">",
         Tokusyu_Con(4,"&nbsp;") + "<h1>h1 ヘッダー 1</h1>",
         Tokusyu_Con(4,"&nbsp;") + "<h2>h2 ヘッダー 2</h2>",
         Tokusyu_Con(4,"&nbsp;") + "<h3>h3 ヘッダー 3</h3>",
         Tokusyu_Con(4,"&nbsp;") + "<h4>h4 ヘッダー 4</h4>",
         Tokusyu_Con(4,"&nbsp;") + "<h5>h5 ヘッダー 5</h5></div>",
         Tokusyu_Con(4,"&nbsp;") + "<h6>h6 ヘッダー 6</h6>",
         "</div>"
      ]
   } else if (e == "リスト") {
      C_Option = List
      C_val = [
         "<div class=\"midashi_H5\"><h5>要素を使用して段落を作成します。</h5></div>",
         C_Option,
         "<div class=\"uk-width-large\">",
         Tokusyu_Con(4,"&nbsp;") + "<ul>",
         Tokusyu_Con(8,"&nbsp;") + "<li>Item 1</li>",
         Tokusyu_Con(8,"&nbsp;") + "<li>Item 2",
         Tokusyu_Con(12,"&nbsp;") + "<ul>",
         Tokusyu_Con(16,"&nbsp;") + "<li>Item 1</li>",
         Tokusyu_Con(16,"&nbsp;") + "<li>Item 2",
         Tokusyu_Con(20,"&nbsp;") + "<ul>",
         Tokusyu_Con(24,"&nbsp;") + "<li>Item 1</li>",
         Tokusyu_Con(24,"&nbsp;") + "<li>Item 2</li>",
         Tokusyu_Con(20,"&nbsp;") + "</ul>",
         Tokusyu_Con(16,"&nbsp;") + "</li>",
         Tokusyu_Con(12,"&nbsp;") + "</ul>",
         Tokusyu_Con(8,"&nbsp;") + "</li>",
         Tokusyu_Con(8,"&nbsp;") + "<li>Item 3</li>",
         Tokusyu_Con(8,"&nbsp;") + "<li>Item 4</li>",
         Tokusyu_Con(4,"&nbsp;") + "</ul>",
         "</div>"
      ]
   } else if (e == "説明リスト") {
      C_Option = ""
      C_val = [
         "<div class=\"midashi_H5\"><h5>&lt;dl&gt;要素を使用して説明リストを作成します。&lt;dt&gt;用語の定義と説明に使用します</h5></div>",
         C_Option,
         "<div class=\"uk-width-large\">",
         Tokusyu_Con(4,"&nbsp;") + "<dl>",
         Tokusyu_Con(8,"&nbsp;") + "<dt>説明リスト</dt>",
         Tokusyu_Con(8,"&nbsp;") + "<dd>説明リストは、用語とそれに対応する説明を定義します。</dd>",
         Tokusyu_Con(8,"&nbsp;") + "<dt>これは用語です</dt>",
         Tokusyu_Con(8,"&nbsp;") + "<dd>これは説明です。</dd>",
         Tokusyu_Con(8,"&nbsp;") + "<dt>これは用語です</dt>",
         Tokusyu_Con(8,"&nbsp;") + "<dd>これは説明です。</dd>",
         Tokusyu_Con(4,"&nbsp;") + "</dl>",
         "</div>"
      ]
   } else if (e == "水平方向のルール") {
      C_Option = ""
      C_val = [
         "<div class=\"midashi_H5\"><h5>&lt;hr&gt;を使用して水平ルールを作成します。</h5></div>",
         C_Option,
         "<div class=\"uk-width-large\">",
         Tokusyu_Con(4,"&nbsp;") + "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
         Tokusyu_Con(4,"&nbsp;") + "<hr>",
         Tokusyu_Con(4,"&nbsp;") + "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
         "</div>"
      ]
   }  else if (e == "ブロッククォート") {
      C_Option = ""
      C_val = [
         "<div class=\"midashi_H5\"><h5>ドキュメント内の別のソースから複数行のコンテンツを引用するには、&lt;blockquote&gt;要素を使用します。</h5></div>",
         C_Option,
         "<div class=\"uk-width-large\">",
         Tokusyu_Con(4,"&nbsp;") + "<blockquote cite=\"#\">",
         Tokusyu_Con(8,"&nbsp;") + " <p class=\"uk-margin-small-bottom\">The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a footer or cite element.</p>",
         Tokusyu_Con(8,"&nbsp;") + "<footer>Someone famous in <cite><a href=\"#\">Source Title</a></cite></footer>",
         Tokusyu_Con(4,"&nbsp;") + "</blockquote>",
         "</div>"
      ]
   }  else if (e == "書式設定済みテキスト") {
      C_Option = ""
      C_val = [
         "<div class=\"midashi_H5\"><h5>複数行のコードの場合は、&lt;pre&gt;要素を使用します。スペース、タブ、改行を保持する新しいテキストブロックを作成します。&lt;code&gt;内部に要素をネストして、コードブロックを定義します。<br>囲まれたコードがマークアップとして解釈されないように、山かっこは必ずエスケープしてください。</h5></div>",
         C_Option,
         "<div class=\"uk-width-large\">",
         Tokusyu_Con(4,"&nbsp;") + "<div id=\"myid\" class=\"myclass\" hidden>",
         Tokusyu_Con(8,"&nbsp;") + "Lorem ipsum <strong>dolor</strong> sit amet, consectetur adipiscing elit.",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div>"
      ]
   }
   // 作成した変数を描画する
   Byouga_Create(C_val)
}

function  Base_Select_Create() {
var Ary = [
  "",
  "Default",
  "リンク",
  "テキストレベルのセマンティクス",
  "埋め込みコンテンツ",
  "段落",
  "見出し",
  "リスト",
  "説明リスト",
  "水平方向のルール",
  "ブロッククォート",
  "書式設定済みテキスト"
]
Option_Add(Ary)
}


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


// ------------------------------//　
// --- ボタン処理関係 ---//
// ------------------------------//　
function  Button_Byoga_Create_val(e) {
   var C_Option = ""
   // オプション詳細(default)
   var def = 
      "<button className=\"MOre\" uk-icon=\"more\" uk-toggle=\"target: #modal-close-default\" uk-tooltip=\"title: オプション表示; pos: right\"></button>"+
      "<div id=\"modal-close-default\" uk-modal>" +
         "<div class=\"MOdal_widow uk-modal-dialog uk-modal-body uk-width-5-6\">" +
            "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>" +
            "<div class=\"title\">" +
               "<h2 class=\"uk-modal-title\">オプション</h2>" +
            "</div>" +
            "<p>このコンポーネントを適用するには、<span class=\"Code_bak\">uk</span></p> ボタン クラスと<span class=\"Code_bak\">&lt;a&gt;</span>修飾子を追加します。</p>" +
            "<p>多数のボタンを連続して表示している場合、それらが小さいビューポートにスタックするときに、それらに上マージンを追加できます。</p>" +
         "</div>" +
      "</div>"
   
   // スタイル修飾子
   var style_modifiers = 
      "<button className=\"MOre\" uk-icon=\"more\" uk-toggle=\"target: #modal-close-default\" uk-tooltip=\"title: オプション表示; pos: right\"></button>"+
      "<div id=\"modal-close-default\" uk-modal>" +
         "<div class=\"MOdal_widow uk-modal-dialog uk-modal-body uk-width-5-6\">" +
            "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>" +
            "<div class=\"title\">" +
               "<h2 class=\"uk-modal-title\">オプション</h2>" +
            "</div>" +
            "<p>利用可能ないくつかのスタイル修飾子があります。次のクラスのいずれかを追加するだけで、別の外観を適用できます。</p>" +
            "<table class=\"uk-table uk-table-striped\">" +
               "<thead>" +
                  "<tr>" +
                     "<th>クラス</th>" +
                     "<th>説明</th>" +
                  "</tr>" +
               "</thead>" +
               "<tbody>" +
                  "<tr>" +
                     "<td style=\"color:red\">&lt;.uk-button-default&gt;</td>" +
                     "<td>デフォルトのボタンスタイル。</td>" +
                  "</tr>"  +
                  "<tr>" +
                     "<td style=\"color:red\">&lt;.uk-button-primary&gt;</td>" +
                     "<td>主なアクションを示します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">&lt;.uk-button-secondary&gt;</td>" +
                     "<td>重要なアクションを示します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">&lt;.uk-button-danger&gt;</td>" +
                     "<td>危険または否定的な行動を示します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">&lt;.uk-button-text&gt;</td>" +
                     "<td>活版印刷スタイルを適用します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">&lt;.uk-button-link&gt;</td>" +
                     "<td>プレーンリンクスタイルを適用します。</td>" +
                  "</tr>" +
               "</tbody>" +
            "</table>" +   
         "</div>" +
      "</div>"
   
   var C_val = []
   
   // デフォルトの時
   if (e == "Default") {
      C_Option = def
      C_val = [
         "<div class=\"midashi_H5\"><h5>さまざまなスタイルの見栄えの良いボタンを簡単に作成できます。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<p uk-margin>",
         Tokusyu_Con(8,"&nbsp;") + "<a class=\"uk-button uk-button-default\" href=\"#\">Link</a>",
         Tokusyu_Con(8,"&nbsp;") + "<button class=\"uk-button uk-button-default\">Button</button>",
         Tokusyu_Con(8,"&nbsp;") + "<button class=\"uk-button uk-button-default\" disabled>Disabled</button>",
         Tokusyu_Con(4,"&nbsp;") + "</p>",
         "</div> "
      ]
   } else if (e == "スタイル修飾子") {
      C_Option = style_modifiers
      C_val = [
         "<div class=\"midashi_H5\"><h5>さまざまなスタイルの見栄えの良いボタンを簡単に作成できます。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<p uk-margin>",
         Tokusyu_Con(8,"&nbsp;") + "<button class=\"uk-button uk-button-default\">Default</button>",
         Tokusyu_Con(8,"&nbsp;") + "<button class=\"uk-button uk-button-primary\">primary</button>",
         Tokusyu_Con(8,"&nbsp;") + "<button class=\"uk-button uk-button-secondary\">secondary</button>",
         Tokusyu_Con(8,"&nbsp;") + "<button class=\"uk-button uk-button-danger\">danger</button>",
         Tokusyu_Con(8,"&nbsp;") + "<button class=\"uk-button uk-button-text\">text</button>",
         Tokusyu_Con(8,"&nbsp;") + "<button class=\"uk-button uk-button-link\">link</button>",
         Tokusyu_Con(4,"&nbsp;") + "</p>",
         "</div> "
      ]
   }  else if (e == "サイズ修飾子") {
      C_Option = ""
      C_val = [
         "<div class=\"midashi_H5\"><h5><span class=\"Code_bak\">.uk-button-small</span>または<span class=\"Code_bak\">.uk-button-large</span>クラスをボタンに追加して、ボタンを小さくしたり大きくしたりします。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<p uk-margin>",
         Tokusyu_Con(8,"&nbsp;") + "<button class=\"uk-button uk-button-default uk-button-small\">Small button</button>",
         Tokusyu_Con(8,"&nbsp;") + "<button class=\"uk-button uk-button-primary uk-button-small\">Small button</button>",
         Tokusyu_Con(8,"&nbsp;") + "<button class=\"uk-button uk-button-secondary uk-button-small\">Small button</button>",
         Tokusyu_Con(4,"&nbsp;") + "</p>",
         Tokusyu_Con(4,"&nbsp;") + "<p uk-margin>",
         Tokusyu_Con(8,"&nbsp;") + "<button class=\"uk-button uk-button-default uk-button-large\">large button</button>",
         Tokusyu_Con(8,"&nbsp;") + "<button class=\"uk-button uk-button-primary uk-button-large\">large button</button>",
         Tokusyu_Con(8,"&nbsp;") + "<button class=\"uk-button uk-button-secondary uk-button-large\">large button</button>",
         Tokusyu_Con(4,"&nbsp;") + "</p>",
         "</div> "
      ]
   } else if (e == "幅修飾子") {
      C_Option = ""
      C_val = [
         "<div class=\"midashi_H5\"><h5>Widthコンポーネントから<span class=\"Code_bak\">.uk-width-1-1</span>クラスを追加すると、ボタンが全幅になります。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<button class=\"uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom\">Button</button>",
         Tokusyu_Con(4,"&nbsp;") + "<button class=\"uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom\">Button</button>",
         Tokusyu_Con(4,"&nbsp;") + "<button class=\"uk-button uk-button-secondary uk-width-1-1\">Button</button>",
         "</div> "
      ]
   } else if (e == "グループ") {
      C_Option = ""
      C_val = [
         "<div class=\"midashi_H5\"><h5>ボタングループを作成するには、ボタンの周囲の<span class=\"Code_bak\">&lt;div&gt;</span>要素に、<span class=\"Code_bak\">.uk-button-group</span>クラスを追加します。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<div>",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-button-group\">",
         Tokusyu_Con(12,"&nbsp;") + "<button class=\"uk-button uk-button-secondary\">Button</button>",
         Tokusyu_Con(12,"&nbsp;") + "<button class=\"uk-button uk-button-secondary\">Button</button>",
         Tokusyu_Con(12,"&nbsp;") + "<button class=\"uk-button uk-button-secondary\">Button</button>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-margin-small\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-button-group\">",
         Tokusyu_Con(12,"&nbsp;") + "<button class=\"uk-button uk-button-primary\">Button</button>",
         Tokusyu_Con(12,"&nbsp;") + "<button class=\"uk-button uk-button-primary\">Button</button>",
         Tokusyu_Con(12,"&nbsp;") + "<button class=\"uk-button uk-button-primary\">Button</button>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "<div>",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-button-group\">",
         Tokusyu_Con(12,"&nbsp;") + "<button class=\"uk-button uk-button-danger\">Button</button>",
         Tokusyu_Con(12,"&nbsp;") + "<button class=\"uk-button uk-button-danger\">Button</button>",
         Tokusyu_Con(12,"&nbsp;") + "<button class=\"uk-button uk-button-danger\">Button</button>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div> "
      ]
   } else if (e == "ドロップダウン付きのボタン") {
      C_Option = ""
      C_val = [
         "<div class=\"midashi_H5\"><h5>ボタンを使用して、ドロップダウンコンポーネントからドロップダウンメニューをトリガーできます。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-inline\">",
         Tokusyu_Con(8,"&nbsp;") + " <button class=\"uk-button uk-button-default\" type=\"button\">Dropdown</button>",
         Tokusyu_Con(8,"&nbsp;") + "<div uk-dropdown>",
         Tokusyu_Con(12,"&nbsp;") + "<ul class=\"uk-nav uk-dropdown-nav\">",
         Tokusyu_Con(16,"&nbsp;") + "<li class=\"uk-active\"><a href=\"#\">Active</a></li>",
         Tokusyu_Con(16,"&nbsp;") + "<li><a href=\"#\">Item</a></li>",
         Tokusyu_Con(16,"&nbsp;") + "<li class=\"uk-nav-header\">Header</li>",
         Tokusyu_Con(16,"&nbsp;") + "<li><a href=\"#\">Item</a></li>",
         Tokusyu_Con(16,"&nbsp;") + "<li><a href=\"#\">Item</a></li>",
         Tokusyu_Con(16,"&nbsp;") + "<li class=\"uk-nav-divider\"></li>",
         Tokusyu_Con(16,"&nbsp;") + "<li><a href=\"#\">Item</a></li>",
         Tokusyu_Con(12,"&nbsp;") + "</ul>",
         Tokusyu_Con(8,"&nbsp;") + "</ul>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div> "
      ]
   }  else if (e == "ドロップダウン付きのボタングループ") {
      C_Option = ""
      C_val = [
         "<div class=\"midashi_H5\"><h5>ボタングループを使用して、ボタンを左側の標準アクションと右側のドロップダウントグルに分割します</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-button-group\">",
         Tokusyu_Con(8,"&nbsp;") + "<button class=\"uk-button uk-button-default\">Dropdown</button>",
         Tokusyu_Con(8,"&nbsp;") + "<button class=\"uk-button uk-button-default\" type=\"button\"><span uk-icon=\"icon:  triangle-down\"></span></button>",
         Tokusyu_Con(12,"&nbsp;") + "<div uk-dropdown=\"mode: click; boundary: ! .uk-button-group; boundary-align: true;\">",
         Tokusyu_Con(16,"&nbsp;") + "<ul class=\"uk-nav uk-dropdown-nav\">",
         Tokusyu_Con(20,"&nbsp;") + "<li class=\"uk-active\"><a href=\"#\">Active</a></li>",
         Tokusyu_Con(20,"&nbsp;") + "<li><a href=\"#\">Item</a></li>",
         Tokusyu_Con(20,"&nbsp;") + "<li class=\"uk-nav-header\">Header</li>",
         Tokusyu_Con(20,"&nbsp;") + "<li><a href=\"#\">Item</a></li>",
         Tokusyu_Con(20,"&nbsp;") + "<li><a href=\"#\">Item</a></li>",
         Tokusyu_Con(20,"&nbsp;") + "<li class=\"uk-nav-divider\"></li>",
         Tokusyu_Con(20,"&nbsp;") + "<li class=\"uk-nav-divider\"></li>",
         Tokusyu_Con(20,"&nbsp;") + "<li><a href=\"#\">Item</a></li>",
         Tokusyu_Con(16,"&nbsp;") + "</ul>",
         Tokusyu_Con(12,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div> "
      ]
        
      
   } 
   // 作成した変数を描画する
   Byouga_Create(C_val)
}

function Button_Select_Create() {
   var Ary = [
      "",
      "Default",
      "スタイル修飾子",
      "サイズ修飾子",
      "幅修飾子",
      "グループ",
      "ドロップダウン付きのボタン",
      "ドロップダウン付きのボタングループ"
   ]
   Option_Add(Ary);
}


// ------------------------------//　
// --- カード処理関係 ---//
// ------------------------------//　
function  Card_Byoga_Create_val(e) {
   // オプション詳細(デフォルト)
   var def = 
      "<button className=\"MOre\" uk-icon=\"more\" uk-toggle=\"target: #modal-close-default\" uk-tooltip=\"title: オプション表示; pos: right\"></button>"+
      "<div id=\"modal-close-default\" uk-modal>" +
         "<div class=\"MOdal_widow uk-modal-dialog uk-modal-body uk-width-5-6\">" +
            "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>" +
            "<div class=\"title\">" +
               "<h2 class=\"uk-modal-title\">オプション</h2>" +
            "</div>" +
            "<p>さまざまなスタイルのレイアウトボックスを作成します。</p>" +
            "<table class=\"uk-table uk-table-striped\">" +
               "<thead>" +
                  "<tr>" +
                     "<th>クラス</th>" +
                     "<th>説明</th>" +
                  "</tr>" +
               "</thead>" +
               "<tbody>" +
                  "<tr>" +
                     "<td style=\"color:red\">.uk-card</td>" +
                     "<td>このクラスを&lt;div&gt;要素に追加して、Cardコンポーネントを定義します。</td>" +
                  "</tr>"  +
                  "<tr>" +
                     "<td style=\"color:red\">.uk-card-body</td>" +
                     "<td>このクラスをカードに追加して、カードとそのコンテンツの間にパディングを作成します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">uk-card-title</td>" +
                     "<td>このクラスを見出しに追加して、カードのタイトルを定義します。</td>" +
                  "</tr>" +
               "</tbody>" +
            "</table>" +  
            "<div class=\"uk-card uk-card-body\">" +
            "<h3 class=\"uk-card-title\"></h3>" +
            "</div>" +
            "<p>デフォルトでは、カードは空白です。そのため、スタイリング用の修飾子クラスを追加することが重要です。この例では、<span class=\"Code_bak\">.uk-card-default</span></p>クラスを使用しています。</p>"  +
         "</div>" +
      "</div>"
   
   // スタイル修飾子
   var style_modifiers = 
      "<button className=\"MOre\" uk-icon=\"more\" uk-toggle=\"target: #modal-close-default\" uk-tooltip=\"title: オプション表示; pos: right\"></button>"+
      "<div id=\"modal-close-default\" uk-modal>" +
         "<div class=\"MOdal_widow uk-modal-dialog uk-modal-body uk-width-5-6\">" +
            "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>" +
            "<div class=\"title\">" +
               "<h2 class=\"uk-modal-title\">オプション</h2>" +
            "</div>" +
            "<p>さまざまなスタイルのレイアウトボックスを作成します。</p>" +
            "<table class=\"uk-table uk-table-striped\">" +
               "<thead>" +
                  "<tr>" +
                     "<th>クラス</th>" +
                     "<th>説明</th>" +
                  "</tr>" +
               "</thead>" +
               "<tbody>" +
                  "<tr>" +
                     "<td style=\"color:red\">.uk-card-default</td>" +
                     "<td>このクラスを追加して、視覚的にスタイル設定されたボックスを作成します。</td>" +
                  "</tr>"  +
                  "<tr>" +
                     "<td style=\"color:red\">.uk-card-primary</td>" +
                     "<td>このクラスを追加してカードを変更し、原色で強調します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">.uk-card-secondary</td>" +
                     "<td>このクラスを追加してカードを変更し、2番目の背景色を付けます。</td>" +
                  "</tr>" +
               "</tbody>" +
            "</table>" +  
            "<div class=\"uk-card uk-card-body\">" +
            "<h3 class=\"uk-card-title\"></h3>" +
            "</div>" +
         "</div>" +
      "</div>"
   
   // サイズ修飾子
   var size_modifiers = 
      "<button className=\"MOre\" uk-icon=\"more\" uk-toggle=\"target: #modal-close-default\" uk-tooltip=\"title: オプション表示; pos: right\"></button>"+
      "<div id=\"modal-close-default\" uk-modal>" +
         "<div class=\"MOdal_widow uk-modal-dialog uk-modal-body uk-width-5-6\">" +
            "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>" +
            "<div class=\"title\">" +
               "<h2 class=\"uk-modal-title\">オプション</h2>" +
            "</div>" +
            "<p>さまざまなスタイルのレイアウトボックスを作成します。</p>" +
            "<table class=\"uk-table uk-table-striped\">" +
               "<thead>" +
                  "<tr>" +
                     "<th>クラス</th>" +
                     "<th>説明</th>" +
                  "</tr>" +
               "</thead>" +
               "<tbody>" +
                  "<tr>" +
                     "<td style=\"color:red\">.uk-card-small</td>" +
                     "<td>このクラスを追加して、小さいパディングを適用します。</td>" +
                  "</tr>"  +
                  "<tr>" +
                     "<td style=\"color:red\">.uk-card-primary</td>" +
                     "<td>このクラスを追加してカードを変更し、原色で強調します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">.uk-card-large</td>" +
                     "<td>このクラスを追加して、より大きなパディングを適用します。</td>" +
                  "</tr>" +
               "</tbody>" +
            "</table>" +  
            "<div class=\"uk-card uk-card-body\">" +
            "<h3 class=\"uk-card-title\"></h3>" +
            "</div>" +
         "</div>" +
      "</div>"
      
   // サイズ修飾子
   var media = 
      "<button className=\"MOre\" uk-icon=\"more\" uk-toggle=\"target: #modal-close-default\" uk-tooltip=\"title: オプション表示; pos: right\"></button>"+
      "<div id=\"modal-close-default\" uk-modal>" +
         "<div class=\"MOdal_widow uk-modal-dialog uk-modal-body uk-width-5-6\">" +
            "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>" +
            "<div class=\"title\">" +
               "<h2 class=\"uk-modal-title\">オプション</h2>" +
            "</div>" +
            "<p>さまざまなスタイルのレイアウトボックスを作成します。</p>" +
            "<table class=\"uk-table uk-table-striped\">" +
               "<thead>" +
                  "<tr>" +
                     "<th>クラス</th>" +
                     "<th>説明</th>" +
                  "</tr>" +
               "</thead>" +
               "<tbody>" +
                  "<tr>" +
                     "<td style=\"color:red\">.uk-card-media-top</td>" +
                     "<td>このクラスは、メディア要素が上に配置されていることを示します。</td>" +
                  "</tr>"  +
                  "<tr>" +
                     "<td style=\"color:red\">.uk-card-media-bottom</td>" +
                     "<td>	このクラスは、メディア要素が下に配置されていることを示します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">.uk-card-media-left</td>" +
                     "<td>このクラスは、メディア要素が左に配置されていることを示します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">.uk-card-media-right</td>" +
                     "<td>このクラスは、メディア要素が右に配置されていることを示します。</td>" +
                  "</tr>" +
               "</tbody>" +
            "</table>" +  
            "<div class=\"uk-card uk-card-body\">" +
            "<h3 class=\"uk-card-title\"></h3>" +
            "</div>" +
         "</div>" +
      "</div>"
      
   var C_Option = ""
   var C_val = []
   
   // デフォルトの時
   if (e == "Default") {
      C_Option = def
      C_val = [
         "<div class=\"midashi_H5\"><h5>カードコンポーネントは、カード自体、カード本体、およびオプションのカードタイトルで構成されます。通常、カードはグリッドコンポーネントからグリッド列に配置されます。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-width-1-2@m\">",
         Tokusyu_Con(8,"&nbsp;") + "<h3 class=\"uk-card-title\">Default</h3>",
         Tokusyu_Con(8,"&nbsp;") + "<p>Lorem ipsum <a href=\"#\">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         "</div> "
      ]
   } else if (e == "スタイル修飾子") {
      C_Option = style_modifiers
      C_val = [
         "<div class=\"midashi_H5\"><h5>UIkitには、カードに特定のスタイルを追加するために使用できるいくつかの修飾子が含まれています。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-child-width-1-3@m uk-grid-small uk-grid-match\" uk-grid>",
         Tokusyu_Con(8,"&nbsp;") + "<div>",
         Tokusyu_Con(12,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body\">",
         Tokusyu_Con(16,"&nbsp;") + "<h3 class=\"uk-card-title\">Default</h3>",
         Tokusyu_Con(16,"&nbsp;") + "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>",
         Tokusyu_Con(12,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "<div>",
         Tokusyu_Con(12,"&nbsp;") + "<div class=\"uk-card uk-card-primary uk-card-body\">",
         Tokusyu_Con(16,"&nbsp;") + "<h3 class=\"uk-card-title\">primary</h3>",
         Tokusyu_Con(16,"&nbsp;") + "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>",
         Tokusyu_Con(12,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "<div>",
         Tokusyu_Con(12,"&nbsp;") + "<div class=\"uk-card uk-card-secondary uk-card-body\">",
         Tokusyu_Con(16,"&nbsp;") + "<h3 class=\"uk-card-title\">secondary</h3>",
         Tokusyu_Con(16,"&nbsp;") + "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>",
         Tokusyu_Con(12,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div> "
      ]
   } else if (e == "ホバー修飾子") {
      C_Option = ""
      C_val = [
         "<div class=\"midashi_H5\"><h5>カードにホバー効果を作成するには、<span class=\"Code_bak\">.uk-card-hover</span>クラスを追加します。これは、アンカーを操作するときに便利であり、他のカード修飾子と組み合わせることができます。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-child-width-1-2@s uk-grid-match\" uk-grid>",
         Tokusyu_Con(8,"&nbsp;") + "<div>",
         Tokusyu_Con(12,"&nbsp;") + "<div class=\"uk-card uk-card-hover uk-card-body\">",
         Tokusyu_Con(16,"&nbsp;") + "<h3 class=\"uk-card-title\">Hover</h3>",
         Tokusyu_Con(16,"&nbsp;") + "<p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>",
         Tokusyu_Con(12,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "<div>",
         Tokusyu_Con(12,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-hover uk-card-body\">",
         Tokusyu_Con(16,"&nbsp;") + "<h3 class=\"uk-card-title\">Default</h3>",
         Tokusyu_Con(16,"&nbsp;") + "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>",
         Tokusyu_Con(12,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "<div>",
         Tokusyu_Con(12,"&nbsp;") + "<div class=\"uk-card uk-card-primary uk-card-hover uk-card-body uk-light\">",
         Tokusyu_Con(16,"&nbsp;") + "<h3 class=\"uk-card-title\">Primary</h3>",
         Tokusyu_Con(16,"&nbsp;") + "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>",
         Tokusyu_Con(12,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "<div>",
         Tokusyu_Con(12,"&nbsp;") + "<div class=\"uk-card uk-card-primary uk-card-hover uk-card-body uk-light\">",
         Tokusyu_Con(16,"&nbsp;") + "<h3 class=\"uk-card-title\">Primary</h3>",
         Tokusyu_Con(16,"&nbsp;") + "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>",
         Tokusyu_Con(12,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div> "
      ]
   } else if (e == "サイズ修飾子") {
      C_Option = size_modifiers
      C_val = [
         "<div class=\"midashi_H5\"><h5>カードにさまざまなサイズの修飾子を適用して、パディングを増減できます。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-child-width-1-2@s\" uk-grid>",
         Tokusyu_Con(8,"&nbsp;") + "<div>",
         Tokusyu_Con(12,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-small uk-card-body\">",
         Tokusyu_Con(16,"&nbsp;") + "<h3 class=\"uk-card-title\">Small</h3>",
         Tokusyu_Con(16,"&nbsp;") + "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
         Tokusyu_Con(12,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "<div>",
         Tokusyu_Con(12,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-large uk-card-body\">",
         Tokusyu_Con(16,"&nbsp;") + "<h3 class=\"uk-card-title\">large</h3>",
         Tokusyu_Con(16,"&nbsp;") + "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
         Tokusyu_Con(12,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div> "
      ]
   } else if (e == "ヘッダーとフッター") {
      C_Option = size_modifiers
      C_val = [
         "<div class=\"midashi_H5\"><h5>カードをヘッダーとフッターに分割することもできます—デフォルトの本文の周り。カード内の<span class=\"Code_bak\">&lt;div&gt;</span>要素に<span class=\"Code_bak\">&lt;.uk-card-headeror&gt;</span>か<span class=\"Code_bak\">&lt;.uk-card-footer&gt;</span>クラスを追加するだけです。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-width-1-2@m\">",
         Tokusyu_Con(8,"&nbsp;") + " <div class=\"uk-card-header\">",
         Tokusyu_Con(12,"&nbsp;") + "<div class=\"uk-grid-small uk-flex-middle\" uk-grid>",
         Tokusyu_Con(16,"&nbsp;") + "<div class=\"uk-width-auto\">",
         Tokusyu_Con(18,"&nbsp;") + "<img class=\"uk-border-circle\" width=\"40\" height=\"40\" src=\"./avatar.jpg\">",
         Tokusyu_Con(16,"&nbsp;") + "</div>",
         Tokusyu_Con(16,"&nbsp;") + "<div class=\"uk-width-expand\">",
         Tokusyu_Con(18,"&nbsp;") + "<h3 class=\"uk-card-title uk-margin-remove-bottom\">Title</h3>",
         Tokusyu_Con(18,"&nbsp;") + "<p class=\"uk-text-meta uk-margin-remove-top\"><time datetime=\"2016-04-01T19:00\">April 01, 2016</time></p>",
         Tokusyu_Con(16,"&nbsp;") + "</div>",
         Tokusyu_Con(12,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card-body\">",
         Tokusyu_Con(12,"&nbsp;") + "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card-footer\">",
         Tokusyu_Con(12,"&nbsp;") + "<a href=\"#\" class=\"uk-button uk-button-text\">Read more</a>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div> "
      ]
   } else if (e == "メディア") {
      C_Option = media
      C_val = [
         "<div class=\"midashi_H5\"><h5>カード内に間隔を空けずに画像を表示するには、<span class=\"Code_bak\">&lt;div&gt;</span>要素の周囲に次の<span class=\"Code_bak\">&lt;img&gt;</span>クラスのいずれかを追加します。それに応じてソースの順序を変更する必要があることに注意してください。</div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-child-width-1-2@m\" uk-grid>",
         Tokusyu_Con(8,"&nbsp;") + "<div>",
         Tokusyu_Con(12,"&nbsp;") + "<div class=\"uk-card uk-card-default\">",
         Tokusyu_Con(16,"&nbsp;") + "<div class=\"uk-card-media-top\">",
         Tokusyu_Con(18,"&nbsp;") + " <img src=\"./light.jpg\" alt=\"\">",
         Tokusyu_Con(16,"&nbsp;") + "</div>",
         Tokusyu_Con(16,"&nbsp;") + "<div class=\"uk-card-body\">",
         Tokusyu_Con(18,"&nbsp;") + "<h3 class=\"uk-card-title\">Media Top</h3>",
         Tokusyu_Con(18,"&nbsp;") + "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>",
         Tokusyu_Con(16,"&nbsp;") + "</div>",
         Tokusyu_Con(12,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "<div>",
         Tokusyu_Con(12,"&nbsp;") + "<div class=\"uk-card uk-card-default\">",
         Tokusyu_Con(16,"&nbsp;") + "<div class=\"uk-card-body\">",
         Tokusyu_Con(18,"&nbsp;") + "<h3 class=\"uk-card-title\">Media Bottom</h3>",
         Tokusyu_Con(18,"&nbsp;") + "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>",
         Tokusyu_Con(16,"&nbsp;") + "</div>",
         Tokusyu_Con(16,"&nbsp;") + "<div class=\"uk-card-media-bottom\">",
         Tokusyu_Con(18,"&nbsp;") + " <img src=\"./light.jpg\" alt=\"\">",
         Tokusyu_Con(16,"&nbsp;") + "</div>",
         Tokusyu_Con(12,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div> "
      ]
   } else if (e == "水平方向の配置") {
      C_Option = ""
      C_val = [
         "<div class=\"midashi_H5\"><h5> <p><span class=\"Code_bak\">.uk-card-media-left</span>または<span class=\"Code_bak\">.uk-card-media-right</span>クラスは、必要に応じて境界半径などをリセットするために使用されます。実際のレイアウトは作成されません。</p> <p>これを行うには、たとえば、 Coverコンポーネントから<span class=\"Code_bak\">.uk-cover-container</span>クラスを追加します。画像要素に属性を追加し、グリッドコンポーネントと幅コンポーネントを使用して位置合わせを行います。画像の幅と高さを使用して<span class=\"Code_bak\">&lt;canvas&gt;</span>要素を作成します。これにより、グリッドが小さいビューポートにスタックする場合でも、画像のサイズが保持されます。これは、並べてレイアウトを作成する1つの方法にすぎません。</p></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin\" uk-grid>",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card-media-left uk-cover-container\">",
         Tokusyu_Con(12,"&nbsp;") + "<img src=\"./light.jpg\" alt=\"\" uk-cover>",
         Tokusyu_Con(12,"&nbsp;") + "<canvas width=\"600\" height=\"400\"></canvas>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "<div>",
         Tokusyu_Con(12,"&nbsp;") + "<div class=\"uk-card-body\">",
         Tokusyu_Con(16,"&nbsp;") + "<h3 class=\"uk-card-title\">Media Left</h3>",
         Tokusyu_Con(16,"&nbsp;") + "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>",
         Tokusyu_Con(12,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-flex-last@s uk-card-media-right uk-cover-container\">",
         Tokusyu_Con(12,"&nbsp;") + "<img src=\"./light.jpg\" alt=\"\" uk-cover>",
         Tokusyu_Con(12,"&nbsp;") + "<canvas width=\"600\" height=\"400\"></canvas>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "<div>",
         Tokusyu_Con(12,"&nbsp;") + "<div class=\"uk-card-body\">",
         Tokusyu_Con(16,"&nbsp;") + "<h3 class=\"uk-card-title\">Media right</h3>",
         Tokusyu_Con(16,"&nbsp;") + "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>",
         Tokusyu_Con(12,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div> "
      ]
   } else if (e == "バッジ") {
      C_Option = ""
      C_val = [
         "<div class=\"midashi_H5\"><h5>カード内にバッジを配置するには、<span class=\"Code_bak\">&lt;.uk-card-badge&gt;</span>クラスをコンテナ要素に追加します。バッジのスタイルを設定するには、他のコンポーネントの1つ（ラベルなど）を使用できます。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-card uk-card-default uk-card-body uk-width-1-2@m\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-card-badge uk-label\">Badge</div>",
         Tokusyu_Con(8,"&nbsp;") + "<h3 class=\"uk-card-title\">Title</h3>",
         Tokusyu_Con(8,"&nbsp;") + "<p>Lorem ipsum color sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div> "
      ]
   }
   // 作成した変数を描画する
   Byouga_Create(C_val)
}

function Card_Select_Create() {
   var Ary = [
      "",
      "Default",
      "スタイル修飾子",
      "ホバー修飾子",
      "サイズ修飾子",
      "ヘッダーとフッター",
      "メディア",
      "水平方向の配置",
      "バッジ"
   ]
   Option_Add(Ary);
}


// ------------------------------//　
// --- 閉じる処理関係 ---//
// ------------------------------//　
function  Close_Byoga_Create_val(e) {
   // オプション詳細
   var C_Option = ""
   
   var C_val = []
   
   // デフォルトの時
   if (e == "Default") {
      C_val = [
         "<div class=\"midashi_H5\"><h5>このコンポーネントを適用するには、<span class=\"Code_bak\">uk-close</span>属性を <span class=\"Code_bak\">&lt;a &gt;</span>要素に追加します。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<button type=\"button\" uk-close></button>",
         "</div> "
      ]
   } else if (e == "大きな修飾子") {
      C_val = [
         "<div class=\"midashi_H5\"><h5><span class=\"Code_bak\">.uk-close-large</span>より大きな閉じるボタンのクラスを追加します。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<button class=\"uk-close-large\" type=\"button\" uk-close></button>",
         "</div> "
      ]
   } else if (e == "アラートで閉じる") {
      C_val = [
         "<div class=\"midashi_H5\"><h5><span class=\"Code_bak\">これは、このコンポーネントがアラートコンポーネントのアラートボックスでどのように使用されるかの例です。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<div uk-alert>",
         Tokusyu_Con(8,"&nbsp;") + "<button class=\"uk-alert-close\" type=\"button\" uk-close></button>",
         Tokusyu_Con(8,"&nbsp;") + "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div> "
      ]
   } else if (e == "ドロップで閉じる") {
      C_val = [
         "<div class=\"midashi_H5\"><h5><span class=\"Code_bak\">これは、このコンポーネントがアラートコンポーネントのアラートボックスでどのように使用されるかの例です。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-inline\">",
         Tokusyu_Con(8,"&nbsp;") + "<button class=\"uk-button uk-button-default\" type=\"button\">Click</button>",
         Tokusyu_Con(8,"&nbsp;") + "<div uk-drop=\"mode: click\">",
         Tokusyu_Con(12,"&nbsp;") + "<div class=\"uk-card uk-card-body uk-card-default\">",
         Tokusyu_Con(16,"&nbsp;") + "<button class=\"uk-drop-close\" type=\"button\" uk-close></button>",
         Tokusyu_Con(16,"&nbsp;") + "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>",
         Tokusyu_Con(12,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div> "
      ]
   } else if (e == "モーダルで閉じる") {
      C_val = [
         "<div class=\"midashi_H5\"><h5>これは、このコンポーネントがモーダルコンポーネントでどのように使用されるかの例です。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<a class=\"uk-button uk-button-default\" href=\"#modal\" uk-toggle>Open modal</a>",
         Tokusyu_Con(4,"&nbsp;") + "<div id=\"modal\" uk-modal>",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-modal-dialog uk-modal-body\">",
         Tokusyu_Con(12,"&nbsp;") + "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>",
         Tokusyu_Con(12,"&nbsp;") + "<h2 class=\"uk-modal-title\">Headline</h2>",
         Tokusyu_Con(12,"&nbsp;") + "<p>test</p>",
         Tokusyu_Con(12,"&nbsp;") + "<p class=\"uk-text-right\">",
         Tokusyu_Con(16,"&nbsp;") + "<button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">Cancel</button>",
         Tokusyu_Con(16,"&nbsp;") + "<button class=\"uk-button uk-button-primary\" type=\"button\">Save</button>",
         Tokusyu_Con(12,"&nbsp;") + "</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div> "
      ]
   }
   // 作成した変数を描画する
   Byouga_Create(C_val)
}

function Close_Select_Create() {
   var Ary = [
      "",
      "Default",
      "大きな修飾子",
      "アラートで閉じる",
      "ドロップで閉じる",
      "モーダルで閉じる"
   ]
   Option_Add(Ary);
}


// ------------------------------//　
// --- カラム処理関係 ---//
// ------------------------------//　
function  Column_Byoga_Create_val(e) {
   // オプション詳細
   var def = 
      "<button className=\"MOre\" uk-icon=\"more\" uk-toggle=\"target: #modal-close-default\" uk-tooltip=\"title: オプション表示; pos: right\"></button>"+
      "<div id=\"modal-close-default\" uk-modal>" +
         "<div class=\"MOdal_widow uk-modal-dialog uk-modal-body uk-width-5-6\">" +
            "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>" +
            "<div class=\"title\">" +
               "<h2 class=\"uk-modal-title\">オプション</h2>" +
            "</div>" +
            "<p><span class=\"Code_bak\">.uk-column-*</span>クラスの1つを要素に追加して、そのインラインコンテンツを複数の列に表示します。</p>" +
            "<table class=\"uk-table uk-table-striped\">" +
               "<thead>" +
                  "<tr>" +
                     "<th>クラス</th>" +
                     "<th>説明</th>" +
                  "</tr>" +
               "</thead>" +
               "<tbody>" +
                  "<tr>" +
                     "<td style=\"color:red\">.uk-column-1-2@sに.uk-column-1-6@s</td>" +
                     "<td>640px以上のデバイス幅にのみ影響します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">.uk-column-1-2@mに.uk-column-1-6@m</td>" +
                     "<td>960px以上のデバイス幅にのみ影響します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">.uk-column-1-2@lに.uk-column-1-6@l</td>" +
                     "<td>	1200px以上のデバイス幅にのみ影響します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">.uk-column-1-2@xlに.uk-column-1-6@xl</td>" +
                     "<td>	1600px以上のデバイス幅にのみ影響します。</td>" +
                  "</tr>" +
               "</tbody>" +
            "</table>" +  
         "</div>" +
      "</div>"
   
   var C_val = []
   var C_Option = ""
   // デフォルトの時
   if (e == "Default") {
      C_Option = def
      C_val = [
         "<div class=\"midashi_H5\"><h5>UIkitは、レスポンシブな列クラスを多数提供します。基本的に、それらは通常の列クラスと同じように機能しますが、それらが有効になるブレークポイントを表すサフィックスがある点が異なります。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-column-1-2\">",
         Tokusyu_Con(8,"&nbsp;") + "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>",
         Tokusyu_Con(8,"&nbsp;") + "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
         Tokusyu_Con(8,"&nbsp;") + "<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div> "
      ]
   } else if (e == "レスポンシブ") {
      C_Option = def
      C_val = [
         "<div class=\"midashi_H5\"><h5>UIkitは、レスポンシブな列クラスを多数提供します。基本的に、それらは通常の列クラスと同じように機能しますが、それらが有効になるブレークポイントを表すサフィックスがある点が異なります。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-column-1-2@s uk-column-1-3@m uk-column-1-4@l\">",
         Tokusyu_Con(8,"&nbsp;") + "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>",
         Tokusyu_Con(8,"&nbsp;") + "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
         Tokusyu_Con(8,"&nbsp;") + "<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div> "
      ]
   }  else if (e == "除算器修飾子") {
      C_Option = ""
      C_val = [
         "<div class=\"midashi_H5\"><h5>列の間に縦線を表示するには、<span class=\"Code_bak\">.uk-column-divider</span>クラスを追加します。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-column-1-2 uk-column-divider\">",
         Tokusyu_Con(8,"&nbsp;") + "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>",
         Tokusyu_Con(8,"&nbsp;") + "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
         Tokusyu_Con(8,"&nbsp;") + "<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div> "
      ]
   } else if (e == "すべての列にまたがる") {
      C_Option = ""
      C_val = [
         "<div class=\"midashi_H5\"><h5>インライン要素を列の幅全体に広げるには、<span class=\"Code_bak\">.uk-column-span</span>クラスを内部要素に追加します。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-column-1-2 uk-column-divider\">",
         Tokusyu_Con(8,"&nbsp;") + "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>",
         Tokusyu_Con(8,"&nbsp;") + "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
         Tokusyu_Con(8,"&nbsp;") + "<blockquote cite=\"#\" class=\"uk-column-span\">",
         Tokusyu_Con(12,"&nbsp;") + "<p>All we have to decide is what to do with the time that is given us.</p>",
         Tokusyu_Con(12,"&nbsp;") + "<footer>Gandalf in in <cite><a href=\"\">The Fellowship of the Ring</a></cite></footer>",
         Tokusyu_Con(8,"&nbsp;") + "</blockquote>",
         Tokusyu_Con(8,"&nbsp;") + "<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div> "
      ]
   }
   // 作成した変数を描画する
   Byouga_Create(C_val)
}

function Column_Select_Create() {
   var Ary = [
      "",
      "Default",
      "レスポンシブ",
      "除算器修飾子",
      "すべての列にまたがる"
   ]
   Option_Add(Ary);
}



// ------------------------------//　
// --- コメント処理関係 ---//
// ------------------------------//　
function  Comment_Byoga_Create_val(e) {
   // オプション詳細
   var C_Option = 
      "<button className=\"MOre\" uk-icon=\"more\" uk-toggle=\"target: #modal-close-default\" uk-tooltip=\"title: オプション表示; pos: right\"></button>"+
      "<div id=\"modal-close-default\" uk-modal>" +
         "<div class=\"MOdal_widow uk-modal-dialog uk-modal-body uk-width-5-6\">" +
            "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>" +
            "<div class=\"title\">" +
               "<h2 class=\"uk-modal-title\">オプション</h2>" +
            "</div>" +
            "<p>コメントコンポーネントは、コメント自体、アバターを含むコメントヘッダー、タイトルとメタデータ、およびコメント本文で構成されます。</p>" +
            "<table class=\"uk-table uk-table-striped\">" +
               "<thead>" +
                  "<tr>" +
                     "<th>クラス</th>" +
                     "<th>説明</th>" +
                  "</tr>" +
               "</thead>" +
               "<tbody>" +
                  "<tr>" +
                     "<td style=\"color:red\">.uk-comment</td>" +
                     "<td>	このクラスを追加して、Commentコンポーネントを定義します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">.uk-comment-body</td>" +
                     "<td> このクラスを追加して、コメント本文を作成します。。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">.uk-comment-title</td>" +
                     "<td> このクラスを追加して、コメントヘッダーを作成します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">.uk-column-1-2@xlに.uk-column-1-6@xl</td>" +
                     "<td> このクラスを見出しに追加して、コメントタイトルを作成します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">.uk-comment-meta</td>" +
                     "<td> このクラスを追加して、コメントに関するメタデータ（subnavなど）を作成します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">.uk-comment-avatar</td>" +
                     "<td> このクラスを<span class=\"Code_bak\">&lt;img&gt;</span>要素に追加して、コメント作成者のアバターを作成します。</td>" +
                  "</tr>" +
               "</tbody>" +
            "</table>" +  
         "</div>" +
      "</div>"
   
   var C_val = []
   
   // デフォルトの時
   if (e == "Default") {
      C_val = [
         "<div class=\"midashi_H5\"><h5>コメントコンポーネントは、コメント自体、アバターを含むコメントヘッダー、タイトルとメタデータ、およびコメント本文で構成されます。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<article class=\"uk-comment\">",
         Tokusyu_Con(8,"&nbsp;") + "<header class=\"uk-comment-header\">",
         Tokusyu_Con(12,"&nbsp;") + "<div class=\"uk-grid-medium uk-flex-middle\" uk-grid>",
         Tokusyu_Con(16,"&nbsp;") + "<div class=\"uk-width-auto\">",
         Tokusyu_Con(16,"&nbsp;") + "</div>",
         Tokusyu_Con(12,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "</header>",
         Tokusyu_Con(4,"&nbsp;") + "</ul>",
         "</div> "
      ]
   } else if(e == "一次修飾子") {
      C_val = [
         "<div class=\"midashi_H5\"><h5>コメントのスタイルを変えるには、たとえば、管理者のコメントとして強調表示するには、<span class=\"Code_bak\">.uk-comment-primary</span>クラスを追加するだけです。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<article class=\"uk-comment uk-comment-primary\">",
         Tokusyu_Con(8,"&nbsp;") + "<header class=\"uk-comment-header\">",
         Tokusyu_Con(12,"&nbsp;") + "<div class=\"uk-grid-medium uk-flex-middle\" uk-grid>",
         Tokusyu_Con(16,"&nbsp;") + "<div class=\"uk-width-auto\">",
         Tokusyu_Con(18,"&nbsp;") + "<img class=\"uk-comment-avatar\" src=\"./avatar.jpg\" width=\"80\" height=\"80\" alt=\"\">",
         Tokusyu_Con(16,"&nbsp;") + "</div>",
         Tokusyu_Con(16,"&nbsp;") + "<div class=\"uk-width-expand\">",
         Tokusyu_Con(18,"&nbsp;") + "<h4 class=\"uk-comment-title uk-margin-remove\"><a class=\"uk-link-reset\" href=\"#\">Author</a></h4>",
         Tokusyu_Con(18,"&nbsp;") + "<ul class=\"uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top\">",
         Tokusyu_Con(20,"&nbsp;") + "<li><a href=\"#\">12 days ago</a></li>",
         Tokusyu_Con(20,"&nbsp;") + "<li><a href=\"#\">Reply</a></li>",
         Tokusyu_Con(18,"&nbsp;") + "</ul>",
         Tokusyu_Con(16,"&nbsp;") + "</div>",
         Tokusyu_Con(12,"&nbsp;") + "</div>",
         Tokusyu_Con(8,"&nbsp;") + "</header>",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-comment-body\">",
         Tokusyu_Con(12,"&nbsp;") + "<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>",
         Tokusyu_Con(8,"&nbsp;") + "</div>",
         Tokusyu_Con(4,"&nbsp;") + "</article>",
         "</div> "
      ] 
   } else if(e == "リスト") {
      C_val = [
         "<div class=\"midashi_H5\"><h5><span class=\"Code_bak\">.uk-comment-list</span>クラスを<span class=\"Code_bak\">&:lt;ul:gt</span>要素に追加して、コメントのリストを作成します。コメントリスト内に任意の数の<span class=\"Code_bak\">&:lt;ul:gt</span>要素をネストできます。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",

         Tokusyu_Con(4,"&nbsp;") + "<ul class=\"uk-comment-list\">",
         Tokusyu_Con(8,"&nbsp;") + "<li>",
         Tokusyu_Con(12,"&nbsp;") + "<article class=\"uk-comment uk-visible-toggle\" tabindex=\"-1\">",
         Tokusyu_Con(16,"&nbsp;") + "<header class=\"uk-comment-header uk-position-relative\">",
         Tokusyu_Con(20,"&nbsp;") + "<div class=\"uk-grid-medium uk-flex-middle\" uk-grid>",
         Tokusyu_Con(24,"&nbsp;") + "<div class=\"uk-width-auto\">",
         Tokusyu_Con(28,"&nbsp;") + "<img class=\"uk-comment-avatar\" src=\"./avatar.jpg\" width=\"80\" height=\"80\" alt=\"\">",
         Tokusyu_Con(24,"&nbsp;") + "</div>",       
         Tokusyu_Con(24,"&nbsp;") + "<div class=\"uk-width-expand\">",     
         Tokusyu_Con(28,"&nbsp;") + "<h4 class=\"uk-comment-title uk-margin-remove\"><a class=\"uk-link-reset\" href=\"#\">Author</a></h4>",
         Tokusyu_Con(28,"&nbsp;") + "<p class=\"uk-comment-meta uk-margin-remove-top\"><a class=\"uk-link-reset\" href=\"#\">12 days ago</a></p>",
         Tokusyu_Con(24,"&nbsp;") + "</div>",     
         Tokusyu_Con(20,"&nbsp;") + "</div>",     
         Tokusyu_Con(20,"&nbsp;") + "<div class=\"uk-position-top-right uk-position-small uk-hidden-hover\"><a class=\"uk-link-muted\" href=\"#\">Reply</a></div>",     
         Tokusyu_Con(16,"&nbsp;") + "</header>",
         Tokusyu_Con(16,"&nbsp;") + "<div class=\"uk-comment-body\">",
         Tokusyu_Con(20,"&nbsp;") + "<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>",
         Tokusyu_Con(16,"&nbsp;") + "</div>",
         Tokusyu_Con(12,"&nbsp;") + "</article>",
         Tokusyu_Con(12,"&nbsp;") + "<ul>",
         Tokusyu_Con(16,"&nbsp;") + "<li>",
         Tokusyu_Con(20,"&nbsp;") + "<article class=\"uk-comment uk-comment-primary uk-visible-toggle\" tabindex=\"-1\">",
         Tokusyu_Con(24,"&nbsp;") + "<header class=\"uk-comment-header uk-position-relative\">",
         Tokusyu_Con(28,"&nbsp;") + "<div class=\"uk-grid-medium uk-flex-middle\" uk-grid>",
         Tokusyu_Con(32,"&nbsp;") + "<div class=\"uk-width-auto\">",
         Tokusyu_Con(36,"&nbsp;") + "<img class=\"uk-comment-avatar\" src=\"./avatar.jpg\" width=\"80\" height=\"80\" alt=\"\">",
         Tokusyu_Con(32,"&nbsp;") + "</div>",
         Tokusyu_Con(32,"&nbsp;") + "<div class=\"uk-width-expand\">",
         Tokusyu_Con(36,"&nbsp;") + "<h4 class=\"uk-comment-title uk-margin-remove\"><a class=\"uk-link-reset\" href=\"#\">Author</a></h4>",
         Tokusyu_Con(36,"&nbsp;") + "<p class=\"uk-comment-meta uk-margin-remove-top\"><a class=\"uk-link-reset\" href=\"#\">12 days ago</a></p>",
         Tokusyu_Con(32,"&nbsp;") + "</div>",
         Tokusyu_Con(28,"&nbsp;") + "</div>",   
         Tokusyu_Con(28,"&nbsp;") + "<div class=\"uk-position-top-right uk-position-small uk-hidden-hover\"><a class=\"uk-link-muted\" href=\"#\">Reply</a></div>",   
         Tokusyu_Con(24,"&nbsp;") + "</header>",
         Tokusyu_Con(24,"&nbsp;") + "<div class=\"uk-comment-body\">",
         Tokusyu_Con(28,"&nbsp;") + "<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>",   
         Tokusyu_Con(24,"&nbsp;") + "</div>",
         Tokusyu_Con(20,"&nbsp;") + "</article>",
         Tokusyu_Con(20,"&nbsp;") + "<ul>",   
         Tokusyu_Con(24,"&nbsp;") + "<li>",                    
         Tokusyu_Con(28,"&nbsp;") + "<article class=\"uk-comment uk-visible-toggle\" tabindex=\"-1\">",
         Tokusyu_Con(32,"&nbsp;") + "<header class=\"uk-comment-header uk-position-relative\">",
         Tokusyu_Con(36,"&nbsp;") + "<div class=\"uk-grid-medium uk-flex-middle\" uk-grid>",
         Tokusyu_Con(40,"&nbsp;") + "<div class=\"uk-width-auto\">",
         Tokusyu_Con(44,"&nbsp;") + "<img class=\"uk-comment-avatar\" src=\"./avatar.jpg\" width=\"80\" height=\"80\" alt=\"\">",
         Tokusyu_Con(40,"&nbsp;") + "</div>",
         Tokusyu_Con(40,"&nbsp;") + "<div class=\"uk-width-expand\">",
         Tokusyu_Con(44,"&nbsp;") + "<h4 class=\"uk-comment-title uk-margin-remove\"><a class=\"uk-link-reset\" href=\"#\">Author</a></h4>",
         Tokusyu_Con(44,"&nbsp;") + "<p class=\"uk-comment-meta uk-margin-remove-top\"><a class=\"uk-link-reset\" href=\"#\">12 days ago</a></p>",
         Tokusyu_Con(40,"&nbsp;") + "</div>",
         Tokusyu_Con(36,"&nbsp;") + "</div>",
         Tokusyu_Con(36,"&nbsp;") + "<div class=\"uk-position-top-right uk-position-small uk-hidden-hover\"><a class=\"uk-link-muted\" href=\"#\">Reply</a></div>",
         Tokusyu_Con(36,"&nbsp;") + "</header>",
         Tokusyu_Con(36,"&nbsp;") + "<div class=\"uk-comment-body\">",
         Tokusyu_Con(38,"&nbsp;") + " <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>",
         Tokusyu_Con(36,"&nbsp;") + "</div>",
         Tokusyu_Con(28,"&nbsp;") + "</article>",  
         Tokusyu_Con(24,"&nbsp;") + "</li>",
         Tokusyu_Con(20,"&nbsp;") + "</ul>",                        
         Tokusyu_Con(16,"&nbsp;") + "</li>",
         Tokusyu_Con(12,"&nbsp;") + "</ul>",  
         Tokusyu_Con(8,"&nbsp;") + "</li>",
         Tokusyu_Con(4,"&nbsp;") + "</ul>",       
         "</div> "
         
      ] 
   }
   // 作成した変数を描画する
   Byouga_Create(C_val)
}

function Comment_Select_Create() {
   var Ary = [
      "",
      "Default",
      "一次修飾子",
      "リスト"
   ]
   Option_Add(Ary);
}


// ------------------------------//　
// ------- コンテナ処理関係 -----//
// ------------------------------//　
function  Container_Byoga_Create_val(e) {
   // オプション詳細
   var size = 
      "<button className=\"MOre\" uk-icon=\"more\" uk-toggle=\"target: #modal-close-default\" uk-tooltip=\"title: オプション表示; pos: right\"></button>"+
      "<div id=\"modal-close-default\" uk-modal>" +
         "<div class=\"MOdal_widow uk-modal-dialog uk-modal-body uk-width-5-6\">" +
            "<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>" +
            "<div class=\"title\">" +
               "<h2 class=\"uk-modal-title\">オプション</h2>" +
            "</div>" +
            "<table class=\"uk-table uk-table-striped\">" +
               "<thead>" +
                  "<tr>" +
                     "<th>クラス</th>" +
                     "<th>説明</th>" +
                  "</tr>" +
               "</thead>" +
               "<tbody>" +
                  "<tr>" +
                     "<td style=\"color:red\">.uk-container-xsmall</td>" +
                     "<td>	xsmallコンテナにこのクラスを追加します。</td>" +
                  "</tr>"  +
                  "<tr>" +
                     "<td style=\"color:red\">.uk-container-small</td>" +
                     "<td>小さなコンテナ用にこのクラスを追加します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">.uk-container-large	</td>" +
                     "<td>	大きなコンテナ用にこのクラスを追加します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">.uk-container-xlarge</td>" +
                     "<td>	xlargeコンテナにこのクラスを追加します。</td>" +
                  "</tr>" +
                  "<tr>" +
                     "<td style=\"color:red\">.uk-container-expand</td>" +
                     "<td>	コンテナの幅を制限したくないが、動的な水平方向のパディングが必要な場合は、このクラスを追加します。</td>" +
                  "</tr>" +
               "</tbody>" +
            "</table>" +  
         "</div>" +
      "</div>"
   
   var C_val = []
   var C_Option = ""
   // デフォルトの時
   if (e == "Default") {
      C_val = [
         "<div class=\"midashi_H5\"><h5>ブロック要素に <span class=\"Code_bak\">.uk-container</span> クラスを追加して、最大幅を指定し、Web サイトのメインコンテンツをラップします。要素は中央に配置され、大画面に合わせて自動的に調整される側面にパディングが付いています。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-container\"></div>",
         "</div> "
      ]
   } else if(e == "サイズ修飾子") {
      C_Option = size;
      C_val = [
         "<div class=\"midashi_H5\"><h5>ブロック要素に <span class=\"Code_bak\">.uk-container</span> クラスを追加して、最大幅を指定し、Web サイトのメインコンテンツをラップします。要素は中央に配置され、大画面に合わせて自動的に調整される側面にパディングが付いています。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-container uk-container-xsmall\"></div>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-container uk-container-small\"></div>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-container uk-container-large\"></div>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-container uk-container-xlarge\"></div>",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-container uk-container-expand\"></div>",
         "</div> "
      ]
   } else if(e == "セクションコンテナ") {
      C_val = [
         "<div class=\"midashi_H5\"><h5>このコンポーネントを適用して、セクションコンポーネントのセクション内のコンテンツの幅を変更できます。</h5></div>",
         C_Option,
         "<div class=\"uk-panel\">",
         Tokusyu_Con(4,"&nbsp;") + "<div class=\"uk-section uk-section-primary\">",
         Tokusyu_Con(8,"&nbsp;") + "<div class=\"uk-container uk-container-small\"></div>",
         Tokusyu_Con(4,"&nbsp;") + "</div>",
         "</div> "
      ]
   }
   // 作成した変数を描画する
   Byouga_Create(C_val)
}

function Container_Select_Create() {
   var Ary = [
      "",
      "Default",
      "サイズ修飾子",
      "セクションコンテナ",
   ]
   Option_Add(Ary);
}
// オプション追加関数
function Option_Add(Ary) {
   // サブセレクトボックス
   var Sub_select = document.getElementById("Sub_Select")
   Option_del(Sub_select)
   Ary.forEach(val => {
      // optionタグを作成する
      var option = document.createElement("option");
      // optionタグのテキストを4に設定する
      option.text = val;
      // optionタグのvalueを4に設定する
      option.value = val;
      // selectタグの子要素にoptionタグを追加する
      Sub_select.appendChild(option);
   });
}

// option削除
function Option_del(Sel) {
   while(Sel.lastChild){
      Sel.removeChild(Sel.lastChild);
   } 
}

// 描画関数
function Byouga_Create(params) {
   // 描画エリア定義
   var Byoga_Design = document.getElementById("Byoga_Design")
   // 描画エリア定義
   var Byoga_Src = document.getElementById("content")
    
   // 子要素の削除
   Child_tag_Del(Byoga_Src)
   
   // 描画変数
   var Byoga_var = ""
   var i = 0;
   params.forEach(val => {
      // 描画（デザイン）
      Byoga_var += val.replace(/&nbsp;/g, '')
      if (i >= 2) {
         // 描画（コード）
         const result = val.replace(/</g, '&lt;').replace(/>/, '&gt;');   
         Byoga_Src.innerHTML += "<span><p style=\"display:inline\">" + result + "</p><br/></span>"
      }
      
      i++
   });
   
   Byoga_Design.innerHTML = ""
   // 描画
   Byoga_Design.innerHTML = Byoga_var
}

function etc() {
   // サブセレクトボックス
   var Sub_select = document.getElementById("Sub_Select")
   Option_del(Sub_select)
}


// ----------------- //　
// -- 便利関数関係-- //
// ----------------- //　
// 特殊文字を作成
function Tokusyu_Con(len,val) {
   var rtn = ""
   // 指定数ル-プ
   for (let i = 0; i < len; i++) {
      rtn += val
   }
   return rtn
}

// すべての子要素削除
function Child_tag_Del(params) {
   while (params.firstChild) {
      params.removeChild(params.firstChild);
   }
}

function Allcopy() {
   var text = "<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/uikit@3.11.1/dist/css/uikit.min.css\" />\n" +
              "<script src=\"https://cdn.jsdelivr.net/npm/uikit@3.11.1/dist/js/uikit.min.js\"></script>\n" +
              "<script src=\"https://cdn.jsdelivr.net/npm/uikit@3.11.1/dist/js/uikit-icons.min.js\"></script>"
   navigator.clipboard.writeText(text)
}

// セレクトボックスのoption追加
export default App