import Link from 'next/link'

export async function getServerSideProps() {
  console.log('i am server')
  return {
    props: { time: new Date().toISOString() },
  }
}

export default function Home({ time }) {
  return (
    <>
       <h1>
        Read this posts{' '}
        <Link href="/posts/first-post">
          <a>첫번째 글</a>
        </Link>
      </h1>
      <h1 className="title">{time}</h1>
      <h1>
        <Link href="/csr">
          <a>CSR로</a>
        </Link>
      </h1>
      <h1>
        <Link href="/ssg">
          <a>SSG로</a>
        </Link>
      </h1>
      <h1>
        <Link href="/isr">
          <a>ISR로</a>
        </Link>
      </h1>
      <h1>
        Read this posts{' '}
        <Link href="/posts/second-post">
          <a>두번째 글</a>
        </Link>
      </h1>
    </>
  )
}
