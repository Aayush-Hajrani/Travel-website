function opentab(tabname,event){
    const tablinks = document.getElementsByClassName('tab-link');
    const tabcontents = document.getElementsByClassName("tab-content");

    for(let tablink of tablinks){
        tablink.classList.remove('active-link');
    }

    for(let tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}