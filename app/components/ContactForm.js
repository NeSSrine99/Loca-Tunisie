"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";

const schema = Yup.object({
  name: Yup.string()
    .min(4, "Le nom doit contenir au moins 4 caractères")
    .required("Le nom est requis"),
  email: Yup.string()
    .matches(/^\d{8}$/, "L'email doit contenir exactement 8 chiffres")
    .required("L'email est requis"),
  phone: Yup.string()
    .matches(/^\d{8}$/, "Le numéro doit contenir exactement 8 chiffres")
    .required("Le numéro de téléphone est requis"),
  message: Yup.string()
    .max(30, "Le message ne doit pas dépasser 30 caractères")
    .required("Le message est requis"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    alert("Message envoyé!\n" + JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 lg:flex-row lg:gap-16">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full mb-8"
      >
        {/* Nom */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold text-secondary">Nom</label>
          <input
            type="text"
            {...register("name")}
            className="w-full border rounded px-3 py-2"
          />
          {errors.name && (
            <div className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </div>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold text-secondary">
            Email (8 chiffres)
          </label>
          <input
            type="text"
            {...register("email")}
            className="w-full border rounded px-3 py-2"
          />
          {errors.email && (
            <div className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </div>
          )}
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold text-secondary">
            Message
          </label>
          <textarea
            {...register("message")}
            className="w-full border rounded px-3 py-2"
            maxLength={30}
          />
          {errors.message && (
            <div className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 px-4 rounded-xl hover:bg-secondary transition"
        >
          Envoyer
        </button>
      </form>

      {/* Infos de contact */}
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full flex flex-col items-center border border-gray-100">
        <img
          src="/images/logo2.png"
          alt="Adresse"
          className="w-20 h-20 mb-4 rounded-full object-cover border-4 border-blue-100 shadow-md"
        />
        <h2 className="text-2xl font-bold text-secondary mb-4">
          Nos informations
        </h2>
        <div className="space-y-3 text-center">
          <p className="flex items-start justify-center gap-2">
            <span className="font-semibold text-gray-600 flex items-center gap-1">
              <CiLocationOn color="red" size={18} /> Adresse:
            </span>
            <span className="text-gray-700">
              123 Rue de l'Immobilier, Tunis
            </span>
          </p>
          <p className="flex items-start justify-center gap-2">
            <span className="font-semibold text-gray-600 flex items-center gap-1">
              <MdOutlineLocalPhone color="red" size={18} /> Téléphone:
            </span>
            <span className="text-gray-700">22 334 556</span>
          </p>
          <p className="flex items-start justify-center gap-2">
            <span className="font-semibold text-gray-600 flex items-center gap-1">
              <IoMailOutline color="red" size={18} /> Email:
            </span>
            <span className="text-blue-600 hover:underline">
              contact@immobilier.tn
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
