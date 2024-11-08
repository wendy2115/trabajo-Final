const nav = document.getElementById('header-nav-container').classList; 

const actionButton = () => {
    console.log("NAV CLASES: ", nav.length)

    if (nav.length === 1) {
        nav.add('header-nav-container-open');
    }
 }
