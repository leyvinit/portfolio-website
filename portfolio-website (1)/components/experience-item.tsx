import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description: string
}

export default function ExperienceItem({ title, company, period, description }: ExperienceItemProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold">{title}</h3>
            <p className="text-muted-foreground">{company}</p>
          </div>
          <div className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">{period}</div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
