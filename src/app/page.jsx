import Campaign from "@/components/campagin/Campaign"
import Hero from "@/components/hero/Hero"
import NewProducts from "@/components/newproducts/NewProducts"

const Homepage = () => {
  return (
    <div>
      <Hero/>
      <NewProducts/>
      <Campaign/>
    </div>
  )
}

export default Homepage