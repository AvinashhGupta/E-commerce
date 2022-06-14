import {FormInputLabel, Input , Group}from"./FormInput.styles.jsx";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <Group>
    <Input onChange={handleChange} {...otherProps} />
    {label ? (
      <FormInputLabel shrink={otherProps.value.lenght}>
        {label}
      </FormInputLabel>
    ) : null}
  </Group>
);

export default FormInput;
