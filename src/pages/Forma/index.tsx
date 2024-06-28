import { useState } from "react";
import Lottie from "react-lottie-player";
import animationData from "../../../anim/animation.json";
import CustomButton from "@/components/CustomButton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSearchParams } from "react-router-dom";

const formSchema = z.object({
  full_name: z.string().min(2, {
    message: "Ismingiz kamida 3 ta belgidan iborat bo'lishi kerak",
  }),
  phone_number: z
    .string()
    .min(9, { message: "Telefon raqamingizni to'ldiring" }),
  product_id: z.string({ message: "Kategoriyani tanlang" }).min(1, {
    message: "Kategoriyani tanlang",
  }),
});

const Forma = () => {
  const [searchParams] = useSearchParams();
  const from_source = searchParams.get("source") || "";
  const [submitted, setSubmitted] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      phone_number: "",
      product_id: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    const payload = {
      ...values,
      from_person: "grand_invest",
      from_source,
    };
    console.log(payload);

    // Here you would make your request to the backend
    fetch("http://64.226.72.1:8000/api/contact_us/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(() => {
        setSubmitted(true);
        alert("Submitted!");
      })
      .catch(() => {
        setSubmitted(true);
      });
  }

  return (
    <div className="w-full h-screen flex items-center justify-center px-4">
      <div className="bg-white dark:bg-[#0F2438] py-8 px-7 rounded-lg">
        {submitted ? (
          <Lottie
            loop
            animationData={animationData}
            play
            style={{ width: 150, height: 150 }}
          />
        ) : (
          <>
            <img src="/logo.svg" className="mx-auto" alt="" />
            <p className="mt-8 text-[#7D8A98]">
              Professional treyderlar tomonidan o'qitiladigan kurslarni olish
              uchun murojaat qiling
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 mt-10"
              >
                <FormField
                  control={form.control}
                  name="full_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ism va familiya</FormLabel>
                      <FormControl>
                        <Input placeholder="Ism-familiya" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col lg:flex-row gap-4">
                  <FormField
                    control={form.control}
                    name="product_id"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Kategoriya</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Kategoriyani tanlang..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Robot | Grand Invest TOP V1.1">
                              Robot | Grand Invest TOP V1.1
                            </SelectItem>
                            <SelectItem value="Robot | Grand Invest TOP V2.1">
                              Robot | Grand Invest TOP V2.1
                            </SelectItem>
                            <SelectItem value="Kurs | Offline">
                              Kurs | Offline
                            </SelectItem>
                            <SelectItem value="Kurs | Online | VIP">
                              Kurs | Online | VIP
                            </SelectItem>
                            <SelectItem value="Prof | NFT">
                              Prof | NFT
                            </SelectItem>
                            <SelectItem value="PROP | RUCHNOY">
                              PROP | RUCHNOY
                            </SelectItem>
                            <SelectItem value="Boshqa">Boshqa</SelectItem>
                            <SelectItem value="Kurs | Onlayn | START">
                              Kurs | Onlayn | START
                            </SelectItem>
                            <SelectItem value="Kurs | Professional Online">
                              Kurs | Professional Online
                            </SelectItem>
                          </SelectContent>
                        </Select>
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
                          <Input placeholder="Telefon raqam" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex justify-end">
                  <CustomButton type="submit" title="Submit" href="#" />
                </div>
              </form>
            </Form>
          </>
        )}
      </div>
    </div>
  );
};

export default Forma;
