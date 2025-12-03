"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Define the form schema using Zod
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  applicationType: z.string(), // Add this field for the Select component
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const whatsappNumber = "+2349115899034"; // adjust number if needed

const PartnerForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      applicationType: "", // Default value for the Select component
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    // Build a readable message from form data
    const plain = [
      "New quote request:",
      `Name: ${data.username}`,
      `Email: ${data.email}`,
      `Service: ${data.applicationType || "Not specified"}`,
      `Message: ${data.message}`,
    ].join("\n");

    const phoneDigits = whatsappNumber.replace(/[^0-9]/g, "");
    const waUrl = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(
      plain
    )}`;

    // Open WhatsApp (web or app depending on client)
    window.open(waUrl, "_blank");

    // Optionally reset or keep form values
    // form.reset();
    console.log("Opened WhatsApp with message:", plain);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-white rounded-2xl p-6 sm:p-10"
      >
        {/* Full Name and Email Fields */}
        <div className="flex flex-col sm:flex-row gap-5">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="w-full sm:w-1/2">
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. John Smith" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full sm:w-1/2">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Select Field */}
        <FormField
          control={form.control}
          name="applicationType"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Service Needed:</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="generator-sales">
                    Generator Sales
                  </SelectItem>
                  <SelectItem value="generator-repair">
                    Generator repair
                  </SelectItem>
                  <SelectItem value="maintenance">
                    Maintenance Service
                  </SelectItem>
                  <SelectItem value="power-estimation">
                    Power Load Estimation
                  </SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message Field */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your power requirements, location, and any specific needs..."
                  {...field}
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button
          className="w-full bg-[#1F253F] text-white cursor-pointer"
          type="submit"
        >
          Get Quote
        </Button>
      </form>
    </Form>
  );
};

export default PartnerForm;
