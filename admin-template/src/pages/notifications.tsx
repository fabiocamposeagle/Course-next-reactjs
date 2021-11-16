import Layout from "../components/template/Layout";
import useAppData from "../data//hook/useAppData";

export default function Notifications() {
    const { alternarTema } = useAppData()  

  return (
    <Layout title="Notifications"
      subtitle="Here you will manage your notifications!">
      <button onClick={alternarTema}>Change Theme</button>
    </Layout>
  )
}

  