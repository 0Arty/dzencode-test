interface Props {
   currency: string
   amount: number
}

export const CurencyBadge = ({ currency, amount }: Props) => {
   return (
      <div className="currency-badge d-flex gap-1">
         <h6 className="mb-0 fw-bold">{amount}</h6>
         <h6 className="mb-0">{currency}</h6>
      </div>
   )
}
