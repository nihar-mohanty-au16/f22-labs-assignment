import React from 'react'

function LandingPage() {
    return (
        <div>
            <nav>
                <h4>Omega</h4>
                <ul class="nav-links">
                    <li><div class="dropdown">
                        <button class="dropbtn">Dropdown</button>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Support </a></li>
                </ul>
                <a class="btn" href="#"><button>Get Free Book</button></a>
            </nav>
        </div>
    )
}

export default LandingPage
