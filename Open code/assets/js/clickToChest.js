let value = 0
chrome.storage.local.get('allChestClick', function (result) {value = result.allChestClick})

if (!value) {
  chrome.storage.local.set({'allChestClick': 0})
}


function getClickToChest() {
  chrome.storage.local.get('allChestClick', function (result) {value = result.allChestClick})
  
  const block = document.querySelector('.tw-button--success')
  if (block) {
    block.click()
    chrome.storage.local.set({'allChestClick': value + 1})
  }
}

setInterval(getClickToChest, 1000)