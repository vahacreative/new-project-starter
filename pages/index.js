import dynamic from "next/dynamic"
const Layout = dynamic(() => import("@/components/Layout"))

const Home = () => {
  return (
    <Layout>
      <div>
        <h1 className="text-4xl font-bold ">Next.js Project Starter</h1>
      </div>
    </Layout>
  )
}

export default Home
