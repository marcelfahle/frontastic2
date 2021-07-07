import React from 'react'
import classnames from 'classnames'
import { useForm } from 'react-hook-form'

import ErrorMessage from '../../../../components/error-message'
import { convertToCountryName, convertToStateName, getCountryStates } from './../countries'

const Billing = ({ countries, defaultValues = {}, onSubmit }) => {
    const requiredError = 'This field is required'

    const { register, getValues, formState: { errors } } = useForm({ mode: 'onChange', 
        defaultValues: defaultValues || {} 
    })

    const onChange = () => {
        onSubmit(getValues())
    }

    const getStates = () => {
        return getCountryStates(getValues('country'))
    }

    return (
        <form onChange={onChange}>
            <div className='mb-4 text-xs text-neutral-600 font-bold leading-tight uppercase'>
                Billing address
            </div>

            <div className='mb-4'>
                <label className='text-sm text-neutral-700 leading-tight' htmlFor='firstName'>
                    First name *
                </label>
                <input
                    id='firstName'
                    name='firstName'
                    type='text'
                    className={classnames('form-input mt-2', {
                        'border border-red-600': errors['firstName'],
                    })}
                    {...register('firstName', { required: requiredError })}
                />
                <ErrorMessage errors={errors} name='firstName' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-neutral-700 leading-tight' htmlFor='lastName'>
                    Last name *
                </label>
                <input
                    id='lastName'
                    name='lastName'
                    type='text'
                    className={classnames('form-input mt-2', {
                        'border border-red-600': errors['lastName'],
                    })}
                    {...register('lastName', { required: requiredError })}
                />
                <ErrorMessage errors={errors} name='lastName' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-neutral-700 leading-tight' htmlFor='phone'>
                    Phone
                </label>
                <input 
                    id='phone' 
                    name='phone' 
                    type='text' 
                    className='form-input mt-2' 
                    {...register('phone')} 
                />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-neutral-700 leading-tight' htmlFor='streetName'>
                    Address *
                </label>
                <input
                    id='streetName'
                    name='streetName'
                    type='text'
                    className={classnames('form-input mt-2', {
                        'border border-red-600': errors['streetName'],
                    })}
                    {...register('streetName', { required: requiredError })}
                />
                <ErrorMessage errors={errors} name='streetName' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-neutral-700 leading-tight' htmlFor='city'>
                    City *
                </label>
                <input
                    id='city'
                    name='city'
                    type='text'
                    className={classnames('form-input mt-2', {
                        'border border-red-600': errors['city'],
                    })}
                    {...register('city', { required: requiredError })}
                />
                <ErrorMessage errors={errors} name='city' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-neutral-700 leading-tight' htmlFor='postalCode'>
                    Zip code *
                </label>
                <input
                    id='postalCode'
                    name='postalCode'
                    type='text'
                    className={classnames('form-input mt-2', {
                        'border border-red-600': errors['postalCode'],
                    })}
                    {...register('postalCode', { required: requiredError })}
                />
                <ErrorMessage errors={errors} name='postalCode' />
            </div>

            <div>
                <label className='text-sm text-neutral-700 leading-tight' htmlFor='country'>
                    Country *
                </label>
                <select
                    id='country'
                    name='country'
                    className={classnames('form-input mt-2 bg-background-primary', {
                        'border border-red-600': errors['country'],
                    })}
                    {...register('country', { required: requiredError })}
                >
                    <option value='' />
                    {countries.map((country, key) => {
                        return (
                            <option key={key} value={country}>
                                {convertToCountryName(country)}
                            </option>
                        )
                    })}
                </select>
                <ErrorMessage errors={errors} name='country' />
            </div>

            {getStates() && (
                <div className='mt-4'>
                    <label className='text-sm text-neutral-700 leading-tight' htmlFor='state'>
                        State or province *
                    </label>
                    <select id='state' name='state'
                        className={classnames('form-input mt-2 bg-background-primary', {
                            'border border-red-600': errors['state'],
                        })}
                        {...register('state', { required: requiredError })}
                    >
                        <option value='' />
                        {getStates().map((state, key) => {
                            return (<option key={key} value={state}>{convertToStateName(getValues('country'), state)}</option>)
                        })}
                    </select>
                    <ErrorMessage errors={errors} name='state' />
                </div>
            )}
        </form>
    )
}

export default Billing
