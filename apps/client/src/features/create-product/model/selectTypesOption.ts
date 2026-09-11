import { ProductType, type SelectOptions } from '@shared/types'

export const selectTypesOptions: SelectOptions<ProductType>[] = Object.entries(ProductType).map(([key, value]) => ({
   value: value,
   title: value,
}))
