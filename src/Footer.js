
function Footer(){

    function refresh() {
        window.location.reload()
      }
      const ScrollUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
      }
    return(
        <>
        <center><button id="butref" onClick={refresh}>обнулитися</button> 
        <a id="author" href="https://www.instagram.com/alisafairytale/">автор</a> 
        <div onClick={ScrollUp} id="scrollToTopBtn">UP</div>
        </center> 
        
        </>
    )
}

export default Footer;