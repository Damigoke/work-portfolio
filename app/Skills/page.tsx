import SkillBar from "@/components/skill-bar";
import { Card, CardContent } from "@/components/ui/card";

 

export default function SkillsPage() {
  return (
    <section
      id="skills"
      className="overflow-y-auto scroll-smooth bg-black min-h-screen w-full py-10"
    >
      <div className="container px-4 md:px-20">
        <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-6">
                Journalism & Reporting Skills
              </h3>
              <div className="space-y-6">
                <SkillBar skill="News Writing & Editing" percentage={90} />
                <SkillBar skill="Breaking News Coverage" percentage={85} />
                <SkillBar skill="Research & Fact-Checking" percentage={95} />
                <SkillBar skill="On-Camera Reporting" percentage={90} />
                <SkillBar skill="Digital Storytelling" percentage={80} />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-6">
                Broadcast & Digital Media
              </h3>
              <div className="space-y-6">
                <SkillBar skill="Voice-over Recording" percentage={85} />
                <SkillBar skill="Digital Storytelling" percentage={80} />
                <SkillBar skill="Live Reporting" percentage={75} />
                <SkillBar skill="Video Scriptwriting" percentage={70} />
                <SkillBar skill="Content Production" percentage={65} />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-6">Other Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Critical Thinking",
                  "Time Management",
                  "Attention to Detail",
                  "Strong Work Ethic",
                  "Audience Engagement",
                  "Collaboration & Teamwork",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
