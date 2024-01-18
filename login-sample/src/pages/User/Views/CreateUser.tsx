import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TUser } from "../Types";
import { UserContext } from "../Data/UserProvider";

const CreateUser = () => {
    const navigation = useNavigate();
    const { addUser } = useContext(UserContext);
    const validationSchema = Yup.object().shape(
        {
            firstName: Yup.string().required("Zorunlu alan"),
            lastName: Yup.string().required("Zorunlu alan"),
            age: Yup.number().required("Zorunlu alan").min(18, "18 yaşından küçük olamaz"),
        }
    );

    const formik = useFormik<TUser>({
        initialValues: {
            firstName: "",
            lastName: "",
            age: 18,
        },
        validationSchema,
        onSubmit: (values) => {
            addUser(values).then(() => {
                navigation("/");
            });
        },
    });

    console.log("errors", formik.errors);
    console.log("touched", formik.touched);

    return (
        <section className="card mt-4 p-4">
            <h2>Kişi Ekle</h2>
            <form onSubmit={formik.handleSubmit}>
            <label>İsminiz</label>
            <input onChange={formik.handleChange}
                value={formik.values.firstName} name="firstName" className="form-control" placeholder="İsminizi giriniz" />
            <label>Soyisim</label>
            <input onChange={formik.handleChange}
                value={formik.values.lastName} name="lastName" className="form-control" placeholder="Soyisminizi giriniz" />
                <label>Yaş</label>
            <input onChange={formik.handleChange}
                value={formik.values.age} type="number" name="age" className="form-control" placeholder="Yaşınızı giriniz" />
            <button type="submit" className="btn btn-success mt-4">Kişi Oluştur</button>
        </form>
        </section>
    );
};

export default CreateUser;
