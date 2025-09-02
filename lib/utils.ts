import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import Joi from "joi";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const uploadSchema = Joi.object({
  filename: Joi.string().min(3).max(255).required(),
  redirect_url: Joi.string().uri().required(),
});