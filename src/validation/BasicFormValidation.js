import * as yup from "yup";

export const BasicFormSchema = yup.object().shape({
    name: yup
        .string("invalid data type")
        .min(5, " name cannot be less than 5 characters")
        .max(12, "name cannot be more than 12 characters")
        .required("name is required"),
    age: yup
        .number()
        .integer("age is not an integer")
        .positive("age cannot be negative number")
        .required("age is required"),
    salary: yup
        .number()
        .integer("salary is not an integer")
        .positive("salary cannot be negative number")
        .min(100, "salary cannot be less than 100 characters")
        .max(2500, "salary cannot be more than 2500 characters")
        .required("salary is required"),
    position: yup
        .string()
        .oneOf(
            [yup.ref("position"), null],
        )
        .required("position is required"),

    works: yup.string().oneOf(['dv', 'ds', 'sp', 'mg', 'eg', null], "invalid works")
});