import { useRouter } from 'next/router'

const Skill = ( ) => {
  const router = useRouter()
  const { skill } = router.query

  return (
    <>
        <main>
            <p>Skill {skill}</p>
        </main>
    </>
  )
}

export default Skill
