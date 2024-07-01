import { useEffect, useState } from "react";
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
import InputMask from "react-input-mask";
import axios from "axios";
import { formSchema } from "./formSchema";

interface IFormValues {
  id: number;
  title: string;
  tag: string;
}

const Forma = () => {
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [products, setProducts] = useState<IFormValues[] | null>([]); // ["Robot | Grand Invest TOP V1.1", "Robot | Grand Invest TOP V2.1", "Kurs | Offline", "Kurs | Online | VIP", "Kurs | Online | PRO", "Prof | NFT", "PROP | RUCHNOY", "Boshqa", "Kurs | Onlayn | START", "Kurs | Professional Online"
  const from_source = searchParams.get("source") || "";

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
      product: "Yaxshi",
      from_person: "grand_invest",
      from_source,
    };
    console.log(payload);

    // Here you would make your request to the backend
    fetch("http://64.226.72.1:8000/api/contact_us/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(payload).toString(),
    })
      .then(() => {
        setSubmitted(true);
      })
      .catch(() => {
        setSubmitted(false);
        alert("Xatolik yuz berdi. Iltimos qayta urunib ko'ring");
      });
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://64.226.72.1:8000/api/product/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
      });
      setProducts(response.data.results);
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center px-4">
      <div className="bg-white dark:bg-[#0F2438] py-8 px-7 rounded-lg">
        {submitted ? (
          <div className="flex flex-col items-center">
            <Lottie
              loop
              animationData={animationData}
              play
              style={{ width: 150, height: 150 }}
            />
            <p className="mt-8 text-[#7D8A98] max-w-96 text-center">
              Arizangiz muvaffaqiyatli yuborildi. Tez orada siz bilan
              bo'g'lanamiz.
            </p>
          </div>
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
                <div className="flex flex-col-reverse lg:flex-row gap-4">
                  <FormField
                    control={form.control}
                    name="product_id"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Qiziqish</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="focus:ring-offset-0">
                              <SelectValue placeholder="Kategoriyani tanlang..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {products?.map((product) => (
                              <SelectItem
                                className="px-2"
                                key={product.id}
                                value={product.title}
                              >
                                {product.title}
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
                    name="phone_number"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Telefon raqam</FormLabel>
                        <FormControl>
                          <InputMask
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            mask="+999999999999"
                            maskChar={null}
                            placeholder="+998 99 999-99-99"
                            value={field.value}
                            onChange={field.onChange}
                          />
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
