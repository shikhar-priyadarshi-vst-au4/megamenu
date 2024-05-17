import NavItem from "./NavItem"

const defaultNavItem = [
    {
        icon: '/Images/aluminumoil.png',
        title: 'Aluminum Oil',
        subtitle: 'Perfect for grilling, baking and more',
    },
    {
        icon: '/Images/parchmentpaper.png',
        title: 'Parchment Paper',
        subtitle: 'Oven-safe, non-stick performance for baking & roasting',
    },
    {
        icon: '/Images/disposablebakeware.png',
        title: 'Disposable Bakeware',
        subtitle: 'Great for any meat, with no clean up',
    },
    {
        icon: '/Images/cookingbags.png',
        title: 'Cooking Bags & Liners',
        subtitle: 'Fast & easy cleanup, with no soaking or scrubbing',
    },
    {
        icon: '/Images/waxpaper.png',
        title: 'Wax & Freezer Paper',
        subtitle: 'For wrapping food, crafts, and more',
    },
    {
        icon: '/Images/otherproducts.png',
        title: 'Other Products',
        subtitle: 'Butcher Paper, Pan Liners, and more',
    },
]

const defaultNavLinks = [
    {
        icon: '/svg/Products.svg',
        title: 'PRODUCTS',
        hasChildren: true,
        children: defaultNavItem
    },
    {
        icon: '/svg/Recipes.svg',
        title: 'RECIPES',
        hasChildren: false,
        link: '/orders'
    },
    {
        icon: '/svg/Tips.svg',
        title: 'TIPS & HOW-TOS',
        hasChildren: false,
        link: '/orders'
    },
    {
        icon: '/svg/Holidays.svg',
        title: 'HOLIDAYS & ENTERTAINING',
        hasChildren: true,
        children: defaultNavItem
    },
    {
        icon: '/svg/Story.svg',
        title: 'OUR STORY',
        hasChildren: true,
        children: defaultNavItem
    },
]

export default function Navbar(){
    return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse show" id="navbarNavDropdown">
      <ul className="navbar-nav">
        {defaultNavLinks.map((navLink, index) => {
            return <NavItem key={index} navItem={navLink} />
        })}
      </ul>
    </div>
  </div>
</nav>
    </>
}