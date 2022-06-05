import { parseISO, format } from 'date-fns'

type PropsBlogDate = {
  dateString: string
}

export default function BlogDate({ dateString }: PropsBlogDate) {
  if (!dateString) return <div />

  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLL	d, yyyy')}</time>
}
