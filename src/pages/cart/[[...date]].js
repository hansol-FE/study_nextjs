import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function CartDateSlug() {
  const router = useRouter()
  const { date } = router.query

  return (
    <>
      <h1 className="title">CartDateSlug {JSON.stringify(date)}</h1>
      <Link href="/cart/2022/02/01">
        <a>02/01로 이동</a>
      </Link>
      <br />
      <button onClick={() => router.push('/cart/2022/12/25')}>
        12/25일로 이동
      </button>
    </>
  )
}

CartDateSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
