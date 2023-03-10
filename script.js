*{
    padding: 0;
    margin: 0;
    box-sizing:border-box;

}

header{
    background-color: #262626;
}

li{
    list-style: none;
}

a{
    color: white;
    text-decoration: none;
}

.featured-article {
    color: black;
}

.navbar {
    min-height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
}

.nav-menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 60px;
}

.nav-branding{
    font-size: 2rem;
}

.nav-link{
    transition: 0.7s ease;

}

.nav-link:hover {
    color: dodgerblue;
}
.hamburger {
    display: none;
    cursor: pointer;
}
.bar{
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: white;
}
@media(max-width:768px){
    .hamburger{
        display: block;
    }

    .hamburger.active .bar:nth-child(2){
        opacity: 0;
    }
    .hamburger.active .bar:nth-child(1){
        transform: translateY(8px) rotate(45deg);
    }
    .hamburger.active .bar:nth-child(3){
        transform: translateY(8px) rotate(45deg);
    }

    .nav-menu{
        position: fixed;
        left: -100%;
        top: 70px;
        gap: 0;
        flex-direction: column;
        background-color: #262626;
        width: 100%;
        text-align: center;
        transition: 0.3s;
    }

    .nav-item{
        margin: 16px;
    
    }
    
    .nav-menu.active {
        left: 0;
    }
}



.d-grid{
    display: grid;
}
.section{
    padding-block: 5rem;
}

/*featured-article*/
.featured-article{
    padding-block: 2rem;
}

.section-header-offset{
    margin-top: 7.4rem;
}

.featured-articles-container{
    gap: var(--gap);
}

.headline-banner{
    background-color: var(--secondary-background-color);
    display: flex;
    align-items: center;
    gap: var(--gap);
    font-size: var(--font-size-xsm);
}

.headline{
    color: var(--light-color);
    font-size: 1rem;
    text-transform: uppercase;
    text-align: center;
    padding: .4rem;
    height: 100%
}

.headline span{
    height: inherit;
}

/*dropdown*/
.dropdown{
    min-width: 15em;
    position: relative;
    margin: 2em;

}
.dropdown * {
    box-sizing: border-box;
}

.select {
    background: #2a2f3b;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px #2a2f3b solid;
    border-radius: 0.5 rem;
    padding: 1em;
    cursor: pointer;
    transition: background 0.3s;
}

.select-clicked{
    border: 2px #26489a solid;
    box-shadow: 0 0 0.8em #26489a;
}

.select:hover{
    background: #323741;
}

.caret{
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 6px solid #fff;
    transition: 0.3s;
}
.caret-rotate{
    transform: rotate(180deg);
}

.menu{
    list-style: none;
    padding: 0.2em 0.5em;
    background: #323741;
    border: 1px #363a43 solid;
    box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.2);
    border-radius: 0.5em;
    color: #9fa5b5;
    position: absolute;
    top: 3em;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    opacity: 0;
    display: none;
    transition: 0.2s;
    z-index: 1; 
}

.menu li{
    padding: 0.7em 0.5em;
    margin:0em 0;
    border-radius: 0.5em;
    cursor: pointer;
}
.menu li:hover{
    background: #2a2d35;
}
.active{
    background: #23242a;
}
.menu-open{
    display: block;
    opacity:1;
}



