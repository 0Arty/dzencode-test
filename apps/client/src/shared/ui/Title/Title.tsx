import './Title.scss'

interface Props {
   title: string
   count: number
}

export const Title = (props: Props) => {
   const { title, count } = props

   return (
      <div className="section-title">
         <h2 className="mb-0 text-md-left">{title}</h2>
         <span>:</span>
         <h4 className="mb-0 text-md-left">{count}</h4>
      </div>
   )
}
