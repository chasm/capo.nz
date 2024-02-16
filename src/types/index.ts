import type { HTMLAttributes, Override, Validatable } from "./html"

export type Question = {
	index: number
	question: string
	score: number
}

export type Category = {
	index: number
	name: string
	questions: Array<Question>
}

export type Data = Array<Category>

export type Honeypot = Override<
	HTMLAttributes,
	{
		cLabel?: string | undefined | null
		cPlaceholder?: string | undefined | null
		confirmation?: string | undefined | null
		field?: string | undefined | null
		form: string
		password?: string | undefined | null
		pwLabel?: string | undefined | null
		pwPlaceholder?: string | undefined | null
		wrapper?: Partial<HTMLAttributes> | undefined | null
	}
> &
	Validatable
