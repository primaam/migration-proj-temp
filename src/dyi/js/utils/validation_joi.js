// use to validate with Joi library, can use for FE or BE
import Joi from "joi";

/**
 * joi library can deliver validation message, required value, types 
 */
export const validationSchema = Joi.object({
    id: Joi.number().required().messages({
        "any.required": "id tidak boleh kosong",
        "number.base": "id harus dipilih!",
    }),
    name: Joi.string().allow("")
    .optional()
    .messages({
        "string.base": "Nama harus berupa teks.",
        "string.empty": "Nama tidak boleh kosong.",
    }),
    card_holder_name: Joi.string().min(3).required().messages({
        "string.required": "Nama Pemilik Rekening tidak boleh kosong",
        "string.empty": "Nama Pemilik Rekening tidak boleh kosong",
        "any.required": "Nama Pemilik Rekening tidak boleh kosong",
    }),
    bank_account_number: Joi.string().min(9).max(16).regex(/^\d+$/).required().messages({
        "any.required": "Nomor Rekening tidak boleh kosong",
        "string.empty": "Nomor Rekening tidak boleh kosong",
        "string.min": "Nomor Rekening minimal {#limit} digit",
        "string.max": "Nomor Rekening maksimal {#limit} digit",
        "string.pattern.base": "Pastikan Nomor Rekening hanya menggunakan angka",
    }),
    boolean_options: Joi.boolean().required().messages({
        "any.required": "Pilihan tidak boleh kosong",
    }),
});

/**
 * unknown() is used to allowing unknown keys that not included at this scheme
 * 
 * so if we're using this scheme at some object that have undeclare keys we're not having a validation at that keys
 * 
 * @example
 * // Valid object with extra fields
 * const validData = {
 *   spouse_name: "John Doe",
 *   spouse_identification_number: "1234567890123456",
 *   spouse_phone_number: "08123456789",
 *   extra_field: "this will not cause validation error",
 *   another_unknown_field: 12345
 * };
 * 
 * const result = validationSchemaWithUnknown.validate(validData);
 * console.log(result.error); // undefined (no validation error)
 * 
 */
export const validationSchemaWithUnknown = Joi.object({
    spouse_name: Joi.string()
        .regex(/^[A-Za-z0-9 ]+$/)
        .required()
        .messages({
            "any.required": "Nama Pasangan harus diisi!",
            "string.empty": "Nama Pasangan harus diisi!",
            "string.pattern.base": "Pastikan Nama Pasangan hanya menggunakan huruf",
        }),
    spouse_identification_number: Joi.string().regex(/^\d+$/).length(16).required().messages({
        "any.required": "Nomor KTP pasangan harus diisi!",
        "string.empty": "Nomor KTP pasangan harus diisi!",
        "string.pattern.base": "Pastikan Nomor KTP pasangan hanya menggunakan angka",
        "string.length": "Nomor KTP pasangan harus {#limit} digit",
    }),
    spouse_phone_number: Joi.string()
        .regex(/^(0)8[1-9][0-9]{6,10}$/)
        .required()
        .messages({
            "any.required": "Nomor handphone pasangan harus diisi!",
            "string.empty": "Nomor handphone pasangan harus diisi!",
            "string.pattern.base": "Format Nomor handphone pasangan salah",
        }),
}).unknown();

