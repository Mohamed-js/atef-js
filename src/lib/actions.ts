"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function submitContactForm(formData: unknown) {
  try {
    const validatedData = formSchema.parse(formData);

    // Simulate sending an email or saving to a database
    console.log("Received contact form submission:", validatedData);
    await new Promise(resolve => setTimeout(resolve, 1000));

    // In a real app, you would handle potential errors here
    // For this demo, we'll always assume success
    
    return { success: true };

  } catch (error) {
    console.error("Form submission error:", error);
    if (error instanceof z.ZodError) {
      return { success: false, error: "Validation failed. Please check your input." };
    }
    return { success: false, error: "An unexpected error occurred. Please try again later." };
  }
}
