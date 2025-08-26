interface SkillBarProps {
  skill: string
  percentage: number
}

export default function SkillBar({ skill, percentage }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="font-medium">{skill}</span>
        <span className="text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
