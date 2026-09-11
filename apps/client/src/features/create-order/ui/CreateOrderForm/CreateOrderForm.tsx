import { useAppDispatch } from '@app/store/hooks'
import { closeModal } from '@entities/modal'
import { type CreateOrderDto, useCreateOrder } from '@entities/order'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@shared/ui/Input'
import { SolidButton } from '@shared/ui/SolidButton'
import { useForm } from 'react-hook-form'

import { schema } from '../../model/schema'

import './CreateOrderForm.scss'

export const CreateOrderForm = () => {
   //
   const dispatch = useAppDispatch()
   const closeModalOnSucces = () => dispatch(closeModal('createOrder'))

   //    API
   const { mutate: createOrder, isPending, isError, error } = useCreateOrder()

   //    validation form
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<CreateOrderDto>({
      resolver: zodResolver(schema),
      defaultValues: {
         title: '',
      },
   })

   //    handler
   const onSubmit = (dto: CreateOrderDto) => {
      createOrder(dto, {
         onSuccess: () => {
            reset()
            closeModalOnSucces()
         },
      })
   }

   return (
      <form className="order-form" onSubmit={handleSubmit(onSubmit)} noValidate>
         <Input label="Order title" type="text" placeholder="Order title" {...register('title')} error={errors.title} />

         <SolidButton type="submit" disabled={isPending} className="order-form--submit-btn">
            {' '}
            {isPending ? 'Creating...' : 'Create'}
         </SolidButton>

         {isError && <p className="order-form__error">{error.message}</p>}
      </form>
   )
}
