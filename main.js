function openTab(tab) {
    document.querySelector('#' + tab + '-content').style.display = 'block';
    if(tab === 'tab1') {
        document.querySelector('#tab2-content').style.display = 'none';
    } else {
        document.querySelector('#tab1-content').style.display = 'none';
    }
    document.querySelector('#tab1').classList.toggle('active');
    document.querySelector('#tab2').classList.toggle('active');
}