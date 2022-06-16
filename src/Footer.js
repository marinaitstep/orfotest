function Footer(){
    function refresh() {
        window.location.reload()
      }
    return(
        <>
        <center><button id="butref" onClick={refresh}>обнулиться</button> <a id="author" href="https://www.instagram.com/rukalitso_/">автор</a></center> 
        </>
    )
}

export default Footer;