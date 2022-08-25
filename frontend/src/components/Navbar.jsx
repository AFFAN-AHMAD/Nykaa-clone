import React from 'react'
import styles from "./Navbar.module.css"
import {Link} from "react-router-dom"
import { MdOutlineAccountCircle } from 'react-icons/md';
import { BsHandbag } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div>
        <div className={styles.Sc1}>
<img src="https://theme.zdassets.com/theme_assets/222949/60503496e109d9e249ab19791fb335f0459a483e.png" alt="" />
<div className={styles.sc11}>
<Link to=''>Categories</Link>
<Link to=''>Brands</Link>
<Link to=''>Luxe</Link>
<Link to=''>Nykaa Fashion</Link>
<Link to=''>Beauty Advice</Link>
</div>
<div className={styles.sc12}>
    <input type="text" placeholder='ase hi'/>
        {/* <BiSearch/> */}
        <MdOutlineAccountCircle/> <p> Account</p>
        <BsHandbag/>
</div>
        </div>
    </div>
  )
}

export default Navbar