import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import type { CreateEntityDto, UpdateEntityDto } from '../model/types'

import { entityApi } from './../api/entityApi'

const QUERY_KEY = ['entities']

export const useEntities = () => {
   return useQuery({
      queryKey: QUERY_KEY,
      queryFn: entityApi.getAll,
   })
}

export const useEntity = (id: string) => {
   return useQuery({
      queryKey: [...QUERY_KEY, id],
      queryFn: () => entityApi.getById(id),
      enabled: !!id,
   })
}

export const useCreateEntity = () => {
   const queryClient = useQueryClient()
   return useMutation({
      mutationFn: (dto: CreateEntityDto) => entityApi.create(dto),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEY }),
   })
}

export const useUpdateEntity = () => {
   const queryClient = useQueryClient()
   return useMutation({
      mutationFn: (dto: UpdateEntityDto) => entityApi.update(dto),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEY }),
   })
}

export const useRemoveEntity = () => {
   const queryClient = useQueryClient()
   return useMutation({
      mutationFn: (id: string) => entityApi.remove(id),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEY }),
   })
}
