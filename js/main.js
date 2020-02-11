function openTab(tabId) {
    document.querySelector('#tab' + tabId + '-content').style.display = 'block'
    if (tabId === 1) {
        document.querySelector('#tab2-content').style.display = 'none'
    } else {
        document.querySelector('#tab1-content').style.display = 'none'
    }
    document.querySelector('#tab2-btn').classList.toggle('tab-btn-active');
    document.querySelector('#tab1-btn').classList.toggle('tab-btn-active');
}