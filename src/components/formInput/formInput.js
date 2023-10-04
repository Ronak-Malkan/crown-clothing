import { Group, FormInputLabel, Input } from "./formInput.styles.js";

const FormInput = ({ label, ...inputProps }) => {
   return (
      <Group>
         <Input {...inputProps} />
         {label && (
            <FormInputLabel shrink={inputProps.value.length}>
               {label}
            </FormInputLabel>
         )}
      </Group>
   );
};

export default FormInput;
