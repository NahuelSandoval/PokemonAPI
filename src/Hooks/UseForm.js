import { useState } from "react";

export const useForm = (initialForm={}) =>{
const [formState, setFormState] = useState(initialForm)

const onInputChange = ({target}) => {
    //Desestructuro el target en name y value
    const {name, value} = target

    setFormState ({
        ...formState,
        [name]: value
    })
}
//Como viene por defecto que lo resetee
const onResetForm = () => {
    setFormState(initialForm)
};
return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
}
}