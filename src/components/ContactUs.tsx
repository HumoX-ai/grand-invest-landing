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
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "./ui/select";
import { useTranslation } from "react-i18next";
import CustomButton from "./CustomButton";

const ContactUs = () => {
  const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.string().min(9).max(15),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const { t } = useTranslation();
  return (
    <div className="bg-gradient-to-r from-[#ea9c14] to-[#ffd765]">
      <div className="bg-[url('/bg-products.svg')] dark:bg-[url('/bg-products-dark.svg')] bg-no-repeat lg:bg-cover">
        <div className="relative h-full  bg-right z-10 dark:bg-[#041628] py-24 w-full px-6 md:px-12 2xl:px-[140px] max-w-[2000px] mx-auto ">
          <div className="px-4 py-1 bg-gradient-to-l from-[rgb(44,53,62)] to-[#344954] w-fit rounded-md text-[#EA9C14] mb-12 dark:from-[#ea9c14] dark:to-[#ffd765] dark:text-[#091929]">
            {t("contactus.title")}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-10  text-white">
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
                  className="space-y-8 text-black dark:text-[#6D7986]"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field, formState }) => (
                      <FormItem>
                        <FormLabel
                          className={
                            formState.errors.name ? "text-[#EC3B3B]" : ""
                          }
                        >
                          {t("contactus.fullName")}
                        </FormLabel>
                        <FormControl className="bg-none dark:bg-white border-2">
                          <Input placeholder="Your name here..." {...field} />
                        </FormControl>
                        <FormMessage className="text-[#EC3B3B]" />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field, formState }) => (
                        <FormItem className="w-full">
                          <FormLabel
                            className={
                              formState.errors.email ? "text-[#EC3B3B]" : ""
                            }
                          >
                            Email
                          </FormLabel>
                          <FormControl className="bg-none dark:bg-white border-2">
                            <Input
                              placeholder="Enter Your Email address"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-[#EC3B3B]" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field, formState }) => (
                        <FormItem className="w-full">
                          <FormLabel
                            className={
                              formState.errors.phone ? "text-[#EC3B3B]" : ""
                            }
                          >
                            {t("contactus.phone")}
                          </FormLabel>
                          <FormControl className="bg-none dark:bg-white border-2">
                            <Input
                              placeholder="Enter Your Phone Number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-[#EC3B3B]" />
                        </FormItem>
                      )}
                    />
                  </div>
                  {/* <Select>
                    <SelectTrigger className="border w-full md:w-1/2 bg-none dark:bg-white">
                      <SelectValue placeholder={t("contactus.whereHeard")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">on Social Media</SelectItem>
                      <SelectItem value="dark">on Website</SelectItem>
                      <SelectItem value="system">on Friends</SelectItem>
                    </SelectContent>
                  </Select> */}
                  <div className="flex items-end justify-end">
                    <CustomButton href="" type="submit" title="Submit" />
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
