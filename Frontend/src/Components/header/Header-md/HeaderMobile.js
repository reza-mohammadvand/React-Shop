import React from 'react'
import { Link } from 'react-router-dom'
import MetisMenu from 'react-metismenu';
import Drawer from 'react-modern-drawer'


import "./HeaderMobile.css"
import Logo from '../Logo/logo-02.png'

const HeaderMobile = () => {

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }


    return (
      <nav style={{marginLeft: "18px"}} className="d-lg-none">
          <div className="hamburger-menu" onClick={toggleDrawer}>
                  <div className="menu-line menu-line-1"></div>
                  <div className="menu-line menu-line-2"></div>
                  <div className="menu-line menu-line-3"></div>
</div>
<Drawer open={isOpen} onClose={toggleDrawer} direction='right'>
              <div className="nav-bar-navigation">
                <div className="logo ">
                  <Link to="/">
                    <img src={Logo} className="img-fluid" alt="" />
                  </Link>
                </div>
               
<MetisMenu content={[
    {
        label: 'صفحه اصلی',
        to: '/',
    },
    {
        label: 'فروشگاه',
        to: '/shop',
        content: [
            {
                label: 'موبایل',
                to: '/CategoryProducts/mobile',
            },
            {
              label: 'لوازم جانبی',
              to: '/CategoryProducts/accessory',
              content: [
                {
                    label: 'موبایل',
                    to: '/CategoryProducts/mobile',
                },
              {
                label: 'لپ تاپ',
                to: '/CategoryProducts/loptop',
            },
            {
              label: 'موبایل',
              to: '/CategoryProducts/mobile',
          },
          {
            label: 'لپ تاپ',
            to: '/CategoryProducts/loptop',
        },
            ],
          },
          {
            label: 'لپ تاپ',
            to: '/CategoryProducts/loptop',
        },
        ],
    },
    {
      label: 'سبد خرید ',
      to: '/cart',
  },
  {
    label: 'وبلاگ',
    to: '/blog',
},
{
  label: 'تماس با ما',
  to: '/contact-us',
},
{
  label: 'درباره ما',
  to: '/about-us',
},
]} activeLinkFromLocation />

              </div>
              </Drawer>

              </nav>
    )
}

export default HeaderMobile
