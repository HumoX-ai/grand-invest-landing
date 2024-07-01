/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowLeftFromLine, UploadIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import InputMask from "react-input-mask";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries } from "@/lib/countries";
import { formRegisterSchema } from "./schema";
import CustomButton from "@/components/CustomButton";
import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [passportFrontImg, setPassportFrontImg] = useState<File | null>(null);
  const [passportPreview, setPassportPreview] = useState<string | null>(null);
  const [passportBackImg, setPassportBackImg] = useState<File | null>(null);
  const [passportBackPreview, setPassportBackPreview] = useState<string | null>(
    null
  );
  // 1. Define your form.
  const form = useForm<z.infer<typeof formRegisterSchema>>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      phone_number: "",
      birth_date: "",
      country: "",
      id_card_series: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formRegisterSchema>) {
    const formData = new FormData();

    if (passportFrontImg) {
      formData.append("id_card_front_image", passportFrontImg);
    }
    if (passportBackImg) {
      formData.append("id_card_back_image", passportBackImg);
    }
    formData.append("cid", "2");

    Object.keys(values).forEach((key) => {
      const valueKey = key as keyof typeof values;
      formData.append(valueKey, values[valueKey]);
    });

    try {
      const response = await axios.post(
        "http://64.226.72.1:8000/users/users/",
        formData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Registration successful:", response.data);
      // Muvaffaqiyatli ro'yxatdan o'tgandan keyin qilinadigan ishlar
      // Masalan, foydalanuvchini boshqa sahifaga yo'naltirish
    } catch (error) {
      console.error("Registration failed:", error);
      // Xatolik yuz berganda qilinadigan ishlar
      // Masalan, foydalanuvchiga xato haqida xabar ko'rsatish
    }
  }

  const handleFrontImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPassportFrontImg(file);
      setPassportPreview(URL.createObjectURL(file));
    }
  };

  const handleBackImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPassportBackImg(file);
      setPassportBackPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 h-screen w-full">
        <div className="bg-gradient-to-t from-[#EA9C14] to-[#FFD765] dark:bg-[#071828] dark:from-transparent dark:to-transparent -mb-4 lg:-mb-0 lg:-mr-5 p-8">
          <img
            src="/logo_small_light.svg"
            alt="Light Logo"
            className="block dark:hidden"
          />
          <img
            src="/logo_small_dark.svg"
            alt="Dark Logo"
            className="hidden dark:block"
          />
          <h1 className="text-xl lg:text-3xl font-medium bg-clip-text dark:text-transparent bg-gradient-to-r dark:from-[#EA9C14] dark:to-[#FFD765] text-[#071828] mt-12">
            Be among Top “G” traders with Us
          </h1>
        </div>
        <div className="col-span-3 rounded-t-2xl lg:rounded-l-2xl bg-[#f0f0f0] dark:bg-[#1B354C] relative">
          <div className="absolute top-8 left-8 hidden lg:block cursor-pointer">
            <ArrowLeftFromLine
              size={28}
              onClick={() => window.history.back()}
            />
          </div>

          <div className="mt-14 lg:ml-32 lg:mt-[104px] p-8">
            <h1 className="text-2xl lg:text-4xl font-medium bg-clip-text dark:text-transparent bg-gradient-to-r dark:from-[#EA9C14] dark:to-[#FFD765] text-[#071828]">
              Create Account
            </h1>
            <div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8 mt-8"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="first_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="w-full p-2 bg-transparent border-[1px] dark:border-[#FFD765] border-[#071828] rounded-lg"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="last_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="w-full p-2 bg-transparent border-[1px] dark:border-[#FFD765] border-[#071828] rounded-lg"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone_number"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Telefon raqam</FormLabel>
                          <FormControl>
                            <InputMask
                              mask="+999 99 999-99-99"
                              maskChar={null}
                              placeholder="+998 99 999-99-99"
                              value={field.value}
                              onChange={field.onChange}
                              className="w-full p-2 bg-transparent border-[1px] dark:border-[#FFD765] border-[#071828] rounded-lg outline-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="birth_date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date of Birth</FormLabel>
                          <FormControl>
                            <InputMask
                              mask="9999-99-99"
                              maskChar={null}
                              placeholder="yyyy-mm-dd"
                              value={field.value}
                              onChange={field.onChange}
                              className="w-full p-2 bg-transparent border-[1px] dark:border-[#FFD765] border-[#071828] rounded-lg outline-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Kategoriya</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full p-2 bg-transparent border-[1px] dark:border-[#FFD765] border-[#071828] rounded-lg outline-none">
                                <SelectValue placeholder="Mamlakatni tanlang" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {countries?.map((country, index) => (
                                <SelectItem key={index} value={country.name}>
                                  {country.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="id_card_series"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Passport Number</FormLabel>
                          <FormControl>
                            <InputMask
                              mask="aa 999999"
                              placeholder="Passport Number"
                              value={field.value}
                              onChange={(e) => {
                                field.onChange(e.target.value.toUpperCase());
                                field.onChange;
                              }}
                              className="w-full p-2 bg-transparent border-[1px] dark:border-[#FFD765] border-[#071828] rounded-lg outline-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormItem>
                      <FormLabel>Passport Front Page</FormLabel>
                      <div className="w-full p-2 bg-transparent border-[1px] dark:border-[#FFD765] border-[#071828] rounded-lg outline-none">
                        <FormControl>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            id="passportInput"
                            onChange={handleFrontImageChange}
                          />
                        </FormControl>
                        <FormMessage />
                        <label htmlFor="passportInput">
                          {passportPreview ? (
                            <img
                              src={passportPreview}
                              alt="Passport Preview"
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <div className="px-6 py-4 flex justify-between items-end">
                              <img src="/passport_front.svg" alt="" />
                              <UploadIcon size={26} />
                              {/* <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                />
                              </svg>
                              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                Click to upload passport image
                              </p> */}
                            </div>
                          )}
                        </label>
                      </div>
                    </FormItem>
                    <FormItem>
                      <FormLabel>Passport Back Page</FormLabel>
                      <div className="w-full p-2 bg-transparent border-[1px] dark:border-[#FFD765] border-[#071828] rounded-lg outline-none">
                        <FormControl>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            id="passportBackInput"
                            onChange={handleBackImageChange}
                          />
                        </FormControl>
                        <FormMessage />
                        <label htmlFor="passportBackInput">
                          {passportBackPreview ? (
                            <img
                              src={passportBackPreview}
                              alt="Passport Back Preview"
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <div className="px-6 py-4 flex justify-between items-end">
                              <img src="/passport_back.svg" alt="" />
                              <UploadIcon size={26} />
                            </div>
                          )}
                        </label>
                      </div>
                    </FormItem>
                  </div>
                  <div className="flex justify-end">
                    <CustomButton
                      type="submit"
                      title="Register"
                      href="#"
                      className="shadow-xl"
                    />
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
