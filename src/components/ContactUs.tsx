import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useTranslation } from "react-i18next";
import CustomButton from "./CustomButton";
import InputMask from "react-input-mask";
import { useEffect, useState } from "react";
import axios from "axios";
import { formSchema } from "@/pages/Forma/formSchema";

interface IFormValues {
  id: number;
  title: string;
  tag: string;
}

const ContactUs = () => {
  const [products, setProducts] = useState<IFormValues[] | null>([]);
  const { t } = useTranslation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      phone_number: "",
      product_id: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    fetch("http://64.226.72.1:8000/api/contact_us/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(values).toString(),
    });
    console.log(values);
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
    <div className="bg-gradient-to-r from-[#ea9c14] to-[#ffd765]">
      <div className="bg-[url('/bg-products.svg')] dark:bg-[url('/bg-products-dark.svg')] bg-no-repeat lg:bg-cover">
        <div className="relative h-full  bg-right z-10 dark:bg-[#041628] py-24 w-full px-6 md:px-12 2xl:px-[140px] max-w-[2000px] mx-auto ">
          <div className="px-4 py-1 bg-gradient-to-l from-[rgb(44,53,62)] to-[#344954] w-fit rounded-md text-[#EA9C14] mb-12 dark:from-[#ea9c14] dark:to-[#ffd765] dark:text-[#091929]">
            {t("contactus.title")}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-10  ">
            <div className="py-8 px-4 lg:px-12 bg-[#071828] dark:bg-[#152737] flex flex-col gap-14 max-w-lg col-span-1 rounded-3xl">
              <div className="flex gap-6 items-center">
                <img src="/support.svg" className="size-10 md:size-14" alt="" />
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg md:text-2xl">
                    {t("contactus.contact")}
                  </h2>
                  <div>
                    <p className="text-xs md:text-sm">+123456789</p>
                    <p className="text-xs md:text-sm">grand.invest@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <img
                  src="/building.svg"
                  className="size-10 md:size-14"
                  alt=""
                />
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg md:text-2xl">
                    {t("contactus.address")}
                  </h2>
                  <div>
                    <p className="text-xs md:text-sm">Tashkent, Uzbekistan</p>
                    <p className="text-xs md:text-sm">
                      Konstitutsiya ko'chasi 26
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <img
                  src="/socialmedia.svg"
                  className="size-10 md:size-14"
                  alt=""
                />
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg md:text-2xl">
                    {t("contactus.socialMedia")}
                  </h2>
                  <div className="flex items-center gap-6">
                    <img src="/youtube.svg" className="size-7" alt="" />
                    <img src="/instagram.svg" className="size-7" alt="" />
                    <img src="/telegram.svg" className="size-7" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-8 px-4 lg:px-12 bg-[#F0F0F0] dark:bg-[#152737] flex flex-col gap-8 w-full lg:col-span-2 rounded-3xl ">
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
                              <SelectTrigger className="focus:ring-offset-0 border">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
