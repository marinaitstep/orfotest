
function Footer(){
    function refresh() {
        window.location.reload()
      }
    function ScrollTop(){
        let rootElement = document.documentElement
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
          })
    }
    return(
        <>
        <center><button id="butref" onClick={refresh}>обнулитися</button> 
        <a id="author" href="https://www.instagram.com/alisafairytale/">автор</a> 
        <i class="fa-solid fa-angles-up" onClick={ScrollTop} id="scrollToTopBtn"></i>
        </center> 
        
        </>
    )
}

export default Footer;