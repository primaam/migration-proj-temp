import React from "react";
import { Form, FormGroup, Input, Label, FormFeedback } from "reactstrap";

/**
 * @description - this component to showing how error message
 *
 * dependent on how the error message will show, either at submit or at input changes
 * using reactstrap component
 *
 *
 * @returns show error message at the bottom of input field
 */
const errorFormField = () => {
    const [errorsField, setErrorsField] = React.useState({});

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <p className="sub-header">Data Diri, Pasangan & Sosial Media</p>
                <FormGroup>
                    <Label for="full_name">Nama Lengkap</Label>
                    <Input
                        type="text"
                        name="full_name"
                        id="full_name"
                        placeholder="masukan nama lengkap"
                        value={formData.full_name}
                        onChange={handleChangeInput}
                        invalid={!!errorsField.full_name}
                    />
                    {errorsField.full_name && <FormFeedback>{errorsField.full_name}</FormFeedback>}
                </FormGroup>

                <FormGroup>
                    <Label for="identification_number">Nomor KTP</Label>
                    <Input
                        type="text"
                        name="identification_number"
                        id="identification_number"
                        placeholder="masukan nomor KTP"
                        value={formData.identification_number}
                        onChange={handleChangeInput}
                        invalid={!!errorsField.identification_number}
                    />
                    {errorsField.identification_number && (
                        <FormFeedback>{errorsField.identification_number}</FormFeedback>
                    )}
                </FormGroup>
            </Form>
        </>
    );
};

export default errorFormField;
