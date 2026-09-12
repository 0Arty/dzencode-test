import { useActiveTabs } from '../model/useActiveTabs'

export const ActiveTabsCounter = () => {
   const activaTabs = useActiveTabs()

   return (
      <div className="d-flex gap-1">
         <h6 className="mb-0 fs-5">Active tabs:</h6>
         <div className="fs-5">{activaTabs}</div>
      </div>
   )
}
