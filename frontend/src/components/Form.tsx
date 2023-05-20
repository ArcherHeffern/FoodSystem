import React from 'react';
import { Form, ErrorMessage, Field, Formik } from 'formik';
import Nonprofit from '../interfaces/Nonprofit';

function NonProfitForm() {
        const initialValues: Nonprofit = {
        name: '',
        profileUrl: '',
        logoUrl: '',
        lat_long: '',
        servings: 0,
        days_open: {
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false,
        }
    } 
    const handleSubmit = (values: Nonprofit) => {
        console.log(values);
    }
    return (
        <>
      <h1>Restaurant Form</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" />

          <label htmlFor="profileUrl">Profile URL:</label>
          <Field type="text" id="profileUrl" name="profileUrl" />

          <label htmlFor="logoUrl">Logo URL:</label>
          <Field type="text" id="logoUrl" name="logoUrl" />

          <label htmlFor="lat_long">Latitude/Longitude:</label>
          <Field type="text" id="lat_long" name="lat_long" />

          <label htmlFor="servings">Servings:</label>
          <Field type="number" id="servings" name="servings" />

          <h2>Days Open:</h2>
          <div>
            <label>
              <Field type="checkbox" name="days_open.monday" />
              Monday
            </label>
          </div>
          <div>
            <label>
              <Field type="checkbox" name="days_open.tuesday" />
              Tuesday
            </label>
          </div>
          <div>
            <label>
              <Field type="checkbox" name="days_open.wednesday" />
              Wednesday
            </label>
          </div>
          <div>
            <label>
              <Field type="checkbox" name="days_open.thursday" />
              Thursday
            </label>
          </div>
          <div>
            <label>
              <Field type="checkbox" name="days_open.friday" />
              Friday
            </label>
          </div>
          <div>
            <label>
              <Field type="checkbox" name="days_open.saturday" />
              Saturday
            </label>
          </div>
          <div>
            <label>
              <Field type="checkbox" name="days_open.sunday" />
              Sunday
            </label>
          </div>

          <ErrorMessage name="name" component="div" />
          <ErrorMessage name="profileUrl" component="div" />
          <ErrorMessage name="logoUrl" component="div" />
          <ErrorMessage name="lat_long" component="div" />
          <ErrorMessage name="servings" component="div" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
        </>
    )
}

export default NonProfitForm;