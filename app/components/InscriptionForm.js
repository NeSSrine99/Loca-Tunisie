"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// Validation Schema with Yup
const inscriptionSchema = Yup.object().shape({
  nom: Yup.string()
    .min(5, "Le nom doit contenir au moins 5 caractères")
    .required("Nom est requis"),
  cin: Yup.string()
    .matches(/^\d{8}$/, "CIN doit être exactement 8 chiffres")
    .required("CIN est requis"),
  email: Yup.string().email("Email invalide").required("Email est requis"),
  motDePasse: Yup.string()
    .min(6, "Mot de passe doit avoir au moins 6 caractères")
    .required("Mot de passe est requis"),
  confirmationMotDePasse: Yup.string()
    .oneOf(
      [Yup.ref("motDePasse"), null],
      "Les mots de passe doivent correspondre"
    )
    .required("Confirmation du mot de passe est requise"),
  accepteConditions: Yup.boolean()
    .oneOf([true], "Vous devez accepter les conditions d'utilisation")
    .required("Conditions d'utilisation sont requises"),
});

const InscriptionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(inscriptionSchema),
    defaultValues: {
      nom: "",
      cin: "",
      email: "",
      motDePasse: "",
      confirmationMotDePasse: "",
      accepteConditions: false,
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // You can send the data to an API here
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-primary">
        Inscription
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Nom */}
        <div className="mb-4">
          <label
            htmlFor="nom"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nom
          </label>
          <input
            type="text"
            id="nom"
            {...register("nom")}
            placeholder="Entrez votre nom"
            className="w-full text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.nom && (
            <p className="mt-1 text-sm text-red-600">{errors.nom.message}</p>
          )}
        </div>

        {/* CIN */}
        <div className="mb-4">
          <label
            htmlFor="cin"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            CIN
          </label>
          <input
            type="text"
            id="cin"
            {...register("cin")}
            placeholder="Entrez votre CIN (8 chiffres)"
            className="w-full text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.cin && (
            <p className="mt-1 text-sm text-red-600">{errors.cin.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Entrez votre email"
            className="w-full text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Mot de Passe */}
        <div className="mb-4">
          <label
            htmlFor="motDePasse"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Mot de passe
          </label>
          <input
            type="password"
            id="motDePasse"
            {...register("motDePasse")}
            placeholder="Entrez votre mot de passe"
            className="w-full text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.motDePasse && (
            <p className="mt-1 text-sm text-red-600">
              {errors.motDePasse.message}
            </p>
          )}
        </div>

        {/* Confirmation Mot de Passe */}
        <div className="mb-4">
          <label
            htmlFor="confirmationMotDePasse"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Confirmer le mot de passe
          </label>
          <input
            type="password"
            id="confirmationMotDePasse"
            {...register("confirmationMotDePasse")}
            placeholder="Confirmez votre mot de passe"
            className="w-full text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.confirmationMotDePasse && (
            <p className="mt-1 text-sm text-red-600">
              {errors.confirmationMotDePasse.message}
            </p>
          )}
        </div>

        {/* Accept Conditions */}
        <div className="mb-4 flex items-start">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              id="accepteConditions"
              {...register("accepteConditions")}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
          </div>
          <div className="ml-2">
            <label
              htmlFor="accepteConditions"
              className="text-sm text-gray-700"
            >
              J'accepte les conditions d'utilisation
            </label>
            {errors.accepteConditions && (
              <p className="mt-1 text-sm text-red-600">
                {errors.accepteConditions.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary hover:bg-secondary text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default InscriptionForm;