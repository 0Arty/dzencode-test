interface Props {
   isoString: Date
}

export const FormattedDate = ({ isoString }: Props) => {
   const date = new Date(isoString)

   const formatNumeric = date.toLocaleDateString('en-US', {
      month: '2-digit',
      year: 'numeric',
   })

   const formatString = date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
   })

   return (
      <>
         <p>{formatNumeric}</p>
         <p>{formatString}</p>
      </>
   )
}
