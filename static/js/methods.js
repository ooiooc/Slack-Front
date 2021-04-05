// 네이티브 앱(안드로이드/iOS에 특정 명령을 내리기 위한 파일입니다.)

function callPhone (tel) {
  try { 
    Android.callPhone(tel)
  } catch(err) {}
  try { 
    webkit.messageHandlers.callPhone.postMessage(`{ "code":"${tel }" }`);
  } catch(err) {}
 }

function sendTextMessage (phone, message) {
  var json = `{ "phone":"${phone }", "message":"${message }" }`
  try { 
    Android.sendTextMessage(json)
  } catch(err) {}
  try { 
    webkit.messageHandlers.sendTextMessage.postMessage(json);
  } catch(err) {}
 }
