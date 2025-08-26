"use client";

import ProjectCard2 from "@/components/project-card 2";
import ProjectCard from "@/components/project-card copy";

export default function ProjectsPage() {
  return (
    <section
      id="projects"
      className="overflow-y-auto scroll-smooth bg-black min-h-screen w-full py-10"
    >
      <div className="container px-2 md:px-20">
        <h2 className="text-3xl font-bold mb-12 text-center mt-16">
          Experience
        </h2>
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-[1200px] w-full mb-20 mx-auto px-4 pt-10">
            <ProjectCard
              title="TV Presenter & Show Anchor at Upgrade TV"
              description="As a TV Presenter & Show Anchor at Upgrade TV, I engage audiences with insightful conversations, thought-provoking content, and a dynamic on-screen presence. I bring clarity, confidence, and warmth to every broadcast, ensuring stories are delivered with impact and authenticity."
              tags={[
                "#NewsReporter",
                "#TVJournalist",
                "#NewsUpdate",
                "#BreakingNews",
              ]}
              imageUrl="/Screenshot 2025-08-25 212800.png"
              demoUrl="#"
              repoUrl="#"
              audioUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              readMoreUrl="https://www.arise.tv/author/chioma-kalu/"
              linkLabel="View Shows"
            />
            <ProjectCard
              title="ARISE News Broadcast Reporter"
              description="As a Broadcast Reporter at ARISE News, I am responsible for researching, writing, and presenting news stories across both television and digital platforms..."
              tags={[
                "#NewsReporter",
                "#TVJournalist",
                "#NewsUpdate",
                "#BreakingNews",
              ]}
              imageUrl="/SnapInsta.to_491419140_18152487637370302_3200659701400577197_n.jpg"
              demoUrl="#"
              repoUrl="#"
              audioUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              readMoreUrl="https://www.arise.tv/author/chioma-kalu/"
            />
            <ProjectCard2
              title="Voice-Over Artist"
              description="Performed voice-over narration for a special Father’s Day video produced by Ambassadors World Church..."
              tags={[
                "#VoiceOver",
                "#FreelanceVoiceOver",
                "#CommercialVoiceOver",
              ]}
              videoUrl="/video.mp4"
            />
            <ProjectCard
              title="Events Compere/MC"
              description="As an Event Compere/MC, I bring energy, professionalism, and charisma to every stage, ensuring events run seamlessly while keeping audiences engaged and entertained. With a natural ability to connect with diverse crowds, I create memorable experiences for corporate functions, conferences, weddings, and social gatherings."
              tags={[
                "#NewsReporter",
                "#TVJournalist",
                "#NewsUpdate",
                "#BreakingNews",
              ]}
              imageUrl="/SnapInsta.to_463014648_18132833368370302_6683084390556163291_n.jpg"
              demoUrl="#"
              repoUrl="#"
              audioUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              readMoreUrl="https://www.arise.tv/author/chioma-kalu/"
              linkLabel="View Events"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
