
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Handshake } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
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

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  province: z.string().min(1, {
    message: "Please select a province.",
  }),
  occupation: z.string().min(2, {
    message: "Occupation or Business Name must be at least 2 characters.",
  }),
  disabilityInsurance: z.boolean().default(false),
  criticalIllness: z.boolean().default(false),
  lifeInsurance: z.boolean().default(false),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const LeadGeneration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      province: "",
      occupation: "",
      disabilityInsurance: false,
      criticalIllness: false,
      lifeInsurance: false,
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form data submitted:", data);
      toast.success("Form submitted successfully! We'll be in touch soon.");
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  const provinces = [
    { value: "AB", label: "Alberta" },
    { value: "BC", label: "British Columbia" },
    { value: "MB", label: "Manitoba" },
    { value: "NB", label: "New Brunswick" },
    { value: "NL", label: "Newfoundland and Labrador" },
    { value: "NS", label: "Nova Scotia" },
    { value: "NT", label: "Northwest Territories" },
    { value: "NU", label: "Nunavut" },
    { value: "ON", label: "Ontario" },
    { value: "PE", label: "Prince Edward Island" },
    { value: "QC", label: "Quebec" },
    { value: "SK", label: "Saskatchewan" },
    { value: "YT", label: "Yukon" },
  ];

  return (
    <div className="min-h-screen font-[Inter]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-to-br from-white via-[#E6ECF4] to-blue-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Start Your Personalized Insurance Plan
              </h1>
              <p className="text-xl text-gray-600">
                Submit your info and we'll reach out personally to schedule your free 30-minute consultation.
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <Handshake className="w-24 h-24 text-[#003880]" />
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-100">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="province"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Province</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select your province" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {provinces.map((province) => (
                            <SelectItem key={province.value} value={province.value}>
                              {province.label}
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
                  name="occupation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Occupation or Business Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your occupation or business name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  <FormLabel className="block mb-3">Type(s) of Insurance You're Interested In</FormLabel>
                  <div className="space-y-3">
                    <FormField
                      control={form.control}
                      name="disabilityInsurance"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Disability Insurance</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="criticalIllness"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Critical Illness</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lifeInsurance"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Life Insurance</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tell us what's on your mind (optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Share any specific questions or concerns..."
                          className="resize-none min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormDescription className="text-center text-sm text-gray-500">
                  We keep your information strictly confidential and never share it without consent.
                </FormDescription>

                <div className="flex justify-center pt-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="bg-[#003880] hover:bg-[#002d66] px-8 py-2 h-12 rounded-full text-lg transition-all hover:scale-105 w-full md:w-auto"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LeadGeneration;
