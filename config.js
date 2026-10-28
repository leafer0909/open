/*
  LINE 記録ページの共通設定（index.html・regi.html・order.html が読み込みます）
  ページを更新するときは、このファイルはそのまま残し、ほかの .html だけ差し替えてください。

  GAS_URL … Apps Script のウェブアプリのURL（LINEのWebhook URLと同じもの）
  LIFF    … LINE Developers の LIFF タブに表示される各ページの「LIFF ID」
*/
window.APP_CONFIG = {
  GAS_URL: 'https://script.google.com/macros/s/AKfycbzalJEbvSnagpUa7yxwQhmnCgGLNAtLfDVdY7Um2jdXGsAgX3D6NEHGe8QjeELg1YD7/exec',
  LIFF: {
    kintai: '2012248509-RClZWVEk',   // index.html
    regi:   '2012248509-1uERInyy',   // regi.html
    order:  '2012248509-AB4Y5XGj'                   // order.html（発注買出し）
  }
};
