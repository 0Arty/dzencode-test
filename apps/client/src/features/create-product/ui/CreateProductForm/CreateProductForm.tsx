import { useAppDispatch } from '@app/store/hooks'
import { closeModal } from '@entities/modal'
import { useCreateProduct } from '@entities/product'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckBox } from '@shared/ui/CheckBox/CheckBox'
import { Input, InputNumber } from '@shared/ui/Input'
import { Select } from '@shared/ui/Select'
import { useForm } from 'react-hook-form'

import { SolidButton } from '../../../../shared/ui/SolidButton/SolidButton'
import { mapFormToDto } from '../../model/mapFormToDto'
import { type FormInput, type FormOutput, schema } from '../../model/schema'
import { selectTypesOptions } from '../../model/selectTypesOption'

import './CreateProductForm.scss'

export const CreateProductForm = () => {
   const dispatch = useAppDispatch()
   const closeModalOnSucces = () => dispatch(closeModal('createProduct'))

   const { mutate: createProduct, isPending, isError, error } = useCreateProduct()

   const {
      register,
      handleSubmit,
      reset,
      control,
      formState: { errors },
   } = useForm<FormInput, unknown, FormOutput>({
      resolver: zodResolver(schema),
      defaultValues: {},
   })

   //    handler
   const onSubmit = (data: FormOutput) => {
      createProduct(mapFormToDto(data), {
         onSuccess: () => {
            reset()
            closeModalOnSucces()
         },
      })
   }

   return (
      <form className="product-create-form" onSubmit={handleSubmit(onSubmit)} noValidate>
         <Input label={'Title'} {...register('title')} />
         <InputNumber label={'Serial number'} {...register('serialNumber')} />
         <Input label={'specification'} {...register('specification')} />
         <Input label={'Guarantee start'} type="date" {...register('guarantee_start')} />
         <Input label={'Guarantee end'} type="date" {...register('guarantee_end')} />

         <Select label={'Type'} options={selectTypesOptions} {...register('type')} />

         <CheckBox value="Is new?" {...register('isNew')} />

         <InputNumber label={'Price UAH'} {...register('priceUAH')} />
         <InputNumber label={'Price USD'} {...register('priceUSD')} />

         {errors.title && <span className="product-create-form__error">{errors.title.message}</span>}

         <SolidButton type="submit" disabled={isPending} className="product-create-form--submit-btn">
            {' '}
            {isPending ? 'Creating...' : 'Create'}
         </SolidButton>
         {isError && <p className="product-create-form__error">{error.message}</p>}
      </form>
   )
}
