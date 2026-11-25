import { NavLink, Outlet } from 'react-router'

const links = [
  { to: '/', label: 'Головна' },
  { to: '/history', label: 'Історія' },
  { to: '/members', label: 'Учасники' },
  { to: '/discography', label: 'Дискографія' },
  { to: '/gallery', label: 'Галерея' },
]

function Layout() {
  return (
    <>
      <header>
        <NavLink to="/">Alice in Chains</NavLink>
        <nav>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
