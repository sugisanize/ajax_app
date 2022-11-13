//参照(https://master.tech-camp.in/v2/curriculums/5603)
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
  });
};

window.addEventListener('load', post);