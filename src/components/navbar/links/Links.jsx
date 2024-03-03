import Link from "next/link"

const Links = () => {
    const links=[
        {
            title:'Home',
            path:'/',
        },
        {
            title:'About',
            path:'/about',
        },
        {
            title:'Category',
            path:'/category',
        },
        {
            title:'Shop',
            path:'/shop',
        },
        {
            title:'Contact',
            path:'/contact',
        },
    ]
  return (
    <div className="navLinks">
        {links.map(link=>(
            <Link href={link.path} key={link.title}>{link.title}</Link>
        ))}
    </div>
  )
}

export default Links