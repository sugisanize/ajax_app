//参照(https://master.tech-camp.in/v2/curriculums/5603)
const buildHTML = (XHR) =>{
  const item = XHR.response.post;
  //描画するHTMLをhtmlに格納しまっせ
  const html = ` 
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

function post(){
  const submit = document.getElementById("submit");
  submit.addEventListener('click',(e) => { //submit要素がクリックされて発火
    e.preventDefault();//サーバーへのリクエストの直送を防ぐ（JavaScriptを介してのみにしている）
    const form = document.getElementById("form"); //formの文字列要素を取得してform関数として定義
    const formData = new FormData(form); //新しくフォームに入力された値をformdata関数として定義
    const XHR = new XMLHttpRequest(); //新しくサーバーサイドに送信するリクエストをXHR関数として定義
    XHR.open("POST", "/posts", true); //postsパスへのPOSTのHTTPメソッドとする非同期通信のリクエストとして初期化
    XHR.responseType = "json"; //JSON（JavaScript型データフォーマット）をレスポンスのデータフォーマットとして指定
    XHR.send(formData);
    XHR.onload = () => { //通信成功時の処理
      if (XHR.status != 200){
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null; //以降の処理がされないようにJavaScriptの処理から抜け出す記述
      };
      const list = document.getElementById("list");
      const formtext = document.getElementById("content"); //フォーム枠のid contentをformtextに格納
      list.insertAdjacentHTML("afterend", buildHTML(XHR)); //list要素の最後に関数htmlを挿入しまっせ
      formtext.value = ""; //フォーム枠の中の値が空になるように指定している
    };
  });
};

window.addEventListener('load', post);