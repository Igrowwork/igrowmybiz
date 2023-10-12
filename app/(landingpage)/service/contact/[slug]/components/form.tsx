"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import axios from "axios"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

const FormSchema = z.object({
    name: z.string(),
    phone: z.string().refine((value) => /^[0-9]+$/.test(value), {
        message: "Please enter a valid phone number with only numbers.",
    }),
    email: z.string(),
    message: z.string().optional(),
    service: z
        .any({
            required_error: "Please select a service to display.",
        })
})
export function ContactForm() {
    const [Loading, setLoading] = useState<boolean>(false)
    const router = useRouter()
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            setLoading(true)
            const response = await axios.post('/api/query', data)
            toast({
                title: response.data,
            })
            setLoading(false);
            router.replace('/thankyou')
        } catch (error) {
            toast({
                title: 'Something went wrong',
                variant: 'destructive',
            })
            setLoading(false);
        }

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="lg:w-2/3 space-y-6 w-full">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Your Name*" {...field} className="bg-transparent text-white border-[#ffffff70] placeholder:text-[#8a8a8a]" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Your Phone No*" {...field} className="bg-transparent text-white border-[#ffffff70] placeholder:text-[#8a8a8a]" />
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
                            <FormControl>
                                <Input placeholder="Your Email" {...field} className="bg-transparent text-white border-[#ffffff70] placeholder:text-[#8a8a8a]" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                        <FormItem>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="bg-transparent text-gray-400">
                                        <SelectValue className="text-gray-400" placeholder="Select a service" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-[#242424] text-white font-semibold">
                                    <SelectItem value="E-commerce">E-commerce</SelectItem>
                                    <SelectItem value="Landing Page">Landing Page</SelectItem>
                                    <SelectItem value="Standard Website">Standard Website</SelectItem>
                                    <SelectItem value="UI-UX">UI-UX</SelectItem>
                                    <SelectItem value="SEO">SEO</SelectItem>
                                    <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea placeholder="Your Message*" {...field} className="bg-transparent text-white border-[#ffffff70] placeholder:text-[#8a8a8a]" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="w-full flex justify-center">
                    <div className='p-[2px] "w-full flex justify-center h-fit rounded-full btn-background'>
                        <Button disabled={Loading} type="submit" className='px-7 py-5 rounded-full bg-black'>
                            {Loading && <Loader2 className="text-white mr-2 h-4 w-4 animate-spin" />}
                            Submit
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    )
}
