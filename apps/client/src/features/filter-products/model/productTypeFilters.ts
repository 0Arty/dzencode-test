import type { ProductsTypesFilter } from '@entities/product'

import { ProductType, type SelectOptions } from '@shared/types'

export const productTypeFilters: SelectOptions<ProductsTypesFilter>[] = [
   { value: null, title: 'All' },
   ...Object.values(ProductType).map(type => ({
      value: type,
      title: type,
   })),
]
