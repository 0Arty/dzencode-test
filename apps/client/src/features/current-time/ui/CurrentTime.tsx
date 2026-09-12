import { useCurrentTime } from '../model/useCurrentTime'

export const CurrentTime = () => {
   const time = useCurrentTime()

   return <time className="mb-0 fs-5">{time}</time>
}
