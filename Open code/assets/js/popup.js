let value = 0

function innerHTMLH2() {
  chrome.storage.local.get('allChestClick', function (result) {value = result.allChestClick})
  
  document.querySelector('h2').innerHTML = value * 50 + ''
}

innerHTMLH2()
setInterval(innerHTMLH2, 1000)