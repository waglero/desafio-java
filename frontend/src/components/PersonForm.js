import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const PersonForm = (props) => {
    yup.setLocale({
        mixed: {
            default: 'Não é válido',
            required: 'Campo obrigatório',
            date: 'Data inválida',
        },
        string: {
            email: 'E-mail inválido'
        }
    });
    const schema = yup.object().shape({
        id: yup.number().notRequired(),
        gender: yup.string().notRequired(),
        nationality: yup.string().notRequired(),
        placeOfBirth: yup.string().notRequired(),
        name: yup.string().required(),
        email: yup.string().email(),
        birthDate: yup.string().required(),
        cpf: yup.string().required()
    });

    const { register, errors, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const [errorsFromBackEnd, setErrorsFromBackEnd] = React.useState([]);
    const onSubmit = data => {
        let errorsFromRequest = props.savePerson(data);
        errorsFromRequest.then(errors => {
            let obj = {};
            Object.keys(errors).forEach(function (prop) {
                obj[prop] = { message: errors[prop]}
                setErrorsFromBackEnd(obj)
            })
        })
    }

    const currentPerson = props.person;
    const [person, setPerson] = React.useState(currentPerson);

    const handleChange = e => {
        const { name, value } = e.target;
        setPerson({ ...person, [name]: value });
    }

    return (
        <div className="mt-10 sm:mt-0">
            <div className="md:grid">
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form onSubmit={handleSubmit(onSubmit)} method="POST">
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                                        <input
                                        defaultValue={currentPerson.name}
                                        onChange={handleChange}
                                        maxLength="255"
                                        type="text"
                                        name="name"
                                        id="name"
                                        ref={register}
                                        autoComplete="given-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        <p className="text-red-500">{errors.name?.message}</p>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                                        <input
                                        defaultValue={currentPerson.email}
                                        onChange={handleChange}
                                        maxLength="255"
                                        type="text"
                                        name="email"
                                        id="email"
                                        ref={register}
                                        autoComplete="email"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        <p className="text-red-500">{errors.email?.message}</p>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Sexo</label>
                                        <select
                                        defaultValue={currentPerson.gender}
                                        onChange={handleChange}
                                        id="gender"
                                        ref={register}
                                        name="gender"
                                        autoComplete="gender"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            <option value=""></option>
                                            <option value="F">Feminino</option>
                                            <option value="M">Masculino</option>
                                            <option value="NI">Indefinido</option>
                                        </select>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">Data de nascimento</label>
                                        <input
                                            max={new Date().toISOString().split('T')[0]}
                                        defaultValue={currentPerson.birthDate}
                                        onChange={handleChange}
                                        type="date"
                                        name="birthDate"
                                        id="birthDate"
                                        ref={register}
                                        autoComplete="birthDate"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        <p className="text-red-500">{errors.birthDate?.message}</p>
                                        <p className="text-red-500">{errorsFromBackEnd.birthDate?.message}</p>
                                    </div>
                                    <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                                        <label htmlFor="placeOfBirth" className="block text-sm font-medium text-gray-700">Naturalidade</label>
                                        <input
                                        defaultValue={currentPerson.placeOfBirth}
                                        onChange={handleChange}
                                        maxLength="255"
                                        type="text"
                                        name="placeOfBirth"
                                        id="placeOfBirth"
                                        ref={register}
                                        autoComplete="street-address"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                                        <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">Nacionalidade</label>
                                        <input
                                        defaultValue={currentPerson.nationality}
                                        onChange={handleChange}
                                        maxLength="255"
                                        type="text"
                                        name="nationality"
                                        id="nationality"
                                        ref={register}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                        <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">CPF</label>
                                        <input
                                        defaultValue={currentPerson.cpf}
                                        onChange={handleChange}
                                        maxLength="11"
                                        type="text"
                                        name="cpf"
                                        id="cpf"
                                        ref={register}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        <p className="text-red-500">{errors.cpf?.message}</p>
                                        <p className="text-red-500">{errorsFromBackEnd.cpf?.message}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    onClick={() => props.closeModal()}
                                    className="mb-4 mr-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                    Cancelar
                                </button>
                                <input value="Salvar" type="submit" className="cursor-pointer inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-default" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PersonForm;