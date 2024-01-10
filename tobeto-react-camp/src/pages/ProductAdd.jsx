import { Form, Formik, Field, ErrorMessage } from 'formik'
import React from 'react'
import { Button, FormField, Label } from 'semantic-ui-react';
import * as Yup from 'yup';
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput';

export default function ProductAdd() {


    const initialValues = {
        title: "",
        price: 39,
    };
    const schema = Yup.object({
        title: Yup.string().required("Adı"),
        price: Yup.number().required("Fiyatı"),
    });

    return (
        <div>
            <Formik initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                }}>
                <Form className="ui form">
                    <KodlamaIoTextInput name="title" />
                    <KodlamaIoTextInput name="price" />
                    <Button type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    );
}