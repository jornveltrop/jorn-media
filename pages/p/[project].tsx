import { useRouter } from 'next/router'

const Project = ( ) => {
  const router = useRouter()
  const { project } = router.query

  return (
    <>
        <main>
            <p>{project}</p>
        </main>
    </>
  )
}

export default Project
