import { PropTypes } from "prop-types";

InputField.propTypes = {
  field: PropTypes.string,
  formik: PropTypes.any,
};

function InputField({ field, formik }) {
  return (
    <>
      <input
        id={field}
        type="text"
        name={field}
        value={formik.values[field]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`rounded-full focus:outline focus:outline-sideBar-toggle outline-table-bg p-1/2 ${
          formik.errors[field] && formik.touched[field]
            ? "border border-red-600"
            : ""
        }`}
      />
      {formik.errors[field] && formik.touched[field] && (
        <p className="my-3 text-red-600">{formik.errors[field]}</p>
      )}
    </>
  );
}

export default InputField;
