import React from "react";
import { useFormik } from "formik";
import { BasicFormSchema } from "./validation/BasicFormValidation";

const BasicForm = () => {
  //submit formik form
  function handleSubmit(values, actions) {
    console.log(values);
    actions.resetForm();
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      salary: "",
      position: "",
      works: '',
    },
    onSubmit: handleSubmit,
    validationSchema: BasicFormSchema,
  });

  return (
    <>
      <h1 style={{textAlign:"center"}}>Register</h1>
      <form onSubmit={formik.handleSubmit} style={{textAlign:"center"}}>

        <input 
          style={{
            borderColor: `${
              formik.errors.name && formik.touched.name
                ? "red"
                : "black"
            }`,
          }}
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
          name="name"
          type="text"
          placeholder=" name"
        />
        {formik.errors.name && formik.touched.name && (
          <p style={{ color: "red" }}>{formik.errors.name}</p>
        )} 


+
        <input
          style={{
            borderColor: `${
              formik.errors.age && formik.touched.age ? "red" : "black"
            }`,
          }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
          name="age"
          type="number"
          placeholder="age"
        />
        {formik.errors.age && formik.touched.age && (
          <p style={{ color: "red" }}>{formik.errors.age}</p>
        )}
        <input
          style={{
            borderColor: `${
              formik.errors.salary && formik.touched.salary ? "red" : "black"
            }`,
          }}
          onChange={formik.handleChange}
          value={formik.values.salary}
          onBlur={formik.handleBlur}
          name="salary"
          type="number"
          placeholder="salary"
        />
        {formik.errors.salary && formik.touched.salary && (
          <p style={{ color: "red" }}>{formik.errors.salary}</p>
        )}
     
        <select name="works" value={formik.values.works} onChange={formik.handleChange} onBlur={formik.onBlur}>
            <option>Position</option>
            <option value='dv'>Developer</option>
            <option value='ds'>correspondent</option>
            <option value='sp'>Psychologist</option>
            <option value='mg'>Doctor</option>
            <option value='eg'>Engineer</option>
        </select>
        {formik.errors.works && formik.touched.works && (
          <p style={{ color: "red" }}>{formik.errors.works}</p>
        )}
        <button disabled = {Object.keys(formik.errors).length!==0 ? true : false} type="submit">Submit</button>
      </form>
    </>
  );
};

export default BasicForm;